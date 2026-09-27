import Link from "next/dist/client/link";
import Titulo from "./components/titulo";
import { BookOpenText, Camera, RobotVacuum } from "lucide-react";

export default function Central () {
    const ferramentas = 0
    const documentos = 0

    return(
        <div className="flex-1 w-full flex flex-col items-center gap-4 px-12 py-4 bg-zinc-800">
            <Titulo/>
            <div className="flex-1">
                <h1 className="text-sm text-justify">Boas vindas a Central de Campo, seu objetivo é descobrir qual fantasma você é responsável em conter. Desbloqueie as ferramentas e as utilize para coletar dados, depois, compare esses dados com as dos documentos que lhe foi entregue, assim que tiver certeza de qual fantasma busca, o marque na caixa de seleção e finalize sua operação, mas CUIDADO! Caso erre o fantasma terá um espaço de tempo para tentar novamente, e após outra falha, sua missão será dada como fracasso. Boa sorte, Agente.</h1>
            </div>
            
            <div className="w-full py-6 bg-orange-300 rounded-xs text-center text-zinc-950 flex flex-col items-center justify-center gap-1">
                <span className="p-2 border-2 border-dashed rounded-md">
                    <Camera size={36}/>
                </span>
                <h1>LIBERAR FERRAMENTA</h1>
                <p className="text-xs">Escaneie os QR Codes espalhados pelo evento para liberar as ferramentas.</p>
            </div>
            <div className="w-full flex gap-4">
                <Link href={"./ferramentas"} className="w-full bg-zinc-100 p-2 text-zinc-950 rounded-xs flex flex-col gap-1 items-center">
                    <RobotVacuum size={22}/>
                    <h1>FERRAMENTAS</h1>
                    <p className="text-[0.75rem]">{ferramentas}/5 Desbloqueadas</p>
                </Link>

                <Link href={"./documentos"} className="w-full bg-zinc-100 p-2 text-zinc-950 rounded-xs flex flex-col gap-1 items-center">
                    <BookOpenText size={22}/>
                    <h1>DOCUMENTOS</h1>
                    <p className="text-[0.75rem]">{documentos}/16 Desbloqueadas</p>
                </Link>
            </div>          
            
        </div>
    )
}