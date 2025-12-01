# Portafolio Personal - Alexis Hernández

Este es mi portafolio personal, diseñado para mostrar mis proyectos, habilidades y trayectoria como estudiante de Programación y Análisis de Sistemas.

![Portfolio Preview](https://github.com/AlexisHCD.png)

## 🚀 Tecnologías Utilizadas

El proyecto está construido con un stack moderno enfocado en rendimiento y experiencia de usuario:

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
*   **Iconos**: [Lucide React](https://lucide.dev/)
*   **Data Fetching**: [SWR](https://swr.vercel.app/)
*   **Integraciones**:
    *   **Spotify API**: Para mostrar la canción que estoy escuchando en tiempo real.
    *   **Open-Meteo API**: Para mostrar el clima actual en San Antonio, Chile.

## 📂 Estructura del Proyecto

```
portfolio/
├── app/                  # Rutas y páginas (Next.js App Router)
│   ├── api/              # Endpoints API (ej. /api/now-playing)
│   ├── contact/          # Página de contacto
│   ├── projects/         # Página de proyectos
│   ├── roadmap/          # Línea de tiempo de aprendizaje
│   ├── layout.tsx        # Layout principal (Header, Footer, Background)
│   └── page.tsx          # Página de inicio (Bento Grid)
├── components/           # Componentes reutilizables
│   ├── layout/           # Header, Footer
│   ├── sections/         # Secciones grandes (Hero)
│   ├── ui/               # Componentes de UI (Background, Buttons)
│   └── widgets/          # Widgets del Bento Grid (Spotify, Clima, Social)
├── lib/                  # Utilidades y configuraciones (Spotify Auth)
└── public/               # Archivos estáticos
```

## ✨ Características Principales

1.  **Diseño Bento Grid**: Una interfaz moderna y modular inspirada en las tendencias actuales de diseño.
2.  **Modo Oscuro/Claro**: Adaptable a las preferencias del sistema.
3.  **Integración con Spotify**: Widget en tiempo real que muestra "Now Playing" o la última canción escuchada.
4.  **Widget de Clima**: Información meteorológica en tiempo real (Temperatura, Humedad, Viento).
5.  **Animaciones Suaves**: Transiciones de página y efectos de hover para una experiencia fluida.

## 🛠️ Manual de Uso (Instalación Local)

Sigue estos pasos para correr el proyecto en tu máquina local:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/AlexisHCD/Portfolio_Proyecto_AIEP.git
    cd portfolio
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**:
    Crea un archivo `.env.local` en la raíz del proyecto y agrega tus credenciales de Spotify (necesarias para el widget de música):
    ```env
    SPOTIFY_CLIENT_ID=tu_client_id
    SPOTIFY_CLIENT_SECRET=tu_client_secret
    SPOTIFY_REFRESH_TOKEN=tu_refresh_token
    ```

4.  **Correr el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Despliegue

El proyecto está optimizado para ser desplegado en **Vercel**:

1.  Sube tu código a GitHub.
2.  Importa el repositorio en Vercel.
3.  Configura las variables de entorno en el dashboard de Vercel.
4.  ¡Listo! Tu portafolio se desplegará automáticamente con cada push.

---
© 2025 Alexis Hernández Camus.
