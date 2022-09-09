import Breads from '../Breads';
import Cakes from '../Cakes';
import Minis from '../Minis';
import '../Styles/cakes.css';
import '../Styles/bread.css';
import '../Styles/minis.css';

export default function Menu({ setItem }) {
  return (
    <div>
      <h1 className='menu-title'>Menu</h1>
      <Minis setItem={setItem} />
      <hr></hr>
      <Cakes setItem={setItem} />
      <hr></hr>
      <Breads setItem={setItem} />
    </div>
  );
}
