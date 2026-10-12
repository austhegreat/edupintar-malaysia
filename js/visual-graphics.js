/**
 * EduPintar Malaysia - Visual Graphics & Interactive Simulations Engine
 * Menjana rajah grafik, simulasi interaktif SVG/Canvas, dan ilustrasi visual
 * bagi setiap topik sukatan pelajaran untuk pembelajaran A-Z.
 */

class VisualGraphicsEngine {
  constructor() {
    this.activeGraphicState = {};
  }

  getChapterGraphic(chapterId, language = "bm", chapter = null) {
    const isEn = language === "en";
    if (chapter?.primaryVisual) {
      const html = this.renderPrimaryVisual(chapter, isEn);
      if (chapter.primaryVisual === "gravity") setTimeout(() => this.drawPrimaryGravity(0), 0);
      if (chapter.primaryVisual === "fraction3d") setTimeout(() => this.updatePrimaryFraction(), 0);
      return html;
    }

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

  getSubtopicGraphic(chapter, section, sectionIndex = 0, language = "bm") {
    const isEn = language === "en";
    const clean = value => String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    const chapterTitle = clean(chapter?.title);
    const sectionTitle = clean(section?.heading || chapterTitle);
    const context = `${chapterTitle} ${sectionTitle} ${clean(chapter?.summary)} ${clean(section?.content)}`.toLowerCase();
    const facts = (section?.bulletPoints || section?.bulletPointsEn || [])
      .map(clean).filter(Boolean).slice(0, 4);
    if (!facts.length) facts.push(clean(section?.content) || clean(chapter?.summary) || sectionTitle);
    this.activeTopicFacts = facts;

    if (chapter?.primaryVisual) return "";

    const header = `<div class="topic-visual rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 sm:p-5" aria-label="${isEn ? 'Interactive visual' : 'Visual interaktif'}"><div class="mb-3 flex items-center gap-2"><span class="grid h-9 w-9 place-items-center rounded-xl bg-white text-xl shadow-sm">${this.topicIcon(context)}</span><div><p class="text-[10px] font-bold uppercase tracking-wider text-indigo-600">${isEn ? 'Explore this idea' : 'Teroka konsep ini'}</p><h4 class="font-bold text-slate-900">${sectionTitle}</h4></div></div>`;
    const footer = `</div>`;

    if (/kuadratik|quadratic|parabola/.test(context)) {
      return header + this.renderSubtopicParabola(isEn) + footer;
    }
    if (/pecahan|fraction/.test(context)) {
      return header + this.renderSubtopicFraction(isEn) + footer;
    }
    if (/garis lurus|linear graph|kecerunan|slope|y\s*=\s*mx/.test(context)) {
      return header + this.renderSubtopicLine(isEn) + footer;
    }
    if (/sudut|angle|segi tiga|triangle|poligon|polygon/.test(context)) {
      return header + this.renderSubtopicAngle(isEn) + footer;
    }
    if (/sejarah|nasionalis|kemerdekaan|kedaulatan|history|independence/.test(context)) {
      return header + this.renderSubtopicFactMap(facts, isEn, "timeline") + footer;
    }
    return header + this.renderSubtopicFactMap(facts, isEn, "concept") + footer;
  }

  renderPrimaryVisual(chapter, isEn) {
    const label = isEn ? "Try it" : "Cuba sendiri";
    const title = isEn ? (chapter.titleEn || chapter.title) : chapter.title;
    const header = `<section class="primary-visual" aria-label="${isEn ? 'Interactive learning activity' : 'Aktiviti pembelajaran interaktif'}"><div class="primary-visual-heading"><span aria-hidden="true">${chapter.primaryVisual === 'gravity' ? '🪂' : chapter.primaryVisual === 'fraction3d' ? '🧊' : chapter.primaryVisual === 'word-builder' ? '🔤' : chapter.primaryVisual === 'timeline' ? '🕰️' : '🔎'}</span><div><p>${label}</p><h3>${title}</h3></div></div>`;
    let body = "";
    if (chapter.primaryVisual === "gravity") body = this.renderGravityActivity(isEn);
    else if (chapter.primaryVisual === "fraction3d") body = this.renderFractionSlicer(isEn);
    else if (chapter.primaryVisual === "geometry3d") body = this.renderGeometryModel(isEn);
    else if (chapter.primaryVisual === "money") body = this.renderMoneyActivity(isEn);
    else if (chapter.primaryVisual === "measure") body = this.renderMeasureActivity(isEn);
    else if (chapter.primaryVisual === "data") body = this.renderDataActivity(isEn);
    else if (["senses", "animals", "plants"].includes(chapter.primaryVisual)) body = this.renderScienceActivity(chapter.primaryVisual, isEn);
    else if (chapter.primaryVisual === "word-builder") body = this.renderWordBuilder(isEn);
    else if (chapter.primaryVisual === "timeline") body = this.renderHistoryMethod(isEn);
    else if (chapter.primaryVisual === "number-line") body = this.renderNumberLine(isEn);
    else body = this.renderObservationActivity(isEn);
    return header + body + `</section>`;
  }

  renderGravityActivity(isEn) {
    const g = isEn ? "Gravity" : "Graviti";
    return `<div class="primary-activity-grid"><canvas id="primaryGravityCanvas" width="480" height="210" role="img" aria-label="${isEn ? 'Object falling under gravity' : 'Objek jatuh akibat graviti'}"></canvas><div class="primary-activity-controls"><label for="primaryGravityRange">${isEn ? 'Gravity strength' : 'Kekuatan graviti'} <output id="primaryGravityValue">9.8</output></label><input id="primaryGravityRange" type="range" min="2" max="16" value="9.8" step="0.2" oninput="window.visualGraphics.updatePrimaryGravity(this.value)"><button type="button" onclick="window.visualGraphics.dropPrimaryObject()">${isEn ? 'Drop object' : 'Lepaskan objek'}</button><p id="primaryGravityHint">${isEn ? 'Change gravity, then drop the ball. The canvas shows its position as time passes.' : 'Ubah graviti, kemudian lepaskan bola. Kanvas menunjukkan kedudukannya mengikut masa.'}</p></div></div><p class="primary-visual-note">${isEn ? `${g} causes an object's downward speed to increase while it falls. This model ignores air resistance.` : `${g} menyebabkan kelajuan objek ke bawah bertambah semasa jatuh. Model ini mengabaikan rintangan udara.`}</p>`;
  }

  renderFractionSlicer(isEn) {
    return `<div class="primary-activity-grid"><div class="fraction-stage"><button type="button" id="primaryFractionShape" class="fraction-shape" onclick="window.visualGraphics.rotatePrimaryFraction()" aria-label="${isEn ? 'Rotate the three-dimensional fraction model' : 'Putarkan model pecahan tiga dimensi'}"></button><div class="fraction-caption" id="primaryFractionLabel">2 / 4</div></div><div class="primary-activity-controls"><label for="primaryFractionDenominator">${isEn ? 'Equal parts' : 'Bahagian sama besar'}</label><input id="primaryFractionDenominator" type="range" min="2" max="12" value="4" oninput="window.visualGraphics.updatePrimaryFraction()"><label for="primaryFractionNumerator">${isEn ? 'Parts selected' : 'Bahagian dipilih'}</label><input id="primaryFractionNumerator" type="range" min="0" max="4" value="2" oninput="window.visualGraphics.updatePrimaryFraction()"><p id="primaryFractionHint">${isEn ? 'Change the sliders. Rotate the model to inspect the shaded share.' : 'Laraskan gelangsar. Putarkan model untuk melihat bahagian berlorek.'}</p></div></div><p class="primary-visual-note">${isEn ? 'The shaded part is the numerator; the total equal parts are the denominator.' : 'Bahagian berlorek ialah pembilang; jumlah bahagian sama besar ialah penyebut.'}</p>`;
  }

  renderGeometryModel(isEn) {
    return `<div class="geometry-activity"><button type="button" class="geometry-cube" id="primaryGeometryCube" onclick="this.classList.toggle('turned')" aria-label="${isEn ? 'Rotate a cube model' : 'Putarkan model kubus'}"><span class="cube-face front">${isEn ? 'Front' : 'Depan'}</span><span class="cube-face back">${isEn ? 'Back' : 'Belakang'}</span><span class="cube-face right">${isEn ? 'Side' : 'Sisi'}</span><span class="cube-face left"></span><span class="cube-face top"></span><span class="cube-face bottom"></span></button><div class="geometry-facts"><strong>${isEn ? 'Cube' : 'Kubus'}</strong><span>${isEn ? '6 square faces' : '6 permukaan segi empat sama'}</span><span>${isEn ? '12 edges · 8 vertices' : '12 sisi · 8 bucu'}</span><small>${isEn ? 'Select the model to turn it.' : 'Pilih model untuk memutarkannya.'}</small></div></div>`;
  }

  renderMoneyActivity(isEn) {
    return `<div class="primary-activity-grid"><div class="money-visual"><span>RM</span><strong id="primaryMoneyTotal">5.00</strong><small>${isEn ? 'total' : 'jumlah'}</small></div><div class="primary-activity-controls"><label for="primaryMoneyA">${isEn ? 'First amount (RM)' : 'Nilai pertama (RM)'}</label><input id="primaryMoneyA" type="range" min="0" max="20" value="2" oninput="window.visualGraphics.updatePrimaryMoney()"><label for="primaryMoneyB">${isEn ? 'Second amount (RM)' : 'Nilai kedua (RM)'}</label><input id="primaryMoneyB" type="range" min="0" max="20" value="3" oninput="window.visualGraphics.updatePrimaryMoney()"><p id="primaryMoneyEquation">RM2 + RM3 = RM5</p></div></div><p class="primary-visual-note">${isEn ? 'Combine the two amounts. Estimate first, then check the total.' : 'Gabungkan dua nilai. Buat anggaran dahulu, kemudian semak jumlah.'}</p>`;
  }

  renderMeasureActivity(isEn) {
    return `<div class="measure-activity"><label for="primaryMeasureRange">${isEn ? 'Measured length (cm)' : 'Panjang yang diukur (cm)'}</label><input id="primaryMeasureRange" type="range" min="1" max="12" value="6" oninput="window.visualGraphics.updatePrimaryMeasure(this.value)"><div class="measure-ruler"><span id="primaryMeasureBar" style="width:50%"></span><div>${Array.from({length:13},(_,i)=>`<i>${i}</i>`).join("")}</div></div><p id="primaryMeasureValue" aria-live="polite">6 cm</p><p class="primary-visual-note">${isEn ? 'Read the scale from zero and include the unit in your answer.' : 'Baca skala bermula dari sifar dan sertakan unit dalam jawapan.'}</p></div>`;
  }

  renderDataActivity(isEn) {
    return `<div class="data-activity"><label for="primaryDataRange">${isEn ? 'Change the number of learners who chose football' : 'Ubah bilangan murid yang memilih bola sepak'}</label><input id="primaryDataRange" type="range" min="0" max="10" value="6" oninput="window.visualGraphics.updatePrimaryData(this.value)"><div class="data-bars"><span>${isEn ? 'Football' : 'Bola sepak'}<b id="primaryDataBar" style="height:60%"></b><small id="primaryDataCount">6</small></span><span>${isEn ? 'Badminton' : 'Badminton'}<b style="height:40%"></b><small>4</small></span></div><p id="primaryDataHint" aria-live="polite">${isEn ? 'Football is the most popular choice.' : 'Bola sepak ialah pilihan paling popular.'}</p></div>`;
  }

  renderScienceActivity(type, isEn) {
    if (type === "senses") return `<div class="science-choice"><p>${isEn ? 'Select a sense organ to explore its role.' : 'Pilih organ deria untuk melihat fungsinya.'}</p><div>${[["👁️","Mata","Eye","Melihat warna, bentuk dan cahaya.","Detects light, colour and shape."],["👂","Telinga","Ear","Mengesan bunyi di sekeliling.","Detects sounds around us."],["👃","Hidung","Nose","Mengesan bau melalui udara.","Detects smells in the air."],["👅","Lidah","Tongue","Mengesan rasa makanan.","Detects the taste of food."],["✋","Kulit","Skin","Mengesan sentuhan dan suhu.","Detects touch and temperature."]].map((a,i)=>`<button type="button" onclick="window.visualGraphics.selectSense(${i})">${a[0]} ${isEn?a[2]:a[1]}</button>`).join("")}</div><p id="primaryScienceHint" aria-live="polite">${isEn?'Select an organ.':'Pilih satu organ.'}</p></div>`;
    if (type === "animals") return `<div class="science-choice"><p>${isEn ? 'Choose a group to compare a key feature.' : 'Pilih kumpulan untuk membandingkan satu ciri utama.'}</p><div><button type="button" onclick="window.visualGraphics.selectAnimalGroup(0)">${isEn?'Vertebrates':'Vertebrata'}</button><button type="button" onclick="window.visualGraphics.selectAnimalGroup(1)">${isEn?'Invertebrates':'Invertebrata'}</button></div><p id="primaryScienceHint" aria-live="polite">${isEn?'Vertebrates have a backbone; invertebrates do not.':'Vertebrata mempunyai tulang belakang; invertebrata tidak.'}</p></div>`;
    return `<div class="science-choice"><label for="primaryPlantStage">${isEn ? 'Explore a plant life cycle' : 'Teroka kitar hidup tumbuhan'}</label><input id="primaryPlantStage" type="range" min="0" max="3" value="0" oninput="window.visualGraphics.updatePlantStage(this.value)"><div class="plant-stage" id="primaryPlantStageIcon">🌰</div><p id="primaryScienceHint" aria-live="polite">${isEn?'Seed: growth begins when the conditions are suitable.':'Biji benih: pertumbuhan bermula apabila keadaannya sesuai.'}</p></div>`;
  }

  renderWordBuilder(isEn) {
    const words = isEn ? ["The", "small", "bird", "can", "fly."] : ["Burung", "kecil", "itu", "boleh", "terbang."];
    const order = isEn ? ["The", "small", "bird", "can", "fly."].join(" ") : ["Burung", "kecil", "itu", "boleh", "terbang."].join(" ");
    return `<p class="primary-visual-note">${isEn ? 'Select the word tiles in order to build a complete sentence.' : 'Pilih jubin perkataan mengikut urutan untuk membina ayat yang lengkap.'}</p><div class="word-builder"><div class="word-tray" id="primaryWordTray">${words.map((word, i) => `<button type="button" draggable="true" data-word="${word}" onclick="window.visualGraphics.addPrimaryWord(this)" ondragstart="window.visualGraphics.dragPrimaryWord(event)">${word}</button>`).join("")}</div><div class="word-drop-zone" id="primaryWordDrop" ondragover="event.preventDefault()" ondrop="window.visualGraphics.dropPrimaryWord(event)" aria-label="${isEn ? 'Sentence building area' : 'Ruang membina ayat'}">${isEn ? 'Select or drag words here' : 'Pilih atau seret perkataan ke sini'}</div><div class="word-builder-actions"><button type="button" onclick="window.visualGraphics.checkPrimarySentence()">${isEn ? 'Check sentence' : 'Semak ayat'}</button><button type="button" class="secondary" onclick="window.visualGraphics.resetPrimarySentence()">${isEn ? 'Reset' : 'Mula semula'}</button></div><p id="primaryWordFeedback" aria-live="polite"></p></div>`;
  }

  renderHistoryMethod(isEn) {
    return `<p class="primary-visual-note">${isEn ? 'Explore a historical question using a simple evidence trail.' : 'Teroka satu persoalan sejarah melalui langkah bukti yang mudah.'}</p><div class="history-trail"><button type="button" aria-pressed="true" onclick="window.visualGraphics.selectHistoryStep(0)"><b>1</b>${isEn ? 'Ask' : 'Tanya'}</button><button type="button" aria-pressed="false" onclick="window.visualGraphics.selectHistoryStep(1)"><b>2</b>${isEn ? 'Inspect a source' : 'Teliti sumber'}</button><button type="button" aria-pressed="false" onclick="window.visualGraphics.selectHistoryStep(2)"><b>3</b>${isEn ? 'Explain with evidence' : 'Huraikan dengan bukti'}</button></div><p id="primaryHistoryHint" class="primary-visual-note">${isEn ? 'Start with a question about the people, place or event in this lesson.' : 'Mulakan dengan soalan tentang tokoh, tempat atau peristiwa dalam pelajaran ini.'}</p>`;
  }

  renderNumberLine(isEn) {
    return `<div class="number-line-activity"><label for="primaryNumberRange">${isEn ? 'Move the marker' : 'Gerakkan penanda'}</label><input id="primaryNumberRange" type="range" min="0" max="20" value="8" oninput="window.visualGraphics.updatePrimaryNumber(this.value)"><div class="number-line-track"><span id="primaryNumberMarker" style="left:40%"></span></div><p id="primaryNumberHint" aria-live="polite">${isEn ? 'Number 8' : 'Nombor 8'}</p><p class="primary-visual-note">${isEn ? 'Use the number line to compare values and describe how far apart they are.' : 'Gunakan garis nombor untuk membandingkan nilai dan menerangkan jarak antara nombor.'}</p></div>`;
  }

  renderObservationActivity(isEn) {
    return `<div class="observation-activity"><p>${isEn ? 'Choose a step in a fair investigation.' : 'Pilih langkah dalam penyiasatan yang adil.'}</p><div><button type="button" onclick="window.visualGraphics.setObservationStep(0)">${isEn ? 'Predict' : 'Ramalkan'}</button><button type="button" onclick="window.visualGraphics.setObservationStep(1)">${isEn ? 'Test one change' : 'Uji satu perubahan'}</button><button type="button" onclick="window.visualGraphics.setObservationStep(2)">${isEn ? 'Record evidence' : 'Catat bukti'}</button></div><p id="primaryObservationHint" aria-live="polite">${isEn ? 'A good investigation changes one factor and records what happens.' : 'Penyiasatan yang baik mengubah satu faktor dan merekodkan hasilnya.'}</p></div>`;
  }

  updatePrimaryGravity(value) {
    const val = Number(value); const label = document.getElementById("primaryGravityValue"); if (label) label.textContent = val.toFixed(1);
    this.drawPrimaryGravity(0);
  }

  drawPrimaryGravity(progress = 0) {
    const canvas = document.getElementById("primaryGravityCanvas"); if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const w = canvas.width, h = canvas.height, gravity = Number(document.getElementById("primaryGravityRange")?.value || 9.8);
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = "#eff6ff"; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(24, h - 28); ctx.lineTo(w - 20, h - 28); ctx.stroke();
    ctx.fillStyle = "#4f46e5"; ctx.beginPath(); ctx.arc(w / 2, 26 + Math.min(h - 72, progress * progress * gravity * 0.38), 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#475569"; ctx.font = "14px system-ui"; ctx.fillText(`${gravity.toFixed(1)} m/s²`, 28, 26);
    ctx.fillText(`${Math.min(progress, 3).toFixed(1)} s`, w - 76, 26);
  }

  dropPrimaryObject() {
    let start = null; const draw = time => { if (start === null) start = time; const t = Math.min(3, (time - start) / 1000); this.drawPrimaryGravity(t); if (t < 3) requestAnimationFrame(draw); };
    this.drawPrimaryGravity(0); requestAnimationFrame(draw);
  }

  updatePrimaryFraction() {
    const denominator = Number(document.getElementById("primaryFractionDenominator")?.value || 4);
    const numerator = document.getElementById("primaryFractionNumerator"); if (!numerator) return;
    numerator.max = String(denominator); if (Number(numerator.value) > denominator) numerator.value = String(denominator);
    const n = Number(numerator.value), shape = document.getElementById("primaryFractionShape");
    if (shape) {
      const step = 360 / denominator, boundary = `repeating-conic-gradient(transparent 0deg ${Math.max(0, step - 1.5)}deg,#fff ${Math.max(0, step - 1.5)}deg ${step}deg)`;
      shape.style.background = `${boundary}, conic-gradient(#4f46e5 0 ${100 * n / denominator}%, #e2e8f0 ${100 * n / denominator}% 100%)`;
    }
    const label = document.getElementById("primaryFractionLabel"); if (label) label.textContent = `${n} / ${denominator}`;
  }

  rotatePrimaryFraction() { const shape = document.getElementById("primaryFractionShape"); if (shape) shape.classList.toggle("turned"); }
  updatePrimaryMoney() {
    const a=Number(document.getElementById("primaryMoneyA")?.value||0), b=Number(document.getElementById("primaryMoneyB")?.value||0), total=a+b;
    const label=document.getElementById("primaryMoneyTotal"), equation=document.getElementById("primaryMoneyEquation");
    if(label)label.textContent=total.toFixed(2); if(equation)equation.textContent=`RM${a} + RM${b} = RM${total}`;
  }
  updatePrimaryMeasure(value) { const bar=document.getElementById("primaryMeasureBar"),label=document.getElementById("primaryMeasureValue");if(bar)bar.style.width=`${Number(value)/12*100}%`;if(label)label.textContent=`${value} cm`; }
  updatePrimaryData(value) { const bar=document.getElementById("primaryDataBar"),count=document.getElementById("primaryDataCount"),hint=document.getElementById("primaryDataHint");if(bar)bar.style.height=`${Number(value)*10}%`;if(count)count.textContent=value;if(hint){const en=window.app?.currentLanguage==='en';hint.textContent=Number(value)>4?(en?'Football is the most popular choice.':'Bola sepak ialah pilihan paling popular.'):Number(value)<4?(en?'Badminton is the most popular choice.':'Badminton ialah pilihan paling popular.'):(en?'Both choices have the same number of votes.':'Kedua-dua pilihan mendapat bilangan undi yang sama.');} }
  selectSense(index) { const en=window.app?.currentLanguage==='en';const items=en?["The eye detects light, colour and shape.","The ear detects sounds around us.","The nose detects smells in the air.","The tongue detects tastes in food.","The skin detects touch and temperature."]:["Mata mengesan cahaya, warna dan bentuk.","Telinga mengesan bunyi di sekeliling.","Hidung mengesan bau melalui udara.","Lidah mengesan rasa makanan.","Kulit mengesan sentuhan dan suhu."];const hint=document.getElementById('primaryScienceHint');if(hint)hint.textContent=items[index]||items[0]; }
  selectAnimalGroup(index) { const en=window.app?.currentLanguage==='en';const hint=document.getElementById('primaryScienceHint');if(hint)hint.textContent=index?(en?'Invertebrates do not have a backbone; examples include butterflies and earthworms.':'Invertebrata tidak mempunyai tulang belakang; contohnya rama-rama dan cacing tanah.'):(en?'Vertebrates have a backbone; examples include fish and birds.':'Vertebrata mempunyai tulang belakang; contohnya ikan dan burung.'); }
  updatePlantStage(value) { const en=window.app?.currentLanguage==='en';const stages=en?[["🌰","Seed: growth begins when conditions are suitable."],["🌱","Germination: a root and shoot begin to grow."],["🪴","Seedling: leaves develop and the plant grows."],["🌼","Mature plant: it can flower and produce seeds." ]]:[["🌰","Biji benih: pertumbuhan bermula apabila keadaannya sesuai."],["🌱","Percambahan: akar dan pucuk mula tumbuh."],["🪴","Anak pokok: daun berkembang dan pokok membesar."],["🌼","Pokok matang: pokok boleh berbunga dan menghasilkan biji benih."]];const stage=stages[Number(value)]||stages[0],icon=document.getElementById('primaryPlantStageIcon'),hint=document.getElementById('primaryScienceHint');if(icon)icon.textContent=stage[0];if(hint)hint.textContent=stage[1]; }

  addPrimaryWord(button) { const target = document.getElementById("primaryWordDrop"); if (target && button?.dataset.word) this.appendPrimaryWord(button.dataset.word); }
  dragPrimaryWord(event) { event.dataTransfer?.setData("text/plain", event.currentTarget?.dataset.word || ""); }
  dropPrimaryWord(event) { event.preventDefault(); this.appendPrimaryWord(event.dataTransfer?.getData("text/plain")); }
  appendPrimaryWord(word) {
    if (!word) return; const target = document.getElementById("primaryWordDrop"); if (!target) return;
    const words = target.dataset.words ? JSON.parse(target.dataset.words) : []; words.push(word); target.dataset.words = JSON.stringify(words); target.textContent = words.join(" ");
  }
  checkPrimarySentence() {
    const target = document.getElementById("primaryWordDrop"), feedback = document.getElementById("primaryWordFeedback"); if (!target || !feedback) return;
    const expected = this.activeWordSentence || null;
    const words = target.dataset.words ? JSON.parse(target.dataset.words) : [];
    const isEn = window.app?.currentLanguage === "en";
    const correct = words.join(" ") === (isEn ? "The small bird can fly." : "Burung kecil itu boleh terbang.");
    feedback.textContent = correct ? (isEn ? "Correct. The sentence is in a clear order." : "Betul. Susunan ayat ini jelas.") : (isEn ? "Check the word order, then try again." : "Semak susunan perkataan, kemudian cuba lagi.");
    feedback.className = correct ? "is-correct" : "";
  }
  resetPrimarySentence() { const target = document.getElementById("primaryWordDrop"), feedback = document.getElementById("primaryWordFeedback"); if (target) { target.dataset.words = "[]"; target.textContent = window.app?.currentLanguage === "en" ? "Select or drag words here" : "Pilih atau seret perkataan ke sini"; } if (feedback) feedback.textContent = ""; }
  selectHistoryStep(step) {
    const isEn = window.app?.currentLanguage === "en";
    const hints = isEn ? ["Start with a question about the people, place or event in this lesson.", "Check who made the source, when it was made and what it can show.", "Use details from the source to support a careful explanation."] : ["Mulakan dengan soalan tentang tokoh, tempat atau peristiwa dalam pelajaran ini.", "Semak siapa menghasilkan sumber, bila ia dihasilkan dan perkara yang dapat ditunjukkan.", "Gunakan butiran sumber untuk menyokong huraian yang teliti."];
    const hint = document.getElementById("primaryHistoryHint"); if (hint) hint.textContent = hints[step] || hints[0];
    document.querySelectorAll(".history-trail button").forEach((button, index) => button.setAttribute("aria-pressed", String(index === step)));
  }
  updatePrimaryNumber(value) { const marker = document.getElementById("primaryNumberMarker"), hint = document.getElementById("primaryNumberHint"); if (marker) marker.style.left = `${Number(value) / 20 * 100}%`; if (hint) hint.textContent = `${window.app?.currentLanguage === "en" ? "Number" : "Nombor"} ${value}`; }
  setObservationStep(step) {
    const isEn = window.app?.currentLanguage === "en";
    const hints = isEn ? ["Write what you think will happen before you test.", "Change one factor and keep the other conditions the same.", "Record what you observe, then compare it with your prediction."] : ["Catat ramalan sebelum menjalankan ujian.", "Ubah satu faktor dan kekalkan keadaan lain.", "Catat pemerhatian, kemudian bandingkan dengan ramalan."];
    const hint = document.getElementById("primaryObservationHint"); if (hint) hint.textContent = hints[step] || hints[0];
  }

  topicIcon(context) {
    if (/kuadratik|quadratic|parabola/.test(context)) return "📈";
    if (/pecahan|fraction/.test(context)) return "🍰";
    if (/sejarah|nasionalis|kemerdekaan|kedaulatan|history/.test(context)) return "🕰️";
    if (/atom|kimia|chemistry/.test(context)) return "⚛️";
    if (/darah|jantung|heart|peredaran/.test(context)) return "🫀";
    if (/sudut|angle|segi tiga|triangle|geometri/.test(context)) return "📐";
    if (/tumbuhan|plant|ekosistem|ecosystem|sains|science/.test(context)) return "🔬";
    if (/bahasa|tatabahasa|grammar|ayat|sentence/.test(context)) return "📝";
    return "💡";
  }

  renderSubtopicParabola(isEn) {
    return `<div class="grid gap-4 md:grid-cols-[1.5fr_1fr] md:items-center"><svg viewBox="0 0 420 190" role="img" aria-label="${isEn ? 'Quadratic curve' : 'Graf kuadratik'}" class="w-full rounded-xl bg-white"><path d="M35 95H385M210 18V172" stroke="#cbd5e1"/><path id="subtopicParabolaPath" d="M35 30 Q210 178 385 30" fill="none" stroke="#4f46e5" stroke-width="4"/><circle cx="210" cy="95" r="4" fill="#f59e0b"/><text x="370" y="88" fill="#64748b" font-size="12">x</text><text x="218" y="26" fill="#64748b" font-size="12">y</text></svg><div><label for="subtopicParabolaA" class="text-xs font-semibold text-slate-700">${isEn ? 'Change a (curve direction)' : 'Ubah nilai a (arah lengkung)'}</label><input id="subtopicParabolaA" type="range" min="-3" max="3" step="1" value="-1" class="mt-2 w-full accent-indigo-600" oninput="window.visualGraphics.updateSubtopicParabola(this.value)"><p id="subtopicParabolaHint" class="mt-2 text-sm text-slate-700">${isEn ? 'a < 0: the curve opens down.' : 'a < 0: lengkung membuka ke bawah.'}</p><p class="mt-2 text-xs text-slate-500">${isEn ? 'Try positive, negative and zero values.' : 'Cuba nilai positif, negatif dan sifar.'}</p></div></div>`;
  }

  updateSubtopicParabola(value) {
    const a = Number(value);
    const path = document.getElementById("subtopicParabolaPath");
    if (path) {
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const x = -4 + i * 0.2;
        const y = a * x * x;
        const sx = 210 + x * 38;
        const sy = 95 - y * 6;
        pts.push(`${i ? "L" : "M"}${sx.toFixed(1)} ${Math.max(18, Math.min(172, sy)).toFixed(1)}`);
      }
      path.setAttribute("d", pts.join(" "));
    }
    const hint = document.getElementById("subtopicParabolaHint");
    if (hint) hint.textContent = a > 0 ? "a > 0: lengkung membuka ke atas." : a < 0 ? "a < 0: lengkung membuka ke bawah." : "a = 0: tiada lengkung kuadratik.";
  }

  renderSubtopicFraction(isEn) {
    return `<div class="grid gap-4 md:grid-cols-[1fr_1fr] md:items-center"><div class="h-10 overflow-hidden rounded-xl border border-slate-200 bg-white"><div id="subtopicFractionFill" class="h-full bg-indigo-500 transition-all" style="width:40%"></div></div><div><label for="subtopicFractionRange" class="text-xs font-semibold text-slate-700">${isEn ? 'Change the numerator (out of 10)' : 'Ubah pembilang (daripada 10)'}</label><input id="subtopicFractionRange" type="range" min="0" max="10" value="4" class="mt-2 w-full accent-indigo-600" oninput="window.visualGraphics.updateSubtopicFraction(this.value)"><p id="subtopicFractionLabel" class="text-sm font-bold text-indigo-700">4 / 10 = 40%</p></div></div>`;
  }

  updateSubtopicFraction(value) {
    const n = Number(value), fill = document.getElementById("subtopicFractionFill"), label = document.getElementById("subtopicFractionLabel");
    if (fill) fill.style.width = `${n * 10}%`;
    if (label) label.textContent = `${n} / 10 = ${n * 10}%`;
  }

  renderSubtopicLine(isEn) {
    return `<div class="grid gap-4 md:grid-cols-[1.5fr_1fr] md:items-center"><svg viewBox="0 0 420 190" class="w-full rounded-xl bg-white" role="img" aria-label="${isEn ? 'Linear graph' : 'Graf garis lurus'}"><path d="M35 95H385M210 18V172" stroke="#cbd5e1"/><path id="subtopicLinePath" d="M60 155L360 35" stroke="#4f46e5" stroke-width="4"/><circle cx="210" cy="95" r="4" fill="#f59e0b"/></svg><div><label for="subtopicLineSlope" class="text-xs font-semibold text-slate-700">${isEn ? 'Change the gradient' : 'Ubah kecerunan garis'}</label><input id="subtopicLineSlope" type="range" min="-3" max="3" value="1" class="mt-2 w-full accent-indigo-600" oninput="window.visualGraphics.updateSubtopicLine(this.value)"><p id="subtopicLineHint" class="mt-2 text-sm text-slate-700">m = 1</p></div></div>`;
  }

  updateSubtopicLine(value) {
    const m = Number(value), path = document.getElementById("subtopicLinePath"), hint = document.getElementById("subtopicLineHint");
    if (path) path.setAttribute("d", `M60 ${95 + m * 30}L360 ${95 - m * 30}`);
    if (hint) hint.textContent = `m = ${m} · ${m > 0 ? "garis menaik" : m < 0 ? "garis menurun" : "garis mendatar"}`;
  }

  renderSubtopicAngle(isEn) {
    return `<div class="grid gap-4 md:grid-cols-[1fr_1fr] md:items-center"><svg viewBox="0 0 240 150" class="w-full rounded-xl bg-white" role="img" aria-label="${isEn ? 'Angle diagram' : 'Rajah sudut'}"><path d="M35 125H205M35 125L145 25" stroke="#4f46e5" stroke-width="5"/><path id="subtopicAngleArc" d="M75 125 A40 40 0 0 0 67 99" fill="none" stroke="#f59e0b" stroke-width="4"/><text id="subtopicAngleLabel" x="82" y="108" fill="#334155" font-size="13">45°</text></svg><div><label for="subtopicAngleRange" class="text-xs font-semibold text-slate-700">${isEn ? 'Adjust the angle' : 'Laraskan sudut'}</label><input id="subtopicAngleRange" type="range" min="10" max="170" value="45" class="mt-2 w-full accent-indigo-600" oninput="window.visualGraphics.updateSubtopicAngle(this.value)"><p class="text-xs text-slate-500">${isEn ? 'Observe how the angle opens.' : 'Perhatikan perubahan bukaan sudut.'}</p></div></div>`;
  }

  updateSubtopicAngle(value) {
    const angle = Number(value), arc = document.getElementById("subtopicAngleArc"), label = document.getElementById("subtopicAngleLabel");
    const rad = angle * Math.PI / 180, x = 35 + 40 * Math.cos(rad), y = 125 - 40 * Math.sin(rad);
    if (arc) arc.setAttribute("d", `M75 125 A40 40 0 ${angle > 180 ? 1 : 0} 0 ${x.toFixed(1)} ${y.toFixed(1)}`);
    if (label) label.textContent = `${angle}°`;
  }

  renderSubtopicFactMap(facts, isEn, mode) {
    const safeFacts = facts.slice(0, 4);
    return `<div class="grid gap-3 md:grid-cols-[1fr_1.3fr] md:items-center"><div class="relative grid min-h-32 grid-cols-2 gap-2 sm:grid-cols-4">${safeFacts.map((fact, index) => `<button type="button" onclick="window.visualGraphics.selectTopicFact(${index})" aria-pressed="${index === 0}" class="topic-fact-node rounded-xl border border-indigo-100 bg-white p-3 text-left text-xs font-semibold text-slate-700 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-topic-index="${index}">${mode === 'timeline' ? `◉ ${index + 1}` : `✦ ${index + 1}`}<span class="mt-1 block text-[10px] font-normal text-slate-500">${fact.slice(0, 70)}${fact.length > 70 ? '…' : ''}</span></button>`).join("")}</div><div id="topicFactDetail" class="min-h-24 rounded-xl bg-white p-4 text-sm leading-6 text-slate-700">${safeFacts[0] || (isEn ? 'Select a point to explore this idea.' : 'Pilih satu titik untuk meneroka konsep ini.')}</div></div><p class="mt-2 text-[11px] text-slate-500">${isEn ? 'Select a point to focus on that part of the lesson.' : 'Pilih satu titik untuk fokus pada bahagian pelajaran itu.'}</p>`;
  }

  selectTopicFact(index) {
    const fact = this.activeTopicFacts?.[index];
    const detail = document.getElementById("topicFactDetail");
    if (detail && fact) detail.textContent = fact;
    document.querySelectorAll(".topic-fact-node").forEach((button, i) => {
      button.setAttribute("aria-pressed", String(i === index));
      button.classList.toggle("ring-2", i === index);
      button.classList.toggle("ring-indigo-400", i === index);
    });
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
