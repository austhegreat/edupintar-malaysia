/**
 * EduPintar Malaysia - Interactive Quiz Engine
 * Menjalankan sesi kuiz interaktif dengan pemasa, format soalan objektif UASA/SPM,
 * pengiraan markah serta ulasan jawapan terperinci.
 */

class QuizEngine {
  constructor() {
    this.currentQuiz = null;
    this.currentQuestionIdx = 0;
    this.userAnswers = [];
    this.timerInterval = null;
    this.secondsRemaining = 0;
    this.isSubmitted = false;
    this.chapterContext = null;
  }

  startQuiz(quizData, chapterContext = null) {
    this.currentQuiz = quizData;
    this.chapterContext = chapterContext;
    this.currentQuestionIdx = 0;
    this.userAnswers = new Array(quizData.questions.length).fill(null);
    this.isSubmitted = false;
    this.secondsRemaining = (quizData.timeLimitMinutes || 10) * 60;

    this.renderQuizContainer();
    this.startTimer();
  }

  startTimer() {
    this.stopTimer();
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.secondsRemaining--;
      this.updateTimerDisplay();

      if (this.secondsRemaining <= 0) {
        this.stopTimer();
        alert("Masa kuiz telah tamat! Jawapan anda akan dihantar secara automatik.");
        this.submitQuiz();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById("quizTimerDisplay");
    if (!timerEl) return;
    const mins = Math.floor(this.secondsRemaining / 60);
    const secs = this.secondsRemaining % 60;
    timerEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    if (this.secondsRemaining < 60) {
      timerEl.className = "text-rose-600 font-mono font-bold animate-pulse";
    } else {
      timerEl.className = "text-slate-700 font-mono font-semibold";
    }
  }

  renderQuizContainer() {
    const container = document.getElementById("quizModalBody");
    if (!container) return;

    const q = this.currentQuiz.questions[this.currentQuestionIdx];
    const totalQ = this.currentQuiz.questions.length;
    const answeredCount = this.userAnswers.filter(a => a !== null).length;
    const progressPercent = Math.round(((this.currentQuestionIdx + 1) / totalQ) * 100);

    const isCurrentAnswered = this.userAnswers[this.currentQuestionIdx] !== null;

    container.innerHTML = `
      <div class="p-4 sm:p-6 flex flex-col h-full max-h-[85vh] overflow-y-auto">
        <!-- Top Quiz Header -->
        <div class="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              Soalan ${this.currentQuestionIdx + 1} daripada ${totalQ}
            </span>
            <h3 class="text-lg font-bold text-slate-800 mt-1">${this.currentQuiz.title}</h3>
          </div>
          <div class="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
            <span class="text-base">⏳</span>
            <span id="quizTimerDisplay" class="text-slate-700 font-mono font-semibold">--:--</span>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="w-full bg-slate-100 rounded-full h-2 my-4 overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
        </div>

        <!-- Question Body -->
        <div class="my-3">
          <div class="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
            ${q.question}
          </div>
        </div>

        <!-- Options List -->
        <div class="space-y-3 my-4">
          ${q.options.map((opt, idx) => {
            const isSelected = this.userAnswers[this.currentQuestionIdx] === idx;
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            return `
              <button 
                onclick="window.quizEngine.selectAnswer(${idx})"
                class="w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 ${
                  isSelected 
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-sm' 
                    : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                }"
              >
                <span class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                }">${letter}</span>
                <span class="text-sm sm:text-base font-medium text-slate-800 pt-1 leading-snug">${opt}</span>
              </button>
            `;
          }).join("")}
        </div>

        <!-- Bottom Controls -->
        <div class="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button 
            onclick="window.quizEngine.prevQuestion()" 
            ${this.currentQuestionIdx === 0 ? 'disabled' : ''}
            class="px-4 py-2.5 rounded-xl font-semibold text-sm border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Sebelumnya
          </button>

          <div class="flex items-center gap-2">
            ${this.currentQuestionIdx < totalQ - 1 ? `
              <button 
                onclick="window.quizEngine.nextQuestion()" 
                class="px-5 py-2.5 rounded-xl font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all"
              >
                Seterusnya →
              </button>
            ` : `
              <button 
                onclick="window.quizEngine.submitQuiz()" 
                class="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-95 shadow-md shadow-emerald-200 transition-all"
              >
                Hantar Jawapan ✅
              </button>
            `}
          </div>
        </div>
      </div>
    `;
    this.updateTimerDisplay();
  }

  selectAnswer(optionIdx) {
    if (window.eduAudio) window.eduAudio.playClick();
    this.userAnswers[this.currentQuestionIdx] = optionIdx;
    this.renderQuizContainer();
  }

  prevQuestion() {
    if (window.eduAudio) window.eduAudio.playClick();
    if (this.currentQuestionIdx > 0) {
      this.currentQuestionIdx--;
      this.renderQuizContainer();
    }
  }

  nextQuestion() {
    if (window.eduAudio) window.eduAudio.playClick();
    if (this.currentQuestionIdx < this.currentQuiz.questions.length - 1) {
      this.currentQuestionIdx++;
      this.renderQuizContainer();
    }
  }

  submitQuiz() {
    this.stopTimer();
    this.isSubmitted = true;

    let correctCount = 0;
    this.currentQuiz.questions.forEach((q, idx) => {
      if (this.userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const totalQuestions = this.currentQuiz.questions.length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    const isPerfect = (correctCount === totalQuestions);

    const isSpM = this.currentQuiz.id.includes("f4") || this.currentQuiz.id.includes("f5");
    const isPrimaryScience = this.currentQuiz.id.includes("sn-c2");

    if (window.eduAudio) {
      if (scorePercentage >= 60) {
        window.eduAudio.playFanfare();
      } else {
        window.eduAudio.playXpGain();
      }
    }

    // Award XP and achievements in Gamification Engine
    window.gamification.recordQuizResult(
      this.currentQuiz.id,
      scorePercentage,
      this.currentQuiz.xpPoints || 100,
      isPerfect,
      isSpM,
      isPrimaryScience
    );

    this.renderResultsScreen(correctCount, totalQuestions, scorePercentage);
  }

  renderResultsScreen(correct, total, scorePercent) {
    const container = document.getElementById("quizModalBody");
    if (!container) return;

    let gradeTitle = "Lulus Cemerlang! 🌟";
    let gradeDesc = "Tahniah! Anda menunjukkan kefahaman yang sangat tinggi dalam sukatan pelajaran ini.";
    let ringColor = "text-emerald-500 border-emerald-500";

    if (scorePercent >= 80) {
      gradeTitle = "Pencapaian Cemerlang (Gred A)! 🏆";
      ringColor = "text-emerald-600 border-emerald-500";
    } else if (scorePercent >= 60) {
      gradeTitle = "Tahniah, Lulus Baik! 👍";
      gradeDesc = "Usaha yang bagus! Ulang kaji sedikit lagi untuk mencapai gred cemerlang.";
      ringColor = "text-blue-600 border-blue-500";
    } else {
      gradeTitle = "Perlu Tingkatkan Ulang Kaji 📚";
      gradeDesc = "Jangan putus asa! Baca kembali Nota Padat dan cuba kuiz ini sekali lagi.";
      ringColor = "text-amber-500 border-amber-500";
    }

    container.innerHTML = `
      <div class="p-6 max-h-[85vh] overflow-y-auto">
        <!-- Results Card Header -->
        <div class="text-center py-4">
          <div class="w-24 h-24 mx-auto rounded-full border-4 flex flex-col items-center justify-center mb-3 shadow-inner ${ringColor}">
            <span class="text-3xl font-black">${scorePercent}%</span>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500">${correct}/${total} Betul</span>
          </div>
          <h3 class="text-2xl font-black text-slate-900">${gradeTitle}</h3>
          <p class="text-sm text-slate-600 max-w-md mx-auto mt-1">${gradeDesc}</p>
          <div class="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-amber-50 border border-amber-300 rounded-full text-amber-800 text-xs font-bold">
            <span>✨ +${this.currentQuiz.xpPoints || 100} XP Ditambah ke Profil Anda</span>
          </div>
        </div>

        <!-- Detailed Question Review -->
        <div class="mt-6 border-t border-slate-200 pt-6">
          <h4 class="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span>📋</span> Semakan Jawapan & Huraian:
          </h4>
          <div class="space-y-4">
            ${this.currentQuiz.questions.map((q, idx) => {
              const userAns = this.userAnswers[idx];
              const isCorrect = userAns === q.correctIndex;
              return `
                <div class="p-4 rounded-2xl border ${isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'}">
                  <div class="flex items-start gap-2">
                    <span class="text-lg">${isCorrect ? '✅' : '❌'}</span>
                    <div class="flex-1">
                      <p class="font-bold text-slate-800 text-sm">Soalan ${idx + 1}: ${q.question}</p>
                      
                      <div class="mt-2 text-xs space-y-1">
                        <p class="${isCorrect ? 'text-emerald-700 font-semibold' : 'text-rose-700'}">
                          Jawapan Anda: <strong>${userAns !== null ? q.options[userAns] : 'Tiada jawapan'}</strong>
                        </p>
                        ${!isCorrect ? `
                          <p class="text-emerald-700 font-semibold">
                            Jawapan Tepat: <strong>${q.options[q.correctIndex]}</strong>
                          </p>
                        ` : ''}
                      </div>

                      <!-- Explanation -->
                      <div class="mt-3 p-3 bg-white/80 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                        <strong class="text-indigo-600">💡 Penjelasan / Tip Peperiksaan:</strong> ${q.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Modal Footer Actions -->
        <div class="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          <button 
            onclick="window.quizEngine.startQuiz(window.quizEngine.currentQuiz, window.quizEngine.chapterContext)"
            class="flex-1 py-3 px-4 rounded-xl font-bold text-sm border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all text-center"
          >
            🔄 Cuba Semula Kuiz
          </button>
          <button 
            onclick="window.closeQuizModal()"
            class="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 transition-all text-center"
          >
            Kembali ke Modul Bab 📚
          </button>
        </div>
      </div>
    `;
  }
}

window.quizEngine = new QuizEngine();
