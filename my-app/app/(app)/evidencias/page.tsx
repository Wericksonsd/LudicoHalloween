import Titulo from "../../components/titulo";


export default function Evidencias () {
    return(
        <div className="flex-1 flex flex-col px-6 py-4 gap-4">
            <Titulo
            titulo="Evidências"
            subTitulo="Armazene as informaç~eos coletadas e tente capturarr a entidade."
            hiddenVar={true}
            helpTExt="Após utilizar as ferramentas, você poderá anotar as informações coeltadas aqui, e assim que se sentir confiante em tentar descobrir qual entidades está caçando, abra a caixa de seleção, o selecione e confirme, aguarde o resultado e em caso de acerto, dirija-se a entrada do evento apra receber seu prêmio."/>            
            <div className="flex-1"
            style={{backgroundImage: "url('/folha.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
                
            </div>
            <div className="h-16 bg-amber-500 w-full"></div>
        </div>
    )
}