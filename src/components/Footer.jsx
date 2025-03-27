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
            <h3 className='email' >abacate.grupo3@gmail.com</h3>
            </section>

            <section className='bloco-img2'>
            <img className='img-redes' src={foto2}/>
            <h3 className='instagram'>@abacates_3</h3>
            </section>

        </section>

        <section className="informacao-resposavel" >
            <p>Laura Betti Migliaccio - Lucas Casagrande da Silva - Milena Oliveira Souza <br/> Pietro Melle Michelin - Pyetro Joaquim Nunes - Vitor Geraldo Cecato </p>
            <img className='imglogo' src={logo}/>
        </section>


      </footer>
        
      </>
    )
  }
  
  export default Footer