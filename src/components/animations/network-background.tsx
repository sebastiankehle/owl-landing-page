"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const sceneRef = useRef<THREE.Scene | null>(null);
  console.log(theme);
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Clear any existing content
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Clear existing scene if any
    if (sceneRef.current) {
      sceneRef.current.clear();
    }

    const isDark = resolvedTheme === "dark";

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Adjust camera position to center the scene
    camera.position.set(0, 0, 0); // Reduced from 24 to bring it closer
    camera.lookAt(0, 0, 0); // Look at center instead of offset

    // Create points with connections
    const particleCount = 134;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const connections: THREE.Line[] = [];

    // Generate particles with theme-aware colors
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Gradient colors adjusted for theme
      const ratio = i / positions.length;
      const color = new THREE.Color();
      if (isDark) {
        color.setHSL(0.75 - ratio * 0.2, 0.8, 0.6);
      } else {
        // Much darker colors for light mode
        color.setHSL(0.75 - ratio * 0.2, 0.8, 0.15); // Lower lightness for better contrast
      }
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Points material with theme-aware opacity
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.8, // Increased light mode opacity
      sizeAttenuation: true,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending, // Changed blending mode for light mode
    });

    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // Create connections between nearby points
    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.2 : 0.6, // Increased light mode opacity
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending, // Changed blending mode for light mode
      depthTest: false,
      depthWrite: false,
    });

    // Modified connection logic for triangular patterns
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
            Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
            Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2),
        );

        if (distance < 3) {
          // Increased from 1.5 to create more connections
          // Find a third point to create triangles
          for (let k = j + 1; k < particleCount; k++) {
            const distanceJK = Math.sqrt(
              Math.pow(positions[j * 3] - positions[k * 3], 2) +
                Math.pow(positions[j * 3 + 1] - positions[k * 3 + 1], 2) +
                Math.pow(positions[j * 3 + 2] - positions[k * 3 + 2], 2),
            );
            const distanceIK = Math.sqrt(
              Math.pow(positions[i * 3] - positions[k * 3], 2) +
                Math.pow(positions[i * 3 + 1] - positions[k * 3 + 1], 2) +
                Math.pow(positions[i * 3 + 2] - positions[k * 3 + 2], 2),
            );

            if (distanceJK < 3 && distanceIK < 3) {
              // Create three lines for the triangle
              const createLine = (p1: number, p2: number) => {
                const lineGeometry = new THREE.BufferGeometry();
                const linePositions = new Float32Array([
                  positions[p1 * 3],
                  positions[p1 * 3 + 1],
                  positions[p1 * 3 + 2],
                  positions[p2 * 3],
                  positions[p2 * 3 + 1],
                  positions[p2 * 3 + 2],
                ]);
                const lineColors = new Float32Array([
                  colors[p1 * 3],
                  colors[p1 * 3 + 1],
                  colors[p1 * 3 + 2],
                  colors[p2 * 3],
                  colors[p2 * 3 + 1],
                  colors[p2 * 3 + 2],
                ]);

                lineGeometry.setAttribute(
                  "position",
                  new THREE.BufferAttribute(linePositions, 3),
                );
                lineGeometry.setAttribute(
                  "color",
                  new THREE.BufferAttribute(lineColors, 3),
                );

                const line = new THREE.Line(lineGeometry, linesMaterial);
                connections.push(line);
                scene.add(line);
              };

              createLine(i, j);
              createLine(j, k);
              createLine(k, i);
              break; // Move to next pair once we find a triangle
            }
          }
        }
      }
    }

    camera.position.z = 8;

    // Animation
    let frame = 0;
    const rotation = { x: 0, y: 0, z: 0 };
    const initialPositions = [...positions]; // Store initial positions

    function animate() {
      frame = requestAnimationFrame(animate);

      // Complex autonomous rotation with faster speed
      const time = Date.now() * 0.0003;

      // Y-axis: Continuous rotation
      rotation.y = time * 0.2;

      // X and Z: More pronounced wave-like motion
      rotation.x = Math.sin(time * 0.4) * 0.2;
      rotation.z = Math.cos(time * 0.3) * 0.15;

      // Shape morphing
      const currentPositions = geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const phase = time + (i / positions.length) * Math.PI * 2;

        // Gentler morphing to maintain connections
        currentPositions[i] = initialPositions[i] * (1 + Math.sin(phase) * 0.6);
        currentPositions[i + 1] =
          initialPositions[i + 1] * (1 + Math.cos(phase) * 0.6);
        currentPositions[i + 2] =
          initialPositions[i + 2] * (1 + Math.sin(phase * 0.5) * 0.6);
      }
      geometry.attributes.position.needsUpdate = true;

      // Apply rotations
      points.rotation.x = rotation.x;
      points.rotation.y = rotation.y;
      points.rotation.z = rotation.z;

      // Update connections positions
      connections.forEach((line) => {
        line.rotation.copy(points.rotation);
      });

      renderer.render(scene, camera);
    }

    animate();

    // Add window resize handler
    const handleResize = () => {
      if (!containerRef.current) return;

      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (window.innerWidth >= 1024) {
        camera.position.set(12, 0, 12);
        camera.lookAt(0, 0, 0);
      } else {
        camera.position.set(0, 0, 12);
        camera.lookAt(0, 0, 0);
      }
    };

    window.addEventListener("resize", handleResize);

    // Enhanced cleanup
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);

      // Remove canvas
      if (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      // Dispose of all materials and geometries
      geometry.dispose();
      pointsMaterial.dispose();
      connections.forEach((line) => {
        line.geometry.dispose();
        if (line.material instanceof THREE.Material) {
          line.material.dispose();
        }
        scene.remove(line);
      });
      linesMaterial.dispose();

      // Clear scene
      scene.clear();
      sceneRef.current = null;

      // Dispose of renderer
      renderer.dispose();
    };
  }, [resolvedTheme]);

  // Hide on mobile with Tailwind
  return <div ref={containerRef} className="h-full w-full" />;
}
