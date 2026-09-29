'use client'

import { useEffect, useState } from "react"


export default function Ferramentas() {
    const [amplitudeBar, setAmplitudeBar] = useState(0)
    const [rotationBar, setRotationBar] = useState(0)
    const [equalizeBar, setEqualizeBar] = useState(0)

    const [cyanBar, setCyanBar] = useState([10,20,18])
    const [magentaBar, setMagentaBar] = useState([20,10,9])
    const [yellowBar, setYellowBar] = useState([10,20,18])

    function updateCyanBar() {
        setCyanBar([amplitudeBar * 5,  equalizeBar * 4, rotationBar * 2])
    }

    function updateMagentaBar() {
        setMagentaBar([amplitudeBar * 2, equalizeBar * 5, rotationBar * 3])
    }

    function updateYellowBar() {
        setYellowBar([amplitudeBar * 4, equalizeBar * 3, rotationBar * 2])
    }

    useEffect(() => {
        updateCyanBar()
        updateMagentaBar()
        updateYellowBar()
    }, [amplitudeBar, rotationBar, equalizeBar])
    
    


    return(
        <div className="flex-1 flex flex-col items-center justify-between p-8 gap-4">
            <h1>Ferramentas</h1>

            <div className="flex-1 w-full border-3 border-amber-300 relative overflow-hidden">
                <div className="bg-cyan-300 absolute h-2 w-1/2"
                    style={{ transform: `translateY(${cyanBar[0]}px) translateX(${cyanBar[1]}px) rotate(${cyanBar[2]}deg)`}}>
                </div>
                <div className="bg-pink-600 absolute h-2 w-1/2"
                    style={{ transform: `translateY(${magentaBar[0]}px) translateX(${magentaBar[1]}px) rotate(${magentaBar[2]}deg)`}}>
                </div>
                <div className="bg-yellow-300 absolute h-2 w-1/2"
                    style={{ transform: `translateY(${yellowBar[0]}px) translateX(${yellowBar[1]}px) rotate(${yellowBar[2]}deg)`}}>
                </div>
            </div>
            <div className="w-full h-32 flex items-center justify-center gap-2">
                <div className="h-full grid grid-rows-3 justify-items-end items-start pt-2 text-xs">
                    <p>AMPLITUDE</p>
                    <p>ROTAÇÃO</p>
                    <p>EQUALIZAÇÃO</p>
                </div>
                <div className="w-full h-full flex flex-col justify-around">
                    <div className="w-full text-zinc-100 flex flex-col">
                        <input type="range" id='amplitude' min={0} max={150} value={amplitudeBar}
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
                        <input type="range" id='rotacao' min={1} max={180} value={rotationBar}
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
                        <input type="range" id='equalize' min={1} max={40} value={equalizeBar}
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