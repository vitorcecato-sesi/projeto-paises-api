import "./styles/Home.css"
import Navbar from "../components/Navbar"

function Home() {
    return(
        <>
            <section className="HomeBody">
                <Navbar home="ativo" />
            </section>
        </>
    )
}

export default Home