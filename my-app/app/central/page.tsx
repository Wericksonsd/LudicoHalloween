import { LogOut } from "lucide-react";

export default function Central () {
    return(
        <div className="flex-1 w-full flex flex-col items-center justify-center bg-zinc-800">
            <header className="w-full py-3 px-6 bg-zinc-950 flex items-center gap-4  text-sm">
                <p className="flex-1"><span className="font-bold">Caso: </span>P1N467</p>
                <p><span className="font-bold">Agente: </span>Bondarik</p>
                <button className="p-1 w-6 h-6 bg-orange-300 rounded-sm text-zinc-950"><LogOut size={16}/></button>
            </header>
            <main className="flex-1">
                b
            </main>
            <footer>
                c
            </footer>
        </div>
    )
}