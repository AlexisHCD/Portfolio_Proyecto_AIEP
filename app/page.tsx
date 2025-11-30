import Link from "next/link";
import { ArrowRight, Code2, Layout } from "lucide-react";
import { EducationCard } from "@/components/widgets/education-card";
import { SocialCard } from "@/components/widgets/social-card";
import { TimeWidget } from "@/components/widgets/time-widget";
import { SpotifyCard } from "@/components/widgets/spotify-card";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        {/* Profile Picture Section */}
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl ring-1 ring-zinc-900/5 dark:ring-zinc-100/10 group">
            {/* Placeholder Image - Using GitHub avatar as it's available and relevant */}
            <img
              src="https://github.com/AlexisHCD.png"
              alt="Foto de Perfil"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay for elegance */}
            <div className="absolute inset-0 ring-inset ring-1 ring-black/10 dark:ring-white/10 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

          {/* About Me - Big Box (2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-32 h-32" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Soy <span className="text-blue-600">Alexis Hernández C.</span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Soy estudiante de Programación y Analisis de Sistemas de primer año, aprendiendo el desarrollo de software y buscando la innovación.
                Tambien me gusta la musica, los videojuegos y la tecnología, en mis tiempos libres escucho música y cocino.

              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400">Desarrollador y Analista de Sistemas</div>

            </div>
          </div>

          {/* Education Card */}
          <div className="md:col-span-2 md:row-span-1">
            <EducationCard />
          </div>

          {/* Social Card */}
          <div className="md:col-span-1 md:row-span-1">
            <SocialCard />
          </div>

          {/* Time Widget */}
          <div className="md:col-span-1 md:row-span-1">
            <TimeWidget />
          </div>

          {/* Roadmap Link */}
          {/* Spotify Card */}
          <div className="md:col-span-2 md:row-span-1">
            <SpotifyCard />
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
      </div>
    </main>
  );
}
