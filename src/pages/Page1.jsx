import "./styles/Page1.css"

import { useState, useEffect } from "react";

function Page1Informacoes() {
    const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "")

  return (
    <>

    <center>
    <p> {informacoes.nomeComum} </p>
    <img src={informacoes.bandeira} />
    

    <section className="bloco">
          <p>Nome comum: {informacoes.nomeComum}</p>
          </section>

            <br />
            <br />

          <section className="bloco">
          <p>Nome oficial: {informacoes.nomeOficial}</p>
          </section>

          <br />
            <br />

          <section className="bloco">
          <p>Lingua: {informacoes.lingua}</p>
          </section>
          </center>
        </>
  );
}

export default Page1Informacoes;