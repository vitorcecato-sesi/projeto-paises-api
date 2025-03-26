import { useState } from "react";
import "./styles/Page4.css"

function Page4 () {
    const [pais] = useState (() => JSON.parse(localStorage.getItem("Pais")) || "")
    const [fronteira] = useState (() => JSON.parse(localStorage.getItem("Fronteiras")) || "")
    const [fusoHorario] = useState (() => JSON.parse(localStorage.getItem("Fuso-Horário")) || "")
    const [sigla] = useState (() => JSON.parse(localStorage.getItem("Sigla")) || "")

    return ( 
        <>
        <section className="bodyPage4"> 
            <h2 className="titulo"> {pais} Italia </h2>

            <section className="blocos">
                <section className="bloco"> 
                    <h3> Paises que Fazem Fronteira: </h3>
                    <h3> <strong> {fronteira} </strong> </h3>
                </section>

                <section className="bloco"> 
                    <h3> Fuso-Horário: </h3>
                    <h3> <strong> {fusoHorario} </strong> </h3>
                </section>

                <section className="bloco"> 
                    <h3> Sigla do País: </h3>
                    <h3> <strong> {sigla} </strong> </h3>
                </section>
            </section>
        </section>
        </>
    )
}

export default Page4