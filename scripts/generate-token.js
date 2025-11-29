const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
    console.log('\n=== Generador de Spotify Refresh Token ===\n');

    const clientId = await question('Ingresa tu Client ID: ');
    const clientSecret = await question('Ingresa tu Client Secret: ');
    const redirectUri = await question('Ingresa tu Redirect URI (ej: https://portfolio-proyecto-aiep.vercel.app/callback): ');

    console.log('\n-------------------------------------------------------');
    console.log('1. Ve a este link en tu navegador y autoriza la app:');
    const scope = 'user-read-currently-playing user-read-playback-state';
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    console.log(authUrl);
    console.log('-------------------------------------------------------\n');

    const code = await question('2. Pega el código que aparece en la página de callback: ');

    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
    }).toString();

    const options = {
        hostname: 'accounts.spotify.com',
        path: '/api/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        }
    };

    const req = https.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            const result = JSON.parse(responseData);
            console.log('\n-------------------------------------------------------');
            if (result.refresh_token) {
                console.log('¡ÉXITO! Aquí está tu Refresh Token:');
                console.log('\n' + result.refresh_token + '\n');
                console.log('Agrega esto a tus variables de entorno en Vercel como SPOTIFY_REFRESH_TOKEN');
            } else {
                console.log('Error obteniendo el token:', result);
            }
            console.log('-------------------------------------------------------\n');
            rl.close();
        });
    });

    req.on('error', (e) => {
        console.error(`Problema con la petición: ${e.message}`);
        rl.close();
    });

    req.write(data);
    req.end();
}

main();
