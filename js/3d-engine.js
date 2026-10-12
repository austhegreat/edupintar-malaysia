/**
 * EduPintar Malaysia - 3D Engine & Interactive WebGL Systems
 * Menguasakan latar belakang 3D kosmos, Makmal Visual 3D interaktif Three.js, serta kesan kecondongan 3D kad (Tilt FX)
 */

class Edu3DEngine {
  constructor() {
    this.bgScene = null;
    this.bgCamera = null;
    this.bgRenderer = null;
    this.bgParticles = null;
    this.bgShapes = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;

    // Subject 3D Lab
    this.labScene = null;
    this.labCamera = null;
    this.labRenderer = null;
    this.labModelGroup = null;
    this.currentModelType = "atom"; // 'atom', 'geometry', 'compass'
    this.isDraggingLab = false;
    this.previousMousePosition = { x: 0, y: 0 };

    this.init();
  }

  init() {
    if (typeof THREE === "undefined") {
      console.warn("Three.js belum dimuatkan. Menunggu skrip...");
      return;
    }

    // Keep the lobby lightweight. Build WebGL only when a learner opens a 3D lab.
  }

  setupBackgroundCosmos() {
    const canvas = document.getElementById("bg3dCanvas");
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    this.bgScene = new THREE.Scene();
    this.bgScene.fog = new THREE.FogExp2(0x0f172a, 0.0018);

    this.bgCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    this.bgCamera.position.z = 80;

    this.bgRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.bgRenderer.setSize(width, height);
    this.bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Stars
    const particleCount = 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color(0x6366f1); // Indigo
    const colorB = new THREE.Color(0xf59e0b); // Amber
    const colorC = new THREE.Color(0x10b981); // Emerald

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;

      const mixedColor = Math.random() < 0.5 ? colorA.clone().lerp(colorB, Math.random()) : colorA.clone().lerp(colorC, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.bgParticles = new THREE.Points(geometry, material);
    this.bgScene.add(this.bgParticles);

    // Floating 3D Polyhedra
    const shapeGeometries = [
      new THREE.IcosahedronGeometry(4, 0),
      new THREE.DodecahedronGeometry(3.5, 0),
      new THREE.OctahedronGeometry(3.8, 0),
      new THREE.TorusGeometry(3.2, 0.8, 8, 24)
    ];

    const shapeColors = [0x6366f1, 0xec4899, 0x10b981, 0xf59e0b];

    for (let i = 0; i < 7; i++) {
      const geo = shapeGeometries[i % shapeGeometries.length];
      const mat = new THREE.MeshBasicMaterial({
        color: shapeColors[i % shapeColors.length],
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 110,
        (Math.random() - 0.5) * 80
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.005 + Math.random() * 0.01,
        initialY: mesh.position.y
      };

      this.bgShapes.push(mesh);
      this.bgScene.add(mesh);
    }

    window.addEventListener("resize", () => this.onWindowResize());
  }

  onWindowResize() {
    if (this.bgCamera && this.bgRenderer) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.bgCamera.aspect = width / height;
      this.bgCamera.updateProjectionMatrix();
      this.bgRenderer.setSize(width, height);
    }
    if (this.labCamera && this.labRenderer) {
      const labContainer = document.getElementById("lab3dContainer");
      if (labContainer) {
        const w = labContainer.clientWidth;
        const h = labContainer.clientHeight;
        this.labCamera.aspect = w / h;
        this.labCamera.updateProjectionMatrix();
        this.labRenderer.setSize(w, h);
      }
    }
  }

  setupMouseTracking() {
    window.addEventListener("mousemove", (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        this.targetMouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        this.targetMouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    }, { passive: true });
  }

  setupCard3DTilt() {
    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
      card.style.transition = "transform 0.1s ease-out";
    };

    const handleLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    };

