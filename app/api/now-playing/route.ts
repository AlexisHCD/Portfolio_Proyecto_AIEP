import { getNowPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        const errorText = await response.text();
        console.error("Spotify API Error:", response.status, errorText);
        return NextResponse.json({ isPlaying: false, debug: { status: response.status, error: errorText } });
    }

    const song = typeof response.json === 'function' ? await response.json() : null;

    if (!song || song.item === null) {
        return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json(
        {
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        },
        {
            headers: {
                "Cache-Control": "public, s-maxage=0, must-revalidate",
            },
        }
    );
}
