'use client'

import { BookOpenText, House, Notebook, RobotVacuum } from "lucide-react";
import {useRouter} from "next/navigation";

export default function Footer () {
    const router = useRouter()

    return (
        <footer className="bg-zinc-950 w-full h-24 grid grid-cols-4 items-stretch justify-stretch">
                <button className="bg-orange-300 text-zinc-950 text-xs flex flex-col items-center justify-center gap-2" 
                type="button"
                onClick={() => router.push("/central")}>
                    <House size={22}/>
                    <p>CENTRAL</p>
                </button>

                <button className="bg-orange-300 text-zinc-950 text-xs flex flex-col items-center justify-center gap-2" 
                type="button"
                onClick={() => router.push("/ferramentas")}>
                    <RobotVacuum size={22}/>
                    <p>FERRAMENTAS</p>
                </button>

                <button className="bg-orange-300 text-zinc-950 text-xs flex flex-col items-center justify-center gap-2" 
                type="button"
                onClick={() => router.push("/documentos")}>
                    <BookOpenText size={22}/>
                    <p>DOCUMENTOS</p>
                </button>

                <button className="bg-orange-300 text-zinc-950 text-xs flex flex-col items-center justify-center gap-2" 
                type="button"
                onClick={() => router.push("/evidencias")}>
                    <Notebook size={22}/>
                    <p>EVIDENCIAS</p>
                </button>
        </footer>
    )
}