
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    console.error("Spotify Error: Missing environment variables");
    return { error: "Missing environment variables" };
  }

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Spotify Token Error:", data);
      return { error: data };
    }

    return data;
  } catch (error) {
    console.error("Spotify Token Fetch Error:", error);
    return { error: "Network error fetching token" };
  }
};

export const getNowPlaying = async () => {
  const { access_token, error } = await getAccessToken();

  if (error || !access_token) {
    console.error("Spotify Access Token Failed:", error);
    return new Response(JSON.stringify({ error: "Failed to get access token", details: error }), { status: 401 });
  }

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
};
