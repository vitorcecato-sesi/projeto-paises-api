import { Link } from "react-router-dom"
import "./styles/Navbar.css"

function Navbar(props) {
  return (
    <nav className="blocoNavBar">
        <Link className="link" id="link" to="/"> <span id={props.home}>Home 🏡</span> </Link>
    </nav>
  )
}
export default Navbar;
