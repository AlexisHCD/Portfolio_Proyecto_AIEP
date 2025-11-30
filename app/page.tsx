import Link from "next/link";
import { ArrowRight, Code2, Layout } from "lucide-react";
import { EducationCard } from "@/components/widgets/education-card";
import { SocialCard } from "@/components/widgets/social-card";
import { TimeWidget } from "@/components/widgets/time-widget";
import { SpotifyCard } from "@/components/widgets/spotify-card";
import { DownloadCV } from "@/components/widgets/download-cv";

import Image from "next/image";

import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <Hero />

      <div className="max-w-5xl w-full mx-auto">
        {/* Profile Picture Section - Moved inside Hero conceptually*/}

        {/* Profile Picture Section */}
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl ring-1 ring-zinc-900/5 dark:ring-zinc-100/10 group">
            <Image
              src="https://github.com/AlexisHCD.png"
              alt="Foto de Perfil"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 ring-inset ring-1 ring-black/10 dark:ring-white/10 rounded-full z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

          {/* About Me - Compact Version */}
          <div className="md:col-span-2 md:row-span-1 bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 className="w-24 h-24" />
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10">
              Soy estudiante de Programación y Análisis de Sistemas en AIEP San Antonio, me encanta la tecnologia y saber como funcionan las cosas, buscando una carrera como Programador Fullstack o Analista de Sistemas, en mis tiempos libres me gusta cocinar y escuchar musica.
            </p>
          </div>

          {/* Education Card */}
          <div className="md:col-span-2 md:row-span-1">
            <EducationCard />
          </div>

          {/* GitHub Card */}
          <div className="md:col-span-1 md:row-span-1">
            <SocialCard
              type="github"
              username="@AlexisHCD"
              url="https://github.com/AlexisHCD"
            />
          </div>

          {/* LinkedIn Card */}
          <div className="md:col-span-1 md:row-span-1">
            <SocialCard
              type="linkedin"
              username="Alexis Hernández"
              url="https://www.linkedin.com/in/alexis-hernández-2b3017367"
            />
          </div>

          {/* Spotify Card */}
          <div className="md:col-span-1 md:row-span-2">
            <SpotifyCard />
          </div>

          {/* Time Widget */}
          <div className="md:col-span-1 md:row-span-2">
            <TimeWidget />
          </div>

          {/* Roadmap Link */}
          <Link
            href="/roadmap"
            className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 flex flex-col justify-between text-white group hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <Layout className="w-6 h-6" />
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Mi Roadmap</h3>
              <p className="text-blue-100 text-sm">Ver mi línea de tiempo de aprendizaje</p>
            </div>
          </Link>

        </div>

        {/* CV Download Button */}
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-auto md:min-w-[300px]">
            <DownloadCV />
          </div>
        </div>
      </div>
    </main>
  );
}
