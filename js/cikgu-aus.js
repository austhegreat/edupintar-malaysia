/**
 * EduPintar Malaysia - Cikgu Aus Character & Animation System
 * Original AI stick-figure teacher with clean black outlines, white body,
 * mortarboard graduation cap, expressive facial animations and gestures.
 */

class CikguAusCharacter {
  constructor() {
    this.currentPose = "idle"; // 'idle', 'waving', 'pointing', 'talking', 'thinking', 'writing', 'celebrating'
    this.isTalking = false;
    this.mouthTimer = null;
    this.container = null;
    this.speechUtterance = null;
    this.speechSynthesis = (typeof window !== "undefined" && window.speechSynthesis) ? window.speechSynthesis : null;
  }

  /**
   * Render Cikgu Aus into a target DOM container
   * @param {string|HTMLElement} target - Element ID or HTMLElement
   * @param {string} initialPose - Initial gesture pose
   */
  render(target, initialPose = "idle") {
    this.container = typeof target === "string" ? document.getElementById(target) : target;
    if (!this.container) return;
    this.currentPose = initialPose;
    this.container.innerHTML = this.generateSvg(this.currentPose);
  }

  /**
   * Set gesture pose with smooth visual update
   * @param {string} pose - 'idle' | 'waving' | 'pointing' | 'talking' | 'thinking' | 'writing' | 'celebrating'
   */
  setPose(pose) {
    if (this.currentPose === pose) return;
    this.currentPose = pose;
    if (this.container) {
      this.container.innerHTML = this.generateSvg(this.currentPose);
    }
  }

  /**
   * Start mouth flap talking animation
   */
  startTalking() {
    if (this.isTalking) return;
    this.isTalking = true;
    let mouthOpen = false;
    this.mouthTimer = setInterval(() => {
      mouthOpen = !mouthOpen;
      const mouthEl = document.getElementById("cikguAusMouth");
      if (mouthEl) {
        if (mouthOpen) {
          mouthEl.setAttribute("d", "M 90 98 Q 100 114 110 98 Z"); // Open talking mouth
          mouthEl.setAttribute("fill", "#dc2626");
        } else {
          mouthEl.setAttribute("d", "M 92 100 Q 100 108 108 100"); // Gentle smile
          mouthEl.setAttribute("fill", "none");
        }
      }
    }, 180);
  }

  /**
   * Stop mouth flap talking animation
   */
  stopTalking() {
    this.isTalking = false;
    if (this.mouthTimer) {
      clearInterval(this.mouthTimer);
      this.mouthTimer = null;
    }
    const mouthEl = document.getElementById("cikguAusMouth");
    if (mouthEl) {
      mouthEl.setAttribute("d", "M 92 100 Q 100 108 108 100");
      mouthEl.setAttribute("fill", "none");
    }
  }

  /**
   * Speak narration using Web Speech API with automatic fallback
   * @param {string} text - Spoken dialogue
   * @param {string} language - 'bm' or 'en'
   * @param {function} onEnd - Callback when speech finishes
   */
  speak(text, language = "bm", onEnd = null) {
    if (!this.speechSynthesis) {
      this.startTalking();
      setTimeout(() => {
        this.stopTalking();
        if (onEnd) onEnd();
      }, Math.max(2500, text.length * 55));
      return;
    }

    // Cancel any active speech
    this.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === "en" ? "en-US" : "id-ID"; // Indonesian/Malay synthesis
    utterance.rate = 1.0;
    utterance.pitch = 1.1; // Friendly warm educator pitch

    // Select suitable voice if available
    const voices = this.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const match = voices.find(v => 
        language === "en" 
          ? (v.lang.includes("en") && !v.name.includes("whisper"))
          : (v.lang.includes("ms") || v.lang.includes("id"))
      );
      if (match) utterance.voice = match;
    }

    utterance.onstart = () => {
      this.startTalking();
    };

    utterance.onend = () => {
      this.stopTalking();
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.stopTalking();
      if (onEnd) onEnd();
    };

