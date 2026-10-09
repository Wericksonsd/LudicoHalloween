import Titulo from "../central/components/titulo";

export default function Evidencias () {
    return(
        <div className="flex-1 flex flex-col px-6 pb-4 gap-4">
            <Titulo/>
            <div className="flex-1"
            style={{backgroundImage: "url('/folha.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                
            </div>
            <div className="h-16 bg-amber-500 w-full"></div>
        </div>
    )
}