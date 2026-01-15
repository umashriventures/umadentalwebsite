import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Soft, bone-like material with slight translucency
function BioMaterial() {
    return (
        <meshPhysicalMaterial
            color="#f8f9fa"
            roughness={0.4}
            metalness={0.05}
            transmission={0.2} // Slight translucency for organic feel
            thickness={0.5}
            clearcoat={0.2}
            clearcoatRoughness={0.2}
        />
    );
}

// Represents the mouth/bite logic through a soft, abstract arc
function BiteArc(props) {
    const shape = new THREE.Shape();
    // Create a U-shaped arc
    shape.absarc(0, 0, 1.5, Math.PI * 0.2, Math.PI * 0.8, false);

    return (
        <group {...props}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.15, 32, 64, Math.PI * 0.6]} />
                <BioMaterial />
            </mesh>
            {/* Soft inner core representing protection */}
            <mesh position={[0, -0.2, 0]}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshPhysicalMaterial color="#4A90E2" opacity={0.1} transparent />
            </mesh>
        </group>
    );
}

// Bone-like protective geometry
function ProtectiveForm(props) {
    return (
        <group {...props}>
            <mesh>
                <icosahedronGeometry args={[0.6, 8]} />
                <BioMaterial />
            </mesh>
            {/* Nerve-like filaments embedded (subtle) */}
            <mesh scale={1.1}>
                <icosahedronGeometry args={[0.6, 2]} />
                <meshBasicMaterial color="#4A90E2" wireframe opacity={0.05} transparent />
            </mesh>
        </group>
    );
}

function BioMasteryScene() {
    return (
        <>
            {/* Deep Enclosure/Arc for safety signal */}
            <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
                <BiteArc position={[0, 0, -1]} rotation={[0.2, 0, 0]} />
            </Float>

            {/* Protective forms converging toward center (Pressure Logic) */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
                <ProtectiveForm position={[-2, 1, 0]} />
            </Float>
            <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.2}>
                <ProtectiveForm position={[2, -0.5, 1]} />
            </Float>

            {/* Connecting fibers (Subtle nerve logic) */}
            <mesh position={[0, 0, -2]}>
                <torusGeometry args={[3, 0.01, 16, 100]} />
                <meshBasicMaterial color="#4A90E2" opacity={0.05} transparent />
            </mesh>
        </>
    );
}

export default function Hero3D() {
    return (
        <section id="home" className="h-screen w-full relative bg-white dark:bg-slate-950 transition-colors duration-500">
            <div className="absolute inset-0 z-0">
                <Canvas shadow={true}>
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

                    {/* Warm, soft lighting instead of harsh medical point lights */}
                    <ambientLight intensity={0.9} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#fffcf5" />
                    <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#eef6ff" />

                    <Suspense fallback={null}>
                        <BioMasteryScene />
                    </Suspense>

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
                </Canvas>
            </div>

            {/* Overlay text - Anchoring biologically */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
                <motion.h1
                    className="text-6xl md:text-8xl font-heading font-bold text-slate-900 dark:text-white mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Uma<span className="text-primary">Dental</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mb-10 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Mastery with Care. Controlled Precision. <br />
                    <span className="text-primary/80">Biological Harmony Meets Modern Engineering.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="pointer-events-auto"
                >
                    <a
                        href="#about"
                        className="px-10 py-5 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20"
                    >
                        Explore Our Mastery
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-0 transition-colors duration-500"></div>
        </section>
    );
}
