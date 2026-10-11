/**
 * EduPintar Malaysia - Visual Graphics & Interactive Simulations Engine
 * Menjana rajah grafik, simulasi interaktif SVG/Canvas, dan ilustrasi visual
 * bagi setiap topik sukatan pelajaran untuk pembelajaran A-Z.
 */

class VisualGraphicsEngine {
  constructor() {
    this.activeGraphicState = {};
  }

  getChapterGraphic(chapterId, language = "bm") {
    const isEn = language === "en";

    // 1. Bab 1: Fungsi & Persamaan Kuadratik
    if (chapterId && chapterId.includes("mt-c1")) {
      return this.renderQuadraticGraphic(isEn);
    }
    // 2. Bab 2: Asas Nombor
    else if (chapterId && chapterId.includes("mt-c2")) {
      return this.renderNumberBasesGraphic(isEn);
    }
    // 3. Bab 3: Penaakulan Logik
    else if (chapterId && chapterId.includes("mt-c3")) {
      return this.renderLogicGraphic(isEn);
    }
    // 4. Bab 4: Operasi Set
    else if (chapterId && chapterId.includes("mt-c4")) {
      return this.renderVennGraphic(isEn);
    }
    // 5. Bab 5: Rangkaian Teori Graf
    else if (chapterId && chapterId.includes("mt-c5")) {
      return this.renderGraphTheoryGraphic(isEn);
    }
    // 6. Bab 6: Ketaksamaan Linear
    else if (chapterId && chapterId.includes("mt-c6")) {
      return this.renderInequalitiesGraphic(isEn);
    }
    // 7. Bab 7: Graf Gerakan
    else if (chapterId && chapterId.includes("mt-c7")) {
      return this.renderMotionGraphic(isEn);
    }
    // 8. Bab 8: Sukatan Serakan
    else if (chapterId && chapterId.includes("mt-c8")) {
      return this.renderDispersionGraphic(isEn);
    }
    // 9. Bab 9: Kebarangkalian
    else if (chapterId && chapterId.includes("mt-c9")) {
      return this.renderProbabilityGraphic(isEn);
    }
    // 10. Bab 10: Pengurusan Kewangan
    else if (chapterId && chapterId.includes("mt-c10")) {
      return this.renderFinancialGraphic(isEn);
    }
    // Default Science/General Graphic
    return this.renderGenericScienceGraphic(chapterId, isEn);
  }

