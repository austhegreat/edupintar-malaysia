/**
 * EduPintar Malaysia - AI Lesson Engine & Whiteboard Scene Renderer
 * Original animated whiteboard classroom with Cikgu Aus, scene-by-scene storyboard,
 * synchronized speech narration, subtitles, and interactive learning checkpoints.
 */

class EduLessonEngine {
  constructor() {
    this.currentChapter = null;
    this.currentSegmentIdx = 0;
    this.isPlaying = false;
    this.subtitlesEnabled = true;
    this.speechEnabled = true;
    this.playbackSpeed = 1.0;
    this.segmentTimer = null;
    this.segments = [];
    this.checkpointCompleted = false;
  }

  /**
   * Mount and start an original lesson for the active chapter
   */
  mountLesson(chapter, containerId = "lessonPlayerContainer") {
    this.currentChapter = chapter;
    this.currentSegmentIdx = 0;
    this.isPlaying = false;
    this.checkpointCompleted = false;
    this.buildSegments(chapter);

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = this.renderClassroomHtml();
    
    // Render initial Cikgu Aus pose
    if (window.cikguAus) {
      window.cikguAus.render("cikguAusStage", "waving");
    }

    // Mount interactive math lab right below the whiteboard
    if (window.mathLab) {
      setTimeout(() => {
        window.mathLab.init("lessonMathLabContainer");
      }, 50);
    }

    this.renderCurrentSegment();
  }

