import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

function AnimatedShape() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} ref={meshRef} scale={2}>
        <MeshDistortMaterial
          color="#007BFF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas className="h-full w-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#20C997" />
      <AnimatedShape />
    </Canvas>
  );
}
