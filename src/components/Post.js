import React from "react"
export default function Post(props){
    const [book, setBook] = React.useState("bookmark-outline")
    const [heart, setHeart] = React.useState("heart-outline")
    const [nCur, setCur] = React.useState(props.cur2)
    function salvar(){
        if(book === "bookmark-outline"){
            setBook("bookmark-sharp")
        } else{
            setBook("bookmark-outline")
        }
    }
    function liker(){
        if(heart === "heart-outline"){
            setHeart("heart-sharp")
            setCur(nCur+1)
        } else{
            setHeart("heart-outline")
            setCur(nCur-1)
        }
    }
    function like(){
        if(heart === "heart-outline"){
            setHeart("heart-sharp")
            setCur(nCur+1)
        }
    }
    
    return(
        <div class="post">
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
                            <img onClick={like} src={props.conteudo} />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon onClick={liker} name={heart}></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon onClick={salvar} name={book}></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={props.imgc} />
                                <div class="texto">
                                Curtido por <strong>{props.cur}</strong> e <strong>outras {nCur} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}