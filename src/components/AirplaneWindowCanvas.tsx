import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type SkyPreset = 'cerulean' | 'golden' | 'aurora';

interface AirplaneWindowCanvasProps {
  /** Scroll progress from 0 (Cabin Window Hero) to 1 (Open Sky Carousel) */
  scrollProgress: number;
  /** Optional window shade pull level from 0 (open) to 0.85 (lowered) */
  shadeLevel: number;
  /** Sky atmosphere color preset */
  skyPreset: SkyPreset;
}

/**
 * Helper to create a stadium (capsule/oval) 2D path for aircraft window layers
 */
function createStadiumPath(width: number, height: number, segments = 64): THREE.Path {
  const path = new THREE.Path();
  const radius = width / 2;
  const straightHalf = Math.max(0.01, (height - width) / 2);

  // Top semicircle
  path.absarc(0, straightHalf, radius, 0, Math.PI, false);
  // Left straight edge down to bottom semicircle
  path.absarc(0, -straightHalf, radius, Math.PI, Math.PI * 2, false);
  path.closePath();
  // Ensure smooth curves
  path.getPoints(segments);
  return path;
}

/**
 * Creates a soft procedural radial cloud puff texture on an offscreen canvas
 */
function createCloudTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createRadialGradient(128, 128, 12, 128, 128, 124);
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.92)');
  grad.addColorStop(0.32, 'rgba(250, 254, 255, 0.72)');
  grad.addColorStop(0.62, 'rgba(230, 248, 255, 0.32)');
  grad.addColorStop(0.85, 'rgba(210, 242, 255, 0.08)');
  grad.addColorStop(1, 'rgba(210, 242, 255, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates a subtle micro-grain bump texture for the molded aircraft polymer bezel
 */
function createPolymerBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(128, 128);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const v = 120 + ((i * 73) % 31);
    imgData.data[i] = v;
    imgData.data[i + 1] = v;
    imgData.data[i + 2] = v;
    imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  return tex;
}

