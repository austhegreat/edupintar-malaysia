/* Lightweight, dependency-free 2D classroom world. */
class EduClassroomWorld {
  constructor() {
    this.canvas = document.getElementById("classroomWorldCanvas");
    this.ctx = this.canvas?.getContext("2d", { alpha: false });
    this.keys = new Set();
    this.player = { x: 0, y: 0, name: "Murid", avatarUrl: "", avatarImage: null };
    this.language = "bm";
    this.grade = "";
    this.running = false;
    this.lastFrame = 0;
    this.target = null;
    this.nearby = null;
    this.frameHandle = 0;
    this.dpr = 1;
    this.width = 0;
    this.height = 0;
    if (!this.canvas || !this.ctx) return;
    this.canvas.addEventListener("pointerdown", event => this.handlePointer(event));
    this.canvas.addEventListener("pointermove", event => this.handleHover(event));
    document.addEventListener("keydown", event => this.handleKeyDown(event));
    document.addEventListener("keyup", event => this.handleKeyUp(event));
    window.addEventListener("blur", () => this.stopMoving());
    document.querySelectorAll("[data-world-key]").forEach(button => {
      const key = button.dataset.worldKey;
      button.addEventListener("pointerdown", event => { event.preventDefault(); this.pressKey(key); });
      button.addEventListener("pointerup", event => { event.preventDefault(); this.releaseKey(key); });
      button.addEventListener("pointercancel", () => this.releaseKey(key));
      button.addEventListener("pointerleave", () => this.releaseKey(key));
    });
    this.resizeObserver = new ResizeObserver(() => { this.resize(); this.draw(); });
    this.resizeObserver.observe(this.canvas);
  }

  updateStudent({ name, avatarUrl, language, grade } = {}) {
    if (name) this.player.name = name;
    if (language) this.language = language;
    if (grade) this.grade = grade;
    if (avatarUrl !== undefined && avatarUrl !== this.player.avatarUrl) {
      this.player.avatarUrl = avatarUrl;
      this.player.avatarImage = null;
      if (avatarUrl) {
        const image = new Image();
        image.onload = () => { this.player.avatarImage = image; this.draw(); };
        image.src = avatarUrl;
      }
    }
    this.draw();
  }

  start() {
    if (!this.canvas || !this.ctx) return;
    this.resize();
    if (!this.player.x) {
      this.player.x = this.width * 0.52;
      this.player.y = this.height * 0.84;
    }
    this.canvas.focus({ preventScroll: true });
    this.draw();
  }

