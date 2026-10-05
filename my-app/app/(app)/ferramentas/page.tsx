import Titulo from "../central/components/titulo"
import dados from "../../dataBank/ferramentas.json"
import CardsFerramentas from "./components/cards"

export default function Ferramentas() {
    return(
        <div className="flex-1 flex flex-col gap-4">
            <Titulo/>
            <div className="flex-1 grid grid-rows-5 gap-2 pb-8">
                {dados.ferramentas.map(f => (
                <CardsFerramentas key={f.id} ferramenta={f} liberada={f.liberada} />
                ))}
            </div>
        </div>
    )
}