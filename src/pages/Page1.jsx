// Estilização
import "./styles/Page1.css";

// Components
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

import { useState } from "react";

function Page1Informacoes() {
  const [informacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "");

  return (
    <>
      <Header />

      <Navbar />

      <center>
        <h1 id="titulo"> {informacoes.nomeComum} </h1>
        <img id="imgPais" src={informacoes.bandeira} />

        <section className="alinhamento">
          <section className="bloco">
            <p id="italic"> Nome Comum </p> 
            <p id="informacao"> <strong> {informacoes.nomeComum} </strong> </p>
          </section>

          <section className="bloco">
            <p id="italic">Nome Oficial </p> 
            <p id="informacao"> <strong> {informacoes.nomeOficial} </strong> </p>
          </section>
        </section>
        
        <section className="bloco">
          <p id="italic"> Língua(s) </p> 
          <p id="informacao"> <strong> {informacoes.lingua} </strong> </p>
        </section>
      </center>

      <br />
      <br />

      <Footer />
    </>
  );
}

export default Page1Informacoes;
