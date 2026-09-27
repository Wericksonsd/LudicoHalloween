'use client'

import { useEffect, useState } from "react"


export default function Ferramentas() {
    const [amplitudeBar, setAmplitudeBar] = useState(0)
    const [rotationBar, setRotationBar] = useState(0)
    const [equalizeBar, setEqualizeBar] = useState(0)


    return(
        <div className="flex-1 flex flex-col items-center justify-between p-8 gap-4">
            <h1>Ferramentas</h1>

            <div className="flex-1 w-full border-3 border-amber-300 relative">
                <div className="bg-cyan-300 absolute"></div>
            </div>
            <div className="w-full h-32 flex items-center justify-center gap-2">
                <div className="h-full grid grid-rows-3 justify-items-end items-start pt-2 text-xs">
                    <p>AMPLITUDE</p>
                    <p>ROTAÇÃO</p>
                    <p>EQUALIZAÇÃO</p>
                </div>
                <div className="w-full h-full flex flex-col justify-around">
                    <div className="w-full text-zinc-100 flex flex-col">
                        <input type="range" id='amplitude' min={1} max={10} value={amplitudeBar}
                        onChange={(e) => setAmplitudeBar(parseInt(e.target.value))}
                        className="h-1 w-full"/>
                        <div className="w-full grid grid-cols-10 text-center text-sm">
                            <p className="text-left">1</p>
                            <p className="text-left pl-1">2</p>
                            <p className="text-left pl-2">3</p>
                            <p className="text-left pl-2">4</p>
                            <p>5</p>
                            <p>6</p>
                            <p className="text-right pr-2">7</p>
                            <p className="text-right pr-2">8</p>
                            <p className="text-right pr-1">9</p>
                            <p className="text-right">10</p>
                        </div>
                    </div>

                    <div className="w-full text-zinc-100 flex flex-col">
                        <input type="range" id='rotacao' min={1} max={10} value={rotationBar}
                        onChange={(e) => setRotationBar(parseInt(e.target.value))}
                        className="h-1 w-full"/>
                        <div className="w-full grid grid-cols-10 text-center text-sm">
                            <p className="text-left">1</p>
                            <p className="text-left pl-1">2</p>
                            <p className="text-left pl-2">3</p>
                            <p className="text-left pl-2">4</p>
                            <p>5</p>
                            <p>6</p>
                            <p className="text-right pr-2">7</p>
                            <p className="text-right pr-2">8</p>
                            <p className="text-right pr-1">9</p>
                            <p className="text-right">10</p>
                        </div>
                    </div>

                    <div className="w-full text-zinc-100 flex flex-col">
                        <input type="range" id='equalize' min={1} max={10} value={equalizeBar}
                        onChange={(e) => setEqualizeBar(parseInt(e.target.value))}
                        className="h-1 w-full"/>
                        <div className="w-full grid grid-cols-10 text-center text-sm">
                            <p className="text-left">1</p>
                            <p className="text-left pl-1">2</p>
                            <p className="text-left pl-2">3</p>
                            <p className="text-left pl-2">4</p>
                            <p>5</p>
                            <p>6</p>
                            <p className="text-right pr-2">7</p>
                            <p className="text-right pr-2">8</p>
                            <p className="text-right pr-1">9</p>
                            <p className="text-right">10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}