  resize() {
    if (!this.canvas || !this.ctx) return;
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const previousWidth = this.width, previousHeight = this.height;
    if (this.player.x && previousWidth) this.player.x = this.player.x / previousWidth * rect.width;
    if (this.player.y && previousHeight) this.player.y = this.player.y / previousHeight * rect.height;
    this.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.width = rect.width;
    this.height = rect.height;
    const pixelWidth = Math.round(rect.width * this.dpr);
    const pixelHeight = Math.round(rect.height * this.dpr);
    if (this.canvas.width !== pixelWidth || this.canvas.height !== pixelHeight) {
      this.canvas.width = pixelWidth;
      this.canvas.height = pixelHeight;
    }
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  entities() {
    const unit = Math.min(this.width, this.height);
    return [
      { id: "teacher", x: this.width * .52, y: this.height * .42, radius: unit * .105,
        title: this.language === "en" ? "Cikgu Aus" : "Cikgu Aus",
        text: this.language === "en" ? "Your teacher is ready to start a lesson with you." : "Cikgu Aus sudah bersedia untuk memulakan pelajaran bersama anda.",
        action: this.language === "en" ? "Start a lesson" : "Mulakan pelajaran", kind: this.language === "en" ? "YOUR TEACHER" : "CIKGU ANDA" },
      { id: "board", x: this.width * .5, y: this.height * .205, radius: unit * .12,
        title: this.language === "en" ? "Class board" : "Papan kelas",
        text: this.language === "en" ? "Open your class subjects and learning path." : "Buka subjek kelas dan peta pembelajaran anda.",
        action: this.language === "en" ? "Browse subjects" : "Lihat subjek", kind: this.language === "en" ? "CLASSROOM" : "BILIK DARJAH" },
      { id: "bookshelf", x: this.width * .12, y: this.height * .52, radius: unit * .13,
        title: this.language === "en" ? "Class bookshelf" : "Rak buku kelas",
        text: this.language === "en" ? "Choose a subject and find your next learning mission." : "Pilih subjek dan cari misi pembelajaran seterusnya.",
        action: this.language === "en" ? "Explore subjects" : "Teroka subjek", kind: this.language === "en" ? "LEARNING CORNER" : "SUDUT PEMBELAJARAN" }
    ];
  }

  handleKeyDown(event) {
    if (!this.isVisible()) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(event.target?.tagName) || event.target?.isContentEditable) return;
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (["w", "a", "s", "d", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
      event.preventDefault();
      this.target = null;
      this.pressKey(key);
    } else if (key === "e" && this.nearby) {
      event.preventDefault();
      this.activate();
    } else if (key === "Escape") this.dismissInteraction();
  }

  handleKeyUp(event) { this.releaseKey(event.key.length === 1 ? event.key.toLowerCase() : event.key); }
  pressKey(key) { this.keys.add(key); this.beginMoving(); }
  releaseKey(key) { this.keys.delete(key); if (!this.keys.size) this.stopMoving(); }
  stopMoving() { this.keys.clear(); this.running = false; this.lastFrame = 0; cancelAnimationFrame(this.frameHandle); this.draw(); }
  isVisible() { return !document.getElementById("classroomView")?.classList.contains("hidden"); }

  beginMoving() {
    if (this.running) return;
    this.running = true;
    this.frameHandle = requestAnimationFrame(time => this.step(time));
  }

  step(time) {
    if (!this.running || !this.isVisible()) { this.stopMoving(); return; }
    const dt = this.lastFrame ? Math.min((time - this.lastFrame) / 1000, .05) : 0;
    this.lastFrame = time;
    let dx = 0, dy = 0;
    if (this.keys.has("a") || this.keys.has("ArrowLeft")) dx -= 1;
    if (this.keys.has("d") || this.keys.has("ArrowRight")) dx += 1;
    if (this.keys.has("w") || this.keys.has("ArrowUp")) dy -= 1;
    if (this.keys.has("s") || this.keys.has("ArrowDown")) dy += 1;
    if (this.target) {
      dx += Math.sign(this.target.x - this.player.x);
      dy += Math.sign(this.target.y - this.player.y);
      if (Math.hypot(this.target.x - this.player.x, this.target.y - this.player.y) < 6) this.target = null;
    }
    const magnitude = Math.hypot(dx, dy) || 1;
    const speed = Math.max(130, Math.min(this.width, this.height) * .62);
    this.player.x = Math.max(this.width * .045, Math.min(this.width * .955, this.player.x + dx / magnitude * speed * dt));
    this.player.y = Math.max(this.height * .26, Math.min(this.height * .93, this.player.y + dy / magnitude * speed * dt));
    this.updateNearby();
    this.draw();
    const targetStillMoving = this.target && Math.hypot(this.target.x - this.player.x, this.target.y - this.player.y) > 6;
    if (this.keys.size || targetStillMoving) this.frameHandle = requestAnimationFrame(next => this.step(next));
    else { this.running = false; this.lastFrame = 0; }
  }

  updateNearby() {
    const nearest = this.entities().find(entity => Math.hypot(entity.x - this.player.x, entity.y - this.player.y) <= entity.radius);
    if (nearest?.id !== this.nearby?.id) {
      this.nearby = nearest || null;
      if (nearest) this.showInteraction(nearest);
      else this.hideInteraction();
    }
  }

  handlePointer(event) {
    if (!this.isVisible()) return;
    this.canvas.focus({ preventScroll: true });
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left, y = event.clientY - rect.top;
    const entity = this.entities().find(item => Math.hypot(item.x - x, item.y - y) <= item.radius * 1.2);
    if (entity) { this.showInteraction(entity); return; }
    this.target = { x: Math.max(this.width * .045, Math.min(this.width * .955, x)), y: Math.max(this.height * .26, Math.min(this.height * .93, y)) };
    this.beginMoving();
  }

  handleHover(event) {
    if (!this.isVisible()) return;
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left, y = event.clientY - rect.top;
    this.canvas.style.cursor = this.entities().some(item => Math.hypot(item.x - x, item.y - y) <= item.radius * 1.2) ? "pointer" : "crosshair";
  }

  showInteraction(entity) {
    this.nearby = entity;
    const panel = document.getElementById("classroomInteraction");
    if (!panel) return;
    document.getElementById("classroomInteractionKind").textContent = entity.kind;
    document.getElementById("classroomInteractionTitle").textContent = entity.title;
    document.getElementById("classroomInteractionText").textContent = entity.text;
    document.getElementById("classroomInteractionAction").textContent = `${entity.action}  →`;
    panel.hidden = false;
  }

  hideInteraction() { const panel = document.getElementById("classroomInteraction"); if (panel) panel.hidden = true; }
  dismissInteraction() { this.nearby = null; this.hideInteraction(); }

  activate() {
    const entity = this.nearby;
    this.hideInteraction();
    if (entity?.id === "teacher") window.app?.startClassLesson();
    else if (entity) window.app?.openClassroomSubjects();
  }

  draw() {
    if (!this.ctx || !this.width || !this.height) return;
    const c = this.ctx, w = this.width, h = this.height;
    c.clearRect(0, 0, w, h);
    this.drawRoom(c, w, h);
    this.drawBoard(c, w, h);
    this.drawClock(c, w, h);
    this.drawBookshelf(c, w, h);
    this.drawStudents(c, w, h);
    this.drawTeacher(c, w, h);
    this.drawPlayer(c, w, h);
    this.drawObjectHints(c, w, h);
  }

  drawRoom(c, w, h) {
    const wallHeight = h * .29;
    const wall = c.createLinearGradient(0, 0, 0, wallHeight);
    wall.addColorStop(0, "#f1f8ff"); wall.addColorStop(1, "#dcecf6");
    c.fillStyle = wall; c.fillRect(0, 0, w, wallHeight);
    const floor = c.createLinearGradient(0, wallHeight, 0, h);
    floor.addColorStop(0, "#d8ad78"); floor.addColorStop(1, "#bb8350");
    c.fillStyle = floor; c.fillRect(0, wallHeight, w, h - wallHeight);
    c.fillStyle = "#93623e"; c.fillRect(0, wallHeight - 8, w, 12);
    c.strokeStyle = "#a96e43"; c.lineWidth = 2;
    for (let y = wallHeight + 42; y < h; y += 52) {
      c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke();
      const offset = Math.round((y - wallHeight) / 52) % 2 ? 0 : w * .1;
      for (let x = offset; x < w; x += w * .2) { c.beginPath(); c.moveTo(x, y - 52); c.lineTo(x, y); c.stroke(); }
    }
    this.drawWindow(c, w * .055, h * .075, w * .12, h * .15);
    this.drawWindow(c, w * .825, h * .075, w * .12, h * .15);
    c.fillStyle = "#b6d5b0"; c.font = `bold ${Math.max(11, h * .022)}px system-ui`; c.textAlign = "center";
    c.fillText(this.language === "en" ? "A bright day to learn" : "Hari cerah untuk belajar", w * .5, h * .105);
  }

  drawWindow(c, x, y, width, height) {
    c.fillStyle = "#8a593a"; this.roundRect(c, x - 5, y - 5, width + 10, height + 10, 8); c.fill();
    const sky = c.createLinearGradient(x, y, x, y + height); sky.addColorStop(0, "#9fe0ff"); sky.addColorStop(1, "#cdf1d2");
    c.fillStyle = sky; c.fillRect(x, y, width, height);
    c.strokeStyle = "#fff8eb"; c.lineWidth = 4; c.strokeRect(x, y, width, height);
    c.beginPath(); c.moveTo(x + width / 2, y); c.lineTo(x + width / 2, y + height); c.moveTo(x, y + height * .56); c.lineTo(x + width, y + height * .56); c.stroke();
    c.fillStyle = "#67b977"; c.beginPath(); c.ellipse(x + width * .28, y + height * .68, width * .24, height * .16, -.3, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.ellipse(x + width * .73, y + height * .72, width * .2, height * .14, .35, 0, Math.PI * 2); c.fill();
  }

  drawBoard(c, w, h) {
    const x = w * .35, y = h * .16, bw = w * .3, bh = h * .19;
    c.save(); c.shadowColor = "#45321f55"; c.shadowBlur = 10; c.shadowOffsetY = 5;
    c.fillStyle = "#905a37"; this.roundRect(c, x - 9, y - 8, bw + 18, bh + 20, 8); c.fill(); c.restore();
    c.fillStyle = "#2f5e4a"; this.roundRect(c, x, y, bw, bh, 3); c.fill();
    c.strokeStyle = "#d5ac72"; c.lineWidth = 3; c.strokeRect(x + 5, y + 5, bw - 10, bh - 10);
    c.textAlign = "center"; c.fillStyle = "#fff3ca"; c.font = `900 ${Math.max(12, h * .027)}px system-ui`;
    c.fillText(this.language === "en" ? "TODAY'S CLASS" : "KELAS HARI INI", w * .5, y + bh * .36);
    c.fillStyle = "#d9f0db"; c.font = `600 ${Math.max(10, h * .019)}px system-ui`;
    c.fillText(this.language === "en" ? "Learn  ·  Practice  ·  Grow" : "Belajar  ·  Berlatih  ·  Berjaya", w * .5, y + bh * .69);
    c.fillStyle = "#eecb74"; c.font = `bold ${Math.max(9, h * .016)}px system-ui`;
    c.fillText("✦  ✦  ✦", w * .5, y + bh * .88);
  }

  drawClock(c, w, h) {
    const x = w * .73, y = h * .15, r = Math.min(w, h) * .045;
    c.fillStyle = "#fffaf0"; c.strokeStyle = "#9f704c"; c.lineWidth = 3; c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill(); c.stroke();
    c.strokeStyle = "#586171"; c.lineWidth = 2; c.beginPath(); c.moveTo(x, y); c.lineTo(x, y - r * .55); c.moveTo(x, y); c.lineTo(x + r * .43, y + r * .2); c.stroke();
  }

  drawBookshelf(c, w, h) {
    const x = w * .035, y = h * .34, bw = w * .14, bh = h * .32;
    c.fillStyle = "#8b5735"; this.roundRect(c, x, y, bw, bh, 7); c.fill();
    c.fillStyle = "#bd8050"; c.fillRect(x + 6, y + 8, bw - 12, bh - 16);
    for (let row = 0; row < 3; row++) {
      const shelfY = y + 12 + row * (bh - 15) / 3;
      c.fillStyle = "#70462e"; c.fillRect(x + 5, shelfY + bh / 3 - 4, bw - 10, 5);
      const colors = ["#f6d779", "#6ba5d9", "#ed8f86", "#74bd91", "#b796dc"];
      for (let book = 0; book < 5; book++) {
        const bookX = x + 10 + book * (bw - 24) / 5;
        c.fillStyle = colors[(book + row) % colors.length];
        this.roundRect(c, bookX, shelfY + 3, bw * .11, bh * .22, 2); c.fill();
        c.fillStyle = "#fff6d8"; c.fillRect(bookX + 2, shelfY + 7, bw * .11 - 4, 2);
      }
    }
    this.label(c, this.language === "en" ? "BOOKS" : "BUKU", x + bw / 2, y + bh + 17, Math.max(9, h * .017));
  }

  drawStudents(c, w, h) {
    const students = [
      { x: .27, y: .57, name: "Aisyah", emoji: "👧🏻", shirt: "#f08ca5" },
      { x: .43, y: .66, name: "Amir", emoji: "👦🏽", shirt: "#72aee1" },
      { x: .69, y: .62, name: "Mei Ling", emoji: "👧🏻", shirt: "#f0bd55" },
      { x: .83, y: .53, name: "Kumar", emoji: "👦🏾", shirt: "#71b98d" }
    ];
    students.forEach(student => this.drawDesk(c, w * student.x, h * student.y, Math.min(w, h), student));
  }

  drawDesk(c, x, y, unit, student) {
    const scale = unit / 540, deskW = 86 * scale, deskH = 34 * scale;
    c.save(); c.shadowColor = "#4d332722"; c.shadowBlur = 6; c.shadowOffsetY = 4;
    c.fillStyle = "#b87945"; this.roundRect(c, x - deskW / 2, y, deskW, deskH, 7 * scale); c.fill(); c.restore();
    c.fillStyle = "#98603b"; c.fillRect(x - deskW / 2 + 5 * scale, y + deskH - 3 * scale, deskW - 10 * scale, 5 * scale);
    c.fillStyle = student.shirt; c.beginPath(); c.ellipse(x, y - 19 * scale, 24 * scale, 21 * scale, 0, Math.PI, Math.PI * 2); c.fill();
    c.fillStyle = "#f0c8a9"; c.beginPath(); c.arc(x, y - 38 * scale, 17 * scale, 0, Math.PI * 2); c.fill();
    c.fillStyle = "#403b4a"; c.beginPath(); c.arc(x, y - 42 * scale, 17 * scale, Math.PI, Math.PI * 2); c.fill();
    c.font = `${22 * scale}px system-ui`; c.textAlign = "center"; c.fillText(student.emoji, x, y - 32 * scale);
    this.label(c, student.name, x, y + deskH + 15 * scale, 10 * scale);
  }

  drawTeacher(c, w, h) {
    const x = w * .52, y = h * .46, scale = Math.min(w, h) / 540;
    c.save(); c.translate(x, y); c.scale(scale, scale);
    c.strokeStyle = "#252334"; c.lineWidth = 6; c.lineCap = "round";
    // Simple hand-drawn stick body, legs and waving arm.
    c.beginPath(); c.moveTo(0, 4); c.lineTo(0, 72); c.moveTo(0, 20); c.lineTo(-30, 47); c.moveTo(0, 20); c.quadraticCurveTo(28, 5, 36, -34); c.moveTo(0, 72); c.lineTo(-19, 105); c.moveTo(0, 72); c.lineTo(19, 105); c.stroke();
    c.fillStyle = "#fffdf8"; c.beginPath(); c.arc(0, -19, 27, 0, Math.PI * 2); c.fill(); c.stroke();
    c.fillStyle = "#282637"; c.beginPath(); c.moveTo(-34, -48); c.lineTo(0, -62); c.lineTo(34, -48); c.lineTo(0, -36); c.closePath(); c.fill();
    c.fillStyle = "#282637"; c.fillRect(-15, -44, 30, 7);
    c.fillStyle = "#282637"; c.beginPath(); c.arc(-8, -20, 2.5, 0, Math.PI * 2); c.arc(8, -20, 2.5, 0, Math.PI * 2); c.fill();
    c.strokeStyle = "#282637"; c.lineWidth = 2.5; c.beginPath(); c.arc(0, -11, 7, .15, Math.PI - .15); c.stroke();
    c.fillStyle = "#ef6370"; c.beginPath(); c.moveTo(-6, 5); c.lineTo(6, 5); c.lineTo(0, 20); c.closePath(); c.fill();
    c.fillStyle = "#282637"; c.beginPath(); c.arc(36, -34, 5, 0, Math.PI * 2); c.fill();
    c.restore();
    this.label(c, "Cikgu Aus", x, y + 120 * scale, Math.max(10, h * .02));
    // Teacher's desk
    c.fillStyle = "#98603b"; this.roundRect(c, w * .44, h * .65, w * .16, h * .055, 7); c.fill();
    c.fillStyle = "#b97945"; c.fillRect(w * .45, h * .65, w * .14, h * .025);
  }

  drawPlayer(c, w, h) {
    const { x, y, avatarImage, name } = this.player, r = Math.max(18, Math.min(w, h) * .042);
    c.save(); c.shadowColor = "#1c244055"; c.shadowBlur = 8; c.shadowOffsetY = 4;
    c.fillStyle = "#5b55e9"; c.beginPath(); c.ellipse(x, y + r * .65, r * .82, r * .92, 0, 0, Math.PI * 2); c.fill(); c.restore();
    c.save(); c.beginPath(); c.arc(x, y, r * .78, 0, Math.PI * 2); c.clip();
    c.fillStyle = "#f2c9aa"; c.fillRect(x - r, y - r, r * 2, r * 2);
    if (avatarImage?.complete && avatarImage.naturalWidth) c.drawImage(avatarImage, x - r, y - r, r * 2, r * 2);
    else { c.font = `${r * 1.4}px system-ui`; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("🙂", x, y + 1); }
    c.restore(); c.strokeStyle = "#fff"; c.lineWidth = 3; c.beginPath(); c.arc(x, y, r * .78, 0, Math.PI * 2); c.stroke();
    this.label(c, name, x, y - r - 9, Math.max(10, h * .018), true);
  }

  drawObjectHints(c, w, h) {
    this.entities().forEach(entity => {
      if (entity.id !== this.nearby?.id) return;
      c.strokeStyle = "#ffce66"; c.lineWidth = 3; c.setLineDash([6, 5]);
      c.beginPath(); c.arc(entity.x, entity.y, entity.radius * .78, 0, Math.PI * 2); c.stroke(); c.setLineDash([]);
    });
    if (!this.nearby) return;
    const text = this.language === "en" ? "Press E or tap the card" : "Tekan E atau sentuh kad";
    this.label(c, text, this.player.x, this.player.y + Math.min(w, h) * .105, Math.max(9, h * .016), true);
  }

  label(c, text, x, y, size, strong = false) {
    c.save(); c.font = `${strong ? "800" : "700"} ${Math.max(8, size)}px system-ui, sans-serif`;
    const width = c.measureText(text).width + 18, height = Math.max(19, size * 1.65);
    c.fillStyle = strong ? "#4039c8" : "#fffdf6";
    this.roundRect(c, x - width / 2, y - height / 2, width, height, height / 2); c.fill();
    c.fillStyle = strong ? "#fff" : "#495069"; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(text, x, y + .5);
    c.restore();
  }

  roundRect(c, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + width, y, x + width, y + height, r); c.arcTo(x + width, y + height, x, y + height, r); c.arcTo(x, y + height, x, y, r); c.arcTo(x, y, x + width, y, r); c.closePath();
  }
}

window.classroomWorld = new EduClassroomWorld();
