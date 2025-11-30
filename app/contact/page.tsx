import { Mail, Twitter, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    {
        name: "Email",
        value: "adhcamus@proton.me",
        href: "mailto:adhcamus@proton.me",
        icon: Mail,
        color: "hover:text-red-500",
    },
    {
        name: "Twitter / X",
        value: "@Mkeled",
        href: "https://twitter.com/Mkeled",
        icon: Twitter,
        color: "hover:text-blue-400",
    },
    {
        name: "GitHub",
        value: "@AlexisHCD",
        href: "https://github.com/AlexisHCD",
        icon: Github,
        color: "hover:text-zinc-900 dark:hover:text-white",
    },
    {
        name: "LinkedIn",
        value: "Alexis Hernández Camus",
        href: "www.linkedin.com/in/alexis-hernández-2b3017367",
        icon: Linkedin,
        color: "hover:text-blue-600",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen p-8 flex flex-col items-center justify-center">
            <div className="max-w-2xl w-full">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Contacto</h1>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                        ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
                    </p>
                </div>

                <div className="grid gap-4">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            className="group flex items-center justify-between p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-md"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full transition-colors ${link.color} group-hover:bg-white dark:group-hover:bg-black`}>
                                    <link.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{link.name}</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{link.value}</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-zinc-500 dark:text-zinc-500 text-sm">
                        También puedes encontrarme en el instituto o programando en algún café.
                    </p>
                </div>
            </div>
        </main>
    );
}
