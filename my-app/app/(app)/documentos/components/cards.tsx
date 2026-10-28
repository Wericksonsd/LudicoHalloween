'use client'
import {type Fantasma} from "../../../dataBank/fantasmasType"
import Image from "next/image"

type Props = {
    fantasmas: Fantasma
}

export default function CardsFantasma({ fantasmas }: Props) {
    return(
        <div className="w-full flex-1 text-zinc-800 flex flex-col items-center justify-between rounded-lg"
            style={{backgroundImage: "url('/papiroBG2.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="w-full flex flex-col items-center justify-center px-4 pt-2">
                <h1 className="text-lg font-black">{fantasmas.nome}</h1>
                <p className="text-sm text-center">{fantasmas.descricao}</p>
            </div>
            <div className="w-full flex items-center justify-center pr-2">
                <Image src={fantasmas.imagem} alt={fantasmas.nome} height={400} width={200} loading="eager" className="flex-1 mix-blend-multiply"/>
                <div className="text-right text-xs flex flex-col gap-2 px-4 items-end">
                    <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                    <p><span className="font-bold">Origem:</span>{fantasmas.surgimento}</p>
                    <p><span className="font-bold">Motivação:</span> {fantasmas.motivacao}</p>
                    <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                    <p><span className="font-bold">Região: </span>{fantasmas.regiao}</p>
                    <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                    <p><span className="font-bold">Região:</span> {fantasmas.regiao}</p>
                </div>
            </div>
        </div>
    )
}