export const AirplaneWindowCanvas: React.FC<AirplaneWindowCanvasProps> = ({
  scrollProgress,
  shadeLevel,
  skyPreset,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(scrollProgress);
  const shadeRef = useRef(shadeLevel);
  const presetRef = useRef<SkyPreset>(skyPreset);

  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    shadeRef.current = shadeLevel;
  }, [shadeLevel]);

  useEffect(() => {
    presetRef.current = skyPreset;
  }, [skyPreset]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    container.appendChild(renderer.domElement);

    // Lighting setup for realistic molded aircraft polymer & glass reflection
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.35);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-2.5, 4.2, 6.5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x68dcff, 1.45);
    rimLight.position.set(2.8, -3.0, 4.0);
    scene.add(rimLight);

    const innerSkyGlow = new THREE.PointLight(0x00b2ff, 1.8, 14);
    innerSkyGlow.position.set(0, 0, 1.2);
    scene.add(innerSkyGlow);

    // =========================================================
    // 1. VOLUMETRIC SKY & DRIFTING 3D CLOUD SYSTEM
    // =========================================================
    const skyGroup = new THREE.Group();
    scene.add(skyGroup);

    const cloudTexture = createCloudTexture();

    interface CloudCluster {
      sprite: THREE.Sprite;
      baseX: number;
      baseY: number;
      baseZ: number;
      speed: number;
      scale: number;
      phase: number;
    }

    const clouds: CloudCluster[] = [];

    // Create 42 layered cloud puffs forming left & right cloud banks (matching m_intro_02.jpg)
    const cloudConfigs = [
      // Left foreground bank
      { x: -5.8, y: -1.6, z: -2.5, s: 5.2, speed: 0.14 },
      { x: -4.6, y: -2.1, z: -2.2, s: 4.6, speed: 0.16 },
      { x: -6.4, y: -0.4, z: -2.8, s: 4.9, speed: 0.12 },
      { x: -3.5, y: -2.6, z: -2.6, s: 4.0, speed: 0.18 },
      { x: -5.2, y: -1.1, z: -1.8, s: 3.8, speed: 0.15 },
      // Right foreground bank
      { x: 5.9, y: -1.2, z: -2.3, s: 5.0, speed: 0.13 },
      { x: 6.6, y: 0.8, z: -2.7, s: 4.8, speed: 0.15 },
      { x: 4.8, y: -1.9, z: -2.4, s: 4.3, speed: 0.17 },
      { x: 5.4, y: 2.2, z: -3.1, s: 4.5, speed: 0.11 },
      { x: 6.2, y: -0.2, z: -1.9, s: 3.9, speed: 0.14 },
      // Top-left wispy clouds near Auragate logo
      { x: -5.5, y: 2.9, z: -3.4, s: 3.6, speed: 0.10 },
      { x: -4.2, y: 2.6, z: -3.8, s: 3.2, speed: 0.09 },
      // Deep background horizon clouds visible through the cabin window
      { x: -1.4, y: -1.9, z: -6.5, s: 3.4, speed: 0.08 },
      { x: 1.6, y: -1.7, z: -6.8, s: 3.6, speed: 0.07 },
      { x: 0.2, y: -2.4, z: -6.2, s: 4.2, speed: 0.09 },
      { x: -2.2, y: 1.5, z: -7.5, s: 3.0, speed: 0.06 },
      { x: 2.4, y: 1.8, z: -7.2, s: 3.2, speed: 0.08 },
    ];

    cloudConfigs.forEach((cfg, idx) => {
      // Main puff + 2 sub-puffs for rich volumetric billows
      for (let sub = 0; sub < 2; sub++) {
        const mat = new THREE.SpriteMaterial({
          map: cloudTexture,
          color: 0xffffff,
          transparent: true,
          opacity: sub === 0 ? 0.86 : 0.62,
          depthWrite: false,
        });
        const sprite = new THREE.Sprite(mat);
        const offsetX = sub === 0 ? 0 : (idx % 2 === 0 ? 0.65 : -0.65);
        const offsetY = sub === 0 ? 0 : (idx % 3 === 0 ? 0.42 : -0.35);
        const bx = cfg.x + offsetX;
        const by = cfg.y + offsetY;
        const bz = cfg.z - sub * 0.25;
        const sc = cfg.s * (sub === 0 ? 1 : 0.78);

        sprite.position.set(bx, by, bz);
        sprite.scale.set(sc * 1.25, sc * 0.92, 1);
        skyGroup.add(sprite);

        clouds.push({
          sprite,
          baseX: bx,
          baseY: by,
          baseZ: bz,
          speed: cfg.speed,
          scale: sc,
          phase: idx * 0.9 + sub * 1.4,
        });
      }
    });

    // =========================================================
    // 2. 3D MOLDED AIRCRAFT CABIN WINDOW ASSEMBLY (m_intro_03.jpg)
    // =========================================================
    const windowGroup = new THREE.Group();
    scene.add(windowGroup);

    const bumpTex = createPolymerBumpTexture();

    // 2A. Dark Acoustic Cabin Wall Mask surrounding the window so the sky only shows inside the aperture
    const wallOuterShape = new THREE.Shape();
    wallOuterShape.moveTo(-22, -16);
    wallOuterShape.lineTo(22, -16);
    wallOuterShape.lineTo(22, 16);
    wallOuterShape.lineTo(-22, 16);
    wallOuterShape.closePath();

    const innerApertureHole = createStadiumPath(2.96, 4.18, 96);
    wallOuterShape.holes.push(innerApertureHole);

    const cabinWallGeo = new THREE.ShapeGeometry(wallOuterShape, 64);
    const cabinWallMat = new THREE.MeshStandardMaterial({
      color: 0x17191f,
      roughness: 0.88,
      metalness: 0.08,
      bumpMap: bumpTex,
      bumpScale: 0.015,
      transparent: true,
      opacity: 1,
    });
    const cabinWallMesh = new THREE.Mesh(cabinWallGeo, cabinWallMat);
    cabinWallMesh.position.z = -0.18;
    windowGroup.add(cabinWallMesh);

    // 2B. Outer Contoured Molded Polymer Frame (Thick curved stadium bezel matching m_intro_03.jpg)
    const outerFrameShape = new THREE.Shape(
      createStadiumPath(4.25, 5.48, 96).getPoints(96)
    );
    const outerFrameHole = createStadiumPath(2.92, 4.14, 96);
    outerFrameShape.holes.push(outerFrameHole);

    const outerExtrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.34,
      bevelEnabled: true,
      bevelSegments: 24,
      steps: 2,
      bevelSize: 0.32,
      bevelThickness: 0.28,
      curveSegments: 96,
    };
    const outerBezelGeo = new THREE.ExtrudeGeometry(
      outerFrameShape,
      outerExtrudeSettings
    );
    outerBezelGeo.center();

    const outerBezelMat = new THREE.MeshPhysicalMaterial({
      color: 0xdcdddf,
      roughness: 0.32,
      metalness: 0.08,
      clearcoat: 0.45,
      clearcoatRoughness: 0.28,
      bumpMap: bumpTex,
      bumpScale: 0.004,
      transparent: true,
      opacity: 1,
    });
    const outerBezelMesh = new THREE.Mesh(outerBezelGeo, outerBezelMat);
    outerBezelMesh.position.z = 0.08;
    windowGroup.add(outerBezelMesh);

    // 2C. Inner Stepped Bright White Acrylic Reveal Rim
    const innerRimShape = new THREE.Shape(
      createStadiumPath(3.22, 4.44, 96).getPoints(96)
    );
    const innerRimHole = createStadiumPath(2.68, 3.88, 96);
    innerRimShape.holes.push(innerRimHole);

    const innerRimGeo = new THREE.ExtrudeGeometry(innerRimShape, {
      depth: 0.24,
      bevelEnabled: true,
      bevelSegments: 16,
      steps: 1,
      bevelSize: 0.11,
      bevelThickness: 0.14,
      curveSegments: 96,
    });
    innerRimGeo.center();

    const innerRimMat = new THREE.MeshPhysicalMaterial({
      color: 0xf7f9fb,
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.75,
      clearcoatRoughness: 0.15,
      transparent: true,
      opacity: 1,
    });
    const innerRimMesh = new THREE.Mesh(innerRimGeo, innerRimMat);
    innerRimMesh.position.z = 0.14;
    windowGroup.add(innerRimMesh);

    // 2D. Top Recessed Pull-Down Shade Handle Assembly (Exact match to top recess in m_intro_03.jpg)
    const shadeGroup = new THREE.Group();
    windowGroup.add(shadeGroup);

    // Shade Curtain Plane (lowers when user drags or toggles shade)
    const shadeCurtainGeo = new THREE.PlaneGeometry(3.2, 4.4);
    const shadeCurtainMat = new THREE.MeshStandardMaterial({
      color: 0xd8dce2,
      roughness: 0.45,
      metalness: 0.05,
      transparent: true,
      opacity: 0.96,
    });
    const shadeCurtainMesh = new THREE.Mesh(shadeCurtainGeo, shadeCurtainMat);
    shadeCurtainMesh.position.set(0, 4.15, 0.12);
    shadeGroup.add(shadeCurtainMesh);

    // Molded Curved Shade Handle Bar at the top of the window aperture
    const handleShelfGeo = new THREE.CylinderGeometry(1.18, 1.28, 0.26, 48);
    handleShelfGeo.scale(1.0, 1.0, 0.32);
    const handleShelfMat = new THREE.MeshPhysicalMaterial({
      color: 0xc8ccd2,
      roughness: 0.35,
      metalness: 0.14,
      clearcoat: 0.4,
      transparent: true,
      opacity: 1,
    });
    const handleShelfMesh = new THREE.Mesh(handleShelfGeo, handleShelfMat);
    handleShelfMesh.position.set(0, 1.92, 0.22);
    shadeGroup.add(handleShelfMesh);

    // Recessed finger-grip pill indent in the top shade handle
    const gripIndentGeo = new THREE.CapsuleGeometry(0.11, 0.95, 16, 32);
    gripIndentGeo.rotateZ(Math.PI / 2);
    gripIndentGeo.scale(1, 0.65, 0.45);
    const gripIndentMat = new THREE.MeshStandardMaterial({
      color: 0x8f949e,
      roughness: 0.55,
      metalness: 0.2,
      transparent: true,
      opacity: 1,
    });
    const gripIndentMesh = new THREE.Mesh(gripIndentGeo, gripIndentMat);
    gripIndentMesh.position.set(0, 1.98, 0.32);
    shadeGroup.add(gripIndentMesh);

    // 2E. Characteristic Diagonal Specular/Seal Mark on the left inner rim (visible in m_intro_03.jpg)
    const diagonalAccentGeo = new THREE.CapsuleGeometry(0.032, 0.48, 8, 16);
    diagonalAccentGeo.rotateZ(0.58);
    const diagonalAccentMat = new THREE.MeshBasicMaterial({
      color: 0x3b4049,
      transparent: true,
      opacity: 0.72,
    });
    const diagonalAccentMesh = new THREE.Mesh(
      diagonalAccentGeo,
      diagonalAccentMat
    );
    diagonalAccentMesh.position.set(-1.32, 0.62, 0.32);
    windowGroup.add(diagonalAccentMesh);

    // Second fine parallel streak for authentic optical refraction
    const diagonalAccent2 = diagonalAccentMesh.clone();
    diagonalAccent2.scale.set(0.65, 0.85, 1);
    diagonalAccent2.position.set(-1.25, 0.58, 0.33);
    windowGroup.add(diagonalAccent2);

    // 2F. Double-pane scratch-shield acrylic glass reflection + breather pinhole
    const glassShape = new THREE.Shape(
      createStadiumPath(2.74, 3.94, 64).getPoints(64)
    );
    const glassGeo = new THREE.ShapeGeometry(glassShape, 48);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.07,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.85,
      reflectivity: 0.9,
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.z = 0.25;
    windowGroup.add(glassMesh);

    // Tiny cabin pressure equalizer breather hole at bottom of inner pane
    const breatherGeo = new THREE.RingGeometry(0.015, 0.028, 24);
    const breatherMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
    });
    const breatherMesh = new THREE.Mesh(breatherGeo, breatherMat);
    breatherMesh.position.set(0, -1.72, 0.26);
    windowGroup.add(breatherMesh);

    // Mouse parallax tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const p = THREE.MathUtils.clamp(progressRef.current, 0, 1);
      const shade = THREE.MathUtils.clamp(shadeRef.current, 0, 0.85);

      // Smooth mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Update window shade position
      const shadeOffset = shade * 3.1;
      shadeGroup.position.y = -shadeOffset;

      // Portal zoom-through transformation:
      // As p goes 0 -> 0.65, the 3D window scales from 1x to 6.8x and fades out once the aperture passes the viewport edges
      const portalZoom = 1 + Math.pow(p, 1.65) * 7.5;
      windowGroup.scale.set(portalZoom, portalZoom, 1 + p * 1.5);
      windowGroup.rotation.y = mouse.x * 0.08 * (1 - p);
      windowGroup.rotation.x = -mouse.y * 0.06 * (1 - p);

      const frameAlpha = THREE.MathUtils.clamp(1 - (p - 0.36) * 2.6, 0, 1);
      cabinWallMat.opacity = frameAlpha;
      outerBezelMat.opacity = frameAlpha;
      innerRimMat.opacity = frameAlpha;
      handleShelfMat.opacity = frameAlpha;
      gripIndentMat.opacity = frameAlpha;
      shadeCurtainMat.opacity = frameAlpha * 0.96;
      diagonalAccentMat.opacity = frameAlpha * 0.72;
      windowGroup.visible = frameAlpha > 0.005;

      // Sky & Clouds animation:
      // Drift clouds slowly across the sky and bring foreground cloud banks into focus in Stage 2
      clouds.forEach((c) => {
        const drift = Math.sin(elapsed * c.speed + c.phase) * 0.45;
        const bob = Math.cos(elapsed * (c.speed * 0.8) + c.phase) * 0.18;
        c.sprite.position.x = c.baseX + drift + mouse.x * 0.35;
        c.sprite.position.y = c.baseY + bob + mouse.y * 0.22;
        // Bring clouds closer as camera enters the sky
        c.sprite.position.z = c.baseZ + p * 1.35;
      });

      // Tint inner light according to preset
      if (presetRef.current === 'golden') {
        innerSkyGlow.color.setHex(0x38bdf8);
      } else if (presetRef.current === 'aurora') {
        innerSkyGlow.color.setHex(0x2dd4bf);
      } else {
        innerSkyGlow.color.setHex(0x00b2ff);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};
