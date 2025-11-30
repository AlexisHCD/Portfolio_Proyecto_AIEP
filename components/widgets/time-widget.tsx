"use client";

import { useEffect, useState } from "react";
import { Clock, Cloud, CloudRain, CloudSun, Sun, Snowflake } from "lucide-react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// San Antonio, Chile coordinates
const LAT = -33.5959;
const LON = -71.6142;
const WEATHER_API = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code&timezone=auto`;

const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-6 h-6 text-yellow-500" />;
    if (code >= 1 && code <= 3) return <CloudSun className="w-6 h-6 text-zinc-500" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-6 h-6 text-blue-500" />;
    if (code >= 71 && code <= 77) return <Snowflake className="w-6 h-6 text-cyan-500" />;
    return <Cloud className="w-6 h-6 text-zinc-500" />;
};

export const TimeWidget = () => {
    const [time, setTime] = useState<string>("");
    const { data: weather } = useSWR(WEATHER_API, fetcher, { refreshInterval: 300000 }); // 5 min refresh

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("es-CL", {
                timeZone: "America/Santiago",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!time) return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 animate-pulse">
            <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-800 rounded mb-2"></div>
        </div>
    );

    const temp = weather?.current?.temperature_2m;
    const weatherCode = weather?.current?.weather_code;

    return (
        <div className="flex flex-col items-center justify-between w-full h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6">
            {/* Time Section */}
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1 text-zinc-500 dark:text-zinc-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">San Antonio, CL</span>
                </div>
                <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 tabular-nums tracking-tight">
                    {time}
                </div>
            </div>

            {/* Weather Section */}
            {weather && (
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 w-full justify-center">
                    {getWeatherIcon(weatherCode)}
                    <span className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">
                        {Math.round(temp)}°C
                    </span>
                </div>
            )}
        </div>
    );
};
