import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
}

export const ProjectCard = ({ title, description, tags, githubUrl, demoUrl }: ProjectCardProps) => {
    return (
        <div className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex-1">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-3 mt-auto">
                <Link
                    href={githubUrl}
                    target="_blank"
                    className="flex items-center justify-center flex-1 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                </Link>
                {demoUrl && (
                    <Link
                        href={demoUrl}
                        target="_blank"
                        className="flex items-center justify-center flex-1 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                    </Link>
                )}
            </div>
        </div>
    );
};
