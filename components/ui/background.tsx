"use client";

export const Background = () => {

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
        </div>
    );
};
