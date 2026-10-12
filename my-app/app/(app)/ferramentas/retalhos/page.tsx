'use client'

import Draggable from "./components/draggBox";
import Droppable from "./components/dropBox";
import { DragDropProvider } from "@dnd-kit/react";
import { useState } from "react";

const dropBoxes = [
    { id: 'box1', content: 'Box 1' },
    { id: 'box2', content: 'Box 2' },
    { id: 'box3', content: 'Box 3' },
    { id: 'box4', content: 'Box 4' },
    { id: 'box5', content: 'Box 5' },
    { id: 'box6', content: 'Box 6' },
];

const DraggBoxes = [
    { id: 'dragg1', title:'1', img: 'bg-blue-400'},
    { id: 'dragg2', title:'1', img: 'bg-red-400'},
    { id: 'dragg3', title:'1', img: 'bg-green-400'},
    { id: 'dragg4', title:'1', img: 'bg-pink-400'},
    { id: 'dragg5', title:'1', img: 'bg-yellow-400'},
    { id: 'dragg6', title:'1', img: 'bg-cyan-400'},
]

export default function Retalhos() {
    const [droppedIn, setDroppedIn] = useState<string | null>(null);
    const [activeDraggable, setActiveDraggable] = useState(0);

    function activeDraggBox (num : number){
        setActiveDraggable(num)
    }

    return (
        <div className="flex-1 p-6 flex flex-col">
            <h1 className="text-2xl font-bold text-center">Resquícios</h1>
            <p className="text-center text-sm">Junte os pedaços de jornais para revelar seu passado.</p>

            <DragDropProvider
            onDragEnd={(event) => {
                if (event.canceled) return;
                const target = event.operation.target;
                setDroppedIn(target ? String(target.id) : null);
            }}>
                <div className="flex-1 border-2 border-zinc-300 rounded-lg mt-4 flex flex-col items-center justify-center gap-4">
                    <div className="w-full grid grid-cols-3 grid-rows-2">
                        {dropBoxes.map((box) => (
                            <Droppable key={box.id} id={box.id}>
                                {droppedIn === box.id && <Draggable idDragg={String(DraggBoxes[activeDraggable].id)} title={String(DraggBoxes[activeDraggable].title)} color={String(DraggBoxes[activeDraggable].img)}/>}
                            </Droppable>
                        ))}
                    </div>
                    <div className="flex-1 p-4">
                        {DraggBoxes.map((dragg, i) => (
                            <Draggable key={dragg.id} idDragg={dragg.id} title={dragg.title} color={dragg.img}
                            onClick={() => activeDraggBox(i)}/>
                        ))}
                    </div>
                </div>
            </DragDropProvider>

            <div className="w-full p-4 flex items-center justify-center gap-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    []
                </button>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    []
                </button>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    []
                </button>
            </div>
        </div>
    );
}
            