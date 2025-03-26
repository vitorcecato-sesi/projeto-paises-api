import { Link } from "react-router-dom"
import "./styles/Navbar.css"

function Navbar(props) {

  return (
    <nav className="blocoNavBar">
        <Link className="link" id="link" to="/"> <span id={props.home}>Home 🏡</span> </Link>
        <Link className="link" id="link" to="/page1"><span id={props.page1}>Informações 1</span></Link>
        <Link className="link" id="link" to="/page2"><span id={props.page2}>Informações 2</span></Link>
        <Link className="link" id="link" to="/page3"><span id={props.page3}>Informações 3</span></Link>
        <Link className="link" id="link" to="/page4"><span id={props.page4}>Informações 4</span></Link>
    </nav>
  )
}
export default Navbar;
