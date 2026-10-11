/**
 * EduPintar Malaysia - Gamification Engine
 * Menguruskan sistem XP, Pangkat Pelajar, Streak Harian, dan Lencana Pencapaian
 */

const GAMIFICATION_STORAGE_KEY = "edupintar_student_profile";

const ALL_BADGES = [
  {
    id: "first_step",
    title: "Langkah Pertama",
    desc: "Selesaikan bacaan nota pertama anda",
    icon: "🌱",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300"
  },
  {
    id: "quiz_champion",
    title: "Juara Kuiz",
    desc: "Mencapai markah 80% ke atas dalam kuiz",
    icon: "🏆",
    color: "bg-amber-100 text-amber-700 border-amber-300"
  },
  {
    id: "spm_warrior",
    title: "Jaguh SPM",
    desc: "Selesaikan kuiz Sejarah atau Matematik SPM",
    icon: "🎓",
    color: "bg-indigo-100 text-indigo-700 border-indigo-300"
  },
  {
    id: "science_hero",
    title: "Wira Sains Cilik",
    desc: "Kuasai unit Sains Sekolah Rendah",
    icon: "🔬",
    color: "bg-teal-100 text-teal-700 border-teal-300"
  },
  {
    id: "streak_master",
    title: "Rajin Berterusan",
    desc: "Kekalkan streak belajar sekurang-kurangnya 3 hari",
    icon: "🔥",
    color: "bg-orange-100 text-orange-700 border-orange-300"
  },
  {
    id: "perfect_score",
    title: "Skor Sempurna 100%",
    desc: "Jawab semua soalan dengan betul tanpa sebarang kesilapan",
    icon: "⭐",
    color: "bg-purple-100 text-purple-700 border-purple-300"
  },
  {
    id: "physics_expert",
    title: "Pakar Fizik Kuantum",
    desc: "Selesaikan modul Fizik SPM Daya dan Gerakan",
    icon: "⚡",
    color: "bg-blue-100 text-blue-700 border-blue-300"
  },
  {
    id: "chem_wizard",
    title: "Ahli Kimia Pintar",
    desc: "Kuasai modul Kimia SPM Struktur Atom",
    icon: "🧪",
    color: "bg-teal-100 text-teal-700 border-teal-300"
  },
  {
    id: "bm_master",
    title: "Pujangga Melayu",
    desc: "Kuasai modul Bahasa Melayu SPM Sistem Bahasa",
    icon: "📖",
    color: "bg-rose-100 text-rose-700 border-rose-300"
  }
];

const LEVELS = [
  { level: 1, title: "Murid Permulaan", minXp: 0, maxXp: 150, icon: "🎒" },
  { level: 2, title: "Penuntut Bersemangat", minXp: 150, maxXp: 350, icon: "📖" },
  { level: 3, title: "Bintang Kelas", minXp: 350, maxXp: 650, icon: "🌟" },
  { level: 4, title: "Wira Ilmuwan", minXp: 650, maxXp: 1100, icon: "🚀" },
  { level: 5, title: "Jaguh Harapan", minXp: 1100, maxXp: 1700, icon: "🏅" },
  { level: 6, title: "Cendekiawan Pintar", minXp: 1700, maxXp: 99999, icon: "👑" }
];

class GamificationEngine {
  constructor() {
    this.profile = this.loadProfile();
    this.checkDailyStreak();
  }

  getDefaultProfile() {
    return {
      name: "Murid Pintar",
      schoolLevel: "secondary", // 'primary' or 'secondary'
      xp: 120, // Give some starter XP so it feels rewarding immediately
      streak: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      completedNotes: [],
      completedQuizzes: {}, // { quizId: { score: 100, date: ... } }
      unlockedBadges: ["first_step"]
    };
  }

