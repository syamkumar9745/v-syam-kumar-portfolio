import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// 3D Developer at Workstation (Stylized low-poly / cybernetic aesthetic)
const DeveloperWithWorkstation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Subtle breathing / typing motion
    if (groupRef.current) {
      groupRef.current.position.y = -1.1 + Math.sin(t * 2) * 0.02;
    }
    // Subtle head movement watching code
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 1.2) * 0.08;
      headRef.current.rotation.x = 0.15 + Math.cos(t * 1.5) * 0.03;
    }
    // Screen flicker / pulse effect
    if (screenGlowRef.current) {
      screenGlowRef.current.intensity = 2.5 + Math.sin(t * 6) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.1, 0]}>
      {/* ─── DESK ─── */}
      {/* Desk top */}
      <mesh position={[0, 0.7, 0.4]}>
        <boxGeometry args={[2.2, 0.08, 1.1]} />
        <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Desk edge cyan neon strip */}
      <mesh position={[0, 0.7, 0.95]}>
        <boxGeometry args={[2.2, 0.02, 0.02]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2.5} />
      </mesh>
      {/* Desk legs */}
      <mesh position={[-0.95, 0.35, 0.4]}>
        <boxGeometry args={[0.06, 0.7, 0.9]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} />
      </mesh>
      <mesh position={[0.95, 0.35, 0.4]}>
        <boxGeometry args={[0.06, 0.7, 0.9]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} />
      </mesh>

      {/* ─── MAIN MONITOR ─── */}
      <group position={[0, 1.15, 0.6]}>
        {/* Monitor Stand */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.04, 24]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>
        <mesh position={[0, -0.15, -0.05]}>
          <boxGeometry args={[0.06, 0.4, 0.06]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} />
        </mesh>
        {/* Monitor Bezel */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.5, 0.9, 0.06]} />
          <meshStandardMaterial color="#090d16" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Active Curved Display Screen */}
        <mesh position={[0, 0.15, -0.02]}>
          <boxGeometry args={[1.42, 0.82, 0.02]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#06b6d4"
            emissiveIntensity={2.0}
            roughness={0.1}
          />
        </mesh>
        {/* Point light emitting from monitor onto developer */}
        <pointLight
          ref={screenGlowRef}
          position={[0, 0.15, -0.3]}
          color="#38bdf8"
          intensity={2.8}
          distance={3.5}
        />
      </group>

      {/* ─── SECONDARY VERTICAL MONITOR (IDE / Terminal) ─── */}
      <group position={[0.95, 1.25, 0.5]} rotation={[0, -0.45, 0]}>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.65, 1.1, 0.05]} />
          <meshStandardMaterial color="#090d16" metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.1, -0.02]}>
          <boxGeometry args={[0.6, 1.02, 0.02]} />
          <meshStandardMaterial
            color="#312e81"
            emissive="#6366f1"
            emissiveIntensity={2.2}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* ─── MECHANICAL KEYBOARD & MOUSE ─── */}
      <mesh position={[0, 0.75, 0.25]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[0.65, 0.03, 0.22]} />
        <meshStandardMaterial color="#1e1b4b" emissive="#4338ca" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.48, 0.75, 0.25]}>
        <boxGeometry args={[0.1, 0.025, 0.15]} />
        <meshStandardMaterial color="#334155" metalness={0.5} />
      </mesh>

      {/* ─── ERGONOMIC CHAIR ─── */}
      <group position={[0, 0.5, -0.35]}>
        {/* Seat */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.7, 0.1, 0.65]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        {/* Backrest */}
        <mesh position={[0, 0.7, -0.3]}>
          <boxGeometry args={[0.65, 0.95, 0.1]} />
          <meshStandardMaterial color="#1e1b4b" roughness={0.5} metalness={0.3} />
        </mesh>
        {/* Headrest */}
        <mesh position={[0, 1.25, -0.32]}>
          <boxGeometry args={[0.38, 0.2, 0.08]} />
          <meshStandardMaterial color="#312e81" roughness={0.5} />
        </mesh>
        {/* Center column */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 12]} />
          <meshStandardMaterial color="#64748b" metalness={0.9} />
        </mesh>
        {/* Star base */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.35, 0.4, 0.05, 5]} />
          <meshStandardMaterial color="#334155" metalness={0.8} />
        </mesh>
      </group>

      {/* ─── THE DEVELOPER (Boy sitting, hands typing on keyboard) ─── */}
      <group position={[0, 0.65, -0.3]}>
        {/* Legs / Jeans */}
        <mesh position={[-0.18, 0.1, 0.3]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.16, 0.18, 0.55]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>
        <mesh position={[0.18, 0.1, 0.3]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[0.16, 0.18, 0.55]} />
          <meshStandardMaterial color="#1e293b" roughness={0.7} />
        </mesh>

        {/* Torso / Hoodie */}
        <mesh position={[0, 0.55, 0]}>
          <boxGeometry args={[0.55, 0.7, 0.35]} />
          <meshStandardMaterial color="#312e81" roughness={0.6} />
        </mesh>
        {/* Hoodie accent zip */}
        <mesh position={[0, 0.55, 0.18]}>
          <boxGeometry args={[0.03, 0.65, 0.02]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1.2} />
        </mesh>

        {/* Arms angled to keyboard */}
        <mesh position={[-0.34, 0.5, 0.25]} rotation={[0.55, -0.2, 0]}>
          <boxGeometry args={[0.14, 0.14, 0.5]} />
          <meshStandardMaterial color="#3730a3" roughness={0.6} />
        </mesh>
        <mesh position={[0.34, 0.5, 0.25]} rotation={[0.55, 0.2, 0]}>
          <boxGeometry args={[0.14, 0.14, 0.5]} />
          <meshStandardMaterial color="#3730a3" roughness={0.6} />
        </mesh>

        {/* Hands on keyboard */}
        <mesh position={[-0.18, 0.22, 0.52]}>
          <boxGeometry args={[0.1, 0.06, 0.12]} />
          <meshStandardMaterial color="#fbcfe8" roughness={0.4} />
        </mesh>
        <mesh position={[0.18, 0.22, 0.52]}>
          <boxGeometry args={[0.1, 0.06, 0.12]} />
          <meshStandardMaterial color="#fbcfe8" roughness={0.4} />
        </mesh>

        {/* Head & Hair */}
        <group ref={headRef} position={[0, 1.05, 0.05]}>
          {/* Face / Head */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.2, 24, 24]} />
            <meshStandardMaterial color="#fed7aa" roughness={0.5} />
          </mesh>
          {/* Hair */}
          <mesh position={[0, 0.06, -0.04]}>
            <sphereGeometry args={[0.22, 24, 24]} />
            <meshStandardMaterial color="#0f172a" roughness={0.8} />
          </mesh>
          {/* Tech Headset / Headphones */}
          <mesh position={[0, 0.06, 0]}>
            <torusGeometry args={[0.22, 0.035, 12, 24, Math.PI]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2.0} />
          </mesh>
          <mesh position={[-0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.07, 0.07, 0.06, 16]} />
            <meshStandardMaterial color="#0891b2" emissive="#06b6d4" emissiveIntensity={1.5} />
          </mesh>
          <mesh position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.07, 0.07, 0.06, 16]} />
            <meshStandardMaterial color="#0891b2" emissive="#06b6d4" emissiveIntensity={1.5} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

