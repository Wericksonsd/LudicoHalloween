'use client'

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header () {
    const router = useRouter();
    return (
        <header className="w-full py-3 px-6 bg-zinc-950 flex items-center gap-4  text-sm">
                <p className="flex-1"><span className="font-bold">Caso: </span>P1N467</p>
                <p><span className="font-bold">Agente: </span>Bondarik</p>
                <button className="p-1 w-6 h-6 bg-orange-300 rounded-sm text-zinc-950"
                type="button"
                onClick={() => router.push("/login")}
                ><LogOut size={16}/></button>
        </header>
    )
}