import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function Bread({ bread, formatter, setItem }) {
  
  useEffect(() => {
    localStorage.setItem('item', '0');
  }, []);

  const handleClick = () => {
    let itemNum = Number.parseInt(localStorage.getItem('item'));
    itemNum++;
    console.log('this is', itemNum);
    localStorage.setItem('item', itemNum);
    setItem(itemNum);
  };

  return (
    <div className='bread-card'>
      
      <Link to={`/breads/`+bread.id} key={bread.id}>
        <img className='bread-pic'
          style={{ width: '275px', height: '255px' }}
          src={bread.image}
          alt=''
        />
         <p className='bread-name'>{bread.name}</p>
      </Link>
      <p className="bread-price">{formatter.format(bread.price)}</p>
      <button className='bread-button' onClick={() => handleClick()}>
      Añadir Al Carrito
      </button>
    </div>
  );
}
