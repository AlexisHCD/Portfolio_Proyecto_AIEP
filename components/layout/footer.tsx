export const Footer = () => {
    return (
        <footer className="w-full py-6 mt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-2">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Alexis Hernández. Desarrollado con Next.js, Tailwind CSS y mucho ☕.
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    Hospedado en Vercel. Sitio para uso personal y demostrativo.
                </p>
            </div>
        </footer>
    );
};