  // GRAPHIC 1: QUADRATIC FUNCTIONS & BASKETBALL PARABOLA
  renderQuadraticGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-indigo-500/40 text-white shadow-xl mb-6">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-indigo-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-black uppercase">
              <span>📊</span> ${isEn ? 'Visual Interactive Diagram' : 'Rajah Visual & Simulasi Interaktif'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Anatomy of a Parabola: Basketball Arc Simulation' : 'Anatomi Lengkungan Parabola: Simulasi Lontaran Bola Keranjang'}
            </h4>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.visualGraphics.toggleParabolaShape('smile')" id="btnParabolaSmile" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-md transition-all">
              😊 a > 0 (U Senyum / Min)
            </button>
            <button onclick="window.visualGraphics.toggleParabolaShape('hill')" id="btnParabolaHill" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all">
              ☹️ a < 0 (Bukit / Max)
            </button>
          </div>
        </div>

        <!-- Parabola SVG Interactive Canvas -->
        <div class="relative bg-slate-950/80 rounded-2xl p-4 border border-indigo-500/20 overflow-hidden">
          <svg viewBox="0 0 600 280" class="w-full h-auto" id="parabolaSvg">
            <!-- Grid Lines -->
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            <!-- Axis -->
            <line x1="50" y1="230" x2="550" y2="230" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
            <line x1="120" y1="260" x2="120" y2="30" stroke="#64748b" stroke-width="2" />
            <text x="540" y="220" fill="#94a3b8" font-size="12" font-weight="bold">Paksi-x (Masa, saat)</text>
            <text x="130" y="45" fill="#94a3b8" font-size="12" font-weight="bold">Paksi-y / f(x) (Tinggi, meter)</text>

            <!-- Basketball Hoop & Player Icon -->
            <g id="basketballScene">
              <!-- Player -->
              <circle cx="120" cy="180" r="10" fill="#fbbf24" />
              <line x1="120" y1="190" x2="120" y2="225" stroke="#fbbf24" stroke-width="3" />
              <text x="70" y="165" fill="#fde68a" font-size="11" font-weight="bold">🏀 Pemain Melontar (t=0)</text>

              <!-- Hoop -->
              <rect x="470" y="120" width="10" height="110" fill="#cbd5e1" />
              <line x1="450" y1="130" x2="470" y2="130" stroke="#ef4444" stroke-width="4" />
              <text x="440" y="115" fill="#f87171" font-size="11" font-weight="bold">Jaring (Gol)</text>
            </g>

            <!-- Parabola Curve Path (Default: Hill Shape) -->
            <path id="parabolaCurvePath" d="M 120 180 Q 290 30 460 130" fill="none" stroke="#6366f1" stroke-width="4" stroke-dasharray="8 0" />

            <!-- Vertex (Peak Point) Indicator -->
            <circle id="parabolaVertexPoint" cx="290" cy="70" r="7" fill="#f59e0b" class="animate-pulse" />
            <text id="parabolaVertexText" x="290" y="50" text-anchor="middle" fill="#fef08a" font-size="12" font-weight="black">
              ⭐ Titik Maksimum / Puncak (h, k) = (2s, 6m)
            </text>

            <!-- Axis of Symmetry (Dashed Vertical Line) -->
            <line id="parabolaSymmetryLine" x1="290" y1="50" x2="290" y2="230" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5 5" />
            <text id="parabolaSymmetryText" x="295" y="245" fill="#38bdf8" font-size="11" font-weight="bold">Paksi Simetri: x = 2</text>

            <!-- Roots (Punca) -->
            <circle cx="120" cy="230" r="5" fill="#10b981" />
            <circle cx="490" cy="230" r="5" fill="#10b981" />
            <text x="100" y="250" fill="#34d399" font-size="11">Punca 1</text>
            <text x="480" y="250" fill="#34d399" font-size="11">Punca 2 (Bola cecah lantai)</text>
          </svg>
        </div>

        <!-- 3 Feature Explanations -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
          <div class="p-3 rounded-2xl bg-slate-900/90 border border-indigo-500/30">
            <span class="text-amber-400 font-black block mb-1">1. Titik Puncak (Vertex)</span>
            <p class="text-slate-300">Kedudukan paling tinggi (jika a < 0) atau paling rendah (jika a > 0). Koordinat puncak = \((-b/2a, f(-b/2a))\).</p>
          </div>
          <div class="p-3 rounded-2xl bg-slate-900/90 border border-indigo-500/30">
            <span class="text-sky-400 font-black block mb-1">2. Paksi Simetri (Mirror Line)</span>
            <p class="text-slate-300">Garisan cermin menegak yang membahagikan parabola kepada 2 belah yang sama saiz tepat (\(x = -b/2a\)).</p>
          </div>
          <div class="p-3 rounded-2xl bg-slate-900/90 border border-indigo-500/30">
            <span class="text-emerald-400 font-black block mb-1">3. Punca Persamaan (Roots)</span>
            <p class="text-slate-300">Titik di mana lengkungan memotong paksi-x (\(f(x) = 0\)). Diperoleh melalui pemfaktoran atau rumus kuadratik.</p>
          </div>
        </div>
      </div>
    `;
  }

  toggleParabolaShape(type) {
    const path = document.getElementById("parabolaCurvePath");
    const vertex = document.getElementById("parabolaVertexPoint");
    const vertexText = document.getElementById("parabolaVertexText");
    const symmetryLine = document.getElementById("parabolaSymmetryLine");
    const btnSmile = document.getElementById("btnParabolaSmile");
    const btnHill = document.getElementById("btnParabolaHill");

    if (!path) return;

    if (type === "smile") {
      // U-Shape (Smile / Minimum)
      path.setAttribute("d", "M 120 70 Q 290 220 460 70");
      path.setAttribute("stroke", "#10b981");
      if (vertex) { vertex.setAttribute("cy", "185"); vertex.setAttribute("fill", "#10b981"); }
      if (vertexText) {
        vertexText.setAttribute("y", "210");
        vertexText.textContent = "⭐ Titik MINIMUM (a > 0, Bentuk Senyum U)";
      }
      if (symmetryLine) symmetryLine.setAttribute("y2", "185");
      btnSmile?.classList.replace("bg-slate-800", "bg-emerald-600");
      btnSmile?.classList.replace("text-slate-300", "text-white");
      btnHill?.classList.replace("bg-indigo-600", "bg-slate-800");
      btnHill?.classList.replace("text-white", "text-slate-300");
    } else {
      // Hill-Shape (Frown / Maximum)
      path.setAttribute("d", "M 120 180 Q 290 30 460 130");
      path.setAttribute("stroke", "#6366f1");
      if (vertex) { vertex.setAttribute("cy", "70"); vertex.setAttribute("fill", "#f59e0b"); }
      if (vertexText) {
        vertexText.setAttribute("y", "50");
        vertexText.textContent = "⭐ Titik MAKSIMUM / Puncak (a < 0, Bentuk Bukit)";
      }
      if (symmetryLine) symmetryLine.setAttribute("y2", "230");
      btnHill?.classList.replace("bg-slate-800", "bg-indigo-600");
      btnHill?.classList.replace("text-slate-300", "text-white");
      btnSmile?.classList.replace("bg-emerald-600", "bg-slate-800");
      btnSmile?.classList.replace("text-white", "text-slate-300");
    }
  }

  // GRAPHIC 2: NUMBER BASES 8-BIT SWITCHBOARD
  renderNumberBasesGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-sky-500/40 text-white shadow-xl mb-6">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-sky-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-black uppercase">
              <span>💻</span> ${isEn ? 'Interactive Binary Simulator' : 'Simulasi Cip Binari & Asas Nombor'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? '8-Bit Digital Switchboard: How Computers Count' : 'Papan Suis Digital 8-Bit: Bagaimana Cip Komputer Mengira'}
            </h4>
          </div>
          <div class="text-xs bg-sky-900/60 px-3 py-1.5 rounded-xl border border-sky-400/30 font-bold text-sky-200">
            Klik suis di bawah untuk tukar digit 0 dan 1!
          </div>
        </div>

        <!-- 8-Bit Interactive Switches Grid -->
        <div class="grid grid-cols-4 sm:grid-cols-8 gap-2.5 my-4" id="bitSwitchesContainer">
          ${[128, 64, 32, 16, 8, 4, 2, 1].map((weight, idx) => `
            <div 
              onclick="window.visualGraphics.toggleBit(${idx})" 
              id="bitCard_${idx}"
              class="cursor-pointer p-3 rounded-2xl bg-slate-950/90 border border-slate-700 hover:border-sky-400 text-center transition-all select-none"
            >
              <span class="text-[10px] text-slate-400 block font-mono">2^${7 - idx}</span>
              <span class="text-xs font-black text-amber-400 block mb-2">${weight}</span>
              <div id="bitLed_${idx}" class="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-600 mx-auto flex items-center justify-center font-black text-xs text-slate-400 shadow-inner">
                0
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Real-time calculation output banner -->
        <div class="p-4 rounded-2xl bg-slate-950 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span class="text-xs text-slate-400 font-semibold block">Nombor dalam Asas 2 (Binari):</span>
            <span class="text-xl sm:text-2xl font-mono font-black text-sky-400 tracking-wider" id="binaryDisplayString">00000000₂</span>
          </div>

          <div class="text-center sm:text-right">
            <span class="text-xs text-slate-400 font-semibold block">Nilai Setara dalam Asas 10 (Perpuluhan):</span>
            <span class="text-2xl sm:text-3xl font-mono font-black text-amber-400" id="decimalDisplayNumber">0₁₀</span>
          </div>
        </div>
      </div>
    `;
  }

  toggleBit(idx) {
    if (!this.bitValues) this.bitValues = [0, 0, 0, 0, 0, 0, 0, 0];
    this.bitValues[idx] = this.bitValues[idx] === 1 ? 0 : 1;

    const led = document.getElementById(`bitLed_${idx}`);
    const card = document.getElementById(`bitCard_${idx}`);
    if (led && card) {
      if (this.bitValues[idx] === 1) {
        led.textContent = "1";
        led.className = "w-7 h-7 rounded-full bg-emerald-500 border-2 border-emerald-300 mx-auto flex items-center justify-center font-black text-xs text-white shadow-lg shadow-emerald-500/50 animate-pulse";
        card.classList.add("border-emerald-500", "bg-emerald-950/40");
      } else {
        led.textContent = "0";
        led.className = "w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-600 mx-auto flex items-center justify-center font-black text-xs text-slate-400 shadow-inner";
        card.classList.remove("border-emerald-500", "bg-emerald-950/40");
      }
    }

    const weights = [128, 64, 32, 16, 8, 4, 2, 1];
    let total = 0;
    this.bitValues.forEach((v, i) => { if (v === 1) total += weights[i]; });

    const binStr = this.bitValues.join("") + "₂";
    const decStr = total + "₁₀";

    const binEl = document.getElementById("binaryDisplayString");
    const decEl = document.getElementById("decimalDisplayNumber");
    if (binEl) binEl.textContent = binStr;
    if (decEl) decEl.textContent = decStr;
    if (window.eduAudio) window.eduAudio.playClick();
  }

  // GRAPHIC 3: LOGICAL REASONING TRUTH MATRIX
  renderLogicGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-purple-500/40 text-white shadow-xl mb-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-black uppercase">
              <span>🧠</span> ${isEn ? 'Logical Truth Matrix' : 'Matriks Kebenaran Logik'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Truth Values: Comparing AND vs OR Operations' : 'Nilai Kebenaran: Perbandingan Operasi DAN vs ATAU'}
            </h4>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border border-purple-500/30 rounded-2xl overflow-hidden">
            <thead class="bg-purple-950/80 text-purple-200 uppercase font-black">
              <tr>
                <th class="p-3 border-b border-purple-500/30">Pernyataan p</th>
                <th class="p-3 border-b border-purple-500/30">Pernyataan q</th>
                <th class="p-3 border-b border-purple-500/30 bg-indigo-900/60">p DAN q (∧)</th>
                <th class="p-3 border-b border-purple-500/30 bg-purple-900/60">p ATAU q (∨)</th>
                <th class="p-3 border-b border-purple-500/30">Implikasi (p → q)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-purple-500/20 font-medium">
              <tr class="hover:bg-purple-900/20">
                <td class="p-3 text-emerald-400 font-bold">BENAR (B)</td>
                <td class="p-3 text-emerald-400 font-bold">BENAR (B)</td>
                <td class="p-3 bg-indigo-950/40 font-black text-emerald-300">✅ BENAR</td>
                <td class="p-3 bg-purple-950/40 font-black text-emerald-300">✅ BENAR</td>
                <td class="p-3 font-bold text-emerald-300">✅ BENAR</td>
              </tr>
              <tr class="hover:bg-purple-900/20">
                <td class="p-3 text-emerald-400 font-bold">BENAR (B)</td>
                <td class="p-3 text-rose-400 font-bold">PALSU (P)</td>
                <td class="p-3 bg-indigo-950/40 font-black text-rose-400">❌ PALSU</td>
                <td class="p-3 bg-purple-950/40 font-black text-emerald-300">✅ BENAR</td>
                <td class="p-3 font-bold text-rose-400">❌ PALSU</td>
              </tr>
              <tr class="hover:bg-purple-900/20">
                <td class="p-3 text-rose-400 font-bold">PALSU (P)</td>
                <td class="p-3 text-emerald-400 font-bold">BENAR (B)</td>
                <td class="p-3 bg-indigo-950/40 font-black text-rose-400">❌ PALSU</td>
                <td class="p-3 bg-purple-950/40 font-black text-emerald-300">✅ BENAR</td>
                <td class="p-3 font-bold text-emerald-300">✅ BENAR</td>
              </tr>
              <tr class="hover:bg-purple-900/20">
                <td class="p-3 text-rose-400 font-bold">PALSU (P)</td>
                <td class="p-3 text-rose-400 font-bold">PALSU (P)</td>
                <td class="p-3 bg-indigo-950/40 font-black text-rose-400">❌ PALSU</td>
                <td class="p-3 bg-purple-950/40 font-black text-rose-400">❌ PALSU</td>
                <td class="p-3 font-bold text-emerald-300">✅ BENAR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // GRAPHIC 4: INTERACTIVE VENN DIAGRAM
  renderVennGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-emerald-500/40 text-white shadow-xl mb-6">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase">
              <span>⭕</span> ${isEn ? 'Interactive Venn Diagram' : 'Gambar Rajah Venn Interaktif'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Visualizing Set Operations: Click to Highlight Regions' : 'Visual Operasi Set: Klik Butang untuk Melorek Kawasan'}
            </h4>
          </div>
          <div class="flex flex-wrap items-center gap-1.5">
            <button onclick="window.visualGraphics.shadeVenn('intersection')" id="btnVennInter" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-md">
              Persilangan (A ∩ B)
            </button>
            <button onclick="window.visualGraphics.shadeVenn('union')" id="btnVennUnion" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700">
              Kesatuan (A ∪ B)
            </button>
            <button onclick="window.visualGraphics.shadeVenn('complement')" id="btnVennComp" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700">
              Pelengkap (A ∪ B)'
            </button>
          </div>
        </div>

        <div class="relative bg-slate-950/80 rounded-2xl p-4 border border-emerald-500/20 flex items-center justify-center">
          <svg viewBox="0 0 500 240" class="w-full max-w-md h-auto" id="vennSvg">
            <!-- Universal Set Box -->
            <rect id="vennUniversalBox" x="20" y="20" width="460" height="200" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="#475569" stroke-width="2" />
            <text x="40" y="45" fill="#94a3b8" font-size="14" font-weight="black">Set Semesta (ξ)</text>

            <!-- Circle A -->
            <circle id="vennCircleA" cx="190" cy="120" r="75" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="3" />
            <text x="140" y="125" fill="#a5b4fc" font-size="14" font-weight="black">Set A</text>

            <!-- Circle B -->
            <circle id="vennCircleB" cx="310" cy="120" r="75" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="3" />
            <text x="340" y="125" fill="#6ee7b7" font-size="14" font-weight="black">Set B</text>

            <!-- Intersection Overlap Lens (Highlighted by default) -->
            <path id="vennIntersectionPath" d="M 250 63 A 75 75 0 0 1 250 177 A 75 75 0 0 1 250 63" fill="#10b981" fill-opacity="0.7" stroke="#34d399" stroke-width="2" />
            <text id="vennCenterText" x="250" y="125" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="black">A ∩ B</text>
          </svg>
        </div>
      </div>
    `;
  }

