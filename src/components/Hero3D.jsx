import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment, RoundedBox, Cylinder, Capsule, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// --- MATERIALS ---
const matWhite = new THREE.MeshPhysicalMaterial({
    color: "#ffffff", roughness: 0.7, metalness: 0.1, clearcoat: 0.05
});
const matBlue = new THREE.MeshPhysicalMaterial({
    color: "#60a5fa", roughness: 0.6, metalness: 0.1, clearcoat: 0.1
});
const matSilver = new THREE.MeshStandardMaterial({
    color: "#e2e8f0", roughness: 0.3, metalness: 0.8
});
const matPaste = new THREE.MeshStandardMaterial({
    color: "#93c5fd", roughness: 0.8
});

// --- OBJECTS ---

function Toothbrush(props) {
    return (
        <group {...props}>
            {/* Handle */}
            <Capsule args={[0.15, 2.5, 4, 16]} position={[0, 0, 0]}>
                <primitive object={matWhite} />
            </Capsule>
            {/* Head */}
            <RoundedBox args={[0.4, 0.7, 0.2]} radius={0.05} position={[0, 1.4, 0.1]}>
                <primitive object={matBlue} />
            </RoundedBox>
            {/* Bristles Hint */}
            <RoundedBox args={[0.3, 0.6, 0.1]} radius={0.02} position={[0, 1.4, 0.25]}>
                <meshStandardMaterial color="#dbeafe" roughness={1} />
            </RoundedBox>
        </group>
    );
}

function Toothpaste(props) {
    return (
        <group {...props}>
            {/* Tube Body - Flattened Cylinder */}
            <mesh position={[0, -0.5, 0]} scale={[1, 0.8, 0.4]}>
                <cylinderGeometry args={[0.4, 0.05, 2, 32]} />
                <primitive object={matPaste} />
            </mesh>
            {/* Cap */}
            <mesh position={[0, 0.6, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
                <primitive object={matWhite} />
            </mesh>
        </group>
    );
}

function FlossContainer(props) {
    return (
        <group {...props}>
            <RoundedBox args={[1, 1, 0.4]} radius={0.3} smoothness={4}>
                <primitive object={matWhite} />
            </RoundedBox>
            {/* Label/Button hint */}
            <mesh position={[0, 0.1, 0.21]}>
                <circleGeometry args={[0.2, 32]} />
                <primitive object={matBlue} />
            </mesh>
        </group>
    );
}

function Stethoscope(props) {
    return (
        <group {...props}>
            {/* Chest Piece */}
            <mesh position={[0.8, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.1, 32]} />
                <primitive object={matSilver} />
            </mesh>
            {/* Tubing Loop (U-Shape) */}
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
                <torusGeometry args={[1, 0.08, 16, 32, Math.PI * 1.5]} />
                <primitive object={matBlue} />
            </mesh>
            {/* Ear Tubes */}
            <mesh position={[-1, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                <capsuleGeometry args={[0.08, 1, 4, 16]} />
                <primitive object={matSilver} />
            </mesh>
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}> {/* Corrected position logic simplified */}
                {/* Visual simplification: Just the loop and chest piece is enough to read as "medical" */}
            </mesh>
        </group>
    );
}

function MirrorTool(props) {
    return (
        <group {...props}>
            {/* Handle */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 3, 16]} />
                <primitive object={matSilver} />
            </mesh>
            {/* Mirror Head */}
            <mesh position={[0, 1.6, 0.2]} rotation={[Math.PI / 3, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
                <primitive object={matSilver} />
            </mesh>
            <mesh position={[0, 1.6, 0.23]} rotation={[Math.PI / 3, 0, 0]}>
                <circleGeometry args={[0.2, 32]} />
                <meshStandardMaterial color="#e0f2fe" roughness={0} metalness={1} />
            </mesh>
        </group>
    );
}

// Composition Container
function MedicalKit() {
    return (
        <group scale={0.8}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Toothbrush position={[-1.5, 0.5, 0]} rotation={[0, 0, -0.2]} />
            </Float>
            <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
                <Toothpaste position={[1.2, -0.8, 0.5]} rotation={[0, 0, 0.3]} />
            </Float>
            <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.6}>
                <FlossContainer position={[0, -1.5, 1]} rotation={[0.2, 0.2, 0]} scale={0.6} />
            </Float>
            <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.2}>
                <Stethoscope position={[0, 0.5, -1]} rotation={[0, 0, 0]} scale={1.2} />
            </Float>
            <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.3}>
                <MirrorTool position={[1.8, 1, -0.5]} rotation={[0, 0, 0.4]} />
            </Float>
        </group>
    );
}

function HeroScene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

            {/* Soft, Clinical but Warm Lighting */}
            <ambientLight intensity={0.7} />
            <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={1} color="#ffffff" castShadow />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#dbeafe" />

            <MedicalKit />

            <Environment preset="city" blur={1} />
        </>
    );
}

export default function Hero3D() {
    return (
        <section id="home" className="h-[90vh] w-full relative bg-[#051124] overflow-hidden">
            {/* Dark Navy Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f2942] to-[#051124] z-0" />

            <div className="absolute inset-0 z-10">
                <Canvas shadows dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <HeroScene />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} rotateSpeed={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-20 flex flex-col items-center justify-end h-full pb-20 text-center px-4 pointer-events-none">
                <div className="mb-8">
                    <motion.p
                        className="text-blue-200 font-medium text-sm md:text-base mb-4 tracking-[0.2em] uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Cleanliness • Trust • Care
                    </motion.p>

                    <motion.h1
                        className="font-serif text-4xl md:text-6xl font-bold text-white tracking-wide"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Uma <span className="text-blue-400">Dental</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pointer-events-auto"
                >
                    <a
                        href="#about"
                        className="text-white/80 hover:text-white text-sm font-light border-b border-white/20 hover:border-white transition-all pb-1"
                    >
                        Experience Modern Dentistry
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#051124] to-transparent z-10"></div>
        </section>
    );
}
