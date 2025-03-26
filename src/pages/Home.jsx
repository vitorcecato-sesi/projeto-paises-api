import { useEffect, useState } from "react";




function Pais(){
const[Pais, setPais] = useState( []); // Array das mensagens selecionadas da API (seráo exibidas)
    const [loading, setLoading] = useState(true); // Estado de carregamento da API
    const [erro, setErro] = useState(null);
    const [paisEscolhido, setPaisEscolhido] = useState(
        ()=> JSON.parse(localStorage.getItem("Pais")) ||[]); // Array das mensagens selecionadas
    

    useEffect(() => {
        async function fetchPais() { // Função que vai buscar os usuários
          try {
            const coutries = await fetch("https://restcountries.com/v3.1/all");
            if (!coutries.ok) {
              throw new Error("Erro ao carregar usuários");
            }
            const dados = await coutries.json(); // Vai converter as respostas em JSON
            setPais(dados); // Salva as informações da API na nossa variável "mensagens"
          } catch (erro) {
            setErro(erro.coutries); // Se estiver algum erro, atualiza o estado do erro
          } finally {
            setLoading(false); //Atualiza o estado do carregamento para true quando carregar
          }
        }
        //Chama a função de buscar usuários
        fetchPais();
      },[]);
      useEffect(() => {
        localStorage.setItem("paisEscolhido", JSON.stringify(paisEscolhido))
    }, [paisEscolhido])
    if (loading) return <h2>Carregando usuários... </h2>;
    // Erro = veifica se houve algum erro
    if (erro) return <h2>Erro: {erro}</h2>;



return(
<>
<h1>
Selecione o pais.


</h1>

   <select value={paisEscolhido} onChange={(e) => setPaisEscolhido(e.target.value)} > 
   {Pais.map((coutries) => (
   <option value={coutries.name.common}>{coutries.name.common}</option>
   ))}

   
   </select>

 <h2>{paisEscolhido}</h2>   
  
 {Pais.map(pais => (
            /* Caso o nome do país que for pego no .map for igual ao escolhido, pegue e mostre a imagem */
          pais.name.common === paisEscolhido && (
            <img src={pais.flags.png} alt={pais.name.common} />
            // ".flag.png" é a URL da imagem da bandeira do país, pois o array com a imagem na API está com esse nome
          )
        ))}


</>




)



}
export default Pais