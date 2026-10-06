'use client'

import { useState } from "react";

import Titulo from "../central/components/titulo";
import dados from "../../dataBank/fantasmas.json";
import CardsFantasma from "./components/cards";

export default function Documentos () {

    const [fantasma, setFantasma] = useState(0);

    function handleNextFantasma() {
        if(fantasma < dados.fantasmas.length - 1) {
            setFantasma(fantasma + 1);
        } else {
            setFantasma(0);
        }
    }

    function handlePreviousFantasma() {
        if(fantasma > 0) {
            setFantasma(fantasma - 1);
        } else {
            setFantasma(dados.fantasmas.length - 1);
        }
    }

    return(
        <div className="flex-1 flex flex-col items-center justify-between gap-4 px-6 py-4">
            <Titulo/>
            <div className="w-full flex-1 flex flex-col gap-2">
                <CardsFantasma fantasmas={dados.fantasmas[fantasma]} />
                <div className="h-24 w-full flex items-center justify-center gap-4">
                    <button className="h-12 w-12 bg-orange-300 rounded-md" onClick={handlePreviousFantasma}>{'<'}</button>
                    <div className="flex-1 flex flex-col items-center justify-around gap-1">
                        <h1 className="font-bold">PROBABILIDADE DE ENTIDADE</h1>
                        <div className="h-4 w-full flex items-center justify-around text-sm">
                            <span className="h-6 w-6 border border-gray-300 rounded flex items-center justify-center">^</span>
                            <span className="h-6 w-6 border border-gray-300 rounded flex items-center justify-center">?</span>
                            <span className="h-6 w-6 border border-gray-300 rounded flex items-center justify-center">v</span>
                        </div>
                    </div>
                    <button className="h-12 w-12 bg-orange-300 rounded-md" onClick={handleNextFantasma}>{'>'}</button>
                </div>
            </div>
        </div>
    )
}