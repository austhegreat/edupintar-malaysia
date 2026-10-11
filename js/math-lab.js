/**
 * EduPintar Malaysia - Interactive Mathematics Lab & Live Graphing Engine
 * Real-time mathematical simulation with live coordinate grid, coefficient sliders,
 * point tracking, step-by-step calculations and student verification.
 */

class InteractiveMathLab {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.mode = "linear"; // 'linear' (y = mx + c) or 'quadratic' (y = ax² + bx + c)
    
    // Linear parameters: y = mx + c
    this.linear = {
      m: 2,    // gradient
      c: 1,    // y-intercept
      x: 1     // inspector x
    };

    // Quadratic parameters: y = ax² + bx + c
    this.quadratic = {
      a: 1,
      b: -2,
      c: -3,
      x: 2
    };

    // Grid configuration
    this.grid = {
      minX: -8,
      maxX: 8,
      minY: -8,
      maxY: 8,
      step: 1
    };

    this.isDragging = false;
    this.hoverPoint = null;
  }

  /**
   * Initialize Lab on a container
   */
  init(containerId = "interactiveMathLabContainer") {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = this.renderInterface();
    this.canvas = document.getElementById("mathLabCanvas");
    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
      this.setupCanvasDpi();
      this.setupEventListeners();
      this.redraw();
    }
  }

  renderInterface() {
    const isLinear = this.mode === "linear";
    const curY = this.calculateY(this.linear.x);

    return `
      <div class="bg-slate-900 rounded-3xl border-2 border-indigo-500/40 shadow-2xl p-4 sm:p-6 text-white select-none">
        <!-- Lab Header & Mode Switcher -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-xl">
              📈
            </div>
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider text-indigo-400">Makmal Matematik Interaktif KPM</span>
              <h3 class="text-base sm:text-lg font-black text-white">
                ${isLinear ? 'Graf Garis Lurus: y = mx + c' : 'Fungsi Kuadratik: y = ax² + bx + c'}
              </h3>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button 
              onclick="window.mathLab.setMode('linear')" 
              class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${isLinear ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}"
            >
              Garis Lurus (y = mx + c)
            </button>
            <button 
              onclick="window.mathLab.setMode('quadratic')" 
              class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${!isLinear ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}"
            >
              Kuadratik (y = ax² + bx + c)
            </button>
            <button 
              onclick="window.mathLab.resetParams()" 
              class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-all flex items-center gap-1"
              title="Reset ke parameter asal"
            >
              <span>🔄</span> Reset
            </button>
          </div>
        </div>

        <!-- Main Body: Canvas Grid & Live Control Panel -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
          <!-- Canvas Coordinate Plane (7 cols) -->
          <div class="lg:col-span-7 flex flex-col">
            <div class="relative bg-slate-950 rounded-2xl border border-indigo-500/20 overflow-hidden shadow-inner aspect-square w-full">
              <canvas id="mathLabCanvas" class="w-full h-full cursor-crosshair"></canvas>
              
              <!-- Floating Active Coordinate Badge -->
              <div class="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-indigo-500/30 text-xs font-mono">
                <span class="text-slate-400">Titik Disorot:</span> 
                <span id="floatingCoordDisplay" class="font-bold text-amber-400">(${this.linear.x}, ${curY})</span>
              </div>

              <!-- Equation Overlay Watermark -->
              <div class="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-indigo-500/30 text-xs font-bold text-indigo-300 font-mono">
                <span id="canvasEquationWatermark">${this.getFormattedEquation()}</span>
              </div>
            </div>

            <p class="text-[11px] text-slate-400 mt-2 text-center">
              💡 <em>Tip: Klik atau seret tetikus di atas grid untuk menguji sebarang koordinat (x, y).</em>
            </p>
          </div>

          <!-- Controls & Mathematical Calculations (5 cols) -->
          <div class="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <!-- Controls Panel -->
            <div class="space-y-4 bg-slate-950/70 p-4 sm:p-5 rounded-2xl border border-slate-800">
              ${isLinear ? this.renderLinearSliders() : this.renderQuadraticSliders()}

              <!-- Interactive Point Evaluator (Calculate y for any x) -->
              <div class="pt-3 border-t border-slate-800">
                <label class="block text-xs font-bold text-slate-300 mb-1.5">
                  🎯 Uji Nilai x (Kira y Sejajar):
                </label>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold font-mono text-indigo-400">x =</span>
                  <input 
                    type="number" 
                    id="inputTestX" 
                    value="${this.linear.x}" 
                    step="0.5" 
                    oninput="window.mathLab.onTestXChange(this.value)"
                    class="w-20 bg-slate-800 border border-indigo-500/40 rounded-xl px-2.5 py-1.5 text-xs text-white font-mono text-center focus:outline-none focus:border-indigo-400"
                  />
                  <div class="flex-1 bg-indigo-950/60 border border-indigo-500/30 rounded-xl px-3 py-1.5 text-xs font-mono text-amber-300 flex items-center justify-between">
                    <span>y =</span>
                    <strong id="liveCalculatedY" class="text-sm font-black text-amber-400">${curY}</strong>
                  </div>
                </div>
              </div>
            </div>

            <!-- Real-time Mathematical Step-by-Step Breakdown -->
            <div class="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs leading-relaxed space-y-2">
              <span class="font-black text-indigo-300 uppercase tracking-wider block text-[10px]">
                🔍 Pengiraan Langkah Demi Langkah:
              </span>
              <div id="stepCalculationFormula" class="font-mono text-amber-300 bg-slate-950 p-2.5 rounded-xl border border-indigo-500/20">
                ${this.getStepCalculation()}
              </div>
              <p id="parameterDynamicExplanation" class="text-slate-300 text-xs">
                ${this.getParameterExplanation()}
              </p>
            </div>

            <!-- Student Challenge / Quiz Checkpoint -->
            <div class="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[10px] font-black uppercase text-purple-300">⚡ Cabaran Uji Minda</span>
                <span class="text-[10px] font-bold text-amber-400">+50 XP</span>
              </div>
              <p class="text-xs text-slate-200" id="challengeTextPrompt">
                ${isLinear ? 'Laraskan kecerunan m dan pintasan-y c supaya garisan melalui titik <strong>(2, 5)</strong>!' : 'Ubah nilai a supaya lengkungan parabola bertukar menjadi bentuk bukit (a < 0)!'}
              </p>
              <button 
                onclick="window.mathLab.verifyChallenge()" 
                class="mt-2.5 w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>✓</span> Semak Jawapan Saya
              </button>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  renderLinearSliders() {
    return `
      <!-- Gradient (m) Slider & Input -->
      <div>
        <div class="flex items-center justify-between text-xs mb-1">
          <label class="font-bold text-slate-300 flex items-center gap-1.5">
            <span>📐</span> Kecerunan (m):
          </label>
          <div class="flex items-center gap-1">
            <input 
              type="number" 
              id="numInputM" 
              value="${this.linear.m}" 
              step="0.5" 
              oninput="window.mathLab.onNumChange('m', this.value)"
              class="w-16 bg-slate-800 border border-slate-700 rounded-lg px-2 py-0.5 text-xs text-white font-mono text-center focus:border-indigo-500"
            />
          </div>
        </div>
        <input 
          type="range" 
          id="sliderM" 
          min="-8" 
          max="8" 
          step="0.5" 
          value="${this.linear.m}" 
          oninput="window.mathLab.onSliderChange('m', this.value)"
          class="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div class="flex justify-between text-[10px] text-slate-500 mt-0.5">
          <span>-8 (Curam Turun)</span>
          <span>0 (Mendatar)</span>
          <span>+8 (Curam Naik)</span>
        </div>
      </div>

      <!-- y-Intercept (c) Slider & Input -->
      <div>
        <div class="flex items-center justify-between text-xs mb-1">
          <label class="font-bold text-slate-300 flex items-center gap-1.5">
            <span>📍</span> Pintasan-y (c):
          </label>
          <div class="flex items-center gap-1">
            <input 
              type="number" 
              id="numInputC" 
              value="${this.linear.c}" 
              step="0.5" 
              oninput="window.mathLab.onNumChange('c', this.value)"
              class="w-16 bg-slate-800 border border-slate-700 rounded-lg px-2 py-0.5 text-xs text-white font-mono text-center focus:border-indigo-500"
            />
          </div>
        </div>
        <input 
          type="range" 
          id="sliderC" 
          min="-8" 
          max="8" 
          step="0.5" 
          value="${this.linear.c}" 
          oninput="window.mathLab.onSliderChange('c', this.value)"
          class="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <div class="flex justify-between text-[10px] text-slate-500 mt-0.5">
          <span>-8 (Bawah paksi)</span>
          <span>0 (Titik Asalan)</span>
          <span>+8 (Atas paksi)</span>
        </div>
      </div>
    `;
  }

  renderQuadraticSliders() {
    return `
      <!-- a slider -->
      <div>
        <div class="flex items-center justify-between text-xs mb-1">
          <label class="font-bold text-slate-300">Pekali a (Bentuk Lengkungan):</label>
          <input 
            type="number" 
            value="${this.quadratic.a}" 
            step="0.5" 
            oninput="window.mathLab.onQuadChange('a', this.value)"
            class="w-14 bg-slate-800 border border-slate-700 rounded-lg px-2 py-0.5 text-xs text-white font-mono text-center"
          />
        </div>
        <input 
          type="range" 
          min="-4" 
          max="4" 
          step="0.5" 
          value="${this.quadratic.a}" 
          oninput="window.mathLab.onQuadChange('a', this.value)"
          class="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <div class="flex justify-between text-[10px] text-slate-500 mt-0.5">
          <span>-4 (Bukit Sedih)</span>
          <span>a ≠ 0</span>
          <span>+4 (Senyum U)</span>
        </div>
      </div>

      <!-- b & c inputs -->
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="text-[11px] text-slate-400 font-bold block mb-1">Pekali b:</label>
          <input 
            type="number" 
            value="${this.quadratic.b}" 
            step="0.5" 
            oninput="window.mathLab.onQuadChange('b', this.value)"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-1 text-xs text-white font-mono text-center"
          />
        </div>
        <div>
          <label class="text-[11px] text-slate-400 font-bold block mb-1">Pemalar c (Pintasan-y):</label>
          <input 
            type="number" 
            value="${this.quadratic.c}" 
            step="0.5" 
            oninput="window.mathLab.onQuadChange('c', this.value)"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl px-2 py-1 text-xs text-white font-mono text-center"
          />
        </div>
      </div>
    `;
  }

  setupCanvasDpi() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  setupEventListeners() {
    window.addEventListener("resize", () => {
      this.setupCanvasDpi();
      this.redraw();
    });

    this.canvas.addEventListener("click", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const graphX = this.pixelToCoordX(mouseX);
      this.onTestXChange(Math.round(graphX * 2) / 2);
    });
  }

  setMode(mode) {
    this.mode = mode;
    this.init("interactiveMathLabContainer");
  }

  resetParams() {
    if (this.mode === "linear") {
      this.linear = { m: 2, c: 1, x: 1 };
    } else {
      this.quadratic = { a: 1, b: -2, c: -3, x: 2 };
    }
    this.init("interactiveMathLabContainer");
  }

  onSliderChange(param, val) {
    const num = parseFloat(val);
    this.linear[param] = num;
    const input = document.getElementById(param === "m" ? "numInputM" : "numInputC");
    if (input) input.value = num;
    this.updateValuesAndRedraw();
  }

  onNumChange(param, val) {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      this.linear[param] = num;
      const slider = document.getElementById(param === "m" ? "sliderM" : "sliderC");
      if (slider) slider.value = num;
      this.updateValuesAndRedraw();
    }
  }

  onQuadChange(param, val) {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      if (param === "a" && num === 0) return; // a cannot be 0
      this.quadratic[param] = num;
      this.updateValuesAndRedraw();
    }
  }

  onTestXChange(val) {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      if (this.mode === "linear") {
        this.linear.x = num;
      } else {
        this.quadratic.x = num;
      }
      const input = document.getElementById("inputTestX");
      if (input && parseFloat(input.value) !== num) input.value = num;
      this.updateValuesAndRedraw();
    }
  }

  updateValuesAndRedraw() {
    const curX = this.mode === "linear" ? this.linear.x : this.quadratic.x;
    const curY = this.calculateY(curX);

    // Update DOM indicators
    const liveY = document.getElementById("liveCalculatedY");
    if (liveY) liveY.textContent = curY;

    const floatCoord = document.getElementById("floatingCoordDisplay");
    if (floatCoord) floatCoord.textContent = `(${curX}, ${curY})`;

    const eqWatermark = document.getElementById("canvasEquationWatermark");
    if (eqWatermark) eqWatermark.textContent = this.getFormattedEquation();

    const stepFormula = document.getElementById("stepCalculationFormula");
    if (stepFormula) stepFormula.innerHTML = this.getStepCalculation();

    const paramExplain = document.getElementById("parameterDynamicExplanation");
    if (paramExplain) paramExplain.innerHTML = this.getParameterExplanation();

    this.redraw();
  }

  calculateY(x) {
    if (this.mode === "linear") {
      return Math.round((this.linear.m * x + this.linear.c) * 100) / 100;
    } else {
      const { a, b, c } = this.quadratic;
      return Math.round((a * x * x + b * x + c) * 100) / 100;
    }
  }

  getFormattedEquation() {
    if (this.mode === "linear") {
      const { m, c } = this.linear;
      const cSign = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
      return `y = ${m}x ${cSign}`;
    } else {
      const { a, b, c } = this.quadratic;
      const bSign = b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`;
      const cSign = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
      return `y = ${a}x² ${bSign} ${cSign}`;
    }
  }

  getStepCalculation() {
    if (this.mode === "linear") {
      const { m, c, x } = this.linear;
      const y = this.calculateY(x);
      return `Apabila x = ${x}:<br/>y = (${m})(${x}) + (${c}) = <strong>${y}</strong><br/>Koordinat titik = (${x}, ${y})`;
    } else {
      const { a, b, c, x } = this.quadratic;
      const y = this.calculateY(x);
      return `Apabila x = ${x}:<br/>y = ${a}(${x})² + (${b})(${x}) + (${c}) = <strong>${y}</strong><br/>Koordinat titik = (${x}, ${y})`;
    }
  }

  getParameterExplanation() {
    if (this.mode === "linear") {
      const { m, c } = this.linear;
      let mText = "";
      if (m > 0) {
        mText = `<strong class="text-emerald-400">m = +${m} (Positif):</strong> Garis mencerun naik ke atas dari kiri ke kanan. Setiap 1 unit ke kanan, nilai y meningkat sebanyak ${m} unit.`;
      } else if (m < 0) {
        mText = `<strong class="text-rose-400">m = ${m} (Negatif):</strong> Garis mencerun turun ke bawah dari kiri ke kanan. Semakin besar nilai mutlak |m|, semakin curam cerun.`;
      } else {
        mText = `<strong class="text-sky-400">m = 0 (Sifar):</strong> Garis mendatar tepat selari dengan paksi-x. Kecerunan adalah rata.`;
      }

      const cText = `<strong>Pintasan-y c = ${c}:</strong> Garisan memotong paksi tegak y tepat pada titik koordinat <strong>(0, ${c})</strong>.`;
      return `${mText}<br/><br/>${cText}`;
    } else {
      const { a, b, c } = this.quadratic;
      const symmetryX = -b / (2 * a);
      const shapeText = a > 0 
        ? `<strong class="text-emerald-400">a = ${a} > 0:</strong> Bentuk 'Senyum U' 😊, mempunyai titik MINIMUM.`
        : `<strong class="text-rose-400">a = ${a} < 0:</strong> Bentuk 'Bukit Sedih' ☹️, mempunyai titik MAKSIMUM.`;
      return `${shapeText}<br/>Paksi Simetri: x = -b/(2a) = <strong>x = ${symmetryX.toFixed(2)}</strong>. Pintasan-y = (0, ${c}).`;
    }
  }

  verifyChallenge() {
    if (window.eduAudio) window.eduAudio.playClick();
    if (this.mode === "linear") {
      // Challenge: Line passes through (2, 5) -> 5 = 2m + c
      const curY = this.calculateY(2);
      if (Math.abs(curY - 5) < 0.05) {
        if (window.cikguAus) window.cikguAus.setPose("celebrating");
        if (window.eduAudio) window.eduAudio.playFanfare();
        window.gamification.recordQuizResult("math-lab-challenge", 100, 50, true);
        alert("🎉 TAHNIAH! Jawapan anda TEPAT! Garisan berjaya melalui titik (2, 5). Cikgu Aus berbangga dengan anda! (+50 XP)");
      } else {
        if (window.cikguAus) window.cikguAus.setPose("thinking");
        alert(`Cuba lagi! Pada x = 2, persamaan anda menghasilkan y = ${curY}, bukan y = 5. Petua: Cuba m = 2 dan c = 1 (kerana 2(2) + 1 = 5)!`);
      }
    } else {
      if (this.quadratic.a < 0) {
        if (window.cikguAus) window.cikguAus.setPose("celebrating");
        if (window.eduAudio) window.eduAudio.playFanfare();
        window.gamification.recordQuizResult("math-lab-quad-challenge", 100, 50, true);
        alert("🎉 TAHNIAH! Anda berjaya mengubah nilai a menjadi negatif menghasilkan lengkungan bukit maksimum! (+50 XP)");
      } else {
        if (window.cikguAus) window.cikguAus.setPose("thinking");
        alert("Graf masih berbentuk senyum (a > 0). Gerakkan slider pekali a ke nombor negatif (a < 0)!");
      }
    }
  }

  // COORDINATE TO PIXEL TRANSFORMATIONS
  coordToPixelX(x) {
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width;
    const { minX, maxX } = this.grid;
    return ((x - minX) / (maxX - minX)) * width;
  }

  coordToPixelY(y) {
    const rect = this.canvas.getBoundingClientRect();
    const height = rect.height;
    const { minY, maxY } = this.grid;
    return height - ((y - minY) / (maxY - minY)) * height;
  }

  pixelToCoordX(px) {
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width;
    const { minX, maxX } = this.grid;
    return minX + (px / width) * (maxX - minX);
  }

  // REDRAW CANVAS
  redraw() {
    if (!this.canvas || !this.ctx) return;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const ctx = this.ctx;
    ctx.clearRect(0, 0, w, h);

    // 1. Draw Grid Background
    ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
    ctx.lineWidth = 1;

    for (let x = this.grid.minX; x <= this.grid.maxX; x += this.grid.step) {
      const px = this.coordToPixelX(x);
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, h);
      ctx.stroke();
    }

    for (let y = this.grid.minY; y <= this.grid.maxY; y += this.grid.step) {
      const py = this.coordToPixelY(y);
      ctx.beginPath();
      ctx.moveTo(0, py);
      ctx.lineTo(w, py);
      ctx.stroke();
    }

    // 2. Draw Axes (X and Y)
    const originX = this.coordToPixelX(0);
    const originY = this.coordToPixelY(0);

    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2;

    // X Axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(w, originY);
    ctx.stroke();

    // Y Axis
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, h);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.fillText("x", w - 15, originY - 8);
    ctx.fillText("y", originX + 8, 15);
    ctx.fillText("0", originX - 12, originY + 14);

    // Tick Numbers
    ctx.font = "10px monospace";
    for (let x = this.grid.minX; x <= this.grid.maxX; x += 2) {
      if (x !== 0) {
        const px = this.coordToPixelX(x);
        ctx.fillText(x.toString(), px - 6, originY + 14);
      }
    }
    for (let y = this.grid.minY; y <= this.grid.maxY; y += 2) {
      if (y !== 0) {
        const py = this.coordToPixelY(y);
        ctx.fillText(y.toString(), originX + 6, py + 3);
      }
    }

    // 3. Draw The Mathematical Function
    if (this.mode === "linear") {
      this.drawLinearFunction(ctx, w, h);
    } else {
      this.drawQuadraticFunction(ctx, w, h);
    }
  }

  drawLinearFunction(ctx, w, h) {
    const { m, c, x: targetX } = this.linear;

    // Two endpoints of visible line
    const x1 = this.grid.minX;
    const y1 = m * x1 + c;
    const x2 = this.grid.maxX;
    const y2 = m * x2 + c;

    const px1 = this.coordToPixelX(x1);
    const py1 = this.coordToPixelY(y1);
    const px2 = this.coordToPixelX(x2);
    const py2 = this.coordToPixelY(y2);

    // Draw solid straight line
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(px1, py1);
    ctx.lineTo(px2, py2);
    ctx.stroke();

    // y-Intercept Point (0, c)
    const pInterceptX = this.coordToPixelX(0);
    const pInterceptY = this.coordToPixelY(c);
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(pInterceptX, pInterceptY, 5, 0, Math.PI * 2);
    ctx.fill();

    // Highlighted Target Point (targetX, targetY)
    const targetY = this.calculateY(targetX);
    const ptX = this.coordToPixelX(targetX);
    const ptY = this.coordToPixelY(targetY);

    // Dashed Projection lines to axes
    const originX = this.coordToPixelX(0);
    const originY = this.coordToPixelY(0);

    ctx.strokeStyle = "rgba(245, 158, 11, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(ptX, originY);
    ctx.lineTo(ptX, ptY);
    ctx.lineTo(originX, ptY);
    ctx.stroke();
    ctx.setLineDash([]); // reset

    // Pulsing Glowing Point Circle
    ctx.fillStyle = "#fbbf24";
    ctx.beginPath();
    ctx.arc(ptX, ptY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Coordinate Label Tag
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.fillText(`(${targetX}, ${targetY})`, ptX + 10, ptY - 10);
  }

  drawQuadraticFunction(ctx, w, h) {
    const { a, b, c, x: targetX } = this.quadratic;

    ctx.strokeStyle = a > 0 ? "#10b981" : "#ef4444";
    ctx.lineWidth = 3.5;
    ctx.beginPath();

    let started = false;
    for (let x = this.grid.minX; x <= this.grid.maxX; x += 0.1) {
      const y = a * x * x + b * x + c;
      const px = this.coordToPixelX(x);
      const py = this.coordToPixelY(y);

      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

    // Vertex Point
    const vx = -b / (2 * a);
    const vy = a * vx * vx + b * vx + c;
    const pvx = this.coordToPixelX(vx);
    const pvy = this.coordToPixelY(vy);

    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(pvx, pvy, 6, 0, Math.PI * 2);
    ctx.fill();

    // Target point
    const targetY = this.calculateY(targetX);
    const ptX = this.coordToPixelX(targetX);
    const ptY = this.coordToPixelY(targetY);

    ctx.fillStyle = "#fbbf24";
    ctx.beginPath();
    ctx.arc(ptX, ptY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.fillText(`(${targetX}, ${targetY})`, ptX + 10, ptY - 10);
  }
}

if (typeof window !== "undefined") {
  window.mathLab = new InteractiveMathLab();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { InteractiveMathLab };
}
