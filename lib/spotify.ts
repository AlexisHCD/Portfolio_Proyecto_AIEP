

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    console.error("Missing Spotify Environment Variables");
    return { error: "Missing Environment Variables" };
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }).toString(),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const tokenData = await getAccessToken();

  if (tokenData.error || !tokenData.access_token) {
    console.error("Failed to get access token:", tokenData);
    return new Response(JSON.stringify(tokenData), { status: 401 });
  }

  const { access_token } = tokenData;

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  });
};
