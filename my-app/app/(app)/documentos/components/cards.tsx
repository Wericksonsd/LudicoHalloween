'use client'
import {type Fantasma} from "../../../dataBank/fantasmasType"
import Image from "next/image"

type Props = {
    fantasmas: Fantasma
}

export default function CardsFantasma({ fantasmas }: Props) {
    return(
        <div className="w-full flex-1 py-2 pr-4 bg-linear-to-r from-orange-300 to-yellow-800 text-zinc-800 flex items-center justify-center rounded-lg relative">
            <Image src={fantasmas.imagem} alt={fantasmas.nome} height={350} width={180} loading="eager" className="h-auto w-auto"/>
            <div className="text-right text-xs flex flex-col gap-2 px-4 items-end">
                <h1 className="text-lg font-black">{fantasmas.nome}</h1>
                <p>{fantasmas.descricao}</p>
                <p>Região: {fantasmas.regiao}</p>
            </div>
        </div>
    )
}