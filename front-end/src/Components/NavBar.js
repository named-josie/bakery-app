import { Link } from 'react-router-dom';
import './Styles/navbar.css';
import logo3 from './assets/logo3.png';
import { RiShoppingBasketLine } from 'react-icons/ri';

export default function NavBar({item}) {
 
  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>
          <img className='nav-image' src={logo3} alt=''></img>
        </Link>
      </div>
      <p className='navbar'>
        <Link to='/menu'>Menu</Link>
      </p>
      <p className='navbar'>
        <Link to='/breads'>Pan</Link>
      </p>
      <p className='navbar'>
        <Link to='/cakes'>Tartas</Link>
      </p>

      <p className='navbar'>
        <Link to='/about'>About</Link>
      </p>
      <h1 className='basket'>
        <RiShoppingBasketLine  /> {item} 
      </h1>
      <a href="javascript:void(0);" className="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
    </nav>
  );
}
