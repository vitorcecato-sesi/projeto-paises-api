import { useEffect, useState } from "react";

function Home() {
  const [paises, setPaises] = useState([])
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "")
  const [dadosAPI, setDadosAPI] = useState(JSON.parse(localStorage.getItem("Dados API")) || [])
  
  useEffect(() => {
    async function buscarPaises() {
      try {
        const resposta = await fetch("https://restcountries.com/v3.1/all")
        const dados = await resposta.json()
        setPaises(dados)
        setDadosAPI(dados)
      } catch (error) {
        console.error(error)
      }
    }
    buscarPaises()
  }, [])

  const guardarInformacoes = (pais) => {
    const informacoes = {
      nomeComum: pais.name.common,
      nomeOficial: pais.name.official,
      lingua: pais.languages ? Object.values(pais.languages).join(", ") : "Lingua não Língua não conhecida!",
      capital: pais.capital ? pais.capital[0] : "Capital não conhecida!",
      regiao: pais.region,
      subRegiao: pais.subregion,
      moeda: pais.currencies ? pais.currencies[Object.keys(pais.currencies)[0]].name : "Moeda não conhecida!",
      area: pais.area,
      populacao: pais.population,
      paisesFronteira: pais.borders,
      fusoHorario: pais.timezones ? pais.timezones.join(", ") : "Fuso-Horário não conhecido!",
      sigla: pais.flag,
      bandeira: pais.flags.png
    }
    setInformacoes(informacoes)
    localStorage.setItem("Informações", JSON.stringify(informacoes))
  }

  useEffect(() => {
    localStorage.setItem("Dados API", JSON.stringify(dadosAPI))
  }, [dadosAPI])

  return (
    <>
    <h3> Selecione seu país: </h3>

    <select value={informacoes?.nomeComum} onChange={(e) => guardarInformacoes(paises.find(pais => pais.name.common === e.target.value))}>
      <option> Selecione um país </option>

      {paises.map((pais) => (
        <option key={pais.name.common}>{pais.name.common} </option>
      ))}
    </select>

    {informacoes && (
      <>
      <p> Pais selecionado: {informacoes.nomeComum} </p>
      <img src={informacoes.bandeira}/>

      </>
    )}
    </>
  )

}

export default Home