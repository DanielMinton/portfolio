"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 5000 }) {
  const ref = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 3;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();

    // Slow rotation
    ref.current.rotation.x = time * 0.02;
    ref.current.rotation.y = time * 0.03;

    // Subtle breathing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.02;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();

    // Pulsing glow
    const scale = 1 + Math.sin(time * 2) * 0.05;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="#8b5cf6" transparent opacity={0.1} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <GlowingSphere />
      </Canvas>
    </div>
  );
}
