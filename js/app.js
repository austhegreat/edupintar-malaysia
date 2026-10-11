/**
 * EduPintar Malaysia - Main Application Controller
 * Mengawal navigasi silibus, paparan nota, video player, carian dan integrasi modul
 */

class EduPintarApp {
  constructor() {
    this.currentLevel = "secondary"; // 'primary' or 'secondary'
    this.currentGradeId = "f4";      // default to Tingkatan 4 SPM
    this.currentSubjectId = "f4-sej"; // default to Sejarah SPM
    this.currentChapterId = "f4-sej-c2"; // default to Bab 2 Kebangkitan Nasionalisme
    this.activeContentTab = "notes"; // 'notes', 'video', 'quiz', 'worksheet'
    this.searchQuery = "";

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateHeaderProfile();
    this.renderLevelSelector();
    this.renderGradePills();
    this.renderSubjectsGrid();
    this.renderChapterDetail();
    this.renderStatsBanner();
  }

  setupEventListeners() {
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
  }

  renderStatsBanner() {
    const banner = document.getElementById("studentStatsBanner");
    if (!banner) return;

    const profile = window.gamification.profile;
    const levelInfo = window.gamification.getCurrentLevel();
    const completedQuizzesCount = Object.keys(profile.completedQuizzes).length;
    const unlockedBadgesCount = profile.unlockedBadges.length;

    banner.innerHTML = `
      <div class="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
        <!-- Background decorative circles -->
        <div class="absolute -right-10 -bottom-10 w-44 h-44 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute right-1/3 -top-10 w-32 h-32 bg-amber-500/15 rounded-full blur-xl pointer-events-none"></div>

        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="max-w-xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-amber-300 mb-2 border border-white/10">
              <span>🇲🇾</span> Portal Pendidikan Pintar KSSR & KSSM Malaysia
            </div>
            <h2 class="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              Selamat Belajar, Murid Pintar! <span class="animate-wave inline-block">👋</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 mt-1">
              "Menuntut ilmu itu adalah fardu bagi setiap muslim dan penentu masa depan bangsa." Teruskan rentak belajar anda hari ini!
            </p>

            <!-- Level progress bar -->
            <div class="mt-4 max-w-md">
              <div class="flex justify-between text-xs font-bold mb-1 text-slate-300">
                <span>Pangkat: <strong class="text-amber-400">${levelInfo.title}</strong></span>
                <span>${profile.xp} / ${levelInfo.nextMinXp || 'Max'} XP (${levelInfo.percentage}%)</span>
              </div>
              <div class="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                <div class="bg-gradient-to-r from-amber-400 to-orange-400 h-2.5 rounded-full transition-all duration-500" style="width: ${levelInfo.percentage}%"></div>
              </div>
            </div>
          </div>

          <!-- Quick stat cards -->
          <div class="grid grid-cols-3 gap-2 sm:gap-3 shrink-0">
            <div class="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-center">
              <div class="text-xl sm:text-2xl">🔥</div>
              <div class="text-base sm:text-lg font-black text-white">${profile.streak}</div>
              <div class="text-[10px] sm:text-xs text-slate-300 font-medium">Streak Hari</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-center">
              <div class="text-xl sm:text-2xl">📝</div>
              <div class="text-base sm:text-lg font-black text-white">${completedQuizzesCount}</div>
              <div class="text-[10px] sm:text-xs text-slate-300 font-medium">Kuiz Selesai</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-center cursor-pointer hover:bg-white/20 transition-all" onclick="window.app.openProfileModal()">
              <div class="text-xl sm:text-2xl">🏆</div>
              <div class="text-base sm:text-lg font-black text-amber-400">${unlockedBadgesCount}</div>
              <div class="text-[10px] sm:text-xs text-slate-300 font-medium">Lencana</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderLevelSelector() {
    const primaryTabBtn = document.getElementById("tabLevelPrimary");
    const secondaryTabBtn = document.getElementById("tabLevelSecondary");

    if (primaryTabBtn && secondaryTabBtn) {
      if (this.currentLevel === "primary") {
        primaryTabBtn.className = "flex-1 py-3 px-4 rounded-2xl font-bold text-sm bg-emerald-600 text-white shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2";
        secondaryTabBtn.className = "flex-1 py-3 px-4 rounded-2xl font-semibold text-sm bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-center gap-2";
      } else {
        primaryTabBtn.className = "flex-1 py-3 px-4 rounded-2xl font-semibold text-sm bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-center gap-2";
        secondaryTabBtn.className = "flex-1 py-3 px-4 rounded-2xl font-bold text-sm bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2";
      }
    }
  }

  setLevel(level) {
    if (this.currentLevel === level) return;
    this.currentLevel = level;
    
    // Set default grade and subject for chosen level
    if (level === "primary") {
      this.currentGradeId = "t5"; // Tahun 5 Sains
      this.currentSubjectId = "t5-sains";
      this.currentChapterId = "t5-sn-c2";
    } else {
      this.currentGradeId = "f4"; // Tingkatan 4 Sejarah
      this.currentSubjectId = "f4-sej";
      this.currentChapterId = "f4-sej-c2";
    }

    this.activeContentTab = "notes";
    this.renderLevelSelector();
    this.renderGradePills();
    this.renderSubjectsGrid();
    this.renderChapterDetail();
  }

  renderGradePills() {
    const container = document.getElementById("gradePillsContainer");
    if (!container) return;

    const levelData = SYLLABUS_DATA[this.currentLevel];
    container.innerHTML = levelData.grades.map(grade => {
      const isActive = grade.id === this.currentGradeId;
      return `
        <button 
          onclick="window.app.setGrade('${grade.id}')"
          class="shrink-0 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
            isActive 
              ? 'bg-slate-900 text-white shadow-md' 
              : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }"
        >
          <span>${grade.name}</span>
          ${grade.badge ? `
            <span class="text-[10px] px-2 py-0.5 rounded-full ${
              isActive ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-600'
            }">${grade.badge}</span>
          ` : ''}
        </button>
      `;
    }).join("");
  }

  setGrade(gradeId) {
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
      return `
        <div 
          onclick="window.app.setSubject('${subj.id}')"
          class="group cursor-pointer p-4 rounded-3xl border-2 transition-all duration-200 ${
            isSelected 
              ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-2 ring-indigo-500/20' 
              : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
          }"
        >
          <div class="flex items-start justify-between">
            <span class="text-3xl p-2.5 rounded-2xl bg-slate-50 border border-slate-100">${subj.icon}</span>
            <div class="flex items-center gap-1.5">
              ${subj.hasDlp ? `
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                  DLP
                </span>
              ` : ''}
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                ${subj.code}
              </span>
            </div>
          </div>

          <h4 class="font-extrabold text-base text-slate-900 mt-3 group-hover:text-indigo-600 transition-colors">
            ${subj.name}
          </h4>
          <p class="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            ${subj.description}
          </p>

          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="font-semibold ${hasChapters ? 'text-emerald-600' : 'text-slate-400'}">
              ${hasChapters ? `● ${subj.chapters.length} Bab Interaktif` : 'Dalam Pembinaan'}
            </span>
            <span class="text-indigo-600 font-bold group-hover:translate-x-1 transition-transform">
              Buka →
            </span>
          </div>
        </div>
      `;
    }).join("");
  }

  setSubject(subjectId) {
    this.currentSubjectId = subjectId;
    const subjects = SYLLABUS_DATA[this.currentLevel].subjects[this.currentGradeId] || [];
    const found = subjects.find(s => s.id === subjectId);

    if (found && found.chapters && found.chapters.length > 0) {
      this.currentChapterId = found.chapters[0].id;
    } else {
      this.currentChapterId = null;
    }

    this.renderSubjectsGrid();
    this.renderChapterDetail();
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

  renderChapterDetail() {
    const container = document.getElementById("chapterDetailContainer");
    if (!container) return;

    const subject = this.getCurrentSubject();
    const chapter = this.getCurrentChapter();

    if (!subject || !chapter) {
      container.innerHTML = `
        <div class="bg-white rounded-3xl p-8 border border-slate-200 text-center">
          <span class="text-4xl">📖</span>
          <h3 class="text-lg font-bold text-slate-800 mt-2">Pilih Bab untuk Mula Belajar</h3>
          <p class="text-xs text-slate-500 mt-1">Sila klik pada salah satu subjek di atas untuk memaparkan nota padat, video dan latihan kuiz.</p>
        </div>
      `;
      return;
    }

    const isNoteRead = window.gamification.profile.completedNotes.includes(chapter.id);
    const quizResult = window.gamification.profile.completedQuizzes[chapter.quiz?.id];

    container.innerHTML = `
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <!-- Chapter Header Banner -->
        <div class="bg-slate-900 text-white p-5 sm:p-7 relative overflow-hidden">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 rounded-xl text-xs font-bold uppercase">
                ${chapter.number}
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
                  <span>✓</span> Selesai Dibaca
                </span>
              ` : ''}
            </div>
          </div>

          <h2 class="text-xl sm:text-2xl font-black text-white mt-3">
            ${chapter.title}
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            ${chapter.summary}
          </p>

          <!-- Chapter Navigation Pills (if subject has multiple chapters) -->
          ${subject.chapters.length > 1 ? `
            <div class="flex items-center gap-2 mt-5 pt-4 border-t border-slate-800 overflow-x-auto pb-1">
              <span class="text-xs text-slate-400 font-semibold shrink-0">Bab Lain:</span>
              ${subject.chapters.map(ch => `
                <button 
                  onclick="window.app.setChapter('${ch.id}')"
                  class="shrink-0 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    ch.id === chapter.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }"
                >
                  ${ch.number}
                </button>
              `).join("")}
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
            <span>📝</span> Nota Padat
          </button>
          
          ${chapter.video ? `
            <button 
              onclick="window.app.setContentTab('video')"
              class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
                this.activeContentTab === 'video' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }"
            >
              <span>🎥</span> Video Pembelajaran
            </button>
          ` : ''}

          ${chapter.quiz ? `
            <button 
              onclick="window.app.setContentTab('quiz')"
              class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
                this.activeContentTab === 'quiz' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }"
            >
              <span>⚡</span> Latihan Kuiz Interaktif 
              ${quizResult ? `<span class="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">${quizResult.score}%</span>` : ''}
            </button>
          ` : ''}

          <button 
            onclick="window.app.setContentTab('worksheet')"
            class="py-4 px-3 sm:px-5 font-bold text-xs sm:text-sm border-b-2 transition-all flex items-center gap-2 shrink-0 ${
              this.activeContentTab === 'worksheet' 
                ? 'border-indigo-600 text-indigo-600' 
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }"
          >
            <span>📄</span> Cetak / PDF
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
    this.currentChapterId = chapterId;
    this.renderChapterDetail();
  }

  setContentTab(tab) {
    this.activeContentTab = tab;
    const container = document.getElementById("chapterTabContent");
    const chapter = this.getCurrentChapter();
    if (container && chapter) {
      container.innerHTML = this.renderActiveTabContent(chapter);
    }
    // Update active tab buttons
    this.renderChapterDetail();
  }

  renderActiveTabContent(chapter) {
    if (this.activeContentTab === "notes") {
      return this.renderNotesTab(chapter);
    } else if (this.activeContentTab === "video") {
      return this.renderVideoTab(chapter);
    } else if (this.activeContentTab === "quiz") {
      return this.renderQuizTab(chapter);
    } else if (this.activeContentTab === "worksheet") {
      return this.renderWorksheetTab(chapter);
    }
    return "";
  }

  renderNotesTab(chapter) {
    const notes = chapter.notes;
    if (!notes) {
      return `<p class="text-sm text-slate-500">Nota sedang disediakan untuk unit ini.</p>`;
    }

    return `
      <div class="space-y-6">
        <!-- Top controls: DLP toggle and Print button -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-200">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-500">⏱️ Masa Bacaan: ${notes.readTime}</span>
            ${notes.dlpAvailable ? `
              <span class="text-xs bg-cyan-50 text-cyan-700 border border-cyan-200 px-2.5 py-0.5 rounded-full font-semibold">
                DLP Bilingval
              </span>
            ` : ''}
          </div>
          
          <button 
            onclick="window.print()" 
            class="px-3.5 py-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
          >
            <span>🖨️</span> Cetak / Simpan PDF
          </button>
        </div>

        <!-- Note Sections -->
        ${notes.sections.map(sec => `
          <div class="bg-slate-50/60 p-5 sm:p-6 rounded-2xl border border-slate-200/80">
            <h3 class="text-base sm:text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
              <span class="w-2 h-5 bg-indigo-600 rounded-full inline-block"></span>
              ${sec.heading}
            </h3>
            
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
              ${sec.content}
            </p>

            ${sec.bulletPoints ? `
              <ul class="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 pl-4 border-l-2 border-indigo-200">
                ${sec.bulletPoints.map(bp => `<li>• ${bp}</li>`).join("")}
              </ul>
            ` : ''}

            ${sec.mnemonic ? `
              <div class="mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 leading-relaxed shadow-sm">
                ${sec.mnemonic}
              </div>
            ` : ''}

            ${sec.examTip ? `
              <div class="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-900 leading-relaxed shadow-sm">
                ${sec.examTip}
              </div>
            ` : ''}
          </div>
        `).join("")}

        <!-- Mark completed & award XP action -->
        <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-slate-500">
            Sudah selesai membaca dan memahami konsep penting bab ini?
          </p>
          <button 
            onclick="window.app.completeNote('${chapter.id}')"
            class="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-200 transition-all flex items-center justify-center gap-2"
          >
            <span>✓</span> Tandakan Selesai Baca (+50 XP)
          </button>
        </div>
      </div>
    `;
  }

  completeNote(chapterId) {
    const success = window.gamification.markNoteAsRead(chapterId, 50);
    if (!success) {
      window.gamification.showXpToast(10, "Ulang kaji semula nota!");
    }
    this.renderChapterDetail();
  }

  renderVideoTab(chapter) {
    const vid = chapter.video;
    if (!vid) return `<p class="text-sm text-slate-500">Video belum tersedia untuk unit ini.</p>`;

    return `
      <div class="space-y-6">
        <!-- Video Player Simulation Container -->
        <div class="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative flex items-center justify-center group">
          <!-- Styled preview placeholder with play button -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-6">
            <div class="flex items-center justify-between">
              <span class="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">LIVE KELAS</span>
              <span class="text-xs text-white/80 font-mono">${vid.duration}</span>
            </div>
            
            <div class="text-center">
              <button 
                onclick="window.app.playInteractiveVideo('${vid.embedUrl}')"
                class="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl hover:scale-110 transition-all mx-auto group-hover:bg-amber-500"
              >
                ▶
              </button>
              <p class="text-white text-xs font-semibold mt-2 drop-shadow">Klik untuk tonton kuliah interaktif</p>
            </div>

            <div>
              <h4 class="text-white font-bold text-base sm:text-lg">${vid.title}</h4>
              <p class="text-xs text-slate-300">Pengajar: ${vid.presenter}</p>
            </div>
          </div>
        </div>

        <!-- Video Highlights / Timestamps -->
        <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h4 class="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
            <span>⏱️</span> Minit Penting Kuliah:
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${vid.highlights.map(hl => `
              <div class="p-2.5 bg-white rounded-xl border border-slate-200/80 font-medium text-slate-700 flex items-center gap-2 hover:border-indigo-300 transition-colors">
                <span class="text-indigo-600">📌</span> ${hl}
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  playInteractiveVideo(url) {
    alert("Memainkan video pengajaran modul. Anda boleh tonton penerangan Cikgu dan jawab latihan di bawah!");
  }

  renderQuizTab(chapter) {
    const quiz = chapter.quiz;
    if (!quiz) return `<p class="text-sm text-slate-500">Kuiz belum dibuka bagi unit ini.</p>`;

    const history = window.gamification.profile.completedQuizzes[quiz.id];

    return `
      <div class="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl p-6 sm:p-8 border border-indigo-100 text-center max-w-xl mx-auto">
        <span class="text-5xl">⚡</span>
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 mt-3">${quiz.title}</h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
          Uji kefahaman anda mengikut format peperiksaan sebenar. Dapatkan markah tinggi untuk kumpul XP dan lencana!
        </p>

        <!-- Quiz Details Pill Grid -->
        <div class="grid grid-cols-3 gap-3 my-6 text-center">
          <div class="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-400 block font-medium">Soalan</span>
            <span class="text-base font-black text-slate-800">${quiz.questions.length} Soalan</span>
          </div>
          <div class="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-400 block font-medium">Masa</span>
            <span class="text-base font-black text-slate-800">${quiz.timeLimitMinutes} Minit</span>
          </div>
          <div class="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <span class="text-xs text-slate-400 block font-medium">Ganjaran</span>
            <span class="text-base font-black text-amber-500">+${quiz.xpPoints} XP</span>
          </div>
        </div>

        ${history ? `
          <div class="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800">
            <span class="font-bold">Skor Percubaan Lepas: ${history.score}%</span>
            <p class="text-emerald-600 mt-0.5">Anda boleh cuba semula pada bila-bila masa untuk mengukuhkan memori!</p>
          </div>
        ` : ''}

        <button 
          onclick="window.app.openQuizModal('${chapter.id}')"
          class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-indigo-200 hover:shadow-2xl transition-all"
        >
          Mula Kuiz Sekarang 🚀
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
    if (!chapter || !chapter.quiz) return;

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
    const schoolEl = document.getElementById("modalProfileSchool");
    if (schoolEl) schoolEl.textContent = profile.school || "Sekolah Rendah / Menengah Malaysia";

    const nameInput = document.getElementById("inputProfileName");
    if (nameInput) nameInput.value = profile.name || "Murid Pintar";

    const schoolInput = document.getElementById("inputProfileSchool");
    if (schoolInput) schoolInput.value = profile.school || "";

    const roleSelect = document.getElementById("selectProfileRole");
    if (roleSelect) roleSelect.value = profile.role || "student";

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

  saveProfileChanges() {
    const nameInput = document.getElementById("inputProfileName");
    const schoolInput = document.getElementById("inputProfileSchool");
    const roleSelect = document.getElementById("selectProfileRole");

    if (nameInput && nameInput.value.trim()) {
      window.gamification.profile.name = nameInput.value.trim();
    }
    if (schoolInput && schoolInput.value.trim()) {
      window.gamification.profile.school = schoolInput.value.trim();
    }
    if (roleSelect) {
      window.gamification.profile.role = roleSelect.value;
    }

    window.gamification.saveProfile();
    this.updateHeaderProfile();
    this.renderStatsBanner();
    this.syncScoreToCloud();

    window.gamification.showXpToast(0, "Maklumat Profil Berjaya Dikemaskini! ✓");
  }

  async syncScoreToCloud() {
    try {
      const profile = window.gamification.profile;
      const levelInfo = window.gamification.getCurrentLevel();
      await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: profile.name,
          school: profile.school || "Sekolah Malaysia",
          level: levelInfo.title,
          xp: profile.xp,
          badges: profile.unlockedBadges.length
        })
      });
    } catch (e) {
      // Offline mode or file:// protocol fallback
      console.log("Local offline mode active, syncing skipped.");
    }
  }

  openLeaderboardModal() {
    const modal = document.getElementById("leaderboardModal");
    if (!modal) return;
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

    // Fallback data in case server is not running yet
    const fallbackList = [
      { rank: 1, name: "Nur Aisyah Binti Zulkifli", school: "SMK Aminuddin Baki, KL", level: "Cendekiawan Pintar", xp: 2450, badges: 9 },
      { rank: 2, name: "Tan Wei Hong", school: "SMJK Chung Ling, Pulau Pinang", level: "Jaguh Harapan", xp: 2180, badges: 8 },
      { rank: 3, name: "Muhammad Harith Danish", school: "Kolej Melayu Kuala Kangsar (MCKK)", level: "Jaguh Harapan", xp: 1920, badges: 7 },
      { rank: 4, name: "Siti Sarah Qistina", school: "SBP Integrasi Gopeng, Perak", level: "Wira Ilmuwan", xp: 1650, badges: 6 },
      { rank: 5, name: "Darren Lee Jia Jun", school: "SMK Catholic, Petaling Jaya", level: "Wira Ilmuwan", xp: 1420, badges: 6 },
      { rank: 6, name: "Kavitha A/P Muthusamy", school: "SMK Sultan Ismail, Johor Bahru", level: "Bintang Kelas", xp: 1250, badges: 5 },
      { rank: 7, name: "Mohd Adam Rayyan", school: "SK Taman Tun Dr Ismail (1), KL", level: "Bintang Kelas", xp: 980, badges: 5 },
      { rank: 8, name: "Alyssa Wong Xin Yi", school: "SJK(C) Puay Chai 2, Selangor", level: "Penuntut Bersemangat", xp: 750, badges: 4 }
    ];

    let list = fallbackList;

    try {
      const res = await fetch("/api/leaderboard");
      if (res.ok) {
        list = await res.json();
      }
    } catch (e) {
      console.log("Serving offline leaderboard list");
    }

    container.innerHTML = list.map((item, index) => {
      let rankBadge = `<span class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">${item.rank || index + 1}</span>`;
      if (index === 0) rankBadge = `<span class="text-2xl">🥇</span>`;
      if (index === 1) rankBadge = `<span class="text-2xl">🥈</span>`;
      if (index === 2) rankBadge = `<span class="text-2xl">🥉</span>`;

      return `
        <div class="flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
          index < 3 ? 'bg-amber-50/60 border-amber-200 shadow-sm' : 'bg-white border-slate-200'
        }">
          <div class="flex items-center gap-3">
            <div class="shrink-0 flex items-center justify-center w-8">${rankBadge}</div>
            <div>
              <div class="font-black text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                <span>${item.name}</span>
                <span class="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">${item.level}</span>
              </div>
              <div class="text-[11px] text-slate-500 font-medium">${item.school || 'Sekolah Malaysia'}</div>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="font-black text-amber-600 text-xs sm:text-sm">${item.xp} XP</span>
            <span class="block text-[10px] text-slate-400 font-semibold">${item.badges || 0} Lencana</span>
          </div>
        </div>
      `;
    }).join("");
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

    // Search across primary and secondary
    ["primary", "secondary"].forEach(levelKey => {
      const level = SYLLABUS_DATA[levelKey];
      Object.keys(level.subjects).forEach(gradeKey => {
        const subjects = level.subjects[gradeKey];
        subjects.forEach(subj => {
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
      });
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
    this.renderSubjectsGrid();
    this.renderChapterDetail();

    // Scroll down to chapter detail
    document.getElementById("chapterDetailContainer")?.scrollIntoView({ behavior: "smooth" });
  }
}

// Global hooks for HTML onclick
window.closeQuizModal = () => window.app.closeQuizModal();
window.closeProfileModal = () => window.app.closeProfileModal();

document.addEventListener("DOMContentLoaded", () => {
  window.app = new EduPintarApp();
});
