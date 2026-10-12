'use client'

import { useDroppable } from '@dnd-kit/react';
import type { ReactNode } from 'react';

interface DroppableProps {
  id: string;
  children?: ReactNode;
}

export default function Droppable({ id, children }: DroppableProps) {
  const { ref } = useDroppable({
    id,
  });

  return (
    <div ref={ref} className="w-full h-32 border border-gray-400 flex items-center justify-center flex-1">
      {children}
    </div>
  );
};