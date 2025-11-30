"use client";

import { motion } from "framer-motion";
// Actually, Lucide has an 'X' icon but it might be the close icon. The user asked for "X (Twitter)".
// I'll use the 'X' icon from Lucide if available, or a custom SVG path for the X logo to be accurate.
// Let's stick to Lucide 'Twitter' for now as a placeholder or 'X' if I can find it, but standard Lucide 'X' is a cross.
// I will use a custom SVG for the X logo to be precise, as requested "X (Twitter)".

const XLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export const SocialCard = () => {
    return (
        <motion.a
            href="https://twitter.com/mkeled"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full bg-black rounded-3xl p-6 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <XLogo className="w-16 h-16 text-white transition-transform duration-300 group-hover:rotate-12" />
        </motion.a>
    );
};
