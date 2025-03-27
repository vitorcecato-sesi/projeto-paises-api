import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./styles/Page3.css";

function PageTres() {

  //Pegando as informações do localStorage:
  const [informacoes] = useState(
    JSON.parse(localStorage.getItem("Informações")) || ""
  );

  //
  useEffect(() => {
    localStorage.setItem("Informações", JSON.stringify(informacoes));
  }, [informacoes]);

  //Formata o número informado pela a API com um método do JS, deixando ele mais legivel:
  const populacaoFormat = new Intl.NumberFormat("pt-BR").format(
    informacoes.populacao
  );

  return (
    <>
      {/* Utilizando os componentes importados: */}
      <Header />
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <section className="box-page3">
        <section className="box-titulo">

          {/* Usando os valores armazenados nas "informacoes", permitindo sempre atualizar os mesmos de acordo com o país escolhido na home: */}
          <h2>Informações - {informacoes.nomeComum}</h2>
          <img src={informacoes.bandeira}></img>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <section className="box-page3row">
          <section className="box-esq">
            <h3>Veja algumas informações do país...</h3>
            <ul>
              <li>População</li>
              <li>Moeda</li>
              <li>Maps</li>
            </ul>
          </section>
          <section className="box-infos">
            <section className="orgElementos">

              {/* i: ícones, o className deles é algo predefinido do "FontAwesome". */}
              <i className="fa-solid fa-users"></i>
              <p>{populacaoFormat} pessoas</p>
            </section>
            <section className="orgElementos">
              <i className="fa-solid fa-coins"></i>
              <p>{informacoes.moeda}</p>
            </section>
            <section className="orgElementos">
              <i className="fa-solid fa-map-location-dot"></i>
              <a href={informacoes.googleMaps}>Visite o google maps do país</a>
            </section>
          </section>
        </section>
      </section>
      <br></br>
      <br></br>
      <br></br>
      
      {/* Utilizando os componentes importados: */}
      <Footer />
    </>
  );
}

export default PageTres;
