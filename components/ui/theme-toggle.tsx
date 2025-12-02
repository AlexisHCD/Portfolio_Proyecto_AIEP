"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder to avoid hydration mismatch
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
            >
                <Moon className="w-5 h-5 text-blue-400" />
            </motion.div>
        </button>
    );
}
