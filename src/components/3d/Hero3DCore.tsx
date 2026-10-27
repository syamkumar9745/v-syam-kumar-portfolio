import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// 3D Developer at Workstation (Midnight Obsidian x Champagne Gold x Emerald aesthetic)
const DeveloperWithWorkstation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = -1.1 + Math.sin(t * 2) * 0.02;
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 1.2) * 0.08;
      headRef.current.rotation.x = 0.15 + Math.cos(t * 1.5) * 0.03;
    }
    if (screenGlowRef.current) {
      screenGlowRef.current.intensity = 2.4 + Math.sin(t * 5) * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.1, 0]}>
      {/* DESK */}
      {/* Desk top — Sleek Graphite */}
      <mesh position={[0, 0.7, 0.4]}>
        <boxGeometry args={[2.2, 0.08, 1.1]} />
        <meshStandardMaterial color="#242730" roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Desk edge Champagne Gold metallic trim */}
      <mesh position={[0, 0.7, 0.95]}>
        <boxGeometry args={[2.2, 0.02, 0.02]} />
        <meshStandardMaterial color="#C6A86B" emissive="#C6A86B" emissiveIntensity={2.2} />
      </mesh>
      {/* Desk legs — Midnight Obsidian */}
      <mesh position={[-0.95, 0.35, 0.4]}>
        <boxGeometry args={[0.06, 0.7, 0.9]} />
        <meshStandardMaterial color="#111318" metalness={0.8} />
      </mesh>
      <mesh position={[0.95, 0.35, 0.4]}>
        <boxGeometry args={[0.06, 0.7, 0.9]} />
        <meshStandardMaterial color="#111318" metalness={0.8} />
      </mesh>

      {/* MAIN MONITOR */}
      <group position={[0, 1.15, 0.6]}>
        {/* Monitor Stand */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.04, 24]} />
          <meshStandardMaterial color="#1C1E26" metalness={0.8} />
        </mesh>
        <mesh position={[0, -0.15, -0.05]}>
          <boxGeometry args={[0.06, 0.4, 0.06]} />
          <meshStandardMaterial color="#242730" metalness={0.8} />
        </mesh>
        {/* Monitor Bezel */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.5, 0.9, 0.06]} />
          <meshStandardMaterial color="#111318" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Active Curved Display Screen - Deep Emerald & Champagne Gold reflection */}
        <mesh position={[0, 0.15, -0.02]}>
          <boxGeometry args={[1.42, 0.82, 0.02]} />
          <meshStandardMaterial
            color="#104638"
            emissive="#176B55"
            emissiveIntensity={1.8}
            roughness={0.15}
          />
        </mesh>
        {/* Point light emitting from monitor onto developer */}
        <pointLight
          ref={screenGlowRef}
          position={[0, 0.15, -0.3]}
          color="#F5F0E6"
          intensity={2.6}
          distance={3.5}
        />
      </group>

      {/* SECONDARY VERTICAL MONITOR */}
      <group position={[0.95, 1.25, 0.5]} rotation={[0, -0.45, 0]}>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.65, 1.1, 0.05]} />
          <meshStandardMaterial color="#111318" metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.1, -0.02]}>
          <boxGeometry args={[0.6, 1.02, 0.02]} />
          <meshStandardMaterial
            color="#242730"
            emissive="#C6A86B"
            emissiveIntensity={1.4}
            roughness={0.15}
          />
        </mesh>
      </group>

      {/* MECHANICAL KEYBOARD & MOUSE */}
      <mesh position={[0, 0.75, 0.25]} rotation={[0.08, 0, 0]}>
        <boxGeometry args={[0.65, 0.03, 0.22]} />
        <meshStandardMaterial color="#181B22" emissive="#C6A86B" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.48, 0.75, 0.25]}>
        <boxGeometry args={[0.1, 0.025, 0.15]} />
        <meshStandardMaterial color="#242730" metalness={0.5} />
      </mesh>

      {/* ERGONOMIC CHAIR */}
      <group position={[0, 0.5, -0.35]}>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.7, 0.1, 0.65]} />
          <meshStandardMaterial color="#181B22" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.7, -0.28]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.65, 0.9, 0.1]} />
          <meshStandardMaterial color="#242730" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
          <meshStandardMaterial color="#111318" metalness={0.9} />
        </mesh>
      </group>

      {/* DEVELOPER AVATAR */}
      <group position={[0, 0.55, -0.25]}>
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.26, 0.3, 0.65, 16]} />
          <meshStandardMaterial color="#1C1E26" roughness={0.7} />
        </mesh>
        <mesh position={[-0.38, 0.42, 0.25]} rotation={[0.8, -0.3, 0]}>
          <cylinderGeometry args={[0.075, 0.07, 0.55, 12]} />
          <meshStandardMaterial color="#1C1E26" roughness={0.7} />
        </mesh>
        <mesh position={[0.38, 0.42, 0.25]} rotation={[0.8, 0.3, 0]}>
          <cylinderGeometry args={[0.075, 0.07, 0.55, 12]} />
          <meshStandardMaterial color="#1C1E26" roughness={0.7} />
        </mesh>

        {/* Head & Hair */}
        <group ref={headRef} position={[0, 1.05, 0.05]}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.2, 24, 24]} />
            <meshStandardMaterial color="#F5E8D8" roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.06, -0.04]}>
            <sphereGeometry args={[0.22, 24, 24]} />
            <meshStandardMaterial color="#111318" roughness={0.8} />
          </mesh>
          {/* Tech Headset in Champagne Gold */}
          <mesh position={[0, 0.06, 0]}>
            <torusGeometry args={[0.22, 0.035, 12, 24, Math.PI]} />
            <meshStandardMaterial color="#C6A86B" emissive="#C6A86B" emissiveIntensity={2.0} />
          </mesh>
          <mesh position={[-0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.07, 0.07, 0.06, 16]} />
            <meshStandardMaterial color="#104638" emissive="#176B55" emissiveIntensity={1.5} />
          </mesh>
          <mesh position={[0.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.07, 0.07, 0.06, 16]} />
            <meshStandardMaterial color="#104638" emissive="#176B55" emissiveIntensity={1.5} />
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
    { text: "AI", sub: "Autonomous Systems", color: "#C6A86B", angle: 0, radius: 2.8, yOffset: 0.8 },
    { text: "LLM", sub: "Large Language Models", color: "#176B55", angle: (Math.PI * 2) / 6, radius: 3.1, yOffset: -0.2 },
    { text: "ML", sub: "Machine Learning", color: "#E0C58E", angle: (Math.PI * 4) / 6, radius: 2.9, yOffset: 1.2 },
    { text: "DL", sub: "Deep Neural Nets", color: "#C6A86B", angle: (Math.PI * 6) / 6, radius: 3.2, yOffset: 0.1 },
    { text: "RAG", sub: "Vector Retrieval", color: "#176B55", angle: (Math.PI * 8) / 6, radius: 2.7, yOffset: -0.9 },
    { text: "Full-Stack", sub: "React · Node · APIs", color: "#E0C58E", angle: (Math.PI * 10) / 6, radius: 3.0, yOffset: 0.9 },
  ];

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (badgesGroupRef.current) {
      badgesGroupRef.current.rotation.y = t * 0.22;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.18;
    }
  });

  return (
    <group>
      {/* Glowing orbital boundary rings in Champagne Gold & Warm Gold */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.9, 0.015, 16, 120]} />
        <meshStandardMaterial color="#C6A86B" emissive="#A88B4E" emissiveIntensity={1.5} transparent opacity={0.65} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
        <torusGeometry args={[3.2, 0.012, 16, 120]} />
        <meshStandardMaterial color="#E0C58E" emissive="#F5F0E6" emissiveIntensity={1.3} transparent opacity={0.55} />
      </mesh>

      {/* Orbiting Tech Badge Clusters */}
      <group ref={badgesGroupRef}>
        {badges.map((b, i) => {
          const x = Math.cos(b.angle) * b.radius;
          const z = Math.sin(b.angle) * b.radius;
          const y = b.yOffset;

          return (
            <group key={i} position={[x, y, z]}>
              {/* Spherical anchor node */}
              <mesh>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshStandardMaterial color={b.color} emissive={b.color} emissiveIntensity={2.5} />
              </mesh>
              {/* HTML 3D Floating Holographic Label */}
              <Html distanceFactor={8} position={[0, 0.22, 0]} center>
                <div className="px-2.5 py-1 rounded-full bg-[#181B22]/90 backdrop-blur-md border border-[#C6A86B]/40 text-[#F5F0E6] text-[10px] font-mono font-bold tracking-tight shadow-gold-sm whitespace-nowrap flex items-center gap-1.5 select-none pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: b.color }} />
                  <span>{b.text}</span>
                </div>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
};

export const Hero3DCore: React.FC = () => {
  return (
    <div className="w-full h-[450px] sm:h-[500px] lg:h-[540px] relative select-none">
      <Canvas
        camera={{ position: [0, 1.2, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 4]} intensity={1.8} color="#FAF6EE" />
        <directionalLight position={[-5, -2, -2]} intensity={0.8} color="#C6A86B" />

        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <DeveloperWithWorkstation />
          <OrbitingSurroundings />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.15}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
