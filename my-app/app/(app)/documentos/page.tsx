import Titulo from "../central/components/titulo";
import dados from "../../dataBank/fantasmas.json";
import CardsFantasma from "./components/cards";

export default function Documentos () {
    return(
        <div className="flex-1 flex flex-col items-center justify-between gap-4 px-6 py-4">
            <Titulo/>
            <div className="w-full flex-1 flex flex-col gap-2 bg-blue-300">
                <CardsFantasma fantasmas={dados.fantasmas[0]} />
                <div className="h-24 w-full bg-amber-950">

                </div>
            </div>
        </div>
    )
}