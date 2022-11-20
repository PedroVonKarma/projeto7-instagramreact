import Post from "./Post"
export default function Posts(){
    const info = [{imgu: "assets/img/meowed.svg", user: "meowed", conteudo: "assets/img/gato-telefone.svg", imgc: "assets/img/respondeai.svg", cur: "respondeai", cur2: 101523}, {imgu: "assets/img/barked.svg", user: "barked", conteudo: "assets/img/dog.svg", imgc: "assets/img/adorable_animals.svg", cur: "adorable_animals", cur2: 99159}]
    return(
        <div class="posts">
                    
            {info.map((i) => <Post imgu={i.imgu} user={i.user} conteudo={i.conteudo} imgc={i.imgc} cur={i.cur} cur2={i.cur2}/>)}
                
                </div>
    )
}