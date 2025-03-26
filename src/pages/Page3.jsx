import { useEffect, useState } from "react";
import "./styles/Page3.css";

function PageTres() {
  const [informacoes] = useState(
    JSON.parse(localStorage.getItem("Informações")) || ""
  );

  useEffect(() => {
    localStorage.setItem("Informações", JSON.stringify(informacoes));
  }, [informacoes]);

  return (
    <section className="box-page3">
        <section className="box-titulo">
      <h2>Informações - {informacoes.nomeComum}</h2>
      <img src={informacoes.bandeira}></img>
      </section>
      <section className="box-infos">
        <section className="orgElementos">
          <i className="fa-solid fa-users"></i>
          <p>{informacoes.populacao}</p>
        </section>
        <section className="orgElementos">
          <i className="fa-solid fa-coins"></i>
          <p>{informacoes.moeda.CHF.name}</p>
        </section>
        <section className="orgElementos">
          <i className="fa-solid fa-map-location-dot"></i>
          <p>{informacoes.area}</p>
        </section>
      </section>
    </section>
  );
}

export default PageTres;
