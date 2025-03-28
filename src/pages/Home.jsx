import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import './styles/Home.css'
import Header from "../components/Header"
import Footer from "../components/Footer";

function Home() {
  const [paises, setPaises] = useState(JSON.parse(localStorage.getItem("Dados API")) || [])
  const [informacoes, setInformacoes] = useState(JSON.parse(localStorage.getItem("Informações")) || "")
  
  useEffect(() => {
    async function buscarPaises() {
      try {
        const resposta = await fetch("https://restcountries.com/v3.1/all")
        const dados = await resposta.json()
        setPaises(dados)
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
      googleMaps: pais.maps.googleMaps,
      populacao: pais.population,
      paisesFronteira: pais.borders ? Object.values(pais.borders).join(", ") : "Não tem países em fronteira!",
      fusoHorario: pais.timezones ? pais.timezones.join(", ") : "Fuso-Horário não conhecido!",
      sigla: pais.fifa ? pais.fifa : "Não encontrado",
      bandeira: pais.flags.png
    }
    setInformacoes(informacoes)
    localStorage.setItem("Informações", JSON.stringify(informacoes))
  }

  useEffect(() => {
    localStorage.setItem("Dados API", JSON.stringify(paises))
  }, [paises])

  return (
    <>
    <Header />
    <Navbar />
    <section className="tudo">
    <section className="meio">
    <section className="center">
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
    </section>
    </section>
    <br />
    <Footer />
    </section>
    
    </>
  )

}

export default Home