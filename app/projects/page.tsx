import { ProjectCard } from "@/components/widgets/project-card";

const projects = [
    {
        title: "Portafolio Personal",
        description: "Mi portafolio personal construido con Next.js 14, Tailwind CSS y Framer Motion. Diseño estilo Bento Grid.",
        tags: ["Next.js", "React", "Tailwind", "TypeScript"],
        githubUrl: "https://github.com/adhca/portfolio", // Placeholder
    },
    {
        title: "Gestor de Tareas",
        description: "Aplicación de lista de tareas con persistencia local y categorías personalizables.",
        tags: ["React", "Vite", "LocalStorage"],
        githubUrl: "https://github.com/adhca/todo-app", // Placeholder
    },
    {
        title: "Calculadora de Notas",
        description: "Herramienta para estudiantes que permite calcular promedios y notas necesarias para aprobar.",
        tags: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/adhca/grade-calc", // Placeholder
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Mis Proyectos</h1>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
                        Una colección de los proyectos en los que he trabajado durante mi aprendizaje.
                        Desde aplicaciones web simples hasta soluciones más complejas.
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
