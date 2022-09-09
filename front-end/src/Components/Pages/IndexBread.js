import Breads from '../Breads';
import '../Styles/bread.css';

export default function IndexBread({ setItem }) {
  return (
    <div>
      <Breads setItem={setItem} />
    </div>
  );
}