  shadeVenn(mode) {
    const inter = document.getElementById("vennIntersectionPath");
    const cirA = document.getElementById("vennCircleA");
    const cirB = document.getElementById("vennCircleB");
    const uBox = document.getElementById("vennUniversalBox");
    const txt = document.getElementById("vennCenterText");

    if (!inter) return;

    if (mode === "intersection") {
      inter.setAttribute("fill", "#10b981");
      inter.setAttribute("fill-opacity", "0.85");
      cirA?.setAttribute("fill", "rgba(99, 102, 241, 0.15)");
      cirB?.setAttribute("fill", "rgba(16, 185, 129, 0.15)");
      uBox?.setAttribute("fill", "rgba(15, 23, 42, 0.6)");
      if (txt) txt.textContent = "A ∩ B (Kongsi)";
    } else if (mode === "union") {
      inter.setAttribute("fill", "#f59e0b");
      inter.setAttribute("fill-opacity", "0.85");
      cirA?.setAttribute("fill", "rgba(245, 158, 11, 0.6)");
      cirB?.setAttribute("fill", "rgba(245, 158, 11, 0.6)");
      uBox?.setAttribute("fill", "rgba(15, 23, 42, 0.6)");
      if (txt) txt.textContent = "A ∪ B (Semua)";
    } else if (mode === "complement") {
      inter.setAttribute("fill", "rgba(0,0,0,0.5)");
      cirA?.setAttribute("fill", "rgba(0,0,0,0.5)");
      cirB?.setAttribute("fill", "rgba(0,0,0,0.5)");
      uBox?.setAttribute("fill", "rgba(239, 68, 68, 0.4)");
      if (txt) txt.textContent = "Di Luar";
    }
    if (window.eduAudio) window.eduAudio.playClick();
  }

