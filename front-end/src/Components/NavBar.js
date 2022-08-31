import { Link } from "react-router-dom";
import './Styles/navbar.css'
import logo3 from "../assets/logo3.png"

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/"><img className="nav-image" src={logo3} alt="" ></img></Link>
      </div>
      <p className="navbar">
        <Link to="/todo">Menu</Link>
        </p>
     <p className="navbar">
        <Link to="/breads">Pan</Link>
        </p>
        <p className="navbar">
        <Link to="/cakes">Tartas</Link>
        </p>
       
        <p className="navbar">
        <Link to="/cakes">About</Link>
        </p>
    </nav>
  );
}
