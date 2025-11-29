"use client";

import useSWR from "swr";
import { Music } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const SpotifyCard = () => {
    const { data } = useSWR("/api/now-playing", fetcher, {
        refreshInterval: 30000,
    });

    const isPlaying = data?.isPlaying;
    const albumImageUrl = data?.albumImageUrl;

    return (
        <Link
            href={data?.songUrl || "https://open.spotify.com"}
            target="_blank"
            className="flex flex-col justify-between h-full bg-[#1DB954] dark:bg-[#1DB954] rounded-3xl p-6 text-white group relative overflow-hidden"
        >
            {/* Album Art Background */}
            {isPlaying && albumImageUrl && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${albumImageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 group-hover:bg-black/40" />
                </>
            )}

            <div className="flex justify-between items-start z-10">
                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <Music className="w-6 h-6" />
                </div>
                {isPlaying && (
                    <div className="flex items-end gap-[2px] h-4">
                        <motion.div
                            className="w-1 bg-white rounded-full"
                            animate={{ height: [4, 12, 4] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                            className="w-1 bg-white rounded-full"
                            animate={{ height: [12, 4, 12] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: 0.1 }}
                        />
                        <motion.div
                            className="w-1 bg-white rounded-full"
                            animate={{ height: [6, 10, 6] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        />
                    </div>
                )}
            </div>

            <div className="z-10 mt-4">
                <h3 className="text-lg font-bold truncate">
                    {isPlaying ? data.title : "No escuchando nada"}
                </h3>
                <p className="text-white/80 text-sm truncate">
                    {isPlaying ? data.artist : "Spotify"}
                </p>
            </div>

            {/* Fallback Background Effect (only if not playing) */}
            {!isPlaying && (
                <div className="absolute -bottom-4 -right-4 opacity-20 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                    <Music className="w-32 h-32" />
                </div>
            )}
        </Link>
    );
};
