import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const suge = [{img:"assets/img/bad.vibes.memes.svg", u:"bad.vibes.memes", r:"Segue você"}, {img:"assets/img/chibirdart.svg", u:"chibirdart", r:"Segue você"}, {img:"assets/img/razoesparaacreditar.svg", u:"razoesparaacreditar", r:"Novo no Instagram"}, {img:"assets/img/adorable_animals.svg", u:"adorable_animals", r:"Segue você"}, {img:"assets/img/smallcutecats.svg", u:"smallcutecats", r:"Segue você"}]
    return (
    <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>

        {suge.map((i) => <Sugestao img={i.img} u={i.u} r={i.r}/>)}

    </div>)
}