import React from "react"
export default function Post(props){
    const [book, setBook] = React.useState("bookmark-outline")
    const [heart, setHeart] = React.useState("heart-outline")
    const [nCur, setCur] = React.useState(props.cur2)
    const [estilo, setEstilo] = React.useState('')
    const [bukStilo, setBukStilo] = React.useState('')
    function salvar(){
        if(book === "bookmark-outline"){
            setBook("bookmark-sharp")
            setBukStilo('buk')
        } else{
            setBook("bookmark-outline")
            setBukStilo('')
        }
    }
    function liker(){
        if(heart === "heart-outline"){
            setHeart("heart-sharp")
            setEstilo('red')
            setCur(nCur+1)
        } else{
            setHeart("heart-outline")
            setCur(nCur-1)
            setEstilo('')
        }
    }
    function like(){
        if(heart === "heart-outline"){
            setHeart("heart-sharp")
            setCur(nCur+1)
            setEstilo('red')
        }
    }
    
    return(
        <div data-test='post' class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={props.imgu} />
                                {props.user}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img data-test='post-image' onClick={like} src={props.conteudo} />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon class={estilo} data-test='like-post' onClick={liker} name={heart}></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon data-test='save-post' class={bukStilo} onClick={salvar} name={book}></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={props.imgc} />
                                <div data-test='likes-number' class="texto">
                                Curtido por <strong>{props.cur}</strong> e <strong>outras {nCur.toLocaleString('pt-BR')} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}