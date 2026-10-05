'use client'

import { useEffect, useState } from "react"
import dados from "../../../dataBank/fantasmas.json"


export default function Ferramentas() {
    const [amplitudeBar, setAmplitudeBar] = useState(0)
    const [rotationBar, setRotationBar] = useState(0)
    const [equalizeBar, setEqualizeBar] = useState(0)

    const [cyanBar, setCyanBar] = useState([0,0,0])
    const [magentaBar, setMagentaBar] = useState([0,0,0])
    const [yellowBar, setYellowBar] = useState([0,0,0])

    const [cyanBarCorrect, setCyanBarCorrect] = useState(false)
    const [magentaBarCorrect, setMagentaBarCorrect] = useState(false)
    const [yellowBarCorrect, setYellowBarCorrect] = useState(false)

    const [currentBar, setCurrentBar] = useState(0)

    const [enemieAtual, setEnemieAtual] = useState(dados.fantasmas[0])

    function updateCyanBar() {
        setCyanBar([amplitudeBar,  equalizeBar, rotationBar])
        correctBarValues(0, cyanBar)
        console.log(cyanBar[0], cyanBar[1], cyanBar[2], cyanBarCorrect)
    }

    function updateMagentaBar() {
        setMagentaBar([amplitudeBar, equalizeBar, rotationBar])
        correctBarValues(1, magentaBar)
    }

    function updateYellowBar() {
        setYellowBar([amplitudeBar, equalizeBar, rotationBar])
        correctBarValues(2, yellowBar)
    }

    function handleBarChange(barNumber: number) {   
        resetBars(barNumber)
        setCurrentBar(barNumber)
    }

    function correctBarValues(barType: number, barNumber: number[]) {
        const barra = enemieAtual.emf[barType]

        if (barra[0] === barNumber[0] &&
        barra[1] === barNumber[1] &&
        barra[2] === barNumber[2]) {
            switch(barType) {
                case 0:
                    setCyanBarCorrect(true)
                    break
                case 1:
                    setMagentaBarCorrect(true)
                    break
                case 2:
                    setYellowBarCorrect(true)
                    break
            }
        } else {
            switch(barType) {
                case 0:
                    setCyanBarCorrect(false)
                    break
                case 1:
                    setMagentaBarCorrect(false)
                    break
                case 2:
                    setYellowBarCorrect(false)
                    break
            }
        }
    }

    function resetBars(barNumber: number) {
        switch(barNumber) {
            case 1:
                setAmplitudeBar(cyanBar[0])
                setEqualizeBar(cyanBar[1])
                setRotationBar(cyanBar[2])
                break
            case 2:
                setAmplitudeBar(magentaBar[0])
                setEqualizeBar(magentaBar[1])
                setRotationBar(magentaBar[2])
                break
            case 3:
                setAmplitudeBar(yellowBar[0])
                setEqualizeBar(yellowBar[1])
                setRotationBar(yellowBar[2])
                break
        }
    }

    function handleSliders (currentSlider: number) {
        switch (currentSlider) {
            case 0:
                
        }

        switch(currentBar) {
            case 0:
                break
            case 1:
                updateCyanBar()
                break
            case 2:
                updateMagentaBar()
                break
            case 3:
                updateYellowBar()
                break
        }
    }

    /*useEffect(() => {
        switch(currentBar) {
            case 0:
                break
            case 1:
                updateCyanBar()
                break
            case 2:
                updateMagentaBar()
                break
            case 3:
                updateYellowBar()
                break
        }
    }, [amplitudeBar, rotationBar, equalizeBar])*/
    
    


    return(
        <div className="flex-1 flex flex-col items-center justify-between p-8 gap-4">
            <h1>Ferramentas</h1>

            <div className="h-100 w-full border-3 border-amber-300 relative overflow-hidden flex items-center justify-center">
                <div className={`${cyanBarCorrect ? 'bg-cyan-100' : 'bg-cyan-700'} absolute h-2 w-1/2`}
                    style={{ transform: `translateY(${cyanBar[0]*35}px) translateX(${cyanBar[1]*10}%) rotate(${cyanBar[2]*10}deg)`}}>
                </div>
                <div className={`${magentaBarCorrect ? 'bg-pink-100' : 'bg-pink-700'} absolute h-2 w-1/2`}
                    style={{ transform: `translateY(${magentaBar[0]*35}px) translateX(${magentaBar[1]*10}%) rotate(${magentaBar[2]*10}deg)`}}>
                </div>
                <div className={`${yellowBarCorrect ? 'bg-yellow-100' : 'bg-yellow-500'} absolute h-2 w-1/2`}
                    style={{ transform: `translateY(${yellowBar[0]*35}px) translateX(${yellowBar[1]*10}%) rotate(${yellowBar[2]*10}deg)`}}>
                </div>
            </div>

            <div className="w-full h-4 flex items-center justify-center gap-8 p-6">
                <button
                type="button"
                className={`w-8 h-8 border ${currentBar === 1 ? 'bg-cyan-500' : 'bg-cyan-900'} border-amber-100 rounded-lg`}
                onClick={() => handleBarChange(1)}
                ></button>

                <button
                type="button"
                className={`w-8 h-8 border ${currentBar === 2 ? 'bg-pink-500' : 'bg-pink-900'} border-amber-100 rounded-lg`}
                onClick={() => handleBarChange(2)}
                ></button>

                <button
                type="button"
                className={`w-8 h-8 border ${currentBar === 3 ? 'bg-yellow-500' : 'bg-yellow-900'} border-amber-100 rounded-lg`}
                onClick={() => handleBarChange(3)}
                ></button>
            </div>
            <div className="w-full h-32 flex items-center justify-center gap-2">
                <div className="h-full grid grid-rows-3 justify-items-end items-start pt-2 text-xs">
                    <p>AMPLITUDE</p>
                    <p>EQUALIZAÇÃO</p>
                    <p>ROTAÇÃO</p>
                </div>
                <div className="w-full h-full flex flex-col justify-around">
                    <div className="w-full text-zinc-100 flex flex-col">
                        <input type="range" id='amplitude' min={-5} max={5} value={amplitudeBar}
                        onChange={((e) => setAmplitudeBar(parseInt(e.target.value)))}
                        className="h-1 w-full"/>
                        <div className="w-full grid grid-cols-11 text-center text-sm">
                            <p className="text-left">5</p>
                            <p className="text-left pl-1">4</p>
                            <p className="text-left pl-2">3</p>
                            <p className="text-left pl-2">2</p>
                            <p>1</p>
                            <p>0</p>
                            <p>1</p>
                            <p className="text-right pr-2">2</p>
                            <p className="text-right pr-2">3</p>
                            <p className="text-right pr-1">4</p>
                            <p className="text-right">5</p>
                        </div>
                    </div>

                    <div className="w-full text-zinc-100 flex flex-col">
                        <input type="range" id='equalize' min={-5} max={5} value={equalizeBar}
                        onChange={(e) => setEqualizeBar(parseInt(e.target.value))}
                        className="h-1 w-full"/>
                        <div className="w-full grid grid-cols-11 text-center text-sm">
                            <p className="text-left">5</p>
                            <p className="text-left pl-1">4</p>
                            <p className="text-left pl-2">3</p>
                            <p className="text-left pl-2">2</p>
                            <p>1</p>
                            <p>0</p>
                            <p>1</p>
                            <p className="text-right pr-2">2</p>
                            <p className="text-right pr-2">3</p>
                            <p className="text-right pr-1">4</p>
                            <p className="text-right">5</p>
                        </div>
                    </div>

                    <div className="w-full text-zinc-100 flex flex-col">
                        <input type="range" id='rotacao' min={0} max={18} value={rotationBar}
                        onChange={(e) => setRotationBar(parseInt(e.target.value))}
                        className="h-1 w-full"/>
                        <div className="w-full grid grid-cols-3 text-center text-sm">
                            <p className="text-left">0</p>
                            <p>180</p>
                            <p className="text-right">360</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}