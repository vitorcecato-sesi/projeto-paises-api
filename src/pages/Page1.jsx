// Estilização
import "./styles/Page1.css";

// Components
import Navbar from "../components/Navbar";

import { useState } from "react";

function Page1Informacoes() {
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "");

  return (
    <>
      <Navbar />

      <center>
        <h1> {informacoes.nomeComum} </h1>
        <img id="imgPais" src={informacoes.bandeira} />

        <section className="alinhamento">
          <section className="bloco">
            <p id="italic"> Nome comum </p> 
            <p id="informacao"> <strong> {informacoes.nomeComum} </strong> </p>
          </section>

          <section className="bloco">
            <p id="italic">Nome oficial </p> 
            <p id="informacao"> <strong> {informacoes.nomeOficial} </strong> </p>
          </section>
        </section>
        
        <section className="bloco">
          <p id="italic"> Língua </p> 
          <p id="informacao"> <strong> {informacoes.lingua} </strong> </p>
        </section>
      </center>
    </>
  );
}

export default Page1Informacoes;
