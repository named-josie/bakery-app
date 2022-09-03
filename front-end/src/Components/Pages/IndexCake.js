import Cakes from '../Cakes';
import '../Styles/cakes.css'
export default function IndexCake({setItem}) {
  return (
    <div>
      <Cakes setItem={setItem}/>
    </div>
  );
}
