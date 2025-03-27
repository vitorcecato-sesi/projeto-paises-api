import { useState } from "react";
import "./styles/page2.css"

function RouteLocalStorage() {
    const [informacao] = useState (() => JSON.parse(localStorage.getItem("Informações")) || "")

    return ( 
        <div>
            <div className="ti-img">
        <h1 className="Ti">{informacao.nomeComum}</h1>
        <img src={informacao.bandeira}></img>
        </div>
        <section className="Box-Tudo" >

           
 
            <section className="Blocao">

            
              
                <div>
              <h3 className="Ti-Informações">Algumas informacões sobre "{informacao.nomeComum}"</h3>
              </div>

              <div className="Bloc">
            <div className="Blox">
            <section className="Capital">
                <center>
            <h3 className="capTexto">Capital</h3>
            </center>
            </section>
            <p> {informacao.capital}</p>
            </div>

            <br/>

            <div className="Blox">
            <section className="Regiao">
                <center>
            <h3>Região</h3>
            </center>
            </section>
            <p> {informacao.regiao}</p>
            </div>

            <br/>

            <div className="Blox">
            <section className="Sub-Regiao">
            <center>
            <h3>Sub-Região</h3>
            </center>
            </section>
            <p> {informacao.subRegiao}</p>
            </div>
            </div>
         
            
            </section>
           


        </section>
        </div>
    )
}

export default RouteLocalStorage;