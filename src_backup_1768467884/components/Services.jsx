import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, Stethoscope, Smile, Syringe } from 'lucide-react';

const services = [
    {
        title: "Restorative Care",
        description: "Expert root canals, fillings, and implants to restore your smile's function and beauty.",
        icon: Stethoscope,
        color: "from-blue-400 to-blue-600"
    },
    {
        title: "Cosmetic Dentistry",
        description: "Teeth whitening, veneers, and smile makeovers for a radiant, confident look.",
        icon: Sparkles,
        color: "from-teal-400 to-teal-600"
    },
    {
        title: "Orthodontics",
        description: "Advanced braces and clear aligners to straighten teeth and correct bite issues.",
        icon: Smile,
        color: "from-purple-400 to-purple-600"
    },
    {
        title: "Oral Surgery",
        description: "Painless extractions and surgical procedures with modern anesthesia.",
        icon: Syringe,
        color: "from-red-400 to-red-600"
    }
];

const TiltCard = ({ service, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.5deg)`;
    const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.5deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 20);
        y.set(yPct * 20);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-full"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="h-full glass-panel p-8 flex flex-col items-center text-center group transition-colors duration-300 hover:bg-white/40 dark:hover:bg-gray-800/60"
            >
                <div
                    className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}
                    style={{ transform: "translateZ(50px)" }}
                >
                    <service.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold mb-4" style={{ transform: "translateZ(25px)" }}>{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed" style={{ transform: "translateZ(25px)" }}>
                    {service.description}
                </p>

                <div
                    className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Learn More &rarr;</span>
                </div>
            </div>
        </motion.div>
    );
};

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[120px] -z-10" />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">World-Class <span className="text-gradient">Treatments</span></h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        From routine check-ups to complex surgical procedures, we use the latest technology to ensure your comfort and care.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
                    {services.map((service, index) => (
                        <TiltCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
