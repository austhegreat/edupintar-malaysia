/**
 * EduPintar Malaysia - Interactive EduGame Engine
 * Modul Permainan Pendidikan Interaktif:
 * 1. EduDuel 1-Lawan-1 (Pertarungan Kuiz Minda Lawan Bot / Lawan Rakan)
 * 2. Padanan Memori 3D (Flash Memory Match Game)
 */

class EduGameEngine {
  constructor() {
    this.activeMode = "duel"; // 'duel' or 'memory'
    this.selectedTopic = "all"; // 'all' or subjectId
    this.subjectContext = null;
    
    // Duel state
    this.duel = {
      opponentType: "bot", // 'bot' or 'p2'
      botDifficulty: "medium", // 'easy', 'medium', 'hard'
      playerHp: 100,
      opponentHp: 100,
      playerScore: 0,
      opponentScore: 0,
      combo: 0,
      maxCombo: 0,
      currentQuestionIdx: 0,
      questions: [],
      timerSec: 15,
      timerInterval: null,
      botTimeout: null,
      isRoundOver: false
    };

    // Memory Match state
    this.memory = {
      cards: [],
      flippedCards: [],
      matchedPairs: 0,
      totalPairs: 4,
      moves: 0,
      timerSec: 0,
      timerInterval: null,
      isLocked: false
    };

    this.init();
  }

  init() {
    // Expose globally
    window.eduGame = this;
  }

  openGameModal(subjectContext = null) {
    if (window.eduAudio) window.eduAudio.playClick();
    this.subjectContext = subjectContext;
    
    const modal = document.getElementById("gameModal");
    if (!modal) return;
    modal.classList.remove("hidden");
    
    // If entered from a specific subject, set topic automatically
    if (subjectContext && subjectContext.id) {
      this.selectedTopic = subjectContext.id;
    } else {
      this.selectedTopic = "all";
    }

    this.renderLobby();
  }

  closeGameModal() {
    if (window.eduAudio) window.eduAudio.playClick();
    this.stopDuelTimer();
    this.stopMemoryTimer();
    const modal = document.getElementById("gameModal");
    if (modal) modal.classList.add("hidden");
  }

  renderLobby() {
    const container = document.getElementById("gameModalBody");
    if (!container) return;

    const topicLabel = this.subjectContext 
      ? `Topik Semasa: ${this.subjectContext.name}`
      : "Semua Topik Silibus Kebangsaan";

    container.innerHTML = `
      <div class="p-5 sm:p-7 flex flex-col h-full max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30">
              🎮
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xl font-black text-white">Arena Game EduPintar</h3>
                <span class="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Pendidikan 3D</span>
              </div>
              <p class="text-xs text-slate-400 mt-0.5">${topicLabel}</p>
            </div>
          </div>
          <button onclick="window.eduGame.closeGameModal()" class="w-9 h-9 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm transition-colors">
            ✕
          </button>
        </div>

        <!-- Mode Select Cards -->
        <div class="my-6 space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Pilih Mod Permainan Interaktif:</h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- Mode 1: EduDuel -->
            <div 
              onclick="window.eduGame.selectGameMode('duel')"
              class="cursor-pointer p-5 rounded-3xl border-2 transition-all duration-200 card-3d-tilt relative overflow-hidden group ${
                this.activeMode === 'duel'
                  ? 'border-purple-500 bg-gradient-to-br from-purple-950/80 to-slate-900 shadow-xl shadow-purple-500/20'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-900'
              }"
            >
              <div class="flex items-start justify-between">
                <span class="text-3xl p-3 bg-purple-500/20 rounded-2xl border border-purple-500/30">⚔️</span>
                <span class="text-[10px] font-black px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  1-Lawan-1 BATTLE
                </span>
              </div>
              <h5 class="text-base font-black text-white mt-3 group-hover:text-purple-300 transition-colors">
                EduDuel: Pertarungan Minda
              </h5>
              <p class="text-xs text-slate-300 mt-1 leading-relaxed">
                Kalahkan Lawan Maya (Bot Pintar) atau bertarung 2-Pemain! Jawab pantas, cetus Kombo Berapi dan tumpaskan bar HP lawan!
              </p>
              <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
                <span>✨ Ganjaran: +150 XP & Lencana</span>
                <span class="text-purple-400">Pilih Mod →</span>
              </div>
            </div>

            <!-- Mode 2: Padanan Memori 3D -->
            <div 
              onclick="window.eduGame.selectGameMode('memory')"
              class="cursor-pointer p-5 rounded-3xl border-2 transition-all duration-200 card-3d-tilt relative overflow-hidden group ${
                this.activeMode === 'memory'
                  ? 'border-indigo-500 bg-gradient-to-br from-indigo-950/80 to-slate-900 shadow-xl shadow-indigo-500/20'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700 hover:bg-slate-900'
              }"
            >
              <div class="flex items-start justify-between">
                <span class="text-3xl p-3 bg-indigo-500/20 rounded-2xl border border-indigo-500/30">🧠</span>
                <span class="text-[10px] font-black px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                  3D MEMORY FLIP
                </span>
              </div>
              <h5 class="text-base font-black text-white mt-3 group-hover:text-indigo-300 transition-colors">
                Padanan Memori Kilat 3D
              </h5>
              <p class="text-xs text-slate-300 mt-1 leading-relaxed">
                Pusing kad 3D untuk memadankan konsep saintifik, formula matematik, dan istilah penting dalam masa terpantas!
              </p>
              <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
                <span>✨ Ganjaran: +100 XP & Lencana</span>
                <span class="text-indigo-400">Pilih Mod →</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Mode Specific Configuration -->
        ${this.activeMode === 'duel' ? this.renderDuelConfig() : this.renderMemoryConfig()}

        <!-- Start Button -->
        <div class="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
          <div class="text-xs text-slate-400">
            <span>🔥 Belajar sambil berseronok tanpa rasa bosan!</span>
          </div>
          <button 
            onclick="window.eduGame.startGame()"
            class="px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-black text-sm rounded-2xl shadow-lg shadow-purple-500/30 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <span>🚀 MULA PERMAINAN</span>
          </button>
        </div>
      </div>
    `;
  }

