import { useState } from "react";
import "./styles/page2.css";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RouteLocalStorage() {
  const [informacao] = useState(
    () => JSON.parse(localStorage.getItem("Informações")) || ""
  );

  return (
    <div>
      <Header />
      <Navbar />
      <div className="nome-Pais">
        <h1 className="Titulo-Pais">{informacao.nomeComum}</h1>
      </div>

      <section className="Box-Informacoes-Bandeira">
        <section className="Box-Informacoes">
          <div>
            <h3 className="Titulo-Informações">
              Algumas informacões sobre "{informacao.nomeComum}"
            </h3>
          </div>

          <div className="Bloc-Informacoes-linha">

            <div className="Blox-Informacoes">
              <section className="Capital-Titulo">
                <center>
                  <h4>Capital</h4>
                </center>
              </section>
              <p> {informacao.capital}</p>
            </div>

            <br />

            <div className="Blox-Informacoes">
              <section className="Regiao-Titulo">
                <center>
                  <h4>Região</h4>
                </center>
              </section>
              <p> {informacao.regiao}</p>
            </div>

            <br />

            <div className="Blox-Informacoes">
              <section className="Sub-Regiao-Titulo">
                <center>
                  <h4>Sub-Região</h4>
                </center>
              </section>
              <p> {informacao.subRegiao}</p>
            </div>
          </div>
        </section>

        <div className="Blox-Bandeira">
          <img className="img1" src={informacao.bandeira}></img>
        </div>
        <div />
      </section>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default RouteLocalStorage;
