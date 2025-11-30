"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Proyectos", path: "/projects" },
    { name: "Contacto", path: "/contact" },
];

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <nav className="flex items-center gap-2 p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-6 py-3 text-base font-medium rounded-full transition-colors",
                                isActive
                                    ? "text-zinc-900 dark:text-zinc-100"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};
