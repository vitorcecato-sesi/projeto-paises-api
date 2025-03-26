import { useState, useEffect } from "react";

function Page1Informacoes() {
    const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "")

  return (
    <>
      
          <p>Nome comum: {informacoes.nomeComum}</p>
          <p>Nome oficial: {informacoes.nomeOficial}</p>
          <p>Lingua: {informacoes.lingua}</p>
        </>
    

  );
}

export default Page1Informacoes;