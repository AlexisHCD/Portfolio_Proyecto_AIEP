"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export const DownloadCV = () => {
    return (
        <motion.a
            href="/cv.pdf"
            download="CV_Alexis_Hernandez.pdf"
            className="relative flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

            {/* Icon Container */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 dark:bg-zinc-200 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Download className="w-4 h-4" />
            </div>

            <span className="relative">Descargar CV</span>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.a>
    );
};
