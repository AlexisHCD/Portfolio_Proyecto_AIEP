import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const response = await getNowPlaying();

        // Log status for debugging
        console.log("Spotify API Status:", response.status);

        if (response.status === 204 || response.status > 400) {
            const errorText = await response.text().catch(() => "No content");
            console.error("Spotify API Error/No Content:", response.status, errorText);
            return NextResponse.json({ isPlaying: false, debug: { status: response.status, message: errorText } });
        }

        const song = await response.json();

        if (song.item === null) {
            return NextResponse.json({ isPlaying: false });
        }

        const isPlaying = song.is_playing;
        const title = song.item.name;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
        const album = song.item.album.name;
        const albumImageUrl = song.item.album.images[0].url;
        const songUrl = song.item.external_urls.spotify;

        return NextResponse.json({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        });
    } catch (error) {
        console.error("Internal API Error:", error);
        return NextResponse.json({ isPlaying: false, error: "Internal Server Error" }, { status: 500 });
    }
}
