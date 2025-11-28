"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export const TimeWidget = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Chile is UTC-4 or UTC-3 depending on DST. 
            // Using 'es-CL' locale with 'America/Santiago' timezone handles this automatically.
            const timeString = now.toLocaleTimeString("es-CL", {
                timeZone: "America/Santiago",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    // Avoid hydration mismatch by not rendering time on server or first render if empty
    if (!time) return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 animate-pulse">
            <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-800 rounded mb-2"></div>
        </div>
    );

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6">
            <div className="flex items-center gap-2 mb-2 text-zinc-500 dark:text-zinc-400">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Santiago, CL</span>
            </div>
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tabular-nums tracking-tight">
                {time}
            </div>
        </div>
    );
};