  buildSegments(chapter) {
    const isEn = typeof window !== "undefined" && window.app && window.app.currentLanguage === "en";
    const title = isEn && chapter.titleEn ? chapter.titleEn : chapter.title;
    const num = isEn && chapter.numberEn ? chapter.numberEn : chapter.number;

    // Build 6 structured storyboard segments
    this.segments = [
      {
        id: "intro",
        badge: isEn ? "Segment 1: Introduction" : "Segmen 1: Pengenalan",
        title: isEn ? `Welcome to ${title}` : `Selamat Datang ke ${title}`,
        pose: "waving",
        narration: isEn 
          ? `Hello, smart students! I am Cikgu Aus. Today we will explore ${title} from zero, connecting every formula to real life!`
          : `Hai murid pintar! Saya Cikgu Aus. Hari ini kita akan pelajari ${title} dari asas A sampai Z menggunakan contoh kehidupan sebenar!`,
        whiteboardContent: `
          <div class="space-y-4 animate-fade-in text-slate-800">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-black">
              <span>🇲🇾</span> Silibus KPM SPM • ${num}
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              ${title}
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${chapter.summary || 'Kuasai konsep teras matematik secara visual bersama Cikgu Aus.'}
            </p>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3">
              <span class="text-2xl">🎯</span>
              <div class="text-xs text-amber-900">
                <strong>Objektif Pembelajaran:</strong> Memahami definisi dari sifar, melakar graf secara interaktif, dan menjawab soalan format SPM sebenar.
              </div>
            </div>
          </div>
        `
      },
      {
        id: "concept",
        badge: isEn ? "Segment 2: Core Concept" : "Segmen 2: Konsep & Formula",
        title: isEn ? "Formula Anatomy & Intuition" : "Pembedahan Formula & Maksud",
        pose: "pointing",
        narration: isEn
          ? "Look closely at the whiteboard. A linear equation is y equals m x plus c. m represents the slope steepness, and c is where the line hits the y-axis!"
          : "Lihat formula di papan putih ini. Persamaan garis lurus ialah y = mx + c. Nilai m ialah kecerunan cerun, manakala c ialah titik di mana garis memotong paksi-y!",
        whiteboardContent: `
          <div class="space-y-3 animate-fade-in text-slate-800">
            <h3 class="text-base sm:text-lg font-black text-indigo-700 flex items-center gap-2">
              <span>📐</span> Rumus Asas Garis Lurus:
            </h3>
            <div class="p-4 bg-indigo-900 text-white rounded-2xl text-center shadow-lg my-2">
              <span class="text-2xl sm:text-3xl font-black font-mono tracking-wider text-amber-300">y = mx + c</span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="p-2.5 bg-slate-100 rounded-xl border border-slate-200">
                <strong class="text-indigo-600 block mb-0.5">m = Kecerunan</strong>
                <p class="text-[11px] text-slate-600">Kadar kenaikan menegak berbanding jarak mendatar (m = Δy / Δx).</p>
              </div>
              <div class="p-2.5 bg-slate-100 rounded-xl border border-slate-200">
                <strong class="text-amber-600 block mb-0.5">c = Pintasan-y</strong>
                <p class="text-[11px] text-slate-600">Nilai y apabila x = 0 (koordinat (0, c) di paksi tegak).</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "visual_demo",
        badge: isEn ? "Segment 3: Visual Demo" : "Segmen 3: Demonstrasi Visual",
        title: isEn ? "Live Graphical Demonstration" : "Demonstrasi Visual & Graf",
        pose: "pointing",
        narration: isEn
          ? "Now observe how changing m tilts the line, and changing c shifts it up or down. If m is positive, the line climbs upward!"
          : "Sekarang perhatikan bagaimana nilai m mencondongkan garisan, dan nilai c menggerakkannya ke atas atau ke bawah. Jika m positif, graf menaik ke kanan!",
        whiteboardContent: `
          <div class="space-y-3 animate-fade-in text-slate-800">
            <h3 class="text-base font-black text-slate-900">Perhatikan Hubungan Antara m dan c:</h3>
            <div class="space-y-2 text-xs">
              <div class="flex items-center gap-2 p-2 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900">
                <span>📈</span>
                <span><strong>m > 0 (Positif):</strong> Garis mencerun ke atas. Setiap langkah ke kanan, graf naik ke atas.</span>
              </div>
              <div class="flex items-center gap-2 p-2 bg-rose-50 rounded-xl border border-rose-200 text-rose-900">
                <span>📉</span>
                <span><strong>m < 0 (Negatif):</strong> Garis mencerun ke bawah dari kiri ke kanan.</span>
              </div>
              <div class="flex items-center gap-2 p-2 bg-sky-50 rounded-xl border border-sky-200 text-sky-900">
                <span>📍</span>
                <span><strong>c Berubah:</strong> Garisan beranjak secara menegak tanpa mengubah kecerunan cerun.</span>
              </div>
            </div>
            <p class="text-[11px] text-indigo-600 font-semibold mt-2">
              👇 Gunakan Makmal Interaktif di bahagian bawah untuk menggerakkan slider sendiri!
            </p>
          </div>
        `
      },
      {
        id: "worked_example",
        badge: isEn ? "Segment 4: Worked Example" : "Segmen 4: Contoh Soalan & Jalan Kerja",
        title: isEn ? "Step-by-Step Worked Solution" : "Penyelesaian Soalan Langkah Demi Langkah",
        pose: "writing",
        narration: isEn
          ? "Let's solve a real question together. Diberi y = 2x + 3. What is the value of y when x equals 1? We substitute x = 1 into the equation, yielding y = 5!"
          : "Mari kita selesaikan soalan bersama. Diberi y = 2x + 3. Apakah nilai y apabila x = 1? Gantikan x = 1 ke dalam persamaan, maka y = 2(1) + 3 = 5!",
        whiteboardContent: `
          <div class="space-y-3 animate-fade-in text-slate-800">
            <span class="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">Contoh Format SPM</span>
            <h4 class="text-xs sm:text-sm font-bold text-slate-900">
              Diberi fungsi linear <strong>y = 2x + 3</strong>. Cari nilai y apabila x = 1.
            </h4>
            <div class="bg-slate-900 text-white p-3.5 rounded-2xl font-mono text-xs space-y-1.5 shadow-md">
              <div class="text-slate-400">// Langkah 1: Tulis persamaan asal</div>
              <div class="text-amber-300">y = 2x + 3</div>
              <div class="text-slate-400">// Langkah 2: Gantikan x = 1</div>
              <div>y = 2(<strong>1</strong>) + 3</div>
              <div class="text-slate-400">// Langkah 3: Selesaikan pengiraan</div>
              <div class="text-emerald-400 font-black text-sm">y = 2 + 3 = 5 ✅</div>
              <div class="text-slate-300 text-[11px]">Titik pada satah koordinat: (1, 5)</div>
            </div>
          </div>
        `
      },
      {
        id: "checkpoint",
        badge: isEn ? "Segment 5: Interactive Checkpoint" : "Segmen 5: Aktiviti Interaktif",
        title: isEn ? "Interactive Student Checkpoint" : "Aktiviti Menguji Kefahaman Anda",
        pose: "thinking",
        narration: isEn
          ? "Checkpoint time! Answer this quick question to test your understanding. I will react to your answer!"
          : "Masa untuk aktiviti interaktif! Jawab soalan ini untuk menguji kefahaman anda sebelum kita meneruskan kuliah.",
        whiteboardContent: this.renderCheckpointQuestion()
      },
      {
        id: "summary",
        badge: isEn ? "Segment 6: Lesson Summary" : "Segmen 6: Rumusan & Pesanan",
        title: isEn ? "Summary & Key Takeaways" : "Rumusan Penting & Petua Cikgu Aus",
        pose: "celebrating",
        narration: isEn
          ? "Outstanding work! You have mastered the fundamentals of linear graphs. Keep practicing with the interactive lab below to score top grades!"
          : "Syabas murid pintar! Anda telah menguasai asas garis lurus dan kuadratik dengan cemerlang. Teruskan latihan bersama Cikgu Aus untuk skor A+!",
        whiteboardContent: `
          <div class="space-y-3 animate-fade-in text-slate-800">
            <h3 class="text-base sm:text-lg font-black text-emerald-700 flex items-center gap-2">
              <span>🌟</span> Rumusan Emas Cikgu Aus:
            </h3>
            <ul class="space-y-2 text-xs text-slate-700">
              <li class="flex items-start gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-emerald-600 font-bold">1.</span>
                <span><strong>y = mx + c:</strong> m ialah kecerunan, c ialah pintasan pada paksi-y.</span>
              </li>
              <li class="flex items-start gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-emerald-600 font-bold">2.</span>
                <span>Untuk mencari nilai y, sentiasa gantikan nilai x yang diberi ke dalam persamaan.</span>
              </li>
              <li class="flex items-start gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
                <span class="text-emerald-600 font-bold">3.</span>
                <span>Jangan lupa cuba slider dalam <strong>Makmal Matematik Interaktif</strong> di bawah!</span>
              </li>
            </ul>
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-xs text-emerald-900 font-bold">
              🎉 Kuliah selesai! +100 XP telah ditambah ke profil anda.
            </div>
          </div>
        `
      }
    ];
  }

  renderCheckpointQuestion() {
    return `
      <div class="space-y-3 animate-fade-in text-slate-800" id="checkpointQuestionBox">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">Soalan Uji Minda Cikgu Aus</span>
          <span class="text-[10px] font-bold text-amber-600">+50 XP</span>
        </div>
        <h4 class="text-xs sm:text-sm font-black text-slate-900 leading-snug">
          Diberi persamaan garis lurus <strong>y = 3x - 2</strong>. Apakah nilai y apabila x = 2?
        </h4>
        <div class="space-y-2 my-2" id="checkpointOptionsList">
          <button onclick="window.eduLesson.answerCheckpoint(4, true)" class="w-full text-left p-3 rounded-xl border-2 border-slate-200 hover:border-indigo-500 bg-white hover:bg-indigo-50/50 transition-all flex items-center justify-between text-xs font-bold text-slate-800">
            <span>A. y = 4  (kerana 3(2) - 2 = 6 - 2 = 4)</span>
            <span class="text-slate-400">Pilih →</span>
          </button>
          <button onclick="window.eduLesson.answerCheckpoint(5, false)" class="w-full text-left p-3 rounded-xl border-2 border-slate-200 hover:border-indigo-500 bg-white hover:bg-indigo-50/50 transition-all flex items-center justify-between text-xs font-bold text-slate-800">
            <span>B. y = 5</span>
            <span class="text-slate-400">Pilih →</span>
          </button>
          <button onclick="window.eduLesson.answerCheckpoint(6, false)" class="w-full text-left p-3 rounded-xl border-2 border-slate-200 hover:border-indigo-500 bg-white hover:bg-indigo-50/50 transition-all flex items-center justify-between text-xs font-bold text-slate-800">
            <span>C. y = 6</span>
            <span class="text-slate-400">Pilih →</span>
          </button>
        </div>
        <div id="checkpointFeedback" class="hidden p-3 rounded-xl text-xs font-bold"></div>
      </div>
    `;
  }

  answerCheckpoint(ans, isCorrect) {
    const feedbackEl = document.getElementById("checkpointFeedback");
    const optList = document.getElementById("checkpointOptionsList");
    if (!feedbackEl) return;

    feedbackEl.classList.remove("hidden");
    if (isCorrect) {
      if (window.cikguAus) window.cikguAus.setPose("celebrating");
      if (window.eduAudio) window.eduAudio.playFanfare();
      feedbackEl.className = "p-3 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300";
      feedbackEl.innerHTML = `🎉 TEPAT SEKALI! y = 3(2) - 2 = 6 - 2 = 4. Anda faham konsep ini dengan baik! (+50 XP)`;
      this.checkpointCompleted = true;
      if (window.gamification) {
        window.gamification.recordQuizResult("checkpoint-seg5", 100, 50, true);
      }
    } else {
      if (window.cikguAus) window.cikguAus.setPose("thinking");
      feedbackEl.className = "p-3 rounded-xl text-xs font-bold bg-rose-100 text-rose-900 border border-rose-300";
      feedbackEl.innerHTML = `Kurang tepat. Cuba kira semula: Gantikan x = 2: y = 3(2) - 2 = 6 - 2 = <strong>4</strong>. Pilih jawapan A!`;
    }
  }

  renderClassroomHtml() {
    return `
      <div class="space-y-6">
        <!-- Interactive Animated Classroom Box -->
        <div class="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-4 sm:p-6 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden">
          
          <!-- Top Classroom Status Header -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <span class="bg-indigo-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                <span>🎓</span> KULIAH ASLI CIKGU AUS
              </span>
              <span id="lessonSegmentBadge" class="text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                Segmen 1/6
              </span>
            </div>

            <!-- Header Controls: Voice Toggle, Speed & Subtitles -->
            <div class="flex items-center gap-2">
              <!-- Speech Voice Toggle -->
              <button 
                onclick="window.eduLesson.toggleSpeech()" 
                id="btnToggleVoice"
                class="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 border border-slate-700 transition-all flex items-center gap-1"
                title="Pasang / Matikan Suara Cikgu Aus"
              >
                <span>🔊</span> <span id="labelVoiceStatus">Suara: Hidup</span>
              </button>

              <!-- Speed Selector -->
              <select 
                onchange="window.eduLesson.setSpeed(this.value)"
                class="bg-slate-800 border border-slate-700 text-white rounded-xl px-2 py-1 text-xs font-bold focus:outline-none"
              >
                <option value="0.75">0.75x</option>
                <option value="1.0" selected>1.0x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
              </select>

              <!-- CC Subtitles Toggle -->
              <button 
                onclick="window.eduLesson.toggleSubtitles()" 
                id="btnToggleCc"
                class="px-2.5 py-1 rounded-xl bg-indigo-600 text-xs font-bold text-white transition-all shadow-sm"
                title="Buka / Tutup Sarikata"
              >
                CC
              </button>
            </div>
          </div>

          <!-- Classroom Stage (Cikgu Aus + Whiteboard) -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-5 my-5 items-center">
            
            <!-- Left: Cikgu Aus Animated Character Stage (4 cols) -->
            <div class="md:col-span-4 flex flex-col items-center justify-center p-3">
              <div class="w-48 sm:w-56 h-64 sm:h-72 relative" id="cikguAusStage">
                <!-- Cikgu Aus character SVG renders here -->
              </div>
              <div class="mt-2 text-center">
                <span class="text-xs font-black text-white block">Cikgu Aus</span>
                <span class="text-[10px] text-indigo-300 font-medium">Guru Maya Pintar KPM</span>
              </div>
            </div>

            <!-- Right: Whiteboard Surface (8 cols) -->
            <div class="md:col-span-8">
              <div class="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border-4 border-slate-800 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between relative overflow-hidden" id="whiteboardBoard">
                <!-- Chalkboard/Whiteboard clips and pins -->
                <div class="absolute top-2 left-3 flex gap-1">
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                
                <!-- Dynamic Content Area -->
                <div id="whiteboardDynamicArea" class="flex-1">
                  <!-- Whiteboard step content renders here -->
                </div>

                <!-- Whiteboard bottom tray decoration -->
                <div class="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                  <span>🖋️ Papan Putih Interaktif Pelajar</span>
                  <span class="font-mono text-slate-500">EduPintar v2.0 Doodle Engine</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Subtitle Box -->
          <div id="lessonSubtitleBox" class="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-3 sm:p-4 text-center text-xs sm:text-sm text-indigo-200 font-medium leading-relaxed shadow-inner">
            <span id="lessonSubtitleText">Memuatkan kuliah Cikgu Aus...</span>
          </div>

          <!-- Segment Navigation Scrubber (6 Segments) -->
          <div class="mt-4 pt-4 border-t border-slate-800">
            <div class="grid grid-cols-6 gap-1.5 sm:gap-2 text-center" id="lessonSegmentTimeline">
              ${[1, 2, 3, 4, 5, 6].map((num, i) => `
                <button 
                  onclick="window.eduLesson.jumpToSegment(${i})"
                  id="timelinePill_${i}"
                  class="py-2 px-1 sm:px-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all truncate border ${
                    i === 0 
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-md' 
                      : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'
                  }"
                >
                  <span class="hidden sm:inline">Segmen </span>${num}
                </button>
              `).join("")}
            </div>

            <!-- Player Action Bar (Play, Next, Prev) -->
            <div class="mt-4 flex items-center justify-between gap-3">
              <button 
                onclick="window.eduLesson.prevSegment()" 
                id="btnPrevSeg"
                class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all disabled:opacity-40"
              >
                ← Sebelumnya
              </button>

              <div class="flex items-center gap-2">
                <button 
                  onclick="window.eduLesson.togglePlayPause()" 
                  id="btnPlayPause"
                  class="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-xs sm:text-sm shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2"
                >
                  <span id="playPauseIcon">▶</span>
                  <span id="playPauseLabel">Mula Kuliah</span>
                </button>
              </div>

              <button 
                onclick="window.eduLesson.nextSegment()" 
                id="btnNextSeg"
                class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
              >
                Seterusnya →
              </button>
            </div>
          </div>

        </div>

        <!-- Integrated Interactive Mathematics Lab -->
        <div id="lessonMathLabContainer" class="animate-fade-in">
          <!-- Live Interactive Math Lab renders here -->
        </div>
      </div>
    `;
  }

  renderCurrentSegment() {
    const seg = this.segments[this.currentSegmentIdx];
    if (!seg) return;

    // 1. Update Whiteboard
    const wbArea = document.getElementById("whiteboardDynamicArea");
    if (wbArea) wbArea.innerHTML = seg.whiteboardContent;

    // 2. Update Segment Badge
    const badge = document.getElementById("lessonSegmentBadge");
    if (badge) badge.textContent = `${seg.badge}: ${seg.title}`;

    // 3. Update Cikgu Aus Pose
    if (window.cikguAus) {
      window.cikguAus.setPose(seg.pose);
    }

    // 4. Update Subtitles
    const subText = document.getElementById("lessonSubtitleText");
    if (subText) subText.textContent = seg.narration;

    // 5. Update Timeline Pills
    this.segments.forEach((s, idx) => {
      const pill = document.getElementById(`timelinePill_${idx}`);
      if (pill) {
        if (idx === this.currentSegmentIdx) {
          pill.className = "py-2 px-1 sm:px-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all truncate border bg-indigo-600 text-white border-indigo-400 shadow-md ring-2 ring-indigo-400/30";
        } else {
          pill.className = "py-2 px-1 sm:px-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all truncate border bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white";
        }
      }
    });

    // 6. Speak narration if enabled and playing
    if (this.speechEnabled && this.isPlaying && window.cikguAus) {
      const lang = window.app && window.app.currentLanguage === "en" ? "en" : "bm";
      window.cikguAus.speak(seg.narration, lang, () => {
        // Auto-advance to next segment after narration finishes if not at checkpoint
        if (this.isPlaying && this.currentSegmentIdx !== 4) { // Don't auto-advance at checkpoint!
          setTimeout(() => {
            if (this.isPlaying) this.nextSegment();
          }, 1500);
        }
      });
    }
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    const icon = document.getElementById("playPauseIcon");
    const label = document.getElementById("playPauseLabel");

    if (this.isPlaying) {
      if (icon) icon.textContent = "⏸";
      if (label) label.textContent = "Jeda";
      this.renderCurrentSegment();
    } else {
      if (icon) icon.textContent = "▶";
      if (label) label.textContent = "Sambung";
      if (window.cikguAus) window.cikguAus.stopSpeaking();
    }
    if (window.eduAudio) window.eduAudio.playClick();
  }

  nextSegment() {
    if (this.currentSegmentIdx < this.segments.length - 1) {
      this.currentSegmentIdx++;
      this.renderCurrentSegment();
      if (window.eduAudio) window.eduAudio.playClick();
    } else {
      this.isPlaying = false;
      const icon = document.getElementById("playPauseIcon");
      const label = document.getElementById("playPauseLabel");
      if (icon) icon.textContent = "🔄";
      if (label) label.textContent = "Ulang Semula";
    }
  }

  prevSegment() {
    if (this.currentSegmentIdx > 0) {
      this.currentSegmentIdx--;
      this.renderCurrentSegment();
      if (window.eduAudio) window.eduAudio.playClick();
    }
  }

  jumpToSegment(idx) {
    if (idx >= 0 && idx < this.segments.length) {
      this.currentSegmentIdx = idx;
      this.renderCurrentSegment();
      if (window.eduAudio) window.eduAudio.playClick();
    }
  }

  toggleSpeech() {
    this.speechEnabled = !this.speechEnabled;
    const label = document.getElementById("labelVoiceStatus");
    if (label) {
      label.textContent = this.speechEnabled ? "Suara: Hidup" : "Suara: Senyap";
    }
    if (!this.speechEnabled && window.cikguAus) {
      window.cikguAus.stopSpeaking();
    }
  }

  toggleSubtitles() {
    this.subtitlesEnabled = !this.subtitlesEnabled;
    const box = document.getElementById("lessonSubtitleBox");
    const btn = document.getElementById("btnToggleCc");
    if (box) {
      box.classList.toggle("hidden", !this.subtitlesEnabled);
    }
    if (btn) {
      btn.classList.toggle("bg-indigo-600", this.subtitlesEnabled);
      btn.classList.toggle("bg-slate-700", !this.subtitlesEnabled);
    }
  }

  setSpeed(speedVal) {
    this.playbackSpeed = parseFloat(speedVal) || 1.0;
  }
}

if (typeof window !== "undefined") {
  window.eduLesson = new EduLessonEngine();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EduLessonEngine };
}
