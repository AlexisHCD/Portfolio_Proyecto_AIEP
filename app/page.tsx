import Link from "next/link";
import { ArrowRight, Code2, Database, Layout } from "lucide-react";
import { EducationCard } from "@/components/widgets/education-card";
import { SocialCard } from "@/components/widgets/social-card";
import { TimeWidget } from "@/components/widgets/time-widget";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

          {/* About Me - Big Box (2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-32 h-32" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Hola, soy <span className="text-blue-600">Adhca</span>.
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Soy estudiante de primer año apasionado por la lógica y React.
                Construyendo el futuro, un componente a la vez.
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400">TypeScript</div>
              <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400">Next.js</div>
              <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400">Tailwind</div>
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

          {/* Extra Filler / Tech Stack or Quote */}
          <div className="md:col-span-2 md:row-span-1 bg-zinc-900 dark:bg-zinc-100 rounded-3xl p-6 flex items-center justify-center text-center">
            <p className="text-zinc-100 dark:text-zinc-900 font-medium text-lg">
              "La simplicidad es la máxima sofisticación."
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