  selectGameMode(mode) {
    if (window.eduAudio) window.eduAudio.playClick();
    this.activeMode = mode;
    this.renderLobby();
  }

  renderDuelConfig() {
    return `
      <div class="bg-slate-950/70 p-4 rounded-3xl border border-slate-800 space-y-4">
        <h5 class="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
          <span>⚙️</span> Tetapan Pertarungan Minda
        </h5>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-bold text-slate-300 block mb-1">Pilih Lawan:</label>
            <div class="grid grid-cols-2 gap-2">
              <button 
                onclick="window.eduGame.duel.opponentType = 'bot'; window.eduGame.renderLobby();"
                class="py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  this.duel.opponentType === 'bot'
                    ? 'bg-purple-600 text-white border-purple-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                }"
              >
                🤖 Bot Si Pintar (AI)
              </button>
              <button 
                onclick="window.eduGame.duel.opponentType = 'p2'; window.eduGame.renderLobby();"
                class="py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  this.duel.opponentType === 'p2'
                    ? 'bg-purple-600 text-white border-purple-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                }"
              >
                👥 Lawan Rakan (2P)
              </button>
            </div>
          </div>

          ${this.duel.opponentType === 'bot' ? `
            <div>
              <label class="text-xs font-bold text-slate-300 block mb-1">Tahap Kesukaran Bot:</label>
              <div class="grid grid-cols-3 gap-1.5">
                <button 
                  onclick="window.eduGame.duel.botDifficulty = 'easy'; window.eduGame.renderLobby();"
                  class="py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                    this.duel.botDifficulty === 'easy'
                      ? 'bg-emerald-600 text-white border-emerald-400'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }"
                >
                  🟢 Santai
                </button>
                <button 
                  onclick="window.eduGame.duel.botDifficulty = 'medium'; window.eduGame.renderLobby();"
                  class="py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                    this.duel.botDifficulty === 'medium'
                      ? 'bg-amber-600 text-white border-amber-400'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }"
                >
                  🟡 Pintar
                </button>
                <button 
                  onclick="window.eduGame.duel.botDifficulty = 'hard'; window.eduGame.renderLobby();"
                  class="py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                    this.duel.botDifficulty === 'hard'
                      ? 'bg-rose-600 text-white border-rose-400'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }"
                >
                  🔴 Jaguh SPM
                </button>
              </div>
            </div>
          ` : `
            <div class="flex items-center text-xs text-indigo-300 bg-indigo-950/40 p-3 rounded-2xl border border-indigo-500/20">
              <span>👥 Mod 2-Pemain: Pemain 1 dan Pemain 2 berkongsi peranti dan bergilir-gilir menjawab soalan!</span>
            </div>
          `}
        </div>
      </div>
    `;
  }

  renderMemoryConfig() {
    return `
      <div class="bg-slate-950/70 p-4 rounded-3xl border border-slate-800 space-y-3">
        <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
          <span>🧠</span> Cabaran Memori 3D
        </h5>
        <p class="text-xs text-slate-300 leading-relaxed">
          Uji daya ingatan anda! Padankan 4 pasangan konsep dan definisi dalam masa terpantas. Setiap padanan yang tepat akan memberi mata kombo dan kepuasan visual 3D berbalik.
        </p>
      </div>
    `;
  }

  startGame() {
    if (window.eduAudio) window.eduAudio.playClick();
    if (this.activeMode === "duel") {
      this.initDuelGame();
    } else {
      this.initMemoryGame();
    }
  }

  // ==========================================
  // DUEL ENGINE IMPLEMENTATION
  // ==========================================
  initDuelGame() {
    this.duel.playerHp = 100;
    this.duel.opponentHp = 100;
    this.duel.playerScore = 0;
    this.duel.opponentScore = 0;
    this.duel.combo = 0;
    this.duel.maxCombo = 0;
    this.duel.currentQuestionIdx = 0;
    this.duel.isRoundOver = false;

    // Build question bank
    this.duel.questions = this.buildDuelQuestions();
    this.renderDuelStage();
    this.startDuelRound();
  }

  buildDuelQuestions() {
    const list = [];
    
    // 1. If subjectContext provided, grab from chapter quiz
    if (this.subjectContext && this.subjectContext.chapters) {
      for (const ch of this.subjectContext.chapters) {
        if (ch.quiz && ch.quiz.questions) {
          list.push(...ch.quiz.questions);
        }
      }
    }

    // 2. If list empty or topic is 'all', gather questions across SYLLABUS_DATA
    if (list.length < 5) {
      for (const lvl of ['primary', 'secondary']) {
        const subs = SYLLABUS_DATA[lvl]?.subjects || {};
        for (const g in subs) {
          for (const s of subs[g]) {
            if (s.chapters) {
              for (const ch of s.chapters) {
                if (ch.quiz && ch.quiz.questions) {
                  list.push(...ch.quiz.questions);
                }
              }
            }
          }
        }
      }
    }

    // Shuffle questions
    const shuffled = list.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }

  renderDuelStage() {
    const container = document.getElementById("gameModalBody");
    if (!container) return;

    const q = this.duel.questions[this.duel.currentQuestionIdx];
    if (!q) {
      this.endDuelMatch("player");
      return;
    }

    const opponentName = this.duel.opponentType === "bot" 
      ? (this.duel.botDifficulty === 'easy' ? 'Bot Kancil Cilik' : (this.duel.botDifficulty === 'hard' ? 'Bot Genius SPM' : 'Bot Si Pintar'))
      : 'Pemain 2';
    
    const opponentAvatar = this.duel.opponentType === "bot" ? "🤖" : "👩‍🎓";

    container.innerHTML = `
      <div class="p-4 sm:p-6 flex flex-col h-full max-h-[90vh] overflow-y-auto">
        
        <!-- Top Bar: Duel Header & HP Bars -->
        <div class="bg-slate-950 p-4 rounded-3xl border border-slate-800 shadow-xl space-y-3">
          
          <div class="flex items-center justify-between text-xs font-black">
            <span class="text-indigo-400 flex items-center gap-1">
              <span>👨‍🎓</span> ${window.gamification.profile.name} (P1)
            </span>
            <div class="flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              <span>⏳</span>
              <span id="duelTimerDisplay" class="font-mono text-amber-400 font-bold">${this.duel.timerSec}s</span>
            </div>
            <span class="text-rose-400 flex items-center gap-1">
              ${opponentName} <span>${opponentAvatar}</span>
            </span>
          </div>

          <!-- HP Gauges -->
          <div class="grid grid-cols-2 gap-4">
            <!-- Player HP -->
            <div>
              <div class="flex justify-between text-[11px] font-bold text-indigo-300 mb-1">
                <span>HP: ${this.duel.playerHp}%</span>
                <span>${this.duel.combo > 1 ? `🔥 Kombo x${this.duel.combo}` : ''}</span>
              </div>
              <div class="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden border border-indigo-500/30">
                <div id="playerHpBar" class="bg-gradient-to-r from-emerald-500 to-indigo-500 h-3.5 rounded-full transition-all duration-300" style="width: ${this.duel.playerHp}%"></div>
              </div>
            </div>

            <!-- Opponent HP -->
            <div>
              <div class="flex justify-between text-[11px] font-bold text-rose-300 mb-1">
                <span>HP: ${this.duel.opponentHp}%</span>
                <span>Skor: ${this.duel.opponentScore}</span>
              </div>
              <div class="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden border border-rose-500/30">
                <div id="opponentHpBar" class="bg-gradient-to-r from-rose-500 to-amber-500 h-3.5 rounded-full transition-all duration-300" style="width: ${this.duel.opponentHp}%"></div>
              </div>
            </div>
          </div>

        </div>

        <!-- Question Arena -->
        <div class="my-5 flex-1 flex flex-col justify-center">
          
          <div class="text-center mb-2">
            <span class="text-[11px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Pusingan ${this.duel.currentQuestionIdx + 1} / ${this.duel.questions.length}
            </span>
          </div>

          <!-- Question Box -->
          <div class="p-5 sm:p-6 bg-slate-900 rounded-3xl border border-slate-700 text-center shadow-xl relative overflow-hidden">
            <h4 class="text-base sm:text-lg font-black text-white leading-relaxed">
              ${q.question}
            </h4>
          </div>

          <!-- Answer Options Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4" id="duelOptionsGrid">
            ${q.options.map((opt, idx) => `
              <button 
                onclick="window.eduGame.handleDuelAnswer(${idx})"
                class="duel-option-btn p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border-2 border-slate-700 hover:border-indigo-500 text-left text-xs sm:text-sm font-bold text-slate-100 transition-all card-3d-tilt flex items-center gap-3 group"
                id="duelOptionBtn_${idx}"
              >
                <span class="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center font-black text-xs shrink-0 transition-colors">
                  ${['A', 'B', 'C', 'D'][idx]}
                </span>
                <span class="leading-snug">${opt}</span>
              </button>
            `).join("")}
          </div>

        </div>

        <!-- Bottom Feedback Toast -->
        <div id="duelFeedbackToast" class="text-center py-2 min-h-[32px] text-xs font-bold text-slate-400">
          Pilih jawapan yang betul sebelum masa tamat!
        </div>

      </div>
    `;
  }

  startDuelRound() {
    this.stopDuelTimer();
    this.duel.isRoundOver = false;
    this.duel.timerSec = 15;
    this.updateDuelTimerDisplay();

    // Timer countdown
    this.duel.timerInterval = setInterval(() => {
      this.duel.timerSec--;
      this.updateDuelTimerDisplay();

      if (this.duel.timerSec <= 0) {
        this.stopDuelTimer();
        this.handleDuelTimeout();
      }
    }, 1000);

    // Bot AI move simulation
    if (this.duel.opponentType === "bot") {
      this.scheduleBotAction();
    }
  }

  scheduleBotAction() {
    if (this.duel.botTimeout) clearTimeout(this.duel.botTimeout);

    // Speed based on difficulty
    let delay = 6000;
    let accuracy = 0.7;

    if (this.duel.botDifficulty === "easy") {
      delay = 8000 + Math.random() * 4000;
      accuracy = 0.55;
    } else if (this.duel.botDifficulty === "hard") {
      delay = 2500 + Math.random() * 2500;
      accuracy = 0.95;
    } else {
      delay = 4500 + Math.random() * 3000;
      accuracy = 0.8;
    }

    this.duel.botTimeout = setTimeout(() => {
      if (this.duel.isRoundOver) return;

      const isBotCorrect = Math.random() < accuracy;
      if (isBotCorrect) {
        // Bot strikes player!
        this.applyBotAttack();
      }
    }, delay);
  }

  applyBotAttack() {
    if (this.duel.isRoundOver) return;
    this.duel.playerHp = Math.max(0, this.duel.playerHp - 20);
    this.duel.opponentScore += 50;
    this.updateHpBars();

    if (window.eduAudio) window.eduAudio.playWrong();

    const toast = document.getElementById("duelFeedbackToast");
    if (toast) {
      toast.innerHTML = `<span class="text-rose-400 font-bold">💥 Lawan menyerang! HP anda berkurang -20!</span>`;
    }

    if (this.duel.playerHp <= 0) {
      this.duel.isRoundOver = true;
      this.stopDuelTimer();
      setTimeout(() => this.endDuelMatch("opponent"), 800);
    }
  }

  handleDuelAnswer(selectedIndex) {
    if (this.duel.isRoundOver) return;
    this.duel.isRoundOver = true;
    this.stopDuelTimer();

    const q = this.duel.questions[this.duel.currentQuestionIdx];
    const isCorrect = selectedIndex === q.correctIndex;

    const optBtn = document.getElementById(`duelOptionBtn_${selectedIndex}`);
    const correctBtn = document.getElementById(`duelOptionBtn_${q.correctIndex}`);

    if (isCorrect) {
      // Correct!
      if (optBtn) optBtn.className = "p-4 rounded-2xl bg-emerald-600/90 text-white border-2 border-emerald-400 font-bold text-xs sm:text-sm flex items-center gap-3 shadow-lg shadow-emerald-500/30 animate-pulse";
      if (window.eduAudio) window.eduAudio.playCorrect();

      this.duel.combo++;
      if (this.duel.combo > this.duel.maxCombo) this.duel.maxCombo = this.duel.combo;

      const damage = 25 + (this.duel.combo * 5);
      this.duel.opponentHp = Math.max(0, this.duel.opponentHp - damage);
      this.duel.playerScore += 100 + (this.duel.combo * 20);
      this.updateHpBars();

      const toast = document.getElementById("duelFeedbackToast");
      if (toast) {
        toast.innerHTML = `<span class="text-emerald-400 font-black">🎯 TEPAT! Serangan Padu: -${damage} HP kepada lawan! (Kombo x${this.duel.combo})</span>`;
      }
    } else {
      // Incorrect!
      if (optBtn) optBtn.className = "p-4 rounded-2xl bg-rose-600/90 text-white border-2 border-rose-400 font-bold text-xs sm:text-sm flex items-center gap-3 shadow-lg shadow-rose-500/30";
      if (correctBtn) correctBtn.className = "p-4 rounded-2xl bg-emerald-950/80 text-emerald-200 border-2 border-emerald-500 font-bold text-xs sm:text-sm flex items-center gap-3";
      if (window.eduAudio) window.eduAudio.playWrong();

      this.duel.combo = 0;
      this.duel.playerHp = Math.max(0, this.duel.playerHp - 15);
      this.updateHpBars();

      const toast = document.getElementById("duelFeedbackToast");
      if (toast) {
        toast.innerHTML = `<span class="text-rose-400 font-bold">❌ Kurang Tepat! Pertahanan bocor: -15 HP!</span>`;
      }
    }

    // Check game over
    setTimeout(() => {
      if (this.duel.opponentHp <= 0) {
        this.endDuelMatch("player");
      } else if (this.duel.playerHp <= 0) {
        this.endDuelMatch("opponent");
      } else {
        // Next round
        this.duel.currentQuestionIdx++;
        if (this.duel.currentQuestionIdx >= this.duel.questions.length) {
          // Determine winner by HP
          this.endDuelMatch(this.duel.playerHp >= this.duel.opponentHp ? "player" : "opponent");
        } else {
          this.renderDuelStage();
          this.startDuelRound();
        }
      }
    }, 1500);
  }

  handleDuelTimeout() {
    this.duel.isRoundOver = true;
    this.duel.combo = 0;
    this.duel.playerHp = Math.max(0, this.duel.playerHp - 20);
    this.updateHpBars();

    if (window.eduAudio) window.eduAudio.playWrong();

    const toast = document.getElementById("duelFeedbackToast");
    if (toast) {
      toast.innerHTML = `<span class="text-amber-400 font-bold">⏰ Masa Tamat! Serangan balas lawan -20 HP!</span>`;
    }

    setTimeout(() => {
      if (this.duel.playerHp <= 0) {
        this.endDuelMatch("opponent");
      } else {
        this.duel.currentQuestionIdx++;
        if (this.duel.currentQuestionIdx >= this.duel.questions.length) {
          this.endDuelMatch(this.duel.playerHp >= this.duel.opponentHp ? "player" : "opponent");
        } else {
          this.renderDuelStage();
          this.startDuelRound();
        }
      }
    }, 1500);
  }

  updateHpBars() {
    const pHp = document.getElementById("playerHpBar");
    if (pHp) pHp.style.width = `${this.duel.playerHp}%`;

    const oHp = document.getElementById("opponentHpBar");
    if (oHp) oHp.style.width = `${this.duel.opponentHp}%`;
  }

  updateDuelTimerDisplay() {
    const el = document.getElementById("duelTimerDisplay");
    if (el) el.textContent = `${this.duel.timerSec}s`;
  }

  stopDuelTimer() {
    if (this.duel.timerInterval) {
      clearInterval(this.duel.timerInterval);
      this.duel.timerInterval = null;
    }
    if (this.duel.botTimeout) {
      clearTimeout(this.duel.botTimeout);
      this.duel.botTimeout = null;
    }
  }

  endDuelMatch(winner) {
    this.stopDuelTimer();
    const container = document.getElementById("gameModalBody");
    if (!container) return;

    const isPlayerWin = winner === "player";
    const xpReward = isPlayerWin ? 150 : 50;

    if (isPlayerWin) {
      if (window.eduAudio) {
        window.eduAudio.playFanfare();
        setTimeout(() => window.eduAudio.playXpGain(), 600);
      }
      // Award XP & Badge
      window.gamification.addXp(xpReward, "Kemenangan EduDuel 1-Lawan-1");
      window.gamification.unlockBadge("duel_victor");
    } else {
      if (window.eduAudio) window.eduAudio.playWrong();
      window.gamification.addXp(xpReward, "Penyertaan EduDuel");
    }

    container.innerHTML = `
      <div class="p-6 sm:p-8 text-center flex flex-col items-center justify-center h-full space-y-5 animate-fade-in">
        <div class="w-24 h-24 rounded-full ${isPlayerWin ? 'bg-amber-500/20 border-2 border-amber-400' : 'bg-slate-800 border-2 border-slate-700'} flex items-center justify-center text-5xl shadow-2xl">
          ${isPlayerWin ? '🏆' : '🛡️'}
        </div>

        <div>
          <h3 class="text-2xl font-black ${isPlayerWin ? 'text-amber-400' : 'text-slate-200'}">
            ${isPlayerWin ? 'TAHNIAH! ANDA MENANG!' : 'PERCUBAAN YANG BAGUS!'}
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
            ${isPlayerWin ? 'Kecekapan dan ketepatan jawapan anda berjaya menumpaskan lawan di Arena EduDuel!' : 'Teruskan ulangkaji nota silibus dan cuba lagi untuk menewaskan lawan!'}
          </p>
        </div>

        <!-- Match Stats Grid -->
        <div class="grid grid-cols-3 gap-3 w-full max-w-sm">
          <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 block font-bold">Mata Skor</span>
            <span class="text-lg font-black text-white">${this.duel.playerScore}</span>
          </div>
          <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 block font-bold">Kombo Terpanjang</span>
            <span class="text-lg font-black text-orange-400">${this.duel.maxCombo}x 🔥</span>
          </div>
          <div class="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center">
            <span class="text-[10px] text-slate-400 block font-bold">Ganjaran XP</span>
            <span class="text-lg font-black text-amber-400">+${xpReward} XP</span>
          </div>
        </div>

        ${isPlayerWin ? `
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 rounded-2xl text-xs font-black text-amber-300">
            <span>⚔️</span> Lencana Baru Dibuka: Juara Arena Duel!
          </div>
        ` : ''}

        <!-- Actions -->
        <div class="flex items-center gap-3 pt-4">
          <button 
            onclick="window.eduGame.initDuelGame()" 
            class="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-purple-500/30 transition-all flex items-center gap-2"
          >
            <span>🔄</span> Main Semula
          </button>
          <button 
            onclick="window.eduGame.renderLobby()" 
            class="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm rounded-2xl border border-slate-700 transition-all"
          >
            Kembali ke Lobi Game
          </button>
        </div>

      </div>
    `;
  }

  // ==========================================
  // 3D MEMORY MATCH ENGINE IMPLEMENTATION
  // ==========================================
  initMemoryGame() {
    this.memory.cards = this.buildMemoryCards();
    this.memory.flippedCards = [];
    this.memory.matchedPairs = 0;
    this.memory.moves = 0;
    this.memory.timerSec = 0;
    this.memory.isLocked = false;

    this.renderMemoryStage();
    this.startMemoryTimer();
  }

  buildMemoryCards() {
    // 4 concept-definition pairs based on Malaysian curriculum
    let pairs = [
      { id: 1, term: "Fotosintesis 🌱", matchText: "Proses tumbuhan hijau menghasilkan glukosa & oksigen menggunakan klorofil" },
      { id: 2, term: "Daya F = ma ⚡", matchText: "Hukum Gerakan Newton Kedua: Daya = Jisim × Pecutan" },
      { id: 3, term: "Kedaulatan 🇲🇾", matchText: "Kekuasaan tertinggi sesebuah negara yang merdeka dan berdaulat" },
      { id: 4, term: "Kata Nama Am 📚", matchText: "Perkataan untuk menyebut manusia, haiwan, benda dan tempat secara umum" }
    ];

    // If active subject provides notes, pull dynamic pairs
    if (this.subjectContext && this.subjectContext.chapters && this.subjectContext.chapters[0]?.notes) {
      const notes = this.subjectContext.chapters[0].notes;
      if (notes.sections && notes.sections.length > 0) {
        pairs = notes.sections.slice(0, 4).map((sec, idx) => ({
          id: idx + 1,
          term: sec.heading.slice(0, 25),
          matchText: sec.content.slice(0, 60) + '...'
        }));
      }
    }

    // Create 8 card objects
    const cardDeck = [];
    pairs.forEach(p => {
      cardDeck.push({ pairId: p.id, type: "term", text: p.term, isFlipped: false, isMatched: false });
      cardDeck.push({ pairId: p.id, type: "desc", text: p.matchText, isFlipped: false, isMatched: false });
    });

    // Shuffle
    return cardDeck.sort(() => Math.random() - 0.5);
  }

  renderMemoryStage() {
    const container = document.getElementById("gameModalBody");
    if (!container) return;

    container.innerHTML = `
      <div class="p-4 sm:p-6 flex flex-col h-full max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span class="text-[10px] font-black uppercase text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
              3D Speed Match
            </span>
            <h3 class="text-base sm:text-lg font-black text-white mt-1">Padanan Memori Konsep Silibus</h3>
          </div>
          <div class="flex items-center gap-3 text-xs font-bold">
            <span class="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-slate-300">
              Gerakan: <strong id="memoryMovesDisplay" class="text-white">0</strong>
            </span>
            <span class="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-amber-400">
              Masa: <strong id="memoryTimerDisplay" class="font-mono">0s</strong>
            </span>
          </div>
        </div>

        <!-- 3D Card Grid (8 Cards) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-5 flex-1 items-center" id="memoryCardsGrid">
          ${this.memory.cards.map((card, idx) => `
            <div 
              class="flip-card h-32 sm:h-36 ${card.isFlipped ? 'flipped' : ''}" 
              onclick="window.eduGame.handleCardClick(${idx})"
              id="memoryCard_${idx}"
            >
              <div class="flip-card-inner">
                <!-- Card Front (Cover) -->
                <div class="flip-card-front bg-gradient-to-br from-slate-900 to-indigo-950 border-2 border-indigo-500/30 p-3 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:border-indigo-400 transition-colors">
                  <span class="text-3xl mb-1">🃏</span>
                  <span class="text-[11px] font-black text-indigo-300 uppercase tracking-wider">EduPintar</span>
                  <span class="text-[9px] text-slate-400">Klik Pusing</span>
                </div>
                <!-- Card Back (Content) -->
                <div class="flip-card-back ${card.isMatched ? 'bg-gradient-to-br from-emerald-950 to-slate-900 border-2 border-emerald-400' : 'bg-gradient-to-br from-purple-950 to-slate-900 border-2 border-purple-400'} p-3 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
                  <span class="text-xs sm:text-sm font-black text-white leading-tight">
                    ${card.text}
                  </span>
                  ${card.isMatched ? '<span class="text-[9px] text-emerald-400 font-bold mt-1">✓ Sepadan!</span>' : ''}
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Footer -->
        <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <span class="text-slate-400">Padankan semua 4 pasangan untuk memenangi ganjaran XP!</span>
          <button onclick="window.eduGame.renderLobby()" class="text-indigo-400 hover:underline font-bold">
            Kembali ke Lobi
          </button>
        </div>
      </div>
    `;
  }

  handleCardClick(cardIndex) {
    if (this.memory.isLocked) return;
    const card = this.memory.cards[cardIndex];
    if (card.isFlipped || card.isMatched) return;

    // Flip card
    card.isFlipped = true;
    this.memory.flippedCards.push({ card, index: cardIndex });

    if (window.eduAudio) window.eduAudio.playCardFlip();
    this.updateCardUi(cardIndex);

    // If 2 cards flipped, check match
    if (this.memory.flippedCards.length === 2) {
      this.memory.moves++;
      const movesEl = document.getElementById("memoryMovesDisplay");
      if (movesEl) movesEl.textContent = this.memory.moves;

      const [c1, c2] = this.memory.flippedCards;

      if (c1.card.pairId === c2.card.pairId) {
        // MATCH!
        c1.card.isMatched = true;
        c2.card.isMatched = true;
        this.memory.matchedPairs++;
        this.memory.flippedCards = [];

        if (window.eduAudio) window.eduAudio.playCorrect();
        this.updateCardUi(c1.index);
        this.updateCardUi(c2.index);

        if (this.memory.matchedPairs === this.memory.totalPairs) {
          this.endMemoryGame();
        }
      } else {
        // NO MATCH -> Flip back after 900ms
        this.memory.isLocked = true;
        setTimeout(() => {
          c1.card.isFlipped = false;
          c2.card.isFlipped = false;
          this.updateCardUi(c1.index);
          this.updateCardUi(c2.index);
          this.memory.flippedCards = [];
          this.memory.isLocked = false;
        }, 900);
      }
    }
  }

  updateCardUi(index) {
    const el = document.getElementById(`memoryCard_${index}`);
    if (!el) return;
    const card = this.memory.cards[index];
    if (card.isFlipped) {
      el.classList.add("flipped");
    } else {
      el.classList.remove("flipped");
    }
  }

  startMemoryTimer() {
    this.stopMemoryTimer();
    this.memory.timerInterval = setInterval(() => {
      this.memory.timerSec++;
      const el = document.getElementById("memoryTimerDisplay");
      if (el) el.textContent = `${this.memory.timerSec}s`;
    }, 1000);
  }

  stopMemoryTimer() {
    if (this.memory.timerInterval) {
      clearInterval(this.memory.timerInterval);
      this.memory.timerInterval = null;
    }
  }

  endMemoryGame() {
    this.stopMemoryTimer();
    if (window.eduAudio) {
      window.eduAudio.playFanfare();
      setTimeout(() => window.eduAudio.playXpGain(), 600);
    }

    // Award XP & Badge
    window.gamification.addXp(100, "Menyelesaikan Padanan Memori 3D");
    window.gamification.unlockBadge("memory_master");

    const container = document.getElementById("gameModalBody");
    if (!container) return;

    container.innerHTML = `
      <div class="p-6 sm:p-8 text-center flex flex-col items-center justify-center h-full space-y-5 animate-fade-in">
        <div class="w-24 h-24 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center text-5xl shadow-2xl">
          🧠
        </div>

        <div>
          <h3 class="text-2xl font-black text-purple-300">
            DAYA MEMORI LUAR BIASA!
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
            Anda berjaya memadankan semua konsep silibus dalam masa <strong>${this.memory.timerSec} saat</strong> dengan <strong>${this.memory.moves} gerakan</strong>!
          </p>
        </div>

        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/40 rounded-2xl text-xs font-black text-purple-300">
          <span>🏆</span> Ganjaran: +100 XP & Lencana "Raja Memori 3D"!
        </div>

        <div class="flex items-center gap-3 pt-3">
          <button 
            onclick="window.eduGame.initMemoryGame()" 
            class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all flex items-center gap-2"
          >
            <span>🔄</span> Main Lagi
          </button>
          <button 
            onclick="window.eduGame.renderLobby()" 
            class="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs sm:text-sm rounded-2xl border border-slate-700 transition-all"
          >
            Lobi Permainan
          </button>
        </div>
      </div>
    `;
  }
}

// Instantiate
new EduGameEngine();
