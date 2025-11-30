import { GraduationCap } from "lucide-react";

export const EducationCard = () => {
    return (
        <div className="flex flex-col justify-between p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm h-full min-h-[180px]">
            <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                    En curso
                </span>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    Programador y Analista De Sistemas
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    1er Año
                </p>
                <p className="mt-2 text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    Instituto Profesional AIEP
                </p>
            </div>
        </div>
    );
};
