import { Link } from "react-router-dom";
import './Styles/navbar.css'

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
      </h1>
     <h1>
        <Link to="/breads">Saborso</Link>
        </h1>
        <h1>
        <Link to="/cakes">Dulce</Link>
        </h1>
        <h1>
        <Link to="/cakes">About</Link>
        </h1>
    </nav>
  );
}