    this.speechUtterance = utterance;
    try {
      this.speechSynthesis.speak(utterance);
    } catch (e) {
      this.startTalking();
      setTimeout(() => {
        this.stopTalking();
        if (onEnd) onEnd();
      }, Math.max(2500, text.length * 55));
    }
  }

  /**
   * Stop current narration
   */
  stopSpeaking() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
    this.stopTalking();
  }

  /**
   * Generate clean vector SVG for Cikgu Aus based on pose
   */
  generateSvg(pose = "idle") {
    // Arm configurations by pose
    let leftArmD = "M 80 145 Q 60 170 55 200"; // resting down
    let rightArmD = "M 120 145 Q 140 170 145 200"; // resting down
    let pointerD = ""; // Pointer stick
    let eyeShape = `
      <circle cx="93" cy="88" r="3.5" fill="#0f172a" />
      <circle cx="107" cy="88" r="3.5" fill="#0f172a" />
    `;
    let mouthD = "M 92 100 Q 100 108 108 100";
    let mouthFill = "none";
    let extraAnimationClass = "";

    if (pose === "waving") {
      rightArmD = "M 120 145 Q 145 125 155 95"; // hand raised high
      extraAnimationClass = "animate-wave";
    } else if (pose === "pointing") {
      rightArmD = "M 120 145 Q 150 135 185 110"; // pointing right toward board
      pointerD = `<line x1="185" y1="110" x2="230" y2="85" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />`;
    } else if (pose === "thinking") {
      leftArmD = "M 80 145 Q 70 120 88 105"; // hand to chin
      eyeShape = `
        <ellipse cx="94" cy="85" rx="3.5" ry="3.5" fill="#0f172a" />
        <ellipse cx="108" cy="85" rx="3.5" ry="3.5" fill="#0f172a" />
      `;
    } else if (pose === "writing") {
      rightArmD = "M 120 145 Q 160 130 180 125";
      pointerD = `<line x1="180" y1="125" x2="195" y2="120" stroke="#3b82f6" stroke-width="4" stroke-linecap="round" />`;
    } else if (pose === "celebrating") {
      leftArmD = "M 80 145 Q 50 110 40 75"; // arms raised in air
      rightArmD = "M 120 145 Q 150 110 160 75";
      mouthD = "M 90 97 Q 100 116 110 97 Z"; // broad happy open smile
      mouthFill = "#dc2626";
      eyeShape = `
        <!-- Star eyes for celebrating -->
        <text x="89" y="92" font-size="12" fill="#f59e0b" font-weight="black">★</text>
        <text x="103" y="92" font-size="12" fill="#f59e0b" font-weight="black">★</text>
      `;
    }

    return `
      <svg viewBox="0 0 240 300" class="w-full h-full filter drop-shadow-md select-none ${extraAnimationClass}">
        <!-- Definition of Shadows & Highlights -->
        <defs>
          <filter id="ausGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#4f46e5" flood-opacity="0.2"/>
          </filter>
        </defs>

        <!-- Podium / Floor shadow -->
        <ellipse cx="100" cy="285" rx="45" ry="8" fill="rgba(15, 23, 42, 0.12)" />

        <!-- LEGS -->
        <g stroke="#0f172a" stroke-width="4.5" stroke-linecap="round">
          <!-- Left Leg -->
          <line x1="90" y1="210" x2="80" y2="280" />
          <line x1="80" y1="280" x2="68" y2="280" stroke-width="5" /> <!-- shoe -->
          
          <!-- Right Leg -->
          <line x1="110" y1="210" x2="120" y2="280" />
          <line x1="120" y1="280" x2="132" y2="280" stroke-width="5" /> <!-- shoe -->
        </g>

        <!-- BODY / TORSO -->
        <!-- Clean white stick-figure body with black outline -->
        <line x1="100" y1="120" x2="100" y2="215" stroke="#0f172a" stroke-width="5.5" stroke-linecap="round" />

        <!-- Red Educator Bowtie / Necktie -->
        <path d="M 96 126 L 104 126 L 102 142 L 100 146 L 98 142 Z" fill="#ef4444" stroke="#0f172a" stroke-width="1.5" />
        <circle cx="100" cy="126" r="2.5" fill="#facc15" />

        <!-- ARMS -->
        <g stroke="#0f172a" stroke-width="4.5" stroke-linecap="round" fill="none">
          <!-- Left Arm -->
          <path d="${leftArmD}" />
          <!-- Right Arm -->
          <path d="${rightArmD}" />
          <!-- Hand Circles -->
          ${pose === 'celebrating' ? `
            <circle cx="40" cy="75" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="3" />
            <circle cx="160" cy="75" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="3" />
          ` : `
            <circle cx="${pose === 'waving' ? 155 : (pose === 'pointing' ? 185 : 145)}" cy="${pose === 'waving' ? 95 : (pose === 'pointing' ? 110 : 200)}" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="3" />
          `}
        </g>

        <!-- Pointer Stick (when pointing) -->
        ${pointerD}

        <!-- HEAD -->
        <!-- White filled circle with clean outline -->
        <circle cx="100" cy="92" r="28" fill="#ffffff" stroke="#0f172a" stroke-width="4.5" />

        <!-- EYES & BROWS -->
        <!-- Eyebrows -->
        <path d="M 90 80 Q 94 77 98 80" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <path d="M 102 80 Q 106 77 110 80" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Eyes -->
        ${eyeShape}

        <!-- Friendly Blushing Cheeks -->
        <ellipse cx="82" cy="95" rx="3.5" ry="2" fill="rgba(244, 63, 94, 0.4)" />
        <ellipse cx="118" cy="95" rx="3.5" ry="2" fill="rgba(244, 63, 94, 0.4)" />

        <!-- MOUTH (Animated when talking) -->
        <path id="cikguAusMouth" d="${mouthD}" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="${mouthFill}" />

        <!-- GRADUATION CAP (MORTARBOARD) -->
        <!-- Cap Base Skullcap -->
        <path d="M 85 70 Q 100 66 115 70 L 112 76 Q 100 73 88 76 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2" />
        <!-- Diamond Mortarboard Top -->
        <polygon points="100,50 135,62 100,74 65,62" fill="#0f172a" stroke="#0f172a" stroke-width="3" />
        <!-- Golden Button on Cap -->
        <circle cx="100" cy="62" r="2.5" fill="#f59e0b" />
        <!-- Golden Tassel hanging down -->
        <path d="M 100 62 Q 120 64 126 78" stroke="#f59e0b" stroke-width="2" fill="none" stroke-linecap="round" />
        <!-- Tassel Fringe -->
        <polygon points="124,78 128,78 130,86 122,86" fill="#f59e0b" />

        <!-- Name Label Badge -->
        <g transform="translate(100, 240)">
          <rect x="-35" y="0" width="70" height="18" rx="9" fill="#0f172a" />
          <text x="0" y="12" fill="#ffffff" font-size="9" font-weight="900" text-anchor="middle" letter-spacing="0.5">CIKGU AUS</text>
        </g>
      </svg>
    `;
  }
}

if (typeof window !== "undefined") {
  window.cikguAus = new CikguAusCharacter();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CikguAusCharacter };
}
