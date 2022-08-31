import { Link } from "react-router-dom";
import './Styles/navbar.css'
import logo3 from "../assets/logo3.png"

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/"><img className="nav-image" src={logo3} alt="" ></img></Link>
      </div>
      <h1 className="navbar">
        <Link to="/todo">Menu</Link>
        </h1>
     <h1 className="navbar">
        <Link to="/breads">Pan</Link>
        </h1>
        <h1 className="navbar">
        <Link to="/cakes">Tartas</Link>
        </h1>
       
        <h1 className="navbar">
        <Link to="/cakes">About</Link>
        </h1>
    </nav>
  );
}
