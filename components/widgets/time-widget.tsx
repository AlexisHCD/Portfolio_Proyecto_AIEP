"use client";

import { useEffect, useState } from "react";
import { Clock, Cloud, CloudRain, CloudSun, Sun, Snowflake } from "lucide-react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// San Antonio, Chile coordinates
const LAT = -33.5959;
const LON = -71.6142;
const WEATHER_API = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;

const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-8 h-8 text-yellow-500" />;
    if (code >= 1 && code <= 3) return <CloudSun className="w-8 h-8 text-zinc-500" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (code >= 71 && code <= 77) return <Snowflake className="w-8 h-8 text-cyan-500" />;
    return <Cloud className="w-8 h-8 text-zinc-500" />;
};

export const TimeWidget = () => {
    const [time, setTime] = useState<string>("");
    const { data: weather, error } = useSWR(WEATHER_API, fetcher, {
        refreshInterval: 300000,
        onError: (err) => console.error("Weather API Error:", err)
    });

    useEffect(() => {
        if (weather) console.log("Weather Data:", weather);
        if (error) console.error("Weather Error:", error);
    }, [weather, error]);

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

    const current = weather?.current;
    const temp = current?.temperature_2m;
    const humidity = current?.relative_humidity_2m;
    const wind = current?.wind_speed_10m;
    const weatherCode = current?.weather_code;

    return (
        <div className="flex flex-col justify-between w-full h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 relative overflow-hidden">
            {/* Time Section */}
            <div className="flex flex-col items-center z-10">
                <div className="flex items-center gap-2 mb-2 text-zinc-500 dark:text-zinc-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">San Antonio</span>
                </div>
                <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 tabular-nums tracking-tight">
                    {time}
                </div>
            </div>

            {/* Weather Section */}
            <div className="flex flex-col gap-4 z-10">
                <div className="flex items-center justify-center gap-4">
                    {weather ? getWeatherIcon(weatherCode) : <Cloud className="w-8 h-8 text-zinc-300 animate-pulse" />}
                    <span className="text-4xl font-semibold text-zinc-700 dark:text-zinc-300">
                        {weather ? Math.round(temp) : "--"}°
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                        <span className="text-xs text-zinc-500 uppercase font-medium">Humedad</span>
                        <span className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                            {weather ? `${humidity}%` : "--"}
                        </span>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-3 flex flex-col items-center justify-center text-center">
                        <span className="text-xs text-zinc-500 uppercase font-medium">Viento</span>
                        <span className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                            {weather ? `${Math.round(wind)} km/h` : "--"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <Cloud className="w-64 h-64" />
            </div>
        </div>
    );
};
