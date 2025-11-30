import { CheckCircle2, Circle } from "lucide-react";

const steps = [
    {
        title: "Programación y Analisis de Sistemas AIEP 2025",
        date: "Marzo 2025",
        description: "Comienzo de la carrera de Programación y Analisis de Sistemas.",
        status: "completed",
    },
    {
        title: "Fundamentos de Programación",
        date: "Abril 2025",
        description: "Dominio de lógica, algoritmos y estructuras de datos básicas.",
        status: "completed",
    },
    {
        title: "Introducción SQL y Analisis de Sistemas",
        date: "Mayo 2025",
        description: "Aprendiendo fundamentos de SQL y análisis de sistemas.",
        status: "completed",
    },
    {
        title: "Taller de Programación C# .NET",
        date: "Agosto 2025",
        description: "Desarrollo de una aplicación full-stack con C# .NET.",
        status: "completed",
    },
    {
        title: "Desarrollo Web HTML, CSS y JavaScript",
        date: "Noviembre 2025",
        description: "Fundamentos de HTML, CSS y Frameworks.",
        status: "current",
    },
    {
        title: "Metodologias de Desarrollo y Programación Segura ",
        date: "Diciembre 2025",
        description: "Introducción a metodologías de desarrollo y programación segura.",
        status: "current",
    },
    {
        title: "Taller de Aplicaciónes Para Internet",
        date: "Marzo 2026",
        description: "Desarrollo de aplicaciones para internet.",
        status: "upcoming",
    },
    {
        title: "Ingles y Sostenibilidad Organizacional",
        date: "Mayo 2026",
        description: "Ingles basico y desarrollo sostenible.",
        status: "upcoming",
    },
    {
        title: "Certificado Especialidad I y Modelamiento de Negocios",
        date: "Junio 2026",
        description: "Tecnologias aplicadas",
        status: "upcoming",
    },
    {
        title: "Taller de Aplicaciones Móviles",
        date: "Agosto 2026",
        description: "Desarrollo en Android Studio",
        status: "upcoming",
    },
    {
        title: "Taller de Testing y Calidad de Software",
        date: "Agosto 2026",
        description: "Pruebas de software y calidad del software.",
        status: "upcoming",
    },
    {
        title: "Taller de Especialidad II y Ingles Inicial II",
        date: "Septiembre 2026",
        description: "Segundo taller de especialidad",
        status: "upcoming",
    },
    {
        title: "Certificado Especialidad II",
        date: "Octubre 2026",
        description: "Modulo Final I",
        status: "upcoming",
    },
    {
        title: "Taller de Marca Personal",
        date: "Noviembre 2026",
        description: "Modulo Final II",
        status: "upcoming",
    },
];

export const Timeline = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent dark:before:via-zinc-700">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            {step.status === "completed" ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : step.status === "current" ? (
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                            ) : (
                                <Circle className="w-5 h-5 text-zinc-400" />
                            )}
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{step.title}</h3>
                                <time className="font-mono text-xs text-zinc-500">{step.date}</time>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                {step.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};
