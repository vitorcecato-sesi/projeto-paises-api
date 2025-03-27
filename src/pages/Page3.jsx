import { useEffect, useState } from "react";
import "./styles/Page3.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function PageTres() {
  const [informacoes] = useState(
    JSON.parse(localStorage.getItem("Informações")) || ""
  );

  useEffect(() => {
    localStorage.setItem("Informações", JSON.stringify(informacoes));
  }, [informacoes]);

  return (
    <>
      <Header />
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <section className="box-page3">
        <section className="box-titulo">
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
              <i className="fa-solid fa-users"></i>
              <p>{informacoes.populacao}</p>
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
      <Footer />
    </>
  );
}

export default PageTres;
