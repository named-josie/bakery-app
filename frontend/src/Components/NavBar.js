import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
      </h1>
     <h1>
        <Link to="/products">Saborso</Link>
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
