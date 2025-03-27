import './styles/Footer.css'

import foto from "../assets/gmail.png"
import foto2 from "../assets/instagram.png"
import logo from "../assets/logoG3.png"

function Footer() {

    return (
      <>
      <footer className="footer">

        <section className="informacoes-contatos">

            <section className='bloco-img1'>
            <img className='img-redes' src={foto}/>
            <h3 className='email' >vitor.cecatosesi@gmail.com</h3>
            </section>

            <section className='bloco-img2'>
            <img className='img-redes' src={foto2}/>
            <h3 className='instagram'>@vitorgcecato</h3>
            </section>

        </section>

        <section className="informacao-resposavel" >
            <p>O Vitor Geraldo Cecato é o responsável por este projeto, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo.</p>
            <img className='imglogo' src={logo}/>
        </section>


      </footer>
        
      </>
    )
  }
  
  export default Footer