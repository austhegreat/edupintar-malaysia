/**
 * EduPintar Malaysia - Web Audio Synthesizer Engine
 * Menghasilkan kesan bunyi (Sound FX) interaktif menggunakan Web Audio API tanpa memerlukan fail audio luaran.
 */

class EduAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initOnUserGesture();
  }

  initOnUserGesture() {
    const unlock = () => {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      } else if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
  }

  toggleSound() {
    this.enabled = !this.enabled;
    const btn = document.getElementById("soundToggleBtn");
    if (btn) {
      btn.innerHTML = this.enabled ? "🔊 <span class='hidden sm:inline'>Bunyi: Hidup</span>" : "🔇 <span class='hidden sm:inline'>Bunyi: Senyap</span>";
    }
    if (this.enabled) this.playTone(523.25, 0.1, "sine");
    return this.enabled;
  }

  playTone(freq, duration = 0.15, type = "sine", gainVal = 0.12) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio fallback
    }
  }

  playClick() {
    this.playTone(600, 0.05, "triangle", 0.08);
  }

  playCardFlip() {
    if (!this.enabled || !this.ctx) return;
    this.playTone(400, 0.08, "sine", 0.05);
    setTimeout(() => this.playTone(550, 0.08, "sine", 0.05), 40);
  }

  playCorrect() {
    if (!this.enabled || !this.ctx) return;
    this.playTone(523.25, 0.12, "sine", 0.15); // C5
    setTimeout(() => this.playTone(659.25, 0.15, "sine", 0.15), 100); // E5
    setTimeout(() => this.playTone(783.99, 0.25, "sine", 0.2), 200); // G5
  }

  playWrong() {
    if (!this.enabled || !this.ctx) return;
    this.playTone(300, 0.18, "sawtooth", 0.08);
    setTimeout(() => this.playTone(220, 0.25, "sawtooth", 0.08), 120);
  }

  playXpGain() {
    if (!this.enabled || !this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 0.12, "sine", 0.1), idx * 60);
    });
  }

  playFanfare() {
    if (!this.enabled || !this.ctx) return;
    const notes = [
      { f: 523.25, d: 0.12, t: 0 },
      { f: 523.25, d: 0.12, t: 120 },
      { f: 523.25, d: 0.12, t: 240 },
      { f: 659.25, d: 0.35, t: 360 },
      { f: 587.33, d: 0.15, t: 550 },
      { f: 783.99, d: 0.5,  t: 700 }
    ];
    notes.forEach(n => {
      setTimeout(() => this.playTone(n.f, n.d, "triangle", 0.18), n.t);
    });
  }
}

window.eduAudio = new EduAudioEngine();
