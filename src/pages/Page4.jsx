import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Page4.css"

function Page4 () {
    const [informacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "")

    return ( 
        <>
        <Header />
        <Navbar />

        <section className="bodyPage4"> 
            
            <section className="imgEBloco">

                <section className="tituloBandeira"> 
                    <h2 className="titulo"> 📍{informacoes.nomeComum} </h2>
                    <img className="imgBandeira" src={informacoes.bandeira}/>
                </section>

                <section className="blocos">
                    <section className="bloco"> 
                        <h3> 🛫 Paises que Fazem Fronteira: </h3>
                        <h3> <strong> {informacoes.paisesFronteira} </strong> </h3>
                    </section>

                    <section className="bloco"> 
                        <h3> ⌚ Fuso-Horário: </h3>
                        <h3> <strong> {informacoes.fusoHorario} </strong> </h3>
                    </section>

                    <section className="bloco"> 
                        <h3> 🌏 Sigla do País: </h3>
                        <h3> <strong> {informacoes.sigla} </strong> </h3>
                    </section>
                </section>
            </section>

        </section>

        <br />

        <Footer /> 
        </>
    )
}

export default Page4