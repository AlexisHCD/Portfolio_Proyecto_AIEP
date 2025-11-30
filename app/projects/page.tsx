import { ProjectCard } from "@/components/widgets/project-card";

const projects = [
    {
        title: "Portafolio Web Personal",
        description: "Construido con Next.js 14, Tailwind CSS y React.",
        tags: ["Next.js", "React", "Tailwind", "TypeScript", "React"],
        githubUrl: "https://github.com/AlexisHCD/Portfolio_Proyecto_AIEP",
    },
    {
        title: "Gestor de Alumnos - Instituto Codice",
        description: "Proyecto Monolitico 4 capas construido con C# .NET y MySQL.",
        tags: ["C#", " .NET", "MySQL"],
        githubUrl: "https://github.com/AlexisHCD/RGIVCodice",
    },
    {
        title: "Proyecto Calculadora",
        description: "Construido en Python.",
        tags: ["Python"],
        githubUrl: "https://github.com/AlexisHCD/CalculadoraPython",
    },
    {
        title: "Proyecto ERP Reloj Control - Frontend - UI",
        description: "Construido con Flutter y Dart junto a mi compañero de proyecto.",
        tags: ["Flutter", "Dart"],
        githubUrl: "https://github.com/Ansesies/proyecto-coef-2-frontend",
    },
    {
        title: "Proyecto ERP Reloj Control - Backend - API",
        description: "Backend construido con C# .NET y Postgres junto a mi compañero de proyecto.",
        tags: ["C#", " .NET", "Postgres"],
        githubUrl: "https://github.com/Ansesies/proyecto-coef-2-backend",
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Mis Proyectos</h1>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
                        Una colección de los proyectos en Github que he desarrollado en clases para trabajos o tareas.
                        Desde una calculadora basica hasta un ERP de gestion de personal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
