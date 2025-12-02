"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center pt-32 pb-10 md:py-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                    Alexis Hernández Camus
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <h2 className="text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                    Estudiante de Programación & Analista de Sistemas
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-8"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Disponible para proyectos
                </div>
            </motion.div>
        </div>
    );
};
