"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CallbackContent() {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
            <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Spotify Authorization</h1>

                {error ? (
                    <div className="p-4 bg-red-100 text-red-700 rounded-xl mb-4">
                        Error: {error}
                    </div>
                ) : code ? (
                    <div className="space-y-4">
                        <p className="text-green-600 font-medium">¡Autorización exitosa!</p>
                        <div>
                            <label className="block text-sm text-zinc-500 mb-1">Tu Código de Autorización:</label>
                            <code className="block p-4 bg-zinc-100 dark:bg-black rounded-xl break-all text-sm font-mono select-all">
                                {code}
                            </code>
                        </div>
                        <p className="text-sm text-zinc-500">
                            Copia este código y úsalo en el script generador para obtener tu Refresh Token.
                        </p>
                    </div>
                ) : (
                    <p className="text-zinc-500">Esperando código...</p>
                )}
            </div>
        </div>
    );
}

export default function CallbackPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <CallbackContent />
        </Suspense>
    );
}
