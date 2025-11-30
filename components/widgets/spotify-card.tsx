"use client";

import useSWR from "swr";
import { Music } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
            className="flex flex-col h-full bg-[#1DB954] rounded-3xl p-6 text-white relative overflow-hidden transition-transform hover:scale-[1.02] duration-300"
        >
            {/* Header / Title Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center z-10 mb-4">
                <div className="bg-white/20 p-2 rounded-full mb-3 backdrop-blur-sm">
                    <Music className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold leading-tight line-clamp-2">
                    {isPlaying ? data.title : "No escuchando nada"}
                </h3>
                <p className="text-white/80 text-sm mt-1 font-medium line-clamp-1">
                    {isPlaying ? data.artist : "Spotify"}
                </p>
            </div>

            {/* Album Art Section */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-black/20 shadow-lg group">
                {isPlaying && albumImageUrl ? (
                    <Image
                        src={albumImageUrl}
                        alt={data.album}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Music className="w-20 h-20 text-white/40" />
                    </div>
                )}

                {/* Playing Animation Overlay */}
                {isPlaying && (
                    <div className="absolute bottom-4 right-4 flex items-end gap-[3px] h-6">
                        <motion.div
                            className="w-1.5 bg-white rounded-full"
                            animate={{ height: [6, 16, 6] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                        <motion.div
                            className="w-1.5 bg-white rounded-full"
                            animate={{ height: [16, 6, 16] }}
                            transition={{ duration: 1.1, repeat: Infinity, delay: 0.1 }}
                        />
                        <motion.div
                            className="w-1.5 bg-white rounded-full"
                            animate={{ height: [8, 20, 8] }}
                            transition={{ duration: 0.9, repeat: Infinity, delay: 0.2 }}
                        />
                    </div>
                )}
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Music className="absolute -right-10 -bottom-10 w-64 h-64 rotate-12" />
            </div>
        </Link>
    );
};