  // GRAPHIC 5: GRAPH THEORY TRANSIT MAP
  renderGraphTheoryGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-cyan-500/40 text-white shadow-xl mb-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-black uppercase">
              <span>🚇</span> ${isEn ? 'Transit Network Graph' : 'Graf Rangkaian Transit LRT / Grab'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Graph Theory: Vertices (V) and Weighted Edges (E)' : 'Teori Graf: Bucu (Stesen) dan Tepi Berpemberat (Jarak km)'}
            </h4>
          </div>
        </div>

        <div class="relative bg-slate-950/80 rounded-2xl p-4 border border-cyan-500/20">
          <svg viewBox="0 0 540 220" class="w-full h-auto">
            <!-- Edges (Tracks with km) -->
            <line x1="100" y1="110" x2="220" y2="50" stroke="#06b6d4" stroke-width="3" />
            <text x="145" y="70" fill="#a5f3fc" font-size="11" font-weight="bold">3.2 km</text>

            <line x1="220" y1="50" x2="350" y2="60" stroke="#06b6d4" stroke-width="3" />
            <text x="280" y="45" fill="#a5f3fc" font-size="11" font-weight="bold">2.1 km</text>

            <line x1="220" y1="50" x2="270" y2="160" stroke="#06b6d4" stroke-width="3" />
            <text x="255" y="110" fill="#a5f3fc" font-size="11" font-weight="bold">4.0 km</text>

            <line x1="350" y1="60" x2="450" y2="130" stroke="#06b6d4" stroke-width="3" />
            <text x="410" y="85" fill="#a5f3fc" font-size="11" font-weight="bold">1.8 km</text>

            <line x1="270" y1="160" x2="450" y2="130" stroke="#06b6d4" stroke-width="3" />
            <text x="350" y="160" fill="#a5f3fc" font-size="11" font-weight="bold">5.5 km</text>

            <!-- Vertices (Stations) -->
            <g transform="translate(100,110)"><circle r="16" fill="#0891b2" stroke="#fff" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-weight="black">KL</text><text y="28" text-anchor="middle" fill="#67e8f9" font-size="10">KL Sentral</text></g>
            <g transform="translate(220,50)"><circle r="16" fill="#0891b2" stroke="#fff" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-weight="black">PS</text><text y="-22" text-anchor="middle" fill="#67e8f9" font-size="10">Pasar Seni</text></g>
            <g transform="translate(350,60)"><circle r="16" fill="#0891b2" stroke="#fff" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-weight="black">MJ</text><text y="-22" text-anchor="middle" fill="#67e8f9" font-size="10">Masjid Jamek</text></g>
            <g transform="translate(270,160)"><circle r="16" fill="#0891b2" stroke="#fff" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-weight="black">BB</text><text y="28" text-anchor="middle" fill="#67e8f9" font-size="10">Bukit Bintang</text></g>
            <g transform="translate(450,130)"><circle r="16" fill="#0891b2" stroke="#fff" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-weight="black">KC</text><text y="28" text-anchor="middle" fill="#67e8f9" font-size="10">KLCC</text></g>
          </svg>
        </div>

        <div class="mt-3 text-xs bg-slate-900/90 p-3 rounded-xl border border-cyan-500/30 text-cyan-200">
          💡 <strong>Rumus Emas:</strong> Bilangan Bucu \(V = 5\), Bilangan Tepi \(E = 5\). Jumlah Darjah \(\sum d(v) = 2 \times 5 = 10\) (Genap!). Pokok (*Tree*) memerlukan tepat \(E = V - 1 = 4\) laluan tanpa pusingan.
        </div>
      </div>
    `;
  }

  // GRAPHIC 6: LINEAR INEQUALITIES
  renderInequalitiesGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-amber-500/40 text-white shadow-xl mb-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-amber-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-black uppercase">
              <span>📐</span> ${isEn ? 'Cartesian Inequality Plane' : 'Satah Cartes Ketaksamaan Linear'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Feasible Region Shading: Solid vs Dashed Lines' : 'Rantau Berlorek Bajet: Garis Padu (≤) vs Garis Sempang (<)'}
            </h4>
          </div>
        </div>

        <div class="relative bg-slate-950/80 rounded-2xl p-4 border border-amber-500/20">
          <svg viewBox="0 0 500 220" class="w-full h-auto">
            <!-- Axes -->
            <line x1="60" y1="180" x2="460" y2="180" stroke="#64748b" stroke-width="2" />
            <line x1="80" y1="200" x2="80" y2="30" stroke="#64748b" stroke-width="2" />
            <text x="440" y="170" fill="#cbd5e1" font-size="11">x (Burger)</text>
            <text x="90" y="45" fill="#cbd5e1" font-size="11">y (Boba)</text>

            <!-- Feasible Shaded Region -->
            <polygon points="80,180 80,60 300,180" fill="rgba(245, 158, 11, 0.35)" stroke="none" />
            <text x="130" y="140" fill="#fde68a" font-size="12" font-weight="black">Rantau Memuaskan Bajet (2x + 5y ≤ 30)</text>

            <!-- Solid Boundary Line -->
            <line x1="60" y1="45" x2="330" y2="195" stroke="#f59e0b" stroke-width="3" />
            <text x="270" y="100" fill="#fbbf24" font-size="11" font-weight="bold">Garis Padu: 2x + 5y = 30</text>
          </svg>
        </div>
      </div>
    `;
  }

