'use client'

import { useState } from "react";
import Image from "next/image";


export default function Retalhos() {

    const [discoAzul, setDiscoAzul] = useState(0)
    const [discoVerde, setDiscoVerde] = useState(0)  
    const [discoVermelho, setDiscoVermelho] = useState(0)


    return (
        <div className="flex-1 p-6 flex flex-col">
            <h1 className="text-2xl font-bold text-center">Resquícios</h1>
            <p className="text-center text-sm">Junte os pedaços de jornais para revelar seu passado.</p>

            <div className="w-full aspect-square bg-zinc-200 my-8 relative rounded-full">
                <Image
                src={"/retalhos/azul-1.svg"} alt="verde" fill
                className="opacity-75"
                style={{ transform: `rotate(${discoAzul*10}deg)`}}></Image>

                <Image
                src={"/retalhos/verde-1.svg"} alt="verde" fill
                className="opacity-75"
                style={{ transform: `rotate(${discoVerde*10}deg)`}}></Image>

                <Image
                src={"/retalhos/verm-1.svg"} alt="verde" fill
                className="opacity-75"
                style={{ transform: `rotate(${discoVermelho*10}deg)`}}></Image>
            </div>

            <div className="w-full flex justify-between">
                <div className="relative">
                    <div className="h-16 w-16 bg-blue-800 rounded-4xl flex items-center justify-start p-2"
                        style={{ transform: `rotate(${discoAzul*10}deg)`}}>
                        <div className="h-2 w-2 rounded-4xl bg-zinc-300">
                        </div>
                    </div>
                    <input type="range" id="rotacao" min={0} max={36} value={discoAzul}
                    onChange={((e) => setDiscoAzul(parseInt(e.target.value)))}
                    className="w-16 h-16 z-2 -translate-y-14 opacity-0 absolute"/>
                </div>

                <div className="relative">
                    <div className="h-16 w-16 bg-green-600 rounded-4xl flex items-center justify-start p-2"
                        style={{ transform: `rotate(${discoVerde*10}deg)`}}>
                        <div className="h-2 w-2 rounded-4xl bg-zinc-300">
                        </div>
                    </div>
                    <input type="range" id="rotacao" min={0} max={36} value={discoVerde}
                    onChange={((e) => setDiscoVerde(parseInt(e.target.value)))}
                    className="w-16 h-16 z-2 -translate-y-14 opacity-0 absolute"/>
                </div>

                <div className="relative">
                    <div className="h-16 w-16 bg-red-800 rounded-4xl flex items-center justify-start p-2"
                        style={{ transform: `rotate(${discoVermelho*10}deg)`}}>
                        <div className="h-2 w-2 rounded-4xl bg-zinc-300">
                        </div>
                    </div>
                    <input type="range" id="rotacao" min={0} max={36} value={discoVermelho}
                    onChange={((e) => setDiscoVermelho(parseInt(e.target.value)))}
                    className="w-16 h-16 z-2 -translate-y-14 opacity-0 absolute"/>
                </div>
            </div>
        </div>
    );
}
            