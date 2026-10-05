import { Flashlight, KeyboardMusic, PanelTopBottomDashed, type LucideIcon } from "lucide-react"

export type Ferramenta = {
    id: number
    nome: string
    descricao: string
    liberada: boolean
    icon: string    
    linkTo: string
}

export const iconesFerramentas: Record<string, LucideIcon> = {
    PanelTopBottomDashed,
    Flashlight,
    KeyboardMusic,
}