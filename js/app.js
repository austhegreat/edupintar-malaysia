/**
 * EduPintar Malaysia - Main Application Controller
 * Mengawal navigasi silibus, paparan nota, video player, carian dan integrasi modul
 */

class EduPintarApp {
  constructor() {
    this.currentLevel = "secondary"; // 'primary' or 'secondary'
    this.currentGradeId = "f5";      // default to Tingkatan 5 SPM
    this.currentSubjectId = "f5-mt"; // default to Matematik SPM
    this.currentChapterId = "f5-mt-c1"; // default to Bab 1 Ubahan
    this.currentSubtopicIndex = 0;
    this.activeContentTab = "notes"; // 'notes', 'video', 'quiz', 'game', 'worksheet'
    this.currentLanguage = "bm";     // 'bm' or 'en'
    this.searchQuery = "";
    this.savedSession = this.loadSessionState();

    this.init();
  }

  init() {
    // Restore saved session if available
    if (this.savedSession) {
      if (this.savedSession.level) this.currentLevel = this.savedSession.level;
      if (this.savedSession.gradeId) this.currentGradeId = this.savedSession.gradeId;
      if (this.savedSession.subjectId) this.currentSubjectId = this.savedSession.subjectId;
      if (this.savedSession.chapterId) this.currentChapterId = this.savedSession.chapterId;
      if (Number.isInteger(this.savedSession.subtopicIndex)) this.currentSubtopicIndex = this.savedSession.subtopicIndex;
      if (this.savedSession.activeTab) this.activeContentTab = this.savedSession.activeTab;
      if (this.savedSession.language) this.currentLanguage = this.savedSession.language;
    }

    this.setupEventListeners();
    this.updateHeaderProfile();
    this.updateLanguageUi();
    this.renderLevelSelector();
    this.renderGradePills();
    this.renderSubjectsGrid();
    this.renderStatsBanner();

    // If student was inside Subject Arena, restore them directly into Arena!
    if (this.savedSession && this.savedSession.view === "arena" && this.currentSubjectId) {
      this.enterSubjectArena(this.currentSubjectId, false);
      if (this.savedSession.activeTab) {
        this.setContentTab(this.savedSession.activeTab);
      }
    } else {
      this.renderChapterDetail();
    }
  }

  saveSessionState() {
    try {
      const isArena = !document.getElementById("subjectArenaView")?.classList.contains("hidden");
      const state = {
        level: this.currentLevel,
        gradeId: this.currentGradeId,
        subjectId: this.currentSubjectId,
        chapterId: this.currentChapterId,
        subtopicIndex: this.currentSubtopicIndex || 0,
        activeTab: this.activeContentTab,
        view: isArena ? "arena" : "lobby",
        language: this.currentLanguage || "bm",
        timestamp: Date.now()
      };
      localStorage.setItem("edupintar_saved_session", JSON.stringify(state));
    } catch (e) {
      // Storage fallback
    }
  }

  loadSessionState() {
    try {
      const saved = localStorage.getItem("edupintar_saved_session");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // Storage fallback
    }
    return null;
  }

  toggleLanguage() {
    this.setLanguage(this.currentLanguage === "bm" ? "en" : "bm");
  }

  setLanguage(lang) {
    if (window.eduAudio) window.eduAudio.playClick();
    this.currentLanguage = lang;
    this.updateLanguageUi();
    this.renderGradePills();
    this.renderSubjectsGrid();
    this.renderArenaQuestRoadmap();
    this.renderChapterDetail();
    this.saveSessionState();
  }

  updateLanguageUi() {
    const isEn = this.currentLanguage === "en";
    const label = document.getElementById("languageLabel");
    if (label) {
      label.textContent = isEn ? "🇬🇧 English" : "🇲🇾 B. Melayu";
    }
    const btn = document.getElementById("languageToggleBtn");
    if (btn) {
      btn.title = isEn ? "Tukar ke Bahasa Melayu" : "Switch to English";
    }
  }

  setupEventListeners() {
    // Auto-save session state before unload
    window.addEventListener("beforeunload", () => this.saveSessionState());

    // Listen for gamification updates
    window.addEventListener("edupintar:profile-updated", () => {
      this.updateHeaderProfile();
      this.renderStatsBanner();
    });

    // Global search input
    const searchInput = document.getElementById("syllabusSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.handleSearch();
      });
    }

    // Modal close listeners
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    });
  }

  updateHeaderProfile() {
    const profile = window.gamification.profile;
    const levelInfo = window.gamification.getCurrentLevel();

    const xpEl = document.getElementById("headerUserXp");
    if (xpEl) xpEl.textContent = `${profile.xp} XP`;

    const streakEl = document.getElementById("headerStreakCount");
    if (streakEl) streakEl.textContent = `${profile.streak} Hari`;

    const levelBadgeEl = document.getElementById("headerLevelBadge");
    if (levelBadgeEl) {
      levelBadgeEl.innerHTML = `${levelInfo.icon} Tahap ${levelInfo.level}: ${levelInfo.title}`;
    }
    window.eduAuth?.renderAvatar();
  }

  renderStatsBanner() {
    const banner = document.getElementById("studentStatsBanner");
    if (!banner) return;

    const profile = window.gamification.profile;
    const levelInfo = window.gamification.getCurrentLevel();
    const completedQuizzesCount = Object.keys(profile.completedQuizzes).length;
    const unlockedBadgesCount = profile.unlockedBadges.length;
    const grade = SYLLABUS_DATA[profile.studyLevel]?.grades.find(item => item.id === profile.studyGrade);

    banner.innerHTML = `
      <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold text-indigo-600">${grade ? `Ruang belajar · ${grade.name}` : 'Ruang belajar'}</p>
            <h2 class="mt-1 text-xl font-bold text-slate-900">Selamat belajar, ${profile.username || 'murid'} 👋</h2>
            <p class="mt-1 text-sm text-slate-600">Pilih subjek dan sambung belajar dari bab yang anda perlukan.</p>
          </div>
          <div class="min-w-44">
            <div class="mb-1 flex justify-between text-xs font-semibold text-slate-600"><span>${levelInfo.title}</span><span>${profile.xp} XP</span></div>
            <div class="h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full bg-indigo-500" style="width:${levelInfo.percentage}%"></div></div>
            <p class="mt-2 text-[11px] text-slate-500">🔥 ${profile.streak} hari · 📝 ${completedQuizzesCount} kuiz · 🏆 ${unlockedBadgesCount} lencana</p>
          </div>
        </div>
      </div>
    `;
  }

  renderLevelSelector() {
    const profile = window.gamification?.profile || {};
    const selectedLevel = profile.studyLevel || this.currentLevel;
    const selectedGrade = SYLLABUS_DATA[selectedLevel]?.grades.find(item => item.id === (profile.studyGrade || this.currentGradeId));
    const label = document.getElementById("studyPlacementLabel");
    if (label) label.textContent = selectedGrade ? `${selectedGrade.name} · ${SYLLABUS_DATA[selectedLevel].curriculum}` : "Pilih tahun atau tingkatan untuk mula";
  }

  openGradeSetupModal(required = false) {
    const modal = document.getElementById("studyPlacementModal");
    if (!modal) return;
    this.requiredPlacement = required;
    const profile = window.gamification.profile || {};
    const levelSelect = document.getElementById("studyPlacementLevel");
    levelSelect.value = profile.studyLevel || this.currentLevel || "secondary";
    this.updateStudyGradeOptions(profile.studyGrade || this.currentGradeId);
    const message = document.getElementById("studyPlacementMessage");
    if (message) message.textContent = required ? "Pilih kelas anda untuk membuka bahan pembelajaran." : "Pilihan ini menentukan bab, kuiz dan cabaran yang dipaparkan.";
    modal.classList.remove("hidden");
    levelSelect.disabled = false;
  }

  updateStudyGradeOptions(selectedGrade = "") {
    const level = document.getElementById("studyPlacementLevel")?.value || "secondary";
    const select = document.getElementById("studyPlacementGrade");
    if (!select) return;
    const grades = SYLLABUS_DATA[level]?.grades || [];
    select.innerHTML = grades.map(item => `<option value="${item.id}">${item.name}</option>`).join("");
    if (grades.some(item => item.id === selectedGrade)) select.value = selectedGrade;
  }

  saveStudentPlacement() {
    const level = document.getElementById("studyPlacementLevel")?.value;
    const grade = document.getElementById("studyPlacementGrade")?.value;
    window.eduAuth?.saveStudyPlacement(level, grade);
  }

  applyStudentPlacement(level, grade) {
    if (!SYLLABUS_DATA[level]?.grades.some(item => item.id === grade)) return;
    const placementChanged = this.currentLevel !== level || this.currentGradeId !== grade;
    this.currentLevel = level;
    this.currentGradeId = grade;
    const subjects = SYLLABUS_DATA[level].subjects[grade] || [];
    const currentSubject = subjects.find(item => item.id === this.currentSubjectId);
    this.currentSubjectId = currentSubject?.id || subjects[0]?.id || null;
    const chapters = subjects.find(item => item.id === this.currentSubjectId)?.chapters || [];
    this.currentChapterId = chapters.some(item => item.id === this.currentChapterId) ? this.currentChapterId : (chapters[0]?.id || null);
    this.activeContentTab = "notes";
    if (placementChanged) this.currentSubtopicIndex = 0;
    const placement = SYLLABUS_DATA[level].grades.find(item => item.id === grade);
    const placementLabel = document.getElementById("profileStudyPlacement");
    if (placementLabel) placementLabel.textContent = `${placement.name} · ${SYLLABUS_DATA[level].curriculum}`;
    this.renderLevelSelector();
    this.renderGradePills();
    this.renderSubjectsGrid();
    this.renderChapterDetail();
    this.renderArenaQuestRoadmap();
    this.saveSessionState();
  }

  setLevel(level) {
    if (level === window.gamification.profile.studyLevel) return;
    this.openGradeSetupModal(false);
  }

  renderGradePills() {
    const container = document.getElementById("gradePillsContainer");
    if (!container) return;

    container.innerHTML = "";
  }

  setGrade(gradeId) {
    if (gradeId !== window.gamification.profile.studyGrade) {
      this.openGradeSetupModal(false);
      return;
    }
    this.currentGradeId = gradeId;
    const subjects = SYLLABUS_DATA[this.currentLevel].subjects[gradeId] || [];
    
    if (subjects.length > 0) {
      this.currentSubjectId = subjects[0].id;
      if (subjects[0].chapters && subjects[0].chapters.length > 0) {
        this.currentChapterId = subjects[0].chapters[0].id;
      } else {
        this.currentChapterId = null;
      }
    } else {
      this.currentSubjectId = null;
      this.currentChapterId = null;
    }

    this.renderGradePills();
    this.renderSubjectsGrid();
    this.renderChapterDetail();
    this.saveSessionState();
  }

  renderSubjectsGrid() {
    const container = document.getElementById("subjectsGridContainer");
    if (!container) return;

    const subjects = SYLLABUS_DATA[this.currentLevel].subjects[this.currentGradeId] || [];

    if (subjects.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-8 text-center bg-white rounded-3xl border border-slate-200">
          <p class="text-3xl mb-2">📚</p>
          <h4 class="font-bold text-slate-800">Modul Tambahan Sedang Dikemaskini</h4>
          <p class="text-xs text-slate-500 mt-1">Sukatan pelajaran rasmi KPM sedang dimasukkan ke dalam pangkalan data EduPintar.</p>
          <button onclick="window.app.setGrade('${this.currentLevel === "primary" ? "t5" : "f4"}')" class="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl">
            Lihat Modul Contoh Lengkap
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = subjects.map(subj => {
      const isSelected = subj.id === this.currentSubjectId;
      const hasChapters = subj.chapters && subj.chapters.length > 0;
      const readyChapters = (subj.chapters || []).filter(chapter => !this.isPlaceholderChapter(chapter) && chapter.notes?.sections?.length).length;
      const draftChapters = Math.max(0, (subj.chapters || []).length - readyChapters);
      return `
        <div 
          onclick="window.app.enterSubjectArena('${subj.id}')"
          class="card-3d-tilt group cursor-pointer p-5 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            isSelected 
              ? 'border-indigo-500 bg-slate-900/95 shadow-xl shadow-indigo-500/20 ring-2 ring-indigo-500/30' 
              : 'border-slate-800 bg-slate-900/80 hover:border-indigo-500/60 hover:bg-slate-900 hover:shadow-lg'
          }"
        >
          <div class="flex items-start justify-between">
            <span class="text-3xl p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80 transform group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner">${subj.icon}</span>
            <div class="flex items-center gap-1.5">
              ${subj.hasDlp ? `
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  DLP
                </span>
              ` : ''}
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                ${subj.code}
              </span>
            </div>
          </div>

          <h4 class="font-black text-base text-white mt-3.5 group-hover:text-indigo-400 transition-colors">
            ${subj.name}
          </h4>
          <p class="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            ${subj.description}
          </p>

          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span class="font-bold ${hasChapters ? 'text-emerald-400' : 'text-slate-500'}">
              ${hasChapters ? `${readyChapters} bab tersedia${draftChapters ? ` · ${draftChapters} draf` : ''}` : 'Kandungan sedang disediakan'}
            </span>
            <span class="text-indigo-400 font-bold group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
              Masuk Arena →
            </span>
          </div>
        </div>
      `;
    }).join("");

    if (window.edu3D) {
      setTimeout(() => window.edu3D.setupCard3DTilt(), 50);
    }
  }

  enterSubjectArena(subjectId, resetChapter = true) {
    if (window.eduAudio) window.eduAudio.playClick();
    const previousSubjectId = this.currentSubjectId;
    this.currentSubjectId = subjectId;
    const subj = this.getCurrentSubject();
    if (!subj) { this.currentSubjectId = previousSubjectId; return; }

    if (resetChapter || !this.currentChapterId) {
      if (subj.chapters && subj.chapters.length > 0) {
        this.currentChapterId = subj.chapters[0].id;
      } else {
        this.currentChapterId = null;
      }
    } else {
      // Validate that currentChapterId belongs to this subject
      const hasCh = subj.chapters && subj.chapters.some(c => c.id === this.currentChapterId);
      if (!hasCh && subj.chapters && subj.chapters.length > 0) {
        this.currentChapterId = subj.chapters[0].id;
      }
    }

    // Hide Main Lobby, Show Subject Arena
    document.getElementById("mainLobbyView")?.classList.add("hidden");
    const arenaEl = document.getElementById("subjectArenaView");
    if (arenaEl) {
      arenaEl.classList.remove("hidden");
      arenaEl.scrollIntoView({ behavior: "smooth" });
    }

    // Update Arena Header
    const iconEl = document.getElementById("arenaSubjectIcon");
    if (iconEl) iconEl.textContent = subj.icon;

    const titleEl = document.getElementById("arenaSubjectTitle");
    if (titleEl) titleEl.textContent = subj.name;

    const codeEl = document.getElementById("arenaSubjectCode");
    if (codeEl) codeEl.textContent = subj.code;

    const gradeObj = SYLLABUS_DATA[this.currentLevel].grades.find(g => g.id === this.currentGradeId);
    const gradeEl = document.getElementById("arenaSubjectGrade");
    if (gradeEl) {
      gradeEl.textContent = `${gradeObj ? gradeObj.name : ''} • ${SYLLABUS_DATA[this.currentLevel].name}`;
    }

    const countEl = document.getElementById("arenaChaptersCount");
    if (countEl) {
      const isEn = this.currentLanguage === "en";
      countEl.textContent = `${subj.chapters ? subj.chapters.length : 0} ${isEn ? 'Chapters Available' : 'Bab Tersedia'}`;
    }

    // Render quest roadmap and chapter detail FIRST!
    this.renderArenaQuestRoadmap();
    this.renderChapterDetail();
    this.saveSessionState();

    // Initialize 3D Lab safely with subject-appropriate model
    try {
      if (window.edu3D) {
        let modelType = "compass";
        const lowerName = (subj.name || "").toLowerCase();
        if (lowerName.includes("sains") || lowerName.includes("kimia") || lowerName.includes("fizik") || lowerName.includes("biologi")) {
          modelType = "atom";
        } else if (lowerName.includes("matematik")) {
          modelType = "geometry";
        }
        setTimeout(() => {
          window.edu3D.initSubjectLabCanvas("lab3dContainer", modelType);
        }, 40);
      }
    } catch (e) {
      console.warn("3D Lab init error:", e);
    }

    if (window.edu3D) window.edu3D.setupCard3DTilt();
  }

  exitSubjectArena() {
    if (window.eduAudio) window.eduAudio.playClick();
    if (window.cikguAus) window.cikguAus.stopSpeaking();
    document.getElementById("subjectArenaView")?.classList.add("hidden");
    document.getElementById("mainLobbyView")?.classList.remove("hidden");
    document.getElementById("gradePillsContainer")?.scrollIntoView({ behavior: "smooth" });
    this.saveSessionState();
    if (window.edu3D) window.edu3D.setupCard3DTilt();
  }

  renderArenaQuestRoadmap() {
    const container = document.getElementById("arenaQuestRoadmapContainer");
    if (!container) return;

    const isEn = this.currentLanguage === "en";
    const subj = this.getCurrentSubject();
    if (!subj || !subj.chapters || subj.chapters.length === 0) {
      container.innerHTML = `
        <div class="py-4 text-slate-400 text-xs">${isEn ? 'All KPM curriculum topics for this subject are ready to explore.' : 'Semua topik sukatan KPM bagi subjek ini sedia untuk diterokai.'}</div>
      `;
      return;
    }

    const profile = window.gamification.profile;

    container.innerHTML = subj.chapters.map((ch, idx) => {
      const isActive = ch.id === this.currentChapterId;
      const isCompleted = profile.completedNotes.includes(ch.id);
      const isDraft = this.isPlaceholderChapter(ch);
      const chNumber = isEn && ch.numberEn ? ch.numberEn : ch.number;
      const chTitle = isDraft ? (isEn ? 'Lesson content being prepared' : 'Kandungan pelajaran sedang disediakan') : (isEn && ch.titleEn ? ch.titleEn : ch.title);
      const chStatus = isDraft ? (isEn ? 'Content in progress' : 'Kandungan dalam proses') : isCompleted ? (isEn ? '⭐ Completed' : '⭐ Selesai') : (isEn ? '🎯 Active' : '🎯 Aktif');
      const actionText = isDraft ? (isEn ? 'Coming soon' : 'Akan datang') : isActive ? (isEn ? 'Active Now' : 'Sedang Dibuka') : (isEn ? 'Open Chapter →' : 'Buka Bab →');

      return `
        <div 
          onclick="window.app.setChapter('${ch.id}')"
          class="quest-node shrink-0 cursor-pointer p-4 rounded-2xl border-2 transition-all min-w-[200px] max-w-[240px] card-3d-tilt ${
            isActive 
              ? 'border-indigo-500 bg-indigo-950/70 shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-400/40' 
              : isDraft
                ? 'border-slate-200 bg-slate-50/70 opacity-80'
              : isCompleted 
                ? 'border-emerald-500/50 bg-slate-900/80 hover:border-emerald-400' 
                : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
          }"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-black uppercase px-2 py-0.5 rounded-lg ${
              isActive ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
            }">
              ${chNumber}
            </span>
            <span class="text-xs font-bold text-slate-300">
              ${chStatus}
            </span>
          </div>

          <h5 class="text-xs font-bold text-white line-clamp-2 leading-snug">
            ${chTitle}
          </h5>

          <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span class="text-amber-400 font-bold">${isDraft ? (isEn ? 'Draft' : 'Draf') : `+${ch.xpReward} XP`}</span>
            <span class="${isActive ? 'text-indigo-300 font-bold' : 'text-slate-500'}">
              ${actionText}
            </span>
          </div>
        </div>
      `;
    }).join("");
  }

  setSubject(subjectId) {
    this.enterSubjectArena(subjectId);
  }

  getCurrentSubject() {
    const subjects = SYLLABUS_DATA[this.currentLevel].subjects[this.currentGradeId] || [];
    return subjects.find(s => s.id === this.currentSubjectId) || null;
  }

  getCurrentChapter() {
    const subject = this.getCurrentSubject();
    if (!subject || !subject.chapters) return null;
    return subject.chapters.find(c => c.id === this.currentChapterId) || subject.chapters[0] || null;
  }

  isPlaceholderChapter(chapter) {
    if (!chapter) return false;
    if (!chapter.notes?.sections?.length) return true;
    const text = JSON.stringify({ title: chapter.title, summary: chapter.summary, notes: chapter.notes, quiz: chapter.quiz });
    return /Aplikasi Pembelajaran Lanjutan|Advanced Learning Module Unit|Konsep standard bagi sukatan pelajaran rasmi KPM|most important concept learned in Chapter/i.test(text);
  }

  renderChapterDetail() {
    const container = document.getElementById("chapterDetailContainer");
    if (!container) return;

    const isEn = this.currentLanguage === "en";
    const subject = this.getCurrentSubject();
    const chapter = this.getCurrentChapter();

    if (!subject || !chapter) {
      container.innerHTML = `
        <div class="bg-white rounded-3xl p-8 border border-slate-200 text-center">
          <span class="text-4xl">📖</span>
          <h3 class="text-lg font-bold text-slate-800 mt-2">${isEn ? 'Select a Chapter to Begin Learning' : 'Pilih Bab untuk Mula Belajar'}</h3>
          <p class="text-xs text-slate-500 mt-1">${isEn ? 'Please click on any subject above to view compact notes, video and quiz practices.' : 'Sila klik pada salah satu subjek di atas untuk memaparkan nota padat, video dan latihan kuiz.'}</p>
        </div>
      `;
      return;
    }

    const isNoteRead = window.gamification.profile.completedNotes.includes(chapter.id);
    const quizResult = window.gamification.profile.completedQuizzes[chapter.quiz?.id];
    const isDraftChapter = this.isPlaceholderChapter(chapter);

    const chNumber = isEn && chapter.numberEn ? chapter.numberEn : chapter.number;
    const chTitle = isDraftChapter ? (isEn ? 'Lesson content being prepared' : 'Kandungan pelajaran sedang disediakan') : (isEn && chapter.titleEn ? chapter.titleEn : chapter.title);
    const chSummary = isEn && chapter.summaryEn ? chapter.summaryEn : chapter.summary;

    container.innerHTML = `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <!-- Chapter Header Banner -->
        <div class="bg-slate-900 text-white p-5 sm:p-7 relative overflow-hidden">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 rounded-xl text-xs font-bold uppercase">
                ${chNumber}
              </span>
              <span class="text-slate-400 text-xs font-medium">
                ${subject.name} • ${SYLLABUS_DATA[this.currentLevel].grades.find(g => g.id === this.currentGradeId)?.name}
              </span>
            </div>
            
            <!-- Badges & XP reward indicator -->
            <div class="flex items-center gap-2">
              <span class="bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <span>✨</span> +${chapter.xpReward} XP
              </span>
              ${isNoteRead ? `
                <span class="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <span>✓</span> ${isEn ? 'Completed Reading' : 'Selesai Dibaca'}
                </span>
              ` : ''}
            </div>
          </div>

          <h2 class="text-xl sm:text-2xl font-black text-white mt-3">
            ${chTitle}
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            ${chSummary}
          </p>
          ${isDraftChapter ? `<p class="mt-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">${isEn ? 'Lesson content is being prepared and is not yet verified.' : 'Kandungan bab ini masih draf dan belum disemak.'}</p>` : ''}

          <!-- Chapter Navigation Pills (if subject has multiple chapters) -->
          ${subject.chapters.length > 1 ? `
            <div class="flex items-center gap-2 mt-5 pt-4 border-t border-slate-800 overflow-x-auto pb-1">
              <span class="text-xs text-slate-400 font-semibold shrink-0">${isEn ? 'Other Chapters:' : 'Bab Lain:'}</span>
              ${subject.chapters.map(ch => {
                const label = isEn && ch.numberEn ? ch.numberEn : ch.number;
                return `
                  <button 
                    onclick="window.app.setChapter('${ch.id}')"
                    class="shrink-0 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      ch.id === chapter.id 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }"
                  >
                    ${label}
                  </button>
                `;
              }).join("")}
            </div>
          ` : ''}
        </div>

        <!-- Tab Bar Navigation (Nota / Video / Kuiz / PDF) -->
        <div class="flex border-b border-slate-200 bg-slate-50/70 px-4 sm:px-6 overflow-x-auto">
          <button 
            onclick="window.app.setContentTab('notes')"
            class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              this.activeContentTab === 'notes' 
                ? 'border-indigo-600 text-indigo-600' 
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }"
          >
            <span>📘</span> ${isEn ? 'Comprehensive Lesson (A-Z)' : 'Modul Pembelajaran Lengkap (A-Z)'}
          </button>
          
          <button 
            onclick="window.app.setContentTab('video')"
            class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              this.activeContentTab === 'video' 
                ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50' 
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }"
          >
            <span>🎓</span> ${isEn ? 'AI Classroom: Cikgu Aus' : 'Bilik Kuliah AI: Cikgu Aus'}
            <span class="bg-indigo-100 text-indigo-800 text-[10px] px-1.5 py-0.5 rounded-full font-black">AI ASLI</span>
          </button>

          ${chapter.quiz && !isDraftChapter ? `
            <button 
              onclick="window.app.setContentTab('quiz')"
              class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
                this.activeContentTab === 'quiz' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }"
            >
              <span>⚡</span> ${isEn ? 'Interactive Quiz' : 'Latihan Kuiz Interaktif'} 
              ${quizResult ? `<span class="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">${quizResult.score}%</span>` : ''}
            </button>
          ` : ''}

          <button 
            onclick="window.app.setContentTab('game')"
            class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              this.activeContentTab === 'game' 
                ? 'border-purple-600 text-purple-600' 
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }"
          >
            <span>🎮</span> ${isEn ? 'Game Zone / Duel' : 'Zon Game / Duel'}
            <span class="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold">${isEn ? 'Interactive' : 'Interaktif'}</span>
          </button>

          <button 
            onclick="window.app.setContentTab('worksheet')"
            class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              this.activeContentTab === 'worksheet' 
                ? 'border-indigo-600 text-indigo-600' 
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }"
          >
            <span>📄</span> ${isEn ? 'Print / PDF' : 'Cetak / PDF'}
          </button>
        </div>

        <!-- Tab Content Body -->
        <div class="p-5 sm:p-8" id="chapterTabContent">
          ${this.renderActiveTabContent(chapter)}
        </div>
      </div>
    `;
  }

  setChapter(chapterId) {
    if (window.eduAudio) window.eduAudio.playClick();
    if (window.cikguAus) window.cikguAus.stopSpeaking();
    this.currentChapterId = chapterId;
    this.currentSubtopicIndex = 0;
    this.renderArenaQuestRoadmap();
    this.renderChapterDetail();
    this.saveSessionState();
  }

  setContentTab(tab) {
    if (window.eduAudio) window.eduAudio.playClick();
    if (window.cikguAus) window.cikguAus.stopSpeaking();
    this.activeContentTab = tab;
    this.saveSessionState();
    this.renderChapterDetail();
  }

  renderActiveTabContent(chapter) {
    if (this.isPlaceholderChapter(chapter)) {
      const isEn = this.currentLanguage === "en";
      return `<div class="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center"><span class="text-3xl">🛠️</span><h3 class="mt-2 font-bold text-amber-950">${isEn ? 'This lesson is being prepared' : 'Pelajaran ini sedang disediakan'}</h3><p class="mx-auto mt-2 max-w-xl text-sm leading-6 text-amber-900">${isEn ? 'This starter entry does not contain verified syllabus material yet, so its notes and challenge are hidden.' : 'Entri permulaan ini belum mempunyai kandungan silibus yang disahkan. Nota dan cabarannya disembunyikan buat sementara.'}</p></div>`;
    }
    if (this.activeContentTab === "notes") {
      return this.renderNotesTab(chapter);
    } else if (this.activeContentTab === "video") {
      return this.renderVideoTab(chapter);
    } else if (this.activeContentTab === "quiz") {
      return this.renderQuizTab(chapter);
    } else if (this.activeContentTab === "game") {
      return this.renderGameTab(chapter);
    } else if (this.activeContentTab === "worksheet") {
      return this.renderWorksheetTab(chapter);
    }
    return "";
  }

  renderGameTab(chapter) {
    const subject = this.getCurrentSubject();
    return `
      <div class="space-y-6 animate-fade-in">
        <!-- Interactive Game Stage Banner -->
        <div class="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border-2 border-purple-500/40 shadow-2xl relative overflow-hidden">
          <div class="max-w-2xl z-10 relative">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-black mb-3">
              <span>🎮</span> Zon Permainan Silibus: ${subject?.name || 'Mata Pelajaran'}
            </span>
            <h3 class="text-xl sm:text-2xl font-black text-white">
              Cabar Diri Anda: Belajar Sambil Bermain!
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Mainkan permainan interaktif yang berorientasikan tajuk <strong>${chapter.title}</strong>. Jawab soalan secara pantas untuk menewaskan Bot Pintar AI atau uji kepantasan memori konsep anda.
            </p>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <button 
                onclick="window.eduGame.selectGameMode('duel'); window.eduGame.openGameModal(window.app.getCurrentSubject());" 
                class="px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-purple-500/30 transition-all flex items-center gap-2 transform hover:scale-105"
              >
                <span>⚔️</span> Mula EduDuel 1-Lawan-1 Topik Ini
              </button>

              <button 
                onclick="window.eduGame.selectGameMode('memory'); window.eduGame.openGameModal(window.app.getCurrentSubject());" 
                class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center gap-2"
              >
                <span>🧠</span> Padanan Memori 3D
              </button>
            </div>
          </div>
        </div>

        <!-- 3 Feature Highlight Badges -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 text-center">
            <span class="text-3xl mb-2 block">⚡</span>
            <h5 class="font-black text-sm text-white">Masa Pantas, Skor Tinggi</h5>
            <p class="text-xs text-slate-400 mt-1">15 saat setiap soalan. Jawab berturut-turut untuk cetus Kombo Berapi x3.0!</p>
          </div>
          <div class="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 text-center">
            <span class="text-3xl mb-2 block">🏆</span>
            <h5 class="font-black text-sm text-amber-400">+150 XP & Lencana Duel</h5>
            <p class="text-xs text-slate-400 mt-1">Mata ganjaran kemenangan dimasukkan terus ke Papan Pendahulu Kebangsaan.</p>
          </div>
          <div class="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 text-center">
            <span class="text-3xl mb-2 block">🤖</span>
            <h5 class="font-black text-sm text-purple-300">3 Tahap Lawan Bot AI</h5>
            <p class="text-xs text-slate-400 mt-1">Pilih lawan Santai, Pintar, atau tahap Jaguh Peperiksaan SPM.</p>
          </div>
        </div>
      </div>
    `;
  }

  renderNotesTab(chapter) {
    const isEn = this.currentLanguage === "en";
    const notes = chapter.notes || {
      title: chapter.title,
      readTime: "3 minit",
      sections: [{ heading: chapter.title, content: chapter.summary || (isEn ? "A short overview of this lesson." : "Ringkasan ringkas untuk pelajaran ini.") }]
    };

    const sections = notes.sections?.length ? notes.sections : [{ heading: chapter.title, content: chapter.summary || "" }];
    const safeIndex = Math.min(this.currentSubtopicIndex || 0, sections.length - 1);
    const activeSection = sections[safeIndex];
    const sec0Heading = isEn && activeSection.headingEn ? activeSection.headingEn : (activeSection.heading || 'Konsep Kunci');
    const sec0Content = isEn && activeSection.contentEn ? activeSection.contentEn : (activeSection.content || 'Kuasai konsep utama bab ini.');
    const secMnemonic = isEn 
      ? (activeSection.mnemonicEn || activeSection.mnemonic || 'Use initial keywords to reinforce memory!') 
      : (activeSection.mnemonic || 'Gunakan formula kata kunci awal untuk mengukuhkan ingatan!');
    const secExamTip = isEn 
      ? (activeSection.examTipEn || activeSection.examTip || 'Write full keywords following the official marking scheme!') 
      : (activeSection.examTip || 'Tulis kata kunci lengkap mengikut skema pemarkahan rasmi!');

    return `
      <div class="space-y-6">
        <!-- Top controls: DLP toggle and Print button -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-200">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500">⏱️ ${isEn ? 'Reading Time: ' + (notes.readTimeEn || notes.readTime || '5 mins') : 'Masa Bacaan: ' + (notes.readTime || '5 minit')}</span>
            ${notes.dlpAvailable ? `
              <span class="text-xs bg-cyan-50 text-cyan-700 border border-cyan-200 px-2.5 py-0.5 rounded-full font-semibold">
                ${isEn ? 'DLP Bilingual (BM/EN)' : 'DLP Bilingval (BM/BI)'}
              </span>
            ` : ''}
          </div>
          
          <div class="flex items-center gap-2">
            <button 
              onclick="window.app.toggleLanguage()" 
              class="px-3 py-1.5 text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl border border-indigo-200 transition-all flex items-center gap-1.5"
            >
              <span>🌐</span> ${isEn ? 'Bahasa Melayu' : 'English Mode'}
            </button>
            <button 
              onclick="window.print()" 
              class="px-3.5 py-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <span>🖨️</span> ${isEn ? 'Print / Save PDF' : 'Cetak / Simpan PDF'}
            </button>
          </div>
        </div>

        <!-- Chapter Visual Graphics & Interactive Simulation (A-Z) -->
        <div id="chapterGraphicContainer" class="animate-fade-in">
          ${window.visualGraphics ? window.visualGraphics.getChapterGraphic(chapter.id, this.currentLanguage) : ''}
        </div>

        <section class="subtopic-study-card rounded-2xl border border-slate-200 bg-white p-4 sm:p-5" aria-label="Subtopik bab">
          <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div><p class="text-xs font-bold uppercase tracking-wide text-indigo-600">${isEn ? 'Subtopics' : 'Subtopik'}</p><h3 class="mt-0.5 text-base font-bold text-slate-900">${isEn ? 'Study one idea at a time' : 'Belajar satu konsep pada satu masa'}</h3></div>
            <span class="text-xs text-slate-500">${safeIndex + 1} / ${sections.length}</span>
          </div>
          <div class="mb-4 flex flex-wrap gap-2">
            ${sections.map((sec, index) => {
              const title = isEn && sec.headingEn ? sec.headingEn : (sec.heading || `${isEn ? 'Subtopic' : 'Subtopik'} ${index + 1}`);
              return `<button type="button" aria-pressed="${index === safeIndex}" onclick="window.app.setSubtopic(${index})" class="rounded-full border px-3 py-1.5 text-xs font-semibold ${index === safeIndex ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-300'}">${title}</button>`;
            }).join("")}
          </div>
          <div class="rounded-xl bg-slate-50 p-4">
            <h4 class="font-bold text-slate-900">${sec0Heading}</h4>
            <p class="mt-2 text-sm leading-6 text-slate-700">${sec0Content}</p>
            ${activeSection.bulletPoints?.length ? `<ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">${activeSection.bulletPoints.map(point => `<li>${point}</li>`).join("")}</ul>` : ''}
            ${activeSection.mnemonic ? `<div class="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">${activeSection.mnemonic}</div>` : ''}
            ${activeSection.examTip ? `<div class="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">${activeSection.examTip}</div>` : ''}
          </div>
          <div class="mt-4" id="subtopicVisualContainer">
            ${window.visualGraphics?.getSubtopicGraphic(chapter, activeSection, safeIndex, this.currentLanguage) || ''}
          </div>
        </section>

        <!-- 3D Interactive Flippable Flashcards Deck -->
        <div id="chapterFlashcards" class="p-5 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-xl">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h4 class="text-sm font-black text-white flex items-center gap-2">
                <span>🃏</span> ${isEn ? '3D Interactive Flashcards' : 'Kad Imbasan 3D Interaktif'}
              </h4>
              <p class="text-[11px] text-slate-400">${isEn ? 'Click any card to flip 180° in 3D' : 'Klik kad untuk memusingkannya 180° dalam 3D'}</p>
            </div>
            <span class="text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              🔄 3D Flip Card FX
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <!-- Flashcard 1 -->
            <div class="flip-card h-48" onclick="window.app.flipCard(this)">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/40 p-5 rounded-3xl flex flex-col justify-between text-left shadow-lg">
                  <div class="flex justify-between items-center text-xs font-bold text-indigo-300">
                    <span>${isEn ? 'CARD 1' : 'KAD 1'}</span>
                    <span>${isEn ? '🔄 Click to Flip' : '🔄 Klik Pusing'}</span>
                  </div>
                  <div>
                    <span class="text-2xl mb-1 block">💡</span>
                    <h5 class="text-sm font-black text-white line-clamp-2">${sec0Heading}</h5>
                    <p class="text-[11px] text-indigo-200 mt-1">${isEn ? 'What are the core fundamentals you must remember?' : 'Apakah fakta asas yang mesti anda ketahui?'}</p>
                  </div>
                  <span class="text-[10px] text-indigo-400 font-bold uppercase">EduPintar 3D Flashcard</span>
                </div>
                <div class="flip-card-back bg-gradient-to-br from-indigo-900 to-purple-950 border border-purple-500/40 p-5 rounded-3xl flex flex-col justify-between text-left shadow-lg text-white">
                  <div class="flex justify-between items-center text-xs font-bold text-purple-300">
                    <span>${isEn ? 'CARD 1 ANSWER' : 'JAWAPAN KAD 1'}</span>
                    <span>✓ ${isEn ? 'Mastered' : 'Hafal'}</span>
                  </div>
                  <div class="text-xs leading-relaxed text-slate-200 overflow-y-auto max-h-24">
                    ${sec0Content}
                  </div>
                  <span class="text-[10px] text-purple-400 font-bold">${isEn ? 'Great job! Continue to next card' : 'Syabas! Teruskan kad seterusnya'}</span>
                </div>
              </div>
            </div>

            <!-- Flashcard 2 -->
            <div class="flip-card h-48" onclick="window.app.flipCard(this)">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-gradient-to-br from-amber-950 to-slate-900 border border-amber-500/40 p-5 rounded-3xl flex flex-col justify-between text-left shadow-lg">
                  <div class="flex justify-between items-center text-xs font-bold text-amber-300">
                    <span>${isEn ? 'CARD 2' : 'KAD 2'}</span>
                    <span>${isEn ? '🔄 Click to Flip' : '🔄 Klik Pusing'}</span>
                  </div>
                  <div>
                    <span class="text-2xl mb-1 block">🧠</span>
                    <h5 class="text-sm font-black text-white">${isEn ? 'Mnemonics & Formulas' : 'Akronim & Formula Ingat'}</h5>
                    <p class="text-[11px] text-amber-200 mt-1">${isEn ? 'Fast memory techniques for exams.' : 'Teknik memori pantas untuk peperiksaan.'}</p>
                  </div>
                  <span class="text-[10px] text-amber-400 font-bold uppercase">${isEn ? 'Smart Formula' : 'Formula Pintar'}</span>
                </div>
                <div class="flip-card-back bg-gradient-to-br from-amber-900 to-orange-950 border border-amber-500/40 p-5 rounded-3xl flex flex-col justify-between text-left shadow-lg text-white">
                  <div class="flex justify-between items-center text-xs font-bold text-amber-300">
                    <span>${isEn ? 'KEY FORMULA' : 'FORMULA RAHSIA'}</span>
                    <span>✓ ${isEn ? 'Mastered' : 'Kuasai'}</span>
                  </div>
                  <div class="text-xs leading-relaxed text-amber-100 overflow-y-auto max-h-24">
                    ${secMnemonic}
                  </div>
                  <span class="text-[10px] text-amber-300 font-bold">${isEn ? 'High scores await you!' : 'Skor Tinggi Menanti Anda!'}</span>
                </div>
              </div>
            </div>

            <!-- Flashcard 3 -->
            <div class="flip-card h-48" onclick="window.app.flipCard(this)">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-500/40 p-5 rounded-3xl flex flex-col justify-between text-left shadow-lg">
                  <div class="flex justify-between items-center text-xs font-bold text-emerald-300">
                    <span>${isEn ? 'CARD 3' : 'KAD 3'}</span>
                    <span>${isEn ? '🔄 Click to Flip' : '🔄 Klik Pusing'}</span>
                  </div>
                  <div>
                    <span class="text-2xl mb-1 block">⭐</span>
                    <h5 class="text-sm font-black text-white">${isEn ? 'Exam Tips & Traps' : 'Tip Soalan Peperiksaan'}</h5>
                    <p class="text-[11px] text-emerald-200 mt-1">${isEn ? 'Common pitfalls and full mark keys.' : 'Perangkap soalan dan teknik markah penuh.'}</p>
                  </div>
                  <span class="text-[10px] text-emerald-400 font-bold uppercase">UASA / SPM Scheme</span>
                </div>
                <div class="flip-card-back bg-gradient-to-br from-emerald-900 to-teal-950 border border-emerald-500/40 p-5 rounded-3xl flex flex-col justify-between text-left shadow-lg text-white">
                  <div class="flex justify-between items-center text-xs font-bold text-emerald-300">
                    <span>${isEn ? 'ANSWER SCHEME' : 'SKEMA JAWAPAN'}</span>
                    <span>✓ ${isEn ? 'Score A' : 'Skor A'}</span>
                  </div>
                  <div class="text-xs leading-relaxed text-emerald-100 overflow-y-auto max-h-24">
                    ${secExamTip}
                  </div>
                  <span class="text-[10px] text-emerald-300 font-bold">${isEn ? 'A+ Within Your Reach!' : 'A+ Dalam Genggaman!'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Note Sections -->
        <!-- Mark completed & award XP action -->
        <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-slate-500">
            ${isEn ? 'Finished reading and mastering the core concepts of this chapter?' : 'Sudah selesai membaca dan memahami konsep penting bab ini?'}
          </p>
          <button 
            onclick="window.app.completeNote('${chapter.id}')"
            class="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-200 transition-all flex items-center justify-center gap-2 card-3d-tilt"
          >
            <span>✓</span> ${isEn ? 'Mark as Read (+50 XP)' : 'Tandakan Selesai Baca (+50 XP)'}
          </button>
        </div>
      </div>
    `;
  }

  setSubtopic(index) {
    this.currentSubtopicIndex = Math.max(0, Number(index) || 0);
    this.renderChapterDetail();
    this.saveSessionState();
  }

  flipCard(cardEl) {
    if (window.eduAudio) window.eduAudio.playCardFlip();
    cardEl.classList.toggle("flipped");
  }

  completeNote(chapterId) {
    const chapter = this.getCurrentChapter();
    if (!chapter || chapter.id !== chapterId || this.isPlaceholderChapter(chapter)) return;
    const success = window.gamification.markNoteAsRead(chapterId, 50);
    if (window.eduAudio) window.eduAudio.playXpGain();
    if (!success) {
      window.gamification.showXpToast(10, "Ulang kaji semula nota!");
    }
    this.renderChapterDetail();
    this.renderArenaQuestRoadmap();
  }

  renderVideoTab(chapter) {
    const isEn = this.currentLanguage === "en";

    // Asynchronously mount the AI lesson and interactive math lab
    setTimeout(() => {
      if (window.eduLesson) {
        window.eduLesson.mountLesson(chapter, "lessonPlayerContainer");
      }
    }, 60);

    return `
      <div id="lessonPlayerContainer" class="w-full">
        <div class="p-10 sm:p-14 text-center bg-slate-950 rounded-3xl text-white border-2 border-indigo-500/30">
          <div class="inline-block animate-bounce text-4xl mb-3">🎓</div>
          <h3 class="font-black text-lg text-indigo-300">Menyediakan Bilik Kuliah AI Cikgu Aus...</h3>
          <p class="text-xs text-slate-400 mt-1">Menyusun lakaran animasi papan putih, penceritaan suara, dan Makmal Matematik Interaktif.</p>
        </div>
      </div>
    `;
  }

  renderQuizTab(chapter) {
    const quiz = chapter.quiz;
    const isEn = this.currentLanguage === "en";

    if (!quiz) return `<p class="text-sm text-slate-500">${isEn ? 'Quiz is not yet available for this unit.' : 'Kuiz belum dibuka bagi unit ini.'}</p>`;

    const history = window.gamification.profile.completedQuizzes[quiz.id];
    const quizTitle = isEn && quiz.titleEn ? quiz.titleEn : quiz.title;

    return `
      <div class="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl p-6 sm:p-8 border border-indigo-100 text-center max-w-xl mx-auto">
        <span class="text-5xl">⚡</span>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 mt-3">${quizTitle}</h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
          ${isEn ? 'Test your understanding following official KPM exam standards. Score high to earn XP and unlock badges!' : 'Uji kefahaman anda mengikut format peperiksaan sebenar. Dapatkan markah tinggi untuk kumpul XP dan lencana!'}
        </p>

        <!-- Quiz Details Pill Grid -->
        <div class="grid grid-cols-3 gap-3 my-6 text-center">
          <div class="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-400 block font-medium">${isEn ? 'Questions' : 'Soalan'}</span>
            <span class="text-base font-black text-slate-800">${quiz.questions.length} ${isEn ? 'Q\'s' : 'Soalan'}</span>
          </div>
          <div class="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-400 block font-medium">${isEn ? 'Duration' : 'Masa'}</span>
            <span class="text-base font-black text-slate-800">${quiz.timeLimitMinutes} ${isEn ? 'Mins' : 'Minit'}</span>
          </div>
          <div class="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-400 block font-medium">${isEn ? 'Reward' : 'Ganjaran'}</span>
            <span class="text-base font-black text-amber-500">+${quiz.xpPoints} XP</span>
          </div>
        </div>

        ${history ? `
          <div class="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800">
            <span class="font-bold">${isEn ? 'Previous Attempt Score: ' : 'Skor Percubaan Lepas: '}${history.score}%</span>
            <p class="text-emerald-600 mt-0.5">${isEn ? 'You can retry at any time to reinforce your memory and improve mastery!' : 'Anda boleh cuba semula pada bila-bila masa untuk mengukuhkan memori!'}</p>
          </div>
        ` : ''}

        <button 
          onclick="window.app.openQuizModal('${chapter.id}')"
          class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-indigo-200 hover:shadow-2xl transition-all"
        >
          ${isEn ? 'Start Quiz Now 🚀' : 'Mula Kuiz Sekarang 🚀'}
        </button>
      </div>
    `;
  }

  renderWorksheetTab(chapter) {
    const ws = chapter.worksheet;
    return `
      <div class="space-y-6 max-w-2xl mx-auto">
        <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center">
          <span class="text-5xl">📄</span>
          <h3 class="text-xl font-bold text-slate-900 mt-2">${ws ? ws.title : 'Lembaran Kerja & Latihan Praktis'}</h3>
          <p class="text-xs text-slate-500 mt-1">Diformat khas untuk cetakan fizikal atau simpanan fail PDF bagi tujuan ulang kaji luar talian.</p>

          <div class="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button 
              onclick="window.print()"
              class="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>🖨️</span> Cetak Lembaran Kerja
            </button>
            <button 
              onclick="window.print()"
              class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>📥</span> Simpan sebagai PDF
            </button>
          </div>
        </div>

        ${ws && ws.previewItems ? `
          <div class="bg-white p-5 rounded-2xl border border-slate-200">
            <h4 class="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">Kandungan Lembaran Kerja:</h4>
            <div class="space-y-2">
              ${ws.previewItems.map((item, idx) => `
                <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-xs font-medium text-slate-700">
                  <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px] shrink-0">${idx + 1}</span>
                  <span>${item}</span>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  openQuizModal(chapterId) {
    const chapter = this.getCurrentChapter();
    if (!chapter || chapter.id !== chapterId || !chapter.quiz || this.isPlaceholderChapter(chapter)) return;

    const modal = document.getElementById("quizModal");
    if (!modal) return;

    modal.classList.remove("hidden");
    window.quizEngine.startQuiz(chapter.quiz, chapter);
  }

  closeQuizModal() {
    const modal = document.getElementById("quizModal");
    if (modal) {
      modal.classList.add("hidden");
      window.quizEngine.stopTimer();
    }
  }

  openProfileModal() {
    const modal = document.getElementById("profileModal");
    if (!modal) return;

    const profile = window.gamification.profile;
    const levelInfo = window.gamification.getCurrentLevel();

    document.getElementById("modalProfileName").textContent = profile.name;
    document.getElementById("modalProfileLevel").textContent = `Tahap ${levelInfo.level}: ${levelInfo.title}`;
    document.getElementById("modalProfileUsername").textContent = profile.username ? `@${profile.username}` : "";
    window.eduAuth?.renderAvatar();

    const usernameInput = document.getElementById("inputProfileUsername");
    if (usernameInput) usernameInput.value = profile.username || "";
    const placement = SYLLABUS_DATA[profile.studyLevel]?.grades.find(item => item.id === profile.studyGrade);
    const placementLabel = document.getElementById("profileStudyPlacement");
    if (placementLabel) placementLabel.textContent = placement ? `${placement.name} · ${SYLLABUS_DATA[profile.studyLevel].curriculum}` : "Belum dipilih";
    const publicToggle = document.getElementById("profileLeaderboardOptIn");
    if (publicToggle) publicToggle.checked = !!profile.publicLeaderboard;


    document.getElementById("modalProfileXp").textContent = `${profile.xp} XP`;
    document.getElementById("modalProfileStreak").textContent = `${profile.streak} Hari Berturut-turut`;

    // Render badges list
    const badgesContainer = document.getElementById("modalProfileBadges");
    if (badgesContainer) {
      badgesContainer.innerHTML = ALL_BADGES.map(badge => {
        const isUnlocked = profile.unlockedBadges.includes(badge.id);
        return `
          <div class="p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
            isUnlocked 
              ? `${badge.color} shadow-sm` 
              : 'bg-slate-50 border-slate-200 opacity-40 grayscale'
          }">
            <span class="text-3xl">${badge.icon}</span>
            <div>
              <div class="font-bold text-xs sm:text-sm">${badge.title} ${isUnlocked ? '✓' : '🔒'}</div>
              <div class="text-[10px] sm:text-xs opacity-90 leading-tight">${badge.desc}</div>
            </div>
          </div>
        `;
      }).join("");
    }

    modal.classList.remove("hidden");
  }

  async syncScoreToCloud() {
    window.eduAuth?.scheduleSave();
  }

  openLeaderboardModal() {
    const modal = document.getElementById("leaderboardModal");
    if (!modal) return;
    const profile = window.gamification.profile;
    const grade = SYLLABUS_DATA[profile.studyLevel]?.grades.find(item => item.id === profile.studyGrade);
    const subtitle = document.getElementById("leaderboardSubtitle");
    if (subtitle) subtitle.textContent = grade ? `Kedudukan murid ${grade.name} yang memilih untuk menyertai` : "Pilih kelas anda untuk melihat kedudukan";
    modal.classList.remove("hidden");
    this.fetchLeaderboard();
  }

  closeLeaderboardModal() {
    const modal = document.getElementById("leaderboardModal");
    if (modal) modal.classList.add("hidden");
  }

  async fetchLeaderboard() {
    const container = document.getElementById("leaderboardListContainer");
    if (!container) return;
    container.replaceChildren();
    const { data, error } = await window.eduAuth.fetchLeaderboard();
    if (error) {
      container.textContent = "Papan pendahulu belum tersedia. Sediakan sambungan akaun dan pangkalan data dahulu.";
      return;
    }
    if (!data?.length) {
      container.textContent = "Belum ada pemain yang memilih untuk muncul pada papan pendahulu.";
      return;
    }
    data.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = `flex items-center justify-between p-3.5 rounded-2xl border ${index < 3 ? "bg-amber-50/60 border-amber-200" : "bg-white border-slate-200"}`;
      const left = document.createElement("div"); left.className = "flex items-center gap-3 min-w-0";
      const rank = document.createElement("span"); rank.className = "w-8 text-center text-xl"; rank.textContent = ["🥇", "🥈", "🥉"][index] || String(index + 1);
      const avatar = document.createElement("img"); avatar.className = "w-9 h-9 rounded-full object-cover bg-slate-200"; avatar.alt = ""; avatar.src = item.avatar_url || "";
      const username = document.createElement("span"); username.className = "font-black text-slate-900 text-sm truncate"; username.textContent = `@${item.username}`;
      left.append(rank, avatar, username);
      const score = document.createElement("span"); score.className = "font-black text-amber-700 text-sm shrink-0"; score.textContent = `${item.xp || 0} XP`;
      row.append(left, score); container.append(row);
    });
  }

  closeProfileModal() {
    const modal = document.getElementById("profileModal");
    if (modal) modal.classList.add("hidden");
  }

  closeAllModals() {
    this.closeQuizModal();
    this.closeProfileModal();
    this.closeLeaderboardModal();
  }

  handleSearch() {
    if (!this.searchQuery) {
      this.renderSubjectsGrid();
      return;
    }

    const container = document.getElementById("subjectsGridContainer");
    if (!container) return;

    const query = this.searchQuery;
    const matches = [];

    // Search only inside the learner's saved placement.
    const levelKey = window.gamification.profile.studyLevel || this.currentLevel;
    const gradeKey = window.gamification.profile.studyGrade || this.currentGradeId;
    const level = SYLLABUS_DATA[levelKey];
    if (!level || !level.subjects[gradeKey]) {
      container.innerHTML = `<div class="col-span-full rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600">Pilih kelas anda dahulu untuk mencari bahan pembelajaran.</div>`;
      return;
    }
    (level.subjects[gradeKey] || []).forEach(subj => {
          if (subj.name.toLowerCase().includes(query) || subj.description.toLowerCase().includes(query)) {
            matches.push({ level: levelKey, grade: gradeKey, subj, chapter: null });
          }
          if (subj.chapters) {
            subj.chapters.forEach(ch => {
              if (
                ch.title.toLowerCase().includes(query) || 
                ch.summary.toLowerCase().includes(query) ||
                (ch.notes && JSON.stringify(ch.notes).toLowerCase().includes(query))
              ) {
                matches.push({ level: levelKey, grade: gradeKey, subj, chapter: ch });
              }
            });
          }
    });

    if (matches.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-8 text-center bg-white rounded-3xl border border-slate-200">
          <p class="text-3xl mb-2">🔍</p>
          <h4 class="font-bold text-slate-800">Tiada Hasil Ditemui untuk "${this.searchQuery}"</h4>
          <p class="text-xs text-slate-500 mt-1">Cuba kata kunci seperti "sains", "darah", "sejarah", "kuadratik" atau "pecahan".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = matches.map(m => `
      <div 
        onclick="window.app.jumpToSearchedItem('${m.level}', '${m.grade}', '${m.subj.id}', '${m.chapter ? m.chapter.id : ''}')"
        class="cursor-pointer p-4 rounded-3xl border-2 border-indigo-200 bg-white hover:border-indigo-600 transition-all hover:shadow-md"
      >
        <div class="flex items-center justify-between text-xs font-bold text-indigo-600 mb-2">
          <span>${m.level === 'primary' ? 'Sekolah Rendah (KSSR)' : 'Sekolah Menengah (KSSM)'}</span>
          <span class="bg-indigo-50 px-2 py-0.5 rounded-full">${m.subj.code}</span>
        </div>
        <h4 class="font-extrabold text-sm text-slate-900">${m.subj.name}</h4>
        ${m.chapter ? `
          <p class="text-xs text-slate-700 font-semibold mt-1">📌 ${m.chapter.number}: ${m.chapter.title}</p>
        ` : ''}
        <p class="text-[11px] text-slate-500 mt-2">Klik untuk lompat terus ke topik ini →</p>
      </div>
    `).join("");
  }

  jumpToSearchedItem(level, grade, subjectId, chapterId) {
    if (level !== window.gamification.profile.studyLevel || grade !== window.gamification.profile.studyGrade) return;
    this.currentLevel = level;
    this.currentGradeId = grade;
    this.currentSubjectId = subjectId;
    if (chapterId) {
      this.currentChapterId = chapterId;
    }
    this.searchQuery = "";
    const searchInput = document.getElementById("syllabusSearchInput");
    if (searchInput) searchInput.value = "";

    this.renderLevelSelector();
    this.renderGradePills();
    this.enterSubjectArena(subjectId);
  }
}

// Global hooks for HTML onclick
window.closeQuizModal = () => window.app.closeQuizModal();
window.closeProfileModal = () => window.app.closeProfileModal();

document.addEventListener("DOMContentLoaded", () => {
  window.app = new EduPintarApp();
});
