import Cakes from '../Cakes';
import '../Styles/cakes.css'
export default function IndexCake({setItem}) {
  console.log("this is", setItem)
  return (
    <div>
      <h1>Index</h1>
      <Cakes setItem={setItem}/>
    </div>
  );
}