// Orbiting Surrounding AI / ML / DL / LLM Holographic Badges
const OrbitingSurroundings: React.FC = () => {
  const badgesGroupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  const badges = [
    { text: "AI", sub: "Artificial Intelligence", color: "#38bdf8", bg: "#082f49", angle: 0, radius: 2.8, yOffset: 0.8 },
    { text: "LLM", sub: "Large Language Models", color: "#818cf8", bg: "#1e1b4b", angle: (Math.PI * 2) / 6, radius: 3.1, yOffset: -0.2 },
    { text: "ML", sub: "Machine Learning", color: "#34d399", bg: "#064e3b", angle: (Math.PI * 4) / 6, radius: 2.9, yOffset: 1.2 },
    { text: "DL", sub: "Deep Learning & Neural", color: "#f472b6", bg: "#701a75", angle: (Math.PI * 6) / 6, radius: 3.2, yOffset: 0.1 },
    { text: "RAG", sub: "Vector Retrieval", color: "#38bdf8", bg: "#0c4a6e", angle: (Math.PI * 8) / 6, radius: 2.7, yOffset: -0.9 },
    { text: "Full-Stack", sub: "React · Node · APIs", color: "#fbbf24", bg: "#713f12", angle: (Math.PI * 10) / 6, radius: 3.0, yOffset: 0.9 },
  ];

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (badgesGroupRef.current) {
      badgesGroupRef.current.rotation.y = t * 0.25;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Subtle glowing orbital boundary rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.9, 0.015, 16, 120]} />
        <meshStandardMaterial color="#6366f1" emissive="#818cf8" emissiveIntensity={1.4} transparent opacity={0.6} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
        <torusGeometry args={[3.2, 0.012, 16, 120]} />
        <meshStandardMaterial color="#06b6d4" emissive="#38bdf8" emissiveIntensity={1.2} transparent opacity={0.5} />
      </mesh>

      {/* Orbiting Tech Badge Clusters */}
      <group ref={badgesGroupRef}>
        {badges.map((b, i) => {
          const x = Math.cos(b.angle) * b.radius;
          const z = Math.sin(b.angle) * b.radius;
          const y = b.yOffset;

          return (
            <group key={i} position={[x, y, z]}>
              {/* Glowing anchor sphere */}
              <mesh>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={2.5} />
              </mesh>

              {/* Connecting light beam down to desk level */}
              <mesh position={[0, -y * 0.5, 0]}>
                <cylinderGeometry args={[0.005, 0.005, Math.abs(y), 8]} />
                <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={1.0} transparent opacity={0.3} />
              </mesh>

              {/* 3D Holographic HTML Pill Badge that always faces camera */}
              <Html center distanceFactor={7}>
                <div
                  style={{
                    backgroundColor: 'rgba(8, 13, 26, 0.88)',
                    borderColor: b.color,
                    boxShadow: `0 0 16px ${b.color}40`,
                  }}
                  className="px-3 py-1.5 rounded-xl border backdrop-blur-md flex flex-col items-center justify-center select-none pointer-events-none whitespace-nowrap transition-transform"
                >
                  <span
                    style={{ color: b.color }}
                    className="text-xs font-mono font-extrabold tracking-wider leading-none"
                  >
                    {b.text}
                  </span>
                  <span className="text-[9px] font-mono text-slate-300 tracking-tight leading-none mt-0.5">
                    {b.sub}
                  </span>
                </div>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
};

const HeroScene: React.FC = () => {
  const rootGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (rootGroupRef.current) {
      const mouse = state.mouse;
      rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        rootGroupRef.current.rotation.y,
        mouse.x * 0.35,
        0.05
      );
      rootGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        rootGroupRef.current.rotation.x,
        -mouse.y * 0.2,
        0.05
      );
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[6, 8, 5]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[-6, -4, -5]} intensity={1.2} color="#6366f1" />
      <pointLight position={[0, 3, 2]} intensity={3.5} color="#38bdf8" distance={10} />
      <pointLight position={[0, -2, -2]} intensity={2.0} color="#a855f7" distance={8} />

      <group ref={rootGroupRef}>
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.35}>
          {/* Boy sitting with workstation in center */}
          <DeveloperWithWorkstation />
          {/* Surroundings filled with AI, LLM, ML, DL, RAG, Full-Stack */}
          <OrbitingSurroundings />
        </Float>
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.5}
      />
    </>
  );
};

export const Hero3DCore: React.FC = () => {
  const [hasWebGL] = useState(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch {
      return false;
    }
  });

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center relative p-8">
        <div className="relative w-80 h-80 rounded-3xl border border-indigo-500/40 bg-slate-900/80 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-sm font-bold font-mono text-cyan-400">AI ENGINEER WORKSTATION</span>
          <span className="text-xs text-slate-400 mt-2">AI · LLM · ML · DL · Full-Stack</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[480px] sm:h-[560px] lg:h-[640px] relative">
      <Canvas
        camera={{ position: [0, 0.4, 7.0], fov: 46 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="cursor-grab active:cursor-grabbing"
      >
        <HeroScene />
      </Canvas>
    </div>
  );
};
