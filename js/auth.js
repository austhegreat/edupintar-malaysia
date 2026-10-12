/* EduPintar account, profile and progress sync (Supabase Auth + Postgres). */
class EduPintarAuth {
  constructor() {
    this.client = null;
    this.user = null;
    this.profile = null;
    this.saveTimer = null;
    this.busy = false;
  }

  async init() {
    try {
      const response = await fetch("/api/config", { cache: "no-store" });
      if (response.ok) {
        const config = await response.json();
        window.EDUPINTAR_SUPABASE_URL = config.supabaseUrl || window.EDUPINTAR_SUPABASE_URL;
        window.EDUPINTAR_SUPABASE_ANON_KEY = config.supabaseAnonKey || window.EDUPINTAR_SUPABASE_ANON_KEY;
      }
    } catch (_) { /* Static preview can use js/supabase-config.js. */ }
    const url = window.EDUPINTAR_SUPABASE_URL;
    const key = window.EDUPINTAR_SUPABASE_ANON_KEY;
    if (!url || !key || url.includes("YOUR_PROJECT") || key.includes("YOUR_SUPABASE")) {
      this.setMessage("Sambungan akaun belum disediakan. Pemilik laman perlu menetapkan SUPABASE_URL dan SUPABASE_ANON_KEY di Render.", true);
      document.getElementById("authSubmit").disabled = true;
      document.getElementById("authModeToggle").disabled = true;
      return;
    }
    this.client = window.supabase.createClient(url, key);
    document.getElementById("authForm")?.addEventListener("submit", event => this.submit(event));
    document.getElementById("authModeToggle")?.addEventListener("click", () => this.toggleMode());
    document.getElementById("profileAvatarInput")?.addEventListener("change", event => this.uploadAvatar(event));
    document.getElementById("profileLeaderboardOptIn")?.addEventListener("change", event => {
      window.gamification.profile.publicLeaderboard = event.target.checked;
      window.gamification.saveProfile();
    });

    const { data, error } = await this.client.auth.getSession();
    if (error) this.setMessage(error.message, true);
    if (data?.session) await this.activate(data.session);
    this.client.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) setTimeout(() => this.activate(session), 0);
      if (event === "SIGNED_OUT") this.deactivate();
    });
  }

  toggleMode() {
    const signup = document.getElementById("authUsernameWrap");
    const isSignup = signup.classList.toggle("hidden");
    document.getElementById("authHeading").textContent = isSignup ? "Cipta akaun EduPintar" : "Log masuk untuk belajar";
    document.getElementById("authSubmit").textContent = isSignup ? "Cipta Akaun" : "Log Masuk";
    document.getElementById("authModeToggle").textContent = isSignup ? "Sudah ada akaun? Log masuk" : "Pengguna baharu? Cipta akaun";
    document.getElementById("authUsername").required = isSignup;
    document.getElementById("authPassword").autocomplete = isSignup ? "new-password" : "current-password";
    this.setMessage("");
  }

  async submit(event) {
    event.preventDefault();
    if (!this.client || this.busy) return;
    const email = document.getElementById("authEmail").value.trim();
    const password = document.getElementById("authPassword").value;
    const signup = !document.getElementById("authUsernameWrap").classList.contains("hidden");
    const username = document.getElementById("authUsername").value.trim().toLowerCase();
    if (signup && !/^[a-z0-9_]{3,20}$/.test(username)) return this.setMessage("Nama pengguna mesti 3–20 aksara: huruf kecil, nombor atau garis bawah.", true);
    this.setBusy(true);
    try {
      const result = signup
        ? await this.client.auth.signUp({ email, password, options: { data: { username } } })
        : await this.client.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      if (signup && !result.data.session) {
        this.setMessage("Semak e-mel anda untuk pautan pengesahan. Selepas mengesahkan, kembali ke sini dan log masuk.");
      } else if (result.data.session) {
        await this.activate(result.data.session);
      }
    } catch (error) {
      this.setMessage(this.friendlyError(error), true);
    } finally {
      this.setBusy(false);
    }
  }

  friendlyError(error) {
    const message = error?.message || "Tidak dapat memproses permintaan.";
    if (/already registered|already exists/i.test(message)) return "E-mel atau nama pengguna itu sudah digunakan.";
    if (/invalid login credentials/i.test(message)) return "E-mel atau kata laluan tidak tepat.";
    if (/password/i.test(message) && /least|short|weak/i.test(message)) return "Gunakan kata laluan yang lebih panjang dan kuat.";
    return message;
  }

  async activate(session) {
    if (!this.client || !session?.user) return;
    this.user = session.user;
    let { data: profile, error } = await this.client.from("profiles").select("*").eq("id", this.user.id).maybeSingle();
    if (error) {
      this.setMessage(`Tidak dapat memuatkan profil: ${error.message}`, true);
      return;
    }
    if (!profile) {
      const username = this.user.user_metadata?.username || `murid_${this.user.id.slice(0, 8)}`;
      const old = window.gamification.profile;
      const created = await this.client.from("profiles").insert({
        id: this.user.id, username,
        study_level: null, study_grade: null,
        xp: Number(old.xp) || 0, streak: Number(old.streak) || 0,
        completed_notes: old.completedNotes || [], completed_quizzes: old.completedQuizzes || {},
        unlocked_badges: old.unlockedBadges || [], last_active_date: old.lastActiveDate || null
      }).select().single();
      if (created.error) {
        this.setMessage(`Tidak dapat menyediakan profil: ${created.error.message}`, true);
        return;
      }
      profile = created.data;
    }
    this.applyProfile(profile);
    document.getElementById("authGate").classList.add("hidden");
    document.getElementById("authSignOut")?.classList.remove("hidden");
    if (profile.study_level && profile.study_grade) {
      window.app?.applyStudentPlacement(profile.study_level, profile.study_grade);
    } else {
      window.app?.openGradeSetupModal(true);
    }
    window.app?.updateHeaderProfile();
    window.app?.renderStatsBanner();
  }

  applyProfile(row) {
    this.profile = row;
    window.gamification.profile = {
      ...window.gamification.getDefaultProfile(),
      name: row.username,
      username: row.username,
      avatarUrl: row.avatar_url || "",
      studyLevel: row.study_level || "",
      studyGrade: row.study_grade || "",
      gradeXp: row.grade_xp || {},
      publicLeaderboard: !!row.public_leaderboard,
      xp: row.xp || 0,
      streak: row.streak || 0,
      lastActiveDate: row.last_active_date,
      completedNotes: row.completed_notes || [],
      completedQuizzes: row.completed_quizzes || {},
      unlockedBadges: row.unlocked_badges || []
    };
    window.gamification.checkDailyStreak();
    window.gamification.notifyStateChanged();
    this.renderAvatar();
  }

  scheduleSave() {
    if (!this.user || !this.client) return;
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => this.saveProfile(), 800);
  }

  async saveProfile() {
    if (!this.user || !this.client) return;
    const p = window.gamification.profile;
    const row = {
      id: this.user.id,
      username: p.username || this.profile?.username || this.user.user_metadata?.username,
      avatar_url: p.avatarUrl || null,
      study_level: p.studyLevel || null,
      study_grade: p.studyGrade || null,
      grade_xp: p.gradeXp || {},
      public_leaderboard: !!p.publicLeaderboard,
      xp: p.xp || 0,
      streak: p.streak || 0,
      last_active_date: p.lastActiveDate || null,
      completed_notes: p.completedNotes || [],
      completed_quizzes: p.completedQuizzes || {},
      unlocked_badges: p.unlockedBadges || [],
      updated_at: new Date().toISOString()
    };
    const { error } = await this.client.from("profiles").upsert(row, { onConflict: "id" });
    if (error) console.error("Progress sync failed:", error.message);
    else this.profile = { ...this.profile, ...row };
  }

  async saveProfileEdits() {
    const p = window.gamification.profile;
    p.username = document.getElementById("inputProfileUsername").value.trim().toLowerCase();
    p.name = p.username;
    p.publicLeaderboard = document.getElementById("profileLeaderboardOptIn").checked;
    if (!/^[a-z0-9_]{3,20}$/.test(p.username)) return this.setMessage("Nama pengguna mesti 3–20 aksara: huruf kecil, nombor atau garis bawah.", true, "profileMessage");
    const { error } = await this.client.from("profiles").update({ username: p.username, public_leaderboard: p.publicLeaderboard }).eq("id", this.user.id);
    if (error) return this.setMessage(/duplicate|unique/i.test(error.message) ? "Nama pengguna itu sudah diambil." : error.message, true, "profileMessage");
    this.profile = { ...this.profile, username: p.username, public_leaderboard: p.publicLeaderboard };
    document.getElementById("modalProfileName").textContent = p.name;
    document.getElementById("modalProfileUsername").textContent = `@${p.username}`;
    window.gamification.saveProfile();
    window.app.updateHeaderProfile();
    this.setMessage("Profil berjaya disimpan.", false, "profileMessage");
  }

  async saveStudyPlacement(level, grade) {
    const validGrades = SYLLABUS_DATA[level]?.grades || [];
    if (!this.user || !this.client || !validGrades.some(item => item.id === grade)) {
      return this.setMessage("Pilih tahap dan tingkatan yang sah.", true, "studyPlacementMessage");
    }
    const gradeXp = { ...(window.gamification.profile.gradeXp || {}) };
    if (!this.profile?.study_level && !this.profile?.study_grade) {
      const gradeKey = `${level}:${grade}`;
      gradeXp[gradeKey] = Math.max(Number(gradeXp[gradeKey]) || 0, Number(window.gamification.profile.xp) || 0);
    }
    const { error } = await this.client.from("profiles")
      .update({ study_level: level, study_grade: grade, grade_xp: gradeXp })
      .eq("id", this.user.id);
    if (error) {
      const schemaHint = /study_level|study_grade|column/i.test(error.message)
        ? " Jalankan fail supabase-grade-profile-upgrade.sql dalam Supabase SQL Editor dahulu."
        : "";
      return this.setMessage(`Tidak dapat menyimpan pilihan darjah/tingkatan: ${error.message}.${schemaHint}`, true, "studyPlacementMessage");
    }
    this.profile = { ...this.profile, study_level: level, study_grade: grade, grade_xp: gradeXp };
    window.gamification.profile.studyLevel = level;
    window.gamification.profile.studyGrade = grade;
    window.gamification.profile.gradeXp = gradeXp;
    window.gamification.saveProfile();
    window.app?.applyStudentPlacement(level, grade);
    document.getElementById("studyPlacementModal")?.classList.add("hidden");
    document.getElementById("profileModal")?.classList.add("hidden");
    this.setMessage("Pilihan kelas berjaya disimpan.", false, "profileMessage");
  }

  async uploadAvatar(event) {
    const file = event.target.files?.[0];
    if (!file || !this.user || !/^image\/(png|jpeg|webp)$/.test(file.type)) return this.setMessage("Pilih imej PNG, JPG atau WebP.", true, "profileMessage");
    if (file.size > 2 * 1024 * 1024) return this.setMessage("Imej mestilah 2 MB atau lebih kecil.", true, "profileMessage");
    const path = `${this.user.id}/avatar-${Date.now()}.${file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg"}`;
    const { error } = await this.client.storage.from("avatars").upload(path, file, { upsert: true, contentType: file.type });
    if (error) return this.setMessage(error.message, true, "profileMessage");
    const { data } = this.client.storage.from("avatars").getPublicUrl(path);
    window.gamification.profile.avatarUrl = data.publicUrl;
    await this.saveProfile();
    this.renderAvatar();
    this.setMessage("Gambar profil berjaya dikemas kini.", false, "profileMessage");
  }

  renderAvatar() {
    const url = window.gamification.profile.avatarUrl;
    ["headerAvatar", "modalProfileAvatar"].forEach(id => {
      const node = document.getElementById(id);
      if (!node) return;
      node.replaceChildren();
      if (url) {
        const image = document.createElement("img");
        image.src = url; image.alt = "Gambar profil";
        image.className = "w-full h-full rounded-full object-cover";
        node.append(image);
      } else node.textContent = "👨‍🎓";
    });
  }

  async fetchLeaderboard() {
    if (!this.client) return { data: [], error: new Error("Sambungan akaun belum disediakan.") };
    const profile = window.gamification.profile;
    if (!profile.studyLevel || !profile.studyGrade) return { data: [], error: new Error("Tetapkan kelas anda dahulu.") };
    return this.client.from("public_leaderboard")
      .select("username,avatar_url,xp,badges,study_level,study_grade")
      .eq("study_level", profile.studyLevel)
      .eq("study_grade", profile.studyGrade)
      .order("xp", { ascending: false }).limit(10);
  }

  async signOut() {
    await this.saveProfile();
    const { error } = await this.client.auth.signOut();
    if (error) this.setMessage(error.message, true);
  }

  deactivate() {
    this.user = null;
    this.profile = null;
    window.gamification.profile = window.gamification.getDefaultProfile();
    window.gamification.notifyStateChanged();
    document.getElementById("authGate")?.classList.remove("hidden");
    document.getElementById("authSignOut")?.classList.add("hidden");
  }

  setBusy(busy) {
    this.busy = busy;
    const button = document.getElementById("authSubmit");
    if (button) { button.disabled = busy; button.textContent = busy ? "Sila tunggu…" : (document.getElementById("authUsernameWrap").classList.contains("hidden") ? "Log Masuk" : "Cipta Akaun"); }
  }

  setMessage(message, isError = false, targetId = "authMessage") {
    const node = document.getElementById(targetId);
    if (node) {
      const lightTarget = targetId === "studyPlacementMessage";
      const color = isError ? (lightTarget ? "text-rose-600" : "text-rose-300") : (lightTarget ? "text-emerald-700" : "text-emerald-300");
      node.textContent = message;
      node.className = `text-sm ${color}`;
    }
  }
}

window.eduAuth = new EduPintarAuth();
document.addEventListener("DOMContentLoaded", () => window.eduAuth.init());