  // GRAPHIC 7: MOTION GRAPHS (DISTANCE-TIME & SPEED-TIME)
  renderMotionGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-rose-500/40 text-white shadow-xl mb-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-rose-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs font-black uppercase">
              <span>🚗</span> ${isEn ? 'Dual Motion Analysis' : 'Perbandingan Graf Gerakan (PLUS Highway)'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Distance-Time (Gradient = Speed) vs Speed-Time (Area = Distance)' : 'Graf Jarak-Masa (Kecerunan=Laju) vs Graf Laju-Masa (Luas=Jarak)'}
            </h4>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Graph 1: Jarak-Masa -->
          <div class="bg-slate-950/80 p-3.5 rounded-2xl border border-rose-500/20">
            <h5 class="text-xs font-black text-rose-300 mb-2">1. Graf Jarak-Masa (Kecerunan = Laju)</h5>
            <svg viewBox="0 0 250 140" class="w-full h-auto">
              <line x1="30" y1="110" x2="230" y2="110" stroke="#64748b" stroke-width="1.5"/>
              <line x1="30" y1="110" x2="30" y2="20" stroke="#64748b" stroke-width="1.5"/>
              <path d="M 30 110 L 80 40 L 140 40 L 210 10" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
              <text x="85" y="32" fill="#fda4af" font-size="9" font-weight="bold">Rehat RnR (Laju=0)</text>
              <text x="140" y="125" fill="#94a3b8" font-size="9">Masa (jam)</text>
              <text x="35" y="25" fill="#94a3b8" font-size="9">Jarak (km)</text>
            </svg>
          </div>

          <!-- Graph 2: Laju-Masa -->
          <div class="bg-slate-950/80 p-3.5 rounded-2xl border border-rose-500/20">
            <h5 class="text-xs font-black text-amber-300 mb-2">2. Graf Laju-Masa (Luas Bawah = Jarak)</h5>
            <svg viewBox="0 0 250 140" class="w-full h-auto">
              <line x1="30" y1="110" x2="230" y2="110" stroke="#64748b" stroke-width="1.5"/>
              <line x1="30" y1="110" x2="30" y2="20" stroke="#64748b" stroke-width="1.5"/>
              <!-- Shaded Area (Trapezium) -->
              <polygon points="30,110 70,40 160,40 210,110" fill="rgba(245, 158, 11, 0.4)" stroke="#f59e0b" stroke-width="2"/>
              <text x="85" y="80" fill="#fef08a" font-size="10" font-weight="black">LUAS = JARAK</text>
              <text x="140" y="125" fill="#94a3b8" font-size="9">Masa (s)</text>
              <text x="35" y="25" fill="#94a3b8" font-size="9">Laju (m/s)</text>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  // GRAPHIC 8: BOX PLOT (DISPERSION)
  renderDispersionGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-teal-500/40 text-white shadow-xl mb-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-teal-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-black uppercase">
              <span>📦</span> ${isEn ? 'Box-and-Whisker Plot' : 'Plot Kotak Sukatan Serakan'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Understanding 5-Number Summary: Min, Q1, Median, Q3, Max' : 'Ringkasan 5 Nilai Data: Nilai Min, Q1, Median (Q2), Q3, Nilai Max'}
            </h4>
          </div>
        </div>

        <div class="relative bg-slate-950/80 rounded-2xl p-4 border border-teal-500/20">
          <svg viewBox="0 0 520 180" class="w-full h-auto">
            <!-- Number Scale -->
            <line x1="50" y1="140" x2="470" y2="140" stroke="#64748b" stroke-width="2"/>
            <text x="60" y="155" fill="#94a3b8" font-size="10">20</text>
            <text x="160" y="155" fill="#94a3b8" font-size="10">40</text>
            <text x="260" y="155" fill="#94a3b8" font-size="10">60</text>
            <text x="360" y="155" fill="#94a3b8" font-size="10">80</text>
            <text x="460" y="155" fill="#94a3b8" font-size="10">100</text>

            <!-- Box Plot -->
            <!-- Left Whisker -->
            <line x1="80" y1="70" x2="160" y2="70" stroke="#14b8a6" stroke-width="2"/>
            <line x1="80" y1="55" x2="80" y2="85" stroke="#14b8a6" stroke-width="2"/>
            <text x="65" y="45" fill="#5eead4" font-size="10" font-weight="bold">Min (25)</text>

            <!-- The Box (Q1 to Q3) -->
            <rect x="160" y="45" width="180" height="50" fill="rgba(20, 184, 166, 0.3)" stroke="#14b8a6" stroke-width="2.5"/>
            <text x="150" y="35" fill="#5eead4" font-size="10" font-weight="bold">Q1 (42)</text>
            <text x="330" y="35" fill="#5eead4" font-size="10" font-weight="bold">Q3 (78)</text>

            <!-- Median Line -->
            <line x1="250" y1="45" x2="250" y2="95" stroke="#fbbf24" stroke-width="3"/>
            <text x="235" y="115" fill="#fde68a" font-size="10" font-weight="black">Median (60)</text>

            <!-- Right Whisker -->
            <line x1="340" y1="70" x2="440" y2="70" stroke="#14b8a6" stroke-width="2"/>
            <line x1="440" y1="55" x2="440" y2="85" stroke="#14b8a6" stroke-width="2"/>
            <text x="430" y="45" fill="#5eead4" font-size="10" font-weight="bold">Max (96)</text>
          </svg>
        </div>
      </div>
    `;
  }

  // GRAPHIC 9: PROBABILITY TREE
  renderProbabilityGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-blue-500/40 text-white shadow-xl mb-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-blue-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-black uppercase">
              <span>🌳</span> ${isEn ? 'Probability Tree Diagram' : 'Rajah Pokok Kebarangkalian'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Sequential Draws: Multiplying Along Tree Branches' : 'Cabutan Berturutan: Pendaraban Kebarangkalian Sepanjang Cabang'}
            </h4>
          </div>
        </div>

        <div class="relative bg-slate-950/80 rounded-2xl p-4 border border-blue-500/20">
          <svg viewBox="0 0 500 200" class="w-full h-auto">
            <!-- Root -->
            <circle cx="50" cy="100" r="8" fill="#60a5fa"/>
            <text x="20" y="105" fill="#93c5fd" font-size="10">Mula</text>

            <!-- Draw 1 -->
            <line x1="50" y1="100" x2="180" y2="50" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="65" fill="#93c5fd" font-size="10" font-weight="bold">Merah (3/5)</text>

            <line x1="50" y1="100" x2="180" y2="150" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="145" fill="#93c5fd" font-size="10" font-weight="bold">Biru (2/5)</text>

            <!-- Nodes Draw 1 -->
            <circle cx="180" cy="50" r="6" fill="#ef4444"/>
            <circle cx="180" cy="150" r="6" fill="#3b82f6"/>

            <!-- Draw 2 from Red -->
            <line x1="180" y1="50" x2="330" y2="25" stroke="#ef4444" stroke-width="2"/>
            <text x="235" y="30" fill="#fca5a5" font-size="9">Merah (2/4)</text>
            <text x="345" y="30" fill="#ffffff" font-size="10" font-weight="bold">(M, M) = 6/20</text>

            <line x1="180" y1="50" x2="330" y2="75" stroke="#3b82f6" stroke-width="2"/>
            <text x="235" y="70" fill="#93c5fd" font-size="9">Biru (2/4)</text>
            <text x="345" y="80" fill="#ffffff" font-size="10" font-weight="bold">(M, B) = 6/20</text>

            <!-- Draw 2 from Blue -->
            <line x1="180" y1="150" x2="330" y2="125" stroke="#ef4444" stroke-width="2"/>
            <text x="235" y="130" fill="#fca5a5" font-size="9">Merah (3/4)</text>
            <text x="345" y="130" fill="#ffffff" font-size="10" font-weight="bold">(B, M) = 6/20</text>

            <line x1="180" y1="150" x2="330" y2="175" stroke="#3b82f6" stroke-width="2"/>
            <text x="235" y="170" fill="#93c5fd" font-size="9">Biru (1/4)</text>
            <text x="345" y="180" fill="#ffffff" font-size="10" font-weight="bold">(B, B) = 2/20</text>
          </svg>
        </div>
      </div>
    `;
  }

  // GRAPHIC 10: FINANCIAL MANAGEMENT SMART WHEEL
  renderFinancialGraphic(isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-emerald-500/40 text-white shadow-xl mb-6">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/30">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase">
              <span>💰</span> ${isEn ? 'SMART Financial Planning Wheel' : 'Model Agihan Kewangan SMART 50/30/20'}
            </span>
            <h4 class="text-base sm:text-lg font-black text-white mt-1">
              ${isEn ? 'Budget Allocation & Positive Cash Flow Breakdown' : 'Pembahagian Bajet Bijak & Aliran Tunai Positif'}
            </h4>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 text-center">
            <span class="text-2xl font-black text-indigo-400 block mb-1">50%</span>
            <h6 class="font-bold text-xs text-white">Keperluan Asas (Needs)</h6>
            <p class="text-[11px] text-slate-300 mt-1">Makanan ruji, sewa rumah, bil elektrik/air, bayaran pengangkutan bas/petrol.</p>
          </div>
          <div class="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-center">
            <span class="text-2xl font-black text-purple-400 block mb-1">30%</span>
            <h6 class="font-bold text-xs text-white">Kehendak (Wants)</h6>
            <p class="text-[11px] text-slate-300 mt-1">Makan di restoran mewah, hiburan wayang, pakaian berjenama, hobi game.</p>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-center">
            <span class="text-2xl font-black text-emerald-400 block mb-1">20%</span>
            <h6 class="font-bold text-xs text-emerald-300">Simpanan (Savings)</h6>
            <p class="text-[11px] text-slate-300 mt-1">Simpanan matlamat SMART laptop, dana kecemasan 6 bulan, pelaburan ASB.</p>
          </div>
        </div>
      </div>
    `;
  }

  // GENERIC SCIENCE / HUMANITIES GRAPHIC
  renderGenericScienceGraphic(chapterId, isEn) {
    return `
      <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-5 border-2 border-indigo-500/30 text-white shadow-xl mb-6">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-600/40 border border-indigo-400/40 flex items-center justify-center text-2xl shrink-0">
            🔬
          </div>
          <div>
            <span class="text-[10px] font-black uppercase text-indigo-300 tracking-wider">Modul Pembelajaran Komprehensif A-Z</span>
            <h4 class="text-sm sm:text-base font-black text-white">Panduan Konsep Sains & Analogi Realiti Berstruktur</h4>
          </div>
        </div>
      </div>
    `;
  }
}

window.visualGraphics = new VisualGraphicsEngine();
