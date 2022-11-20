export default function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.u}</div>
                    <div class="razao">{props.r}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}