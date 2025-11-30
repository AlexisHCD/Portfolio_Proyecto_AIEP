"use client";

import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SocialCardProps {
    type: "github" | "linkedin";
    username: string;
    url: string;
}

export const SocialCard = ({ type, username, url }: SocialCardProps) => {
    const isGithub = type === "github";

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "flex flex-col items-center justify-center w-full h-full rounded-3xl p-6 group cursor-pointer relative overflow-hidden",
                isGithub ? "bg-[#24292e] dark:bg-[#24292e]" : "bg-[#0077b5] dark:bg-[#0077b5]"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {isGithub ? (
                <Github className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            ) : (
                <Linkedin className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
            )}

            <span className="mt-2 text-white/80 text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {username}
            </span>
        </motion.a>
    );
};