    document.querySelectorAll(".card-3d-tilt").forEach(el => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
    });
  }

  // --- Interactive Subject 3D Lab Arena ---
  initSubjectLabCanvas(containerId = "lab3dContainer", modelType = null) {
    if (modelType) this.currentModelType = modelType;
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
      // Clean previous canvas/fallback
      container.innerHTML = "";

      const width = container.clientWidth || 320;
      const height = container.clientHeight || 224;

      this.labScene = new THREE.Scene();
      this.labCamera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
      this.labCamera.position.set(0, 0, 16);

      this.labRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "default" });
      this.labRenderer.setSize(width, height);
      this.labRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(this.labRenderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
      this.labScene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x6366f1, 2.5);
      dirLight1.position.set(10, 15, 10);
      this.labScene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.8);
      dirLight2.position.set(-10, -10, -10);
      this.labScene.add(dirLight2);

      this.buildLabModel(this.currentModelType);
      this.attachLabInteractions(this.labRenderer.domElement);
      this.animate();
    } catch (e) {
      console.warn("3D Lab WebGL fallback active:", e);
      this.renderFallbackLab(container);
    }
  }

  renderFallbackLab(container) {
    if (!container) return;
    const icon = this.currentModelType === "atom" ? "🔬" : (this.currentModelType === "geometry" ? "📐" : "🏆");
    const title = this.currentModelType === "atom" ? "Model Atom 3D" : (this.currentModelType === "geometry" ? "Bentuk Geometri 3D" : "Trofi Kejayaan 3D");
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center p-4 h-full animate-float">
        <span class="text-6xl mb-2 filter drop-shadow-lg">${icon}</span>
        <h4 class="text-sm font-black text-amber-300">${title}</h4>
        <p class="text-[10px] text-indigo-200 mt-1">Putaran Interaktif 360° EduPintar</p>
      </div>
    `;
  }

  buildLabModel(type = "atom") {
    this.currentModelType = type;
    if (!this.labScene) {
      this.initSubjectLabCanvas("lab3dContainer", type);
      return;
    }

    if (this.labModelGroup) {
      this.labScene.remove(this.labModelGroup);
    }

    this.labModelGroup = new THREE.Group();

    if (type === "atom") {
      // 3D Atomic Model (Science & Chemistry)
      const nucleusGeo = new THREE.SphereGeometry(1.6, 24, 24);
      const nucleusMat = new THREE.MeshPhongMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        shininess: 90
      });
      const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
      this.labModelGroup.add(nucleus);

      // Rings & Orbiting Electrons
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x818cf8, wireframe: true, transparent: true, opacity: 0.6 });
      const ringGeo = new THREE.TorusGeometry(4.8, 0.06, 12, 60);

      const r1 = new THREE.Mesh(ringGeo, ringMat);
      r1.rotation.x = Math.PI / 3;
      this.labModelGroup.add(r1);

      const r2 = new THREE.Mesh(ringGeo, ringMat);
      r2.rotation.y = Math.PI / 3;
      this.labModelGroup.add(r2);

      const r3 = new THREE.Mesh(ringGeo, ringMat);
      r3.rotation.z = Math.PI / 3;
      this.labModelGroup.add(r3);

      // Electrons
      const eleMat = new THREE.MeshPhongMaterial({ color: 0x38bdf8, emissive: 0x0284c7 });
      const eleGeo = new THREE.SphereGeometry(0.45, 16, 16);

      const e1 = new THREE.Mesh(eleGeo, eleMat);
      e1.position.set(4.8, 0, 0);
      r1.add(e1);

      const e2 = new THREE.Mesh(eleGeo, eleMat);
      e2.position.set(-4.8, 0, 0);
      r2.add(e2);

      const e3 = new THREE.Mesh(eleGeo, eleMat);
      e3.position.set(0, 4.8, 0);
      r3.add(e3);

    } else if (type === "geometry") {
      // 3D Math Geometry Polyhedron
      const geo = new THREE.DodecahedronGeometry(3.6, 0);
      const mat = new THREE.MeshPhongMaterial({
        color: 0x4f46e5,
        wireframe: false,
        shininess: 80,
        transparent: true,
        opacity: 0.75
      });
      const mesh = new THREE.Mesh(geo, mat);
      this.labModelGroup.add(mesh);

      const wireGeo = new THREE.EdgesGeometry(geo);
      const wireMat = new THREE.LineBasicMaterial({ color: 0xfacc15, linewidth: 2 });
      const wire = new THREE.LineSegments(wireGeo, wireMat);
      this.labModelGroup.add(wire);

    } else {
      // 3D Golden Trophy / Compass
      const baseGeo = new THREE.CylinderGeometry(2, 2.5, 0.8, 20);
      const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.2, metalness: 0.8 });
      const base = new THREE.Mesh(baseGeo, goldMat);
      base.position.y = -2.5;
      this.labModelGroup.add(base);

      const starGeo = new THREE.OctahedronGeometry(2.5, 0);
      const star = new THREE.Mesh(starGeo, goldMat);
      star.position.y = 0.5;
      this.labModelGroup.add(star);
    }

    this.labScene.add(this.labModelGroup);
  }

  attachLabInteractions(canvasEl) {
    canvasEl.style.cursor = "grab";

    const onDown = (clientX, clientY) => {
      this.isDraggingLab = true;
      this.previousMousePosition = { x: clientX, y: clientY };
      canvasEl.style.cursor = "grabbing";
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDraggingLab || !this.labModelGroup) return;
      const deltaX = clientX - this.previousMousePosition.x;
      const deltaY = clientY - this.previousMousePosition.y;

      this.labModelGroup.rotation.y += deltaX * 0.012;
      this.labModelGroup.rotation.x += deltaY * 0.012;

      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const onUp = () => {
      this.isDraggingLab = false;
      canvasEl.style.cursor = "grab";
    };

    canvasEl.addEventListener("mousedown", (e) => onDown(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", onUp);

    canvasEl.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) onDown(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener("touchend", onUp);
  }

  animate() {
    if (!this.labScene || !this.labCamera || !this.labRenderer || !this.labModelGroup) return;
    requestAnimationFrame(() => this.animate());

    // Smooth mouse lerp
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    // Render Subject 3D Lab
    if (this.labScene && this.labCamera && this.labRenderer && this.labModelGroup) {
      if (!this.isDraggingLab) {
        this.labModelGroup.rotation.y += 0.009;
        this.labModelGroup.rotation.x += 0.003;
      }
      this.labRenderer.render(this.labScene, this.labCamera);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.edu3D = new Edu3DEngine();
});
