import React from "react"
import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"
export default function SideBar() {
    const [nombre, setNombre] = React.useState('Catana')
    const [imaje, setImaje] = React.useState("assets/img/catanacomics.svg")
    function alterarU(){
        let x;
        do {x = prompt('Digite seu novo nome de usuário')} while (!x);
        setNombre(x)
    }
    function alterarI(){
        let y;
        do {y = prompt('Insira o URL da sua nova foto de perfil')} while(!y);
        setImaje(y)
    }
    return (
        <div class="sidebar">
            <Usuario fun={alterarU} funi={alterarI} nick={nombre} img={imaje}/>

            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}