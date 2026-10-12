'use client'

import {useDraggable} from '@dnd-kit/react';

interface DraggableProps {
  idDragg: string,
  title: string,
  color: string,
  onClick?: () => void;
}

export default function Draggable({idDragg, title, color, onClick}: DraggableProps) {
  const {ref} = useDraggable({
    id: idDragg,
  });

  return (
    <button ref={ref} onPointerDown={onClick} className={`${color} font-bold py-2 px-4 rounded touch-none select-none`}>
      {title}
    </button>
  );
}