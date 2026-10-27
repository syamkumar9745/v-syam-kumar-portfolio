import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating Neural Particle Field in Champagne Gold and Obsidian
const ParticleSwarm: React.FC = () => {
  const count = 120;
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Generate 3D coordinates for particles
  const [positions, originalPositions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 22;
      const z = (Math.random() - 0.5) * 12 - 2;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;

      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return [pos, orig, vel];
  }, [count]);

  const maxLines = 150;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state) => {
    if (prefersReducedMotion) return;

    const t = state.clock.getElapsedTime();
    const mouse = state.mouse;

    if (meshRef.current) {
      const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      let lineIdx = 0;

      for (let i = 0; i < count; i++) {
        arr[i * 3] += velocities[i * 3];
        arr[i * 3 + 1] += velocities[i * 3 + 1];
        arr[i * 3 + 2] += velocities[i * 3 + 2];

        if (Math.abs(arr[i * 3] - originalPositions[i * 3]) > 2) velocities[i * 3] *= -1;
        if (Math.abs(arr[i * 3 + 1] - originalPositions[i * 3 + 1]) > 2) velocities[i * 3 + 1] *= -1;

        for (let j = i + 1; j < count; j++) {
          if (lineIdx < maxLines * 6) {
            const dx = arr[i * 3] - arr[j * 3];
            const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
            const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < 7.5) {
              linePositions[lineIdx++] = arr[i * 3];
              linePositions[lineIdx++] = arr[i * 3 + 1];
              linePositions[lineIdx++] = arr[i * 3 + 2];

              linePositions[lineIdx++] = arr[j * 3];
              linePositions[lineIdx++] = arr[j * 3 + 1];
              linePositions[lineIdx++] = arr[j * 3 + 2];
            }
          }
        }
      }

      posAttr.needsUpdate = true;

      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.15 + t * 0.015, 0.04);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouse.y * 0.12, 0.04);
    }

    if (linesRef.current) {
      const linePosAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      linePosAttr.needsUpdate = true;
      linesRef.current.rotation.y = meshRef.current?.rotation.y || 0;
      linesRef.current.rotation.x = meshRef.current?.rotation.x || 0;
    }
  });

  return (
    <group>
      {/* 3D Points / Champagne Gold Neural Nodes */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.11}
          color="#C6A86B"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Connecting 3D Warm Gold Filaments */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#E0C58E"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

export const Global3DBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <ParticleSwarm />
      </Canvas>
    </div>
  );
};
