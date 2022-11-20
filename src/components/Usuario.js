
export default function Usuario(props) {
    return (
        <div class="usuario">
            <img onClick={props.funi} src={props.img} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {props.nick}
                    <ion-icon onClick={props.fun} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
        )
}