import { Timeline } from "@/components/sections/timeline";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RoadmapPage() {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al inicio
                    </Link>
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Programación y Análisis de Sistemas</h1>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                        Mi camino de aprendizaje.
                    </p>
                </div>

                <Timeline />
            </div>
        </main>
    );
}