  loadProfile() {
    try {
      const data = localStorage.getItem(GAMIFICATION_STORAGE_KEY);
      if (data) {
        return { ...this.getDefaultProfile(), ...JSON.parse(data) };
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
    return this.getDefaultProfile();
  }

  saveProfile() {
    try {
      localStorage.setItem(GAMIFICATION_STORAGE_KEY, JSON.stringify(this.profile));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
    this.notifyStateChanged();
  }

  notifyStateChanged() {
    window.dispatchEvent(new CustomEvent("edupintar:profile-updated", { detail: this.profile }));
  }

  checkDailyStreak() {
    const today = new Date().toISOString().split("T")[0];
    const lastDate = this.profile.lastActiveDate;

    if (!lastDate) {
      this.profile.streak = 1;
      this.profile.lastActiveDate = today;
      this.saveProfile();
      return;
    }

    if (lastDate === today) {
      // Already active today
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastDate === yesterdayStr) {
      this.profile.streak += 1;
      if (this.profile.streak >= 3) {
        this.unlockBadge("streak_master");
      }
    } else {
      // Streak broken, restart
      this.profile.streak = 1;
    }

    this.profile.lastActiveDate = today;
    this.saveProfile();
  }

  addXP(amount, reason = "") {
    const oldLevel = this.getCurrentLevel();
    this.profile.xp += amount;
    this.saveProfile();

    const newLevel = this.getCurrentLevel();
    this.showXpToast(amount, reason);

    if (newLevel.level > oldLevel.level) {
      this.showLevelUpModal(newLevel);
    }
  }

  getCurrentLevel() {
    const currentXp = this.profile.xp;
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (currentXp >= LEVELS[i].minXp) {
        const next = LEVELS[i + 1] || null;
        const currentTierSpan = next ? (next.minXp - LEVELS[i].minXp) : 1000;
        const progressInTier = next ? (currentXp - LEVELS[i].minXp) : 1000;
        const percentage = next ? Math.min(100, Math.round((progressInTier / currentTierSpan) * 100)) : 100;

        return {
          ...LEVELS[i],
          nextMinXp: next ? next.minXp : null,
          percentage
        };
      }
    }
    return LEVELS[0];
  }

  unlockBadge(badgeId) {
    if (!this.profile.unlockedBadges.includes(badgeId)) {
      this.profile.unlockedBadges.push(badgeId);
      this.saveProfile();
      const badge = ALL_BADGES.find(b => b.id === badgeId);
      if (badge) {
        this.showBadgeModal(badge);
      }
    }
  }

  markNoteAsRead(chapterId, xpReward = 50) {
    if (!this.profile.completedNotes.includes(chapterId)) {
      this.profile.completedNotes.push(chapterId);
      this.unlockBadge("first_step");
      this.addXP(xpReward, "Membaca Nota Padat");
      this.saveProfile();
      return true;
    }
    return false;
  }

  recordQuizResult(quizId, scorePercentage, xpReward = 100, isPerfect = false, isSpM = false, isPrimaryScience = false) {
    const previous = this.profile.completedQuizzes[quizId];
    const isFirstTime = !previous;

    this.profile.completedQuizzes[quizId] = {
      score: scorePercentage,
      date: new Date().toISOString()
    };

    if (isFirstTime) {
      this.addXP(xpReward, "Menyelesaikan Kuiz");
    } else {
      // Small repeat practice reward
      this.addXP(20, "Ulang Kaji Kuiz");
    }

    if (scorePercentage >= 80) {
      this.unlockBadge("quiz_champion");
    }

    if (isPerfect || scorePercentage === 100) {
      this.unlockBadge("perfect_score");
    }

    if (isSpM) {
      this.unlockBadge("spm_warrior");
    }

    if (isPrimaryScience) {
      this.unlockBadge("science_hero");
    }

    if (quizId.includes("fiz")) {
      this.unlockBadge("physics_expert");
    }

    if (quizId.includes("kim")) {
      this.unlockBadge("chem_wizard");
    }

    if (quizId.includes("bm")) {
      this.unlockBadge("bm_master");
    }

    this.saveProfile();
  }

  resetProgress() {
    this.profile = this.getDefaultProfile();
    this.profile.xp = 0;
    this.profile.streak = 1;
    this.profile.unlockedBadges = [];
    this.saveProfile();
  }

  showXpToast(amount, reason) {
    const toast = document.createElement("div");
    toast.className = "fixed top-20 right-5 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-400 animate-bounce duration-300";
    toast.innerHTML = `
      <span class="text-2xl">✨</span>
      <div>
        <div class="font-bold text-amber-400 text-sm">+${amount} XP Diperoleh!</div>
        <div class="text-xs text-slate-300">${reason || "Syabas meneruskan pembelajaran!"}</div>
      </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("animate-bounce");
      toast.classList.add("opacity-0", "transition-opacity", "duration-500");
      setTimeout(() => toast.remove(), 500);
    }, 2800);
  }

  showLevelUpModal(levelInfo) {
    const modal = document.createElement("div");
    modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in";
    modal.innerHTML = `
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl border-4 border-amber-400 transform scale-100 transition-all">
        <div class="text-6xl mb-3 animate-pulse">${levelInfo.icon}</div>
        <span class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Tahap Baharu Dibuka!</span>
        <h3 class="text-2xl font-black text-slate-800 mb-1">Tahap ${levelInfo.level}</h3>
        <p class="text-base font-bold text-indigo-600 mb-3">${levelInfo.title}</p>
        <p class="text-xs text-slate-600 mb-6">Hebat sekali! Anda semakin dekat untuk menjadi jaguh dalam peperiksaan anda!</p>
        <button id="closeLevelUpBtn" class="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all">
          Teruskan Belajar 🎉
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector("#closeLevelUpBtn").addEventListener("click", () => modal.remove());
  }

  showBadgeModal(badge) {
    const modal = document.createElement("div");
    modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in";
    modal.innerHTML = `
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl border-4 border-indigo-400">
        <div class="text-6xl mb-3">${badge.icon}</div>
        <span class="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Lencana Baharu Diberi!</span>
        <h3 class="text-2xl font-black text-slate-800 mb-1">${badge.title}</h3>
        <p class="text-xs text-slate-600 mb-6">${badge.desc}</p>
        <button id="closeBadgeBtn" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-95 transition-all">
          Koleksi Lencana Saya 🏆
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector("#closeBadgeBtn").addEventListener("click", () => modal.remove());
  }
}

window.gamification = new GamificationEngine();
