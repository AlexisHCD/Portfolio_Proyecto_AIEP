"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";

export const SocialCard = () => {
    return (
        <motion.a
            href="https://github.com/AlexisHCD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full h-full bg-[#24292e] dark:bg-[#24292e] rounded-3xl p-6 group cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Github className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            <span className="mt-2 text-white/60 text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                @AlexisHCD
            </span>
        </motion.a>
    );
};
