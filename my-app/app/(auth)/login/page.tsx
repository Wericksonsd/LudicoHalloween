'use client'

import { useRouter } from "next/navigation"

export default function Login () {
    const router = useRouter()

    return (
        <div className=" flex-1 w-full flex flex-col items-center justify-end gap-4 bg-[url(/bgQuadro.png)] bg-cover bg-zinc-900 bg-blend-multiply px-11 py-22">
            <h1 className="text-5xl font-bold">
                S.A.E.O.S
            </h1>
            <h3 className="text-center mb-6">
                Sistema de Análise de Entidades Ocultas e Sobrenaturais
            </h3>
            <div className="w-full h-64 bg-orange-300 rounded-lg p-4 text-zinc-900 flex flex-col justify-around gap-2">
                <h2 className=" font-bold">
                    Agente:
                </h2>
                <input type="text" className="px-2 mt-2 text-2xl focus:border-none outline-none" placeholder="Digite aqui"/>
                <hr className="border border-dashed"/>
                <p className="text-center leading-none">Utilize o mesmo usuário cadastrado no sistema do evento.</p>
                <button className="w-full mt-4 py-4 flex items-center justify-center bg-red-950 rounded-sm text-orange-300 text-2xl font-bold hover:bg-red-800" type="button" onClick={() => router.push("/central")}>
                    INVESTIGAR CASO
                </button>
            </div>
        </div>
    )
} 