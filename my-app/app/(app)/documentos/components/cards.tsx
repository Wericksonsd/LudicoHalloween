'use client'
import {type Fantasma} from "../../../dataBank/fantasmasType"
import Image from "next/image"

type Props = {
    fantasmas: Fantasma
}

export default function CardsFantasma({ fantasmas }: Props) {
    return(
        <div className="w-full flex-1 text-zinc-800 flex items-center justify-start rounded-lg pr-2"
            style={{backgroundImage: "url('/papiroBG2.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <Image src={fantasmas.imagem} alt={fantasmas.nome} height={500} width={250} loading="eager" className="flex-1 mix-blend-multiply"/>
            <div className="text-right text-xs flex flex-col gap-2 px-4 items-end">
                <h1 className="text-lg font-black">{fantasmas.nome}</h1>
                <p>{fantasmas.descricao}</p>
                <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                <p><span className="font-bold">Região: </span>{fantasmas.regiao}</p>
                <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                <p><span className="font-bold">Região: </span>{fantasmas.regiao}</p>
                <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
            </div>
        </div>
    )
}