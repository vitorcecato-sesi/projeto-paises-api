import { useState } from "react";
import "./styles/page2.css"

function RouteLocalStorage() {
    const [capital] = useState (() => JSON.parse(localStorage.getItem("Capital")) || "")
    const [regiao] = useState (() => JSON.parse(localStorage.getItem("Regiao")) || "")
    const [subRegiao] = useState (() => JSON.parse(localStorage.getItem("Sub-Regiao")) || "")

    return ( 
        <section className="Box-Tudo" >

            <section className="Blocao">

            <section className="Capital">
            <h3 className="capTexto">Capital</h3>
            <p> {capital}</p>
            </section>

            <section className="Regiao">
            <h3>Região</h3>
            <p> {regiao}</p>
            </section>

            <section className="Sub-Regiao">
            <h3>Sub-Região</h3>
            <p> {subRegiao}</p>
            </section>

            </section>


        </section>
    )
}

export default RouteLocalStorage;