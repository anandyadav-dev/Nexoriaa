"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const tealLight = new THREE.DirectionalLight(0x00c8b4, 2.5);
    tealLight.position.set(3, 4, 5);
    scene.add(tealLight);

    const blueLight = new THREE.DirectionalLight(0x3278ff, 1.5);
    blueLight.position.set(-4, -2, 3);
    scene.add(blueLight);

    const pointLight = new THREE.PointLight(0x00c8b4, 2, 12);
    pointLight.position.set(0, 2, 3);
    scene.add(pointLight);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 64, 64),
      new THREE.MeshPhysicalMaterial({
        color: 0x0a1a2e,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.6,
        thickness: 1.5,
        transparent: true,
        opacity: 0.9,
        envMapIntensity: 1,
      }),
    );
    scene.add(sphere);

    const ringOne = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.012, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x00c8b4, transparent: true, opacity: 0.5 }),
    );
    ringOne.rotation.x = Math.PI / 2.5;
    scene.add(ringOne);

    const ringTwo = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.008, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x3278ff, transparent: true, opacity: 0.3 }),
    );
    ringTwo.rotation.x = Math.PI / 4;
    ringTwo.rotation.y = Math.PI / 6;
    scene.add(ringTwo);

    const cubePositions = [
      [2.6, 1.2, -0.5],
      [-2.4, 0.8, -0.8],
      [1.8, -1.8, 0.2],
      [-1.5, -1.6, -0.3],
      [0.4, 2.4, -1.0],
      [2.0, 0.0, 0.8],
      [-2.0, -0.2, 0.6],
    ];

    const floatingMeshes = cubePositions.map((position, index) => {
      const size = 0.18 + Math.random() * 0.18;
      const geometry =
        index % 2 === 0
          ? new THREE.BoxGeometry(size, size, size)
          : new THREE.OctahedronGeometry(size * 0.8);
      const material = new THREE.MeshPhysicalMaterial({
        color: index % 3 === 0 ? 0x00c8b4 : index % 3 === 1 ? 0x3278ff : 0x0a2a3a,
        metalness: 0.6,
        roughness: 0.2,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position[0], position[1], position[2]);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = {
        floatOffset: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      };
      scene.add(mesh);
      return mesh;
    });

    const particleCount = 260;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.8 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x00c8b4,
        size: 0.03,
        transparent: true,
        opacity: 0.55,
      }),
    );
    scene.add(particles);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x00c8b4, transparent: true, opacity: 0.06 }),
    );
    scene.add(glow);

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth || 360;
      const height = parent?.clientHeight || 400;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);
    resize();

    let frame = 0;
    let time = 0;
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      time += 0.012;

      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.001;

      ringOne.rotation.z += 0.004;
      ringOne.rotation.y += 0.002;
      ringTwo.rotation.z -= 0.003;
      ringTwo.rotation.x += 0.002;

      particles.rotation.y += 0.0015;
      particles.rotation.x += 0.0008;

      floatingMeshes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeed;
        mesh.rotation.y += mesh.userData.rotSpeed * 0.7;
        mesh.position.y += Math.sin(time + mesh.userData.floatOffset) * 0.004;
      });

      pointLight.position.x = Math.sin(time * 0.5) * 3;
      pointLight.position.y = Math.cos(time * 0.4) * 2;

      scene.rotation.y += (mouse.x * 0.3 - scene.rotation.y) * 0.05;
      scene.rotation.x += (mouse.y * 0.2 - scene.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      particleGeometry.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-three-canvas" aria-hidden="true" />;
}
