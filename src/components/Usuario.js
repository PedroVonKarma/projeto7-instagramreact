
export default function Usuario(props) {
    return (
        <div data-test='user' class="usuario">
            <img data-test='profile-image' onClick={props.funi} src={props.img} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test='name'>
                    {props.nick}
                    <ion-icon data-test='edit-name' onClick={props.fun} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
        )
}