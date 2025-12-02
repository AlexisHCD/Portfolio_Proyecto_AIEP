"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Background = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-700">
            {/* Soft Gradient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/20 dark:bg-indigo-500/10 blur-[120px] animate-pulse delay-1000" />

            {/* Elegant Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Subtle Noise Texture for "Paper" feel */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Mouse Spotlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                animate={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.08), transparent 40%)`,
                }}
            />
        </div>
    );
};
