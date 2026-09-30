import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ORBITAL_OBJECTS } from '../data/orbitalObjects';

/**
 * Procedural Earth Canvas Texture (Pristine oceans and continents without distracting dot clusters)
 */
function createEarthTexture() {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Deep space ocean gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#06132b');
  oceanGrad.addColorStop(0.5, '#0a1d42');
  oceanGrad.addColorStop(1, '#051024');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle coordinate grid (Latitude & Longitude)
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
  ctx.lineWidth = 1;

  for (let x = 0; x <= width; x += width / 24) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  for (let y = 0; y <= height; y += height / 12) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Continent Landmasses
  ctx.fillStyle = '#102e52';
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
  ctx.lineWidth = 2;

  const continents = [
    [[-165, 65], [-140, 70], [-100, 72], [-65, 60], [-60, 45], [-75, 30], [-80, 25], [-90, 16], [-105, 20], [-120, 35], [-130, 50], [-165, 65]],
    [[-80, 10], [-50, -5], [-35, -7], [-40, -22], [-55, -40], [-68, -55], [-75, -45], [-72, -15], [-80, 10]],
    [[-10, 36], [0, 45], [15, 55], [30, 70], [60, 72], [100, 75], [140, 70], [170, 65], [160, 50], [130, 40], [120, 30], [105, 20], [80, 15], [70, 25], [50, 25], [35, 32], [25, 40], [-5, 36]],
    [[-15, 30], [10, 37], [32, 32], [50, 12], [42, -5], [35, -25], [20, -35], [12, -15], [-17, 15], [-15, 30]],
    [[115, -22], [130, -12], [145, -15], [152, -28], [140, -38], [125, -35], [115, -22]],
    [[-180, -78], [-120, -82], [-60, -75], [0, -70], [60, -72], [120, -75], [180, -78], [180, -90], [-180, -90]]
  ];

  continents.forEach(poly => {
    ctx.beginPath();
    poly.forEach(([lon, lat], i) => {
      const x = ((lon + 180) / 360) * width;
      const y = ((90 - lat) / 180) * height;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  return new THREE.CanvasTexture(canvas);
}

function createCloudTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * canvas.width;
    const y = 80 + Math.random() * (canvas.height - 160);
    const radiusX = 40 + Math.random() * 80;
    const radiusY = 15 + Math.random() * 30;
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  return new THREE.CanvasTexture(canvas);
}

export default function EarthGlobe({
  selectedObject,
  onSelectObject,
  filter = 'all',
  currentYear = 2026,
  isPaused = false,
  timeSpeed = 1,
  onConjunctionUpdate
}) {
  const mountRef = useRef(null);

  // Synchronized state refs for requestAnimationFrame
  const selectedObjectRef = useRef(selectedObject);
  const filterRef = useRef(filter);
  const currentYearRef = useRef(currentYear);
  const isPausedRef = useRef(isPaused);
  const timeSpeedRef = useRef(timeSpeed);
  const onSelectObjectRef = useRef(onSelectObject);
  const onConjunctionUpdateRef = useRef(onConjunctionUpdate);

  selectedObjectRef.current = selectedObject;
  filterRef.current = filter;
  currentYearRef.current = currentYear;
  isPausedRef.current = isPaused;
  timeSpeedRef.current = timeSpeed;
  onSelectObjectRef.current = onSelectObject;
  onConjunctionUpdateRef.current = onConjunctionUpdate;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.0006);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.4, 8.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3.2;
    controls.maxDistance = 22;
    controls.rotateSpeed = 0.8;
    controls.enablePan = false;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0x1a2638, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(10, 6, 8);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    rimLight.position.set(-10, -4, -6);
    scene.add(rimLight);

    // 4. Earth Globe Group
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    const earthRadius = 2.2;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthTexture = createEarthTexture();

    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.7,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earthMesh);

    // Clouds Sphere
    const cloudGeo = new THREE.SphereGeometry(earthRadius * 1.015, 48, 48);
    const cloudTexture = createCloudTexture();
    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    earthGroup.add(cloudMesh);

    // Atmospheric Glow
    const glowGeo = new THREE.SphereGeometry(earthRadius * 1.12, 48, 48);
    const glowMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.0, 0.85, 1.0, 1.0) * intensity * 0.75;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    earthGroup.add(glowMesh);

    // =========================================================================
    // 5. Curated Interactive Satellites and Debris Field
    // =========================================================================
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    const orbitItems = [];
    const interactiveHitboxes = [];

    ORBITAL_OBJECTS.forEach((data, index) => {
      const isDebris = data.type === 'debris';
      const orbitColor = new THREE.Color(data.color);
      const euler = new THREE.Euler(
        THREE.MathUtils.degToRad(data.inclination),
        THREE.MathUtils.degToRad(index * 36),
        0,
        'ZYX'
      );

      // Trajectory Ring
      const segments = 96;
      const ringPoints = [];
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        const pt = new THREE.Vector3(
          data.orbitRadius * Math.cos(theta),
          0,
          data.orbitRadius * Math.sin(theta)
        );
        pt.applyEuler(euler);
        ringPoints.push(pt);
      }

      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
      const ringMat = new THREE.LineBasicMaterial({
        color: orbitColor,
        transparent: true,
        opacity: isDebris ? 0.35 : 0.25,
        blending: THREE.AdditiveBlending,
      });
      const orbitLine = new THREE.Line(ringGeo, ringMat);
      objectsGroup.add(orbitLine);

      // 3D Object Mesh
      const meshGroup = new THREE.Group();

      let markerGeo;
      if (isDebris) {
        markerGeo = new THREE.OctahedronGeometry(data.size, 0);
      } else {
        markerGeo = new THREE.SphereGeometry(data.size, 16, 16);
      }

      const markerMat = new THREE.MeshStandardMaterial({
        color: orbitColor,
        emissive: orbitColor,
        emissiveIntensity: 0.8,
        metalness: 0.8,
        roughness: 0.2,
      });
      const markerMesh = new THREE.Mesh(markerGeo, markerMat);
      meshGroup.add(markerMesh);

      // Outer Glow Halo
      const haloGeo = new THREE.SphereGeometry(data.size * 1.8, 12, 12);
      const haloMat = new THREE.MeshBasicMaterial({
        color: orbitColor,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      meshGroup.add(haloMesh);

      // Invisible Hit-Box for Raycasting
      const hitBoxGeo = new THREE.SphereGeometry(0.35, 8, 8);
      const hitBoxMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitBox = new THREE.Mesh(hitBoxGeo, hitBoxMat);
      hitBox.userData = { data, meshGroup, orbitLine };
      meshGroup.add(hitBox);
      interactiveHitboxes.push(hitBox);

      objectsGroup.add(meshGroup);

      orbitItems.push({
        data,
        meshGroup,
        orbitLine,
        markerMesh,
        haloMesh,
        euler,
        theta: Math.random() * Math.PI * 2,
        speed: data.speed,
        currentPos: new THREE.Vector3(),
      });
    });

    // Reticle (Selected Object Target)
    const reticleGeo = new THREE.RingGeometry(0.3, 0.38, 32);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const reticleMesh = new THREE.Mesh(reticleGeo, reticleMat);
    reticleMesh.visible = false;
    scene.add(reticleMesh);

    // =========================================================================
    // 6. Collision Conjunction Laser Beams
    // =========================================================================
    const maxLaserPairs = 10;
    const laserPositions = new Float32Array(maxLaserPairs * 2 * 3);
    const laserGeo = new THREE.BufferGeometry();
    laserGeo.setAttribute('position', new THREE.BufferAttribute(laserPositions, 3));
    const laserMat = new THREE.LineBasicMaterial({
      color: 0xff0044,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const laserSegments = new THREE.LineSegments(laserGeo, laserMat);
    scene.add(laserSegments);

    // =========================================================================
    // 7. Raycasting (Hover & Selection)
    // =========================================================================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredHitBox = null;

    const onPointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const visibleHitboxes = interactiveHitboxes.filter(h => h.parent.visible);
      const intersects = raycaster.intersectObjects(visibleHitboxes);

      if (intersects.length > 0) {
        container.style.cursor = 'pointer';
        const hit = intersects[0].object;
        if (hoveredHitBox !== hit) {
          hoveredHitBox = hit;
          hit.userData.meshGroup.scale.set(1.4, 1.4, 1.4);
        }
      } else {
        container.style.cursor = 'default';
        if (hoveredHitBox) {
          hoveredHitBox.userData.meshGroup.scale.set(1, 1, 1);
          hoveredHitBox = null;
        }
      }
    };

    let pointerDownPos = { x: 0, y: 0 };
    const onPointerDown = (event) => {
      pointerDownPos = { x: event.clientX, y: event.clientY };
    };

    const onPointerUp = (event) => {
      const dx = Math.abs(event.clientX - pointerDownPos.x);
      const dy = Math.abs(event.clientY - pointerDownPos.y);
      if (dx > 5 || dy > 5) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const visibleHitboxes = interactiveHitboxes.filter(h => h.parent.visible);
      const intersects = raycaster.intersectObjects(visibleHitboxes);

      if (intersects.length > 0) {
        const selected = intersects[0].object.userData.data;
        if (onSelectObjectRef.current) {
          onSelectObjectRef.current(selected);
        }
      } else {
        if (onSelectObjectRef.current) {
          onSelectObjectRef.current(null);
        }
      }
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointerup', onPointerUp);

    // =========================================================================
    // 8. Animation Loop
    // =========================================================================
    let animationFrameId;
    let lastAlertNotifyTime = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      const currentFilter = filterRef.current;
      const currentSelected = selectedObjectRef.current;
      const year = currentYearRef.current;
      const paused = isPausedRef.current;
      const speedMultiplier = timeSpeedRef.current;

      // Auto-rotation of Earth
      if (!paused) {
        earthMesh.rotation.y += 0.001 * speedMultiplier;
        cloudMesh.rotation.y += 0.0014 * speedMultiplier;
      }

      const activePositions = [];

      // Update Curated Objects
      orbitItems.forEach(item => {
        const isLaunched = item.data.launchYear <= year;
        const matchesFilter =
          currentFilter === 'all' ||
          (currentFilter === 'active' && item.data.type === 'active') ||
          (currentFilter === 'debris' && item.data.type === 'debris');

        const isVisible = isLaunched && matchesFilter;

        item.meshGroup.visible = isVisible;
        item.orbitLine.visible = isVisible;

        if (!isVisible) return;

        if (!paused) {
          item.theta += item.speed * speedMultiplier;
        }

        const pos = new THREE.Vector3(
          item.data.orbitRadius * Math.cos(item.theta),
          0,
          item.data.orbitRadius * Math.sin(item.theta)
        );
        pos.applyEuler(item.euler);
        item.meshGroup.position.copy(pos);
        item.currentPos.copy(pos);

        activePositions.push(item);

        if (!paused && item.data.type === 'debris') {
          item.markerMesh.rotation.x += 0.02 * speedMultiplier;
          item.markerMesh.rotation.y += 0.03 * speedMultiplier;
        }

        // Selection highlight
        const isThisSelected = currentSelected && currentSelected.id === item.data.id;
        if (isThisSelected) {
          item.orbitLine.material.opacity = 0.9;
          reticleMesh.visible = true;
          reticleMesh.position.copy(pos);
          reticleMesh.lookAt(camera.position);
          reticleMesh.rotation.z += 0.02;
        } else {
          item.orbitLine.material.opacity = item.data.type === 'debris' ? 0.35 : 0.25;
        }
      });

      if (!currentSelected) {
        reticleMesh.visible = false;
      }

      // Pairwise Conjunction & Collision Distance Calculation
      const CONJUNCTION_THRESHOLD = 0.95;
      const detectedConjunctions = [];
      let laserIndex = 0;

      for (let i = 0; i < activePositions.length; i++) {
        for (let j = i + 1; j < activePositions.length; j++) {
          const itemA = activePositions[i];
          const itemB = activePositions[j];
          const dist = itemA.currentPos.distanceTo(itemB.currentPos);

          if (dist < CONJUNCTION_THRESHOLD) {
            const distanceKm = Math.round(dist * 28.5);

            detectedConjunctions.push({
              objA: itemA.data,
              objB: itemB.data,
              distance: dist,
              distanceKm,
            });

            if (laserIndex < maxLaserPairs * 6) {
              laserPositions[laserIndex++] = itemA.currentPos.x;
              laserPositions[laserIndex++] = itemA.currentPos.y;
              laserPositions[laserIndex++] = itemA.currentPos.z;

              laserPositions[laserIndex++] = itemB.currentPos.x;
              laserPositions[laserIndex++] = itemB.currentPos.y;
              laserPositions[laserIndex++] = itemB.currentPos.z;
            }
          }
        }
      }

      while (laserIndex < maxLaserPairs * 6) {
        laserPositions[laserIndex++] = 0;
      }
      laserGeo.attributes.position.needsUpdate = true;

      const now = performance.now();
      if (now - lastAlertNotifyTime > 200) {
        lastAlertNotifyTime = now;
        if (onConjunctionUpdateRef.current) {
          onConjunctionUpdateRef.current(detectedConjunctions);
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointerup', onPointerUp);
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="canvas-container" />;
}