import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Cake({ cake, formatter, setItem, setCakes }) {
  useEffect(() => {
    localStorage.setItem('item', '0');
  }, []);
  // const handleCheckbox = () => {
  //   setCakes({ ...cake, isFavorite: !cake.isFavorite });
  // };

  const handleClick = () => {
    let itemNumber = Number.parseInt(localStorage.getItem('item'));
    itemNumber++;
    console.log('this is', itemNumber);
    localStorage.setItem('item', itemNumber);
    setItem(itemNumber);
  };

  return (
    <div className='cake-card'>
      <Link to={`/cakes/` + cake.id} key={cake.id}>
        <img
          className='cake-pic'
          style={{ width: '275px', height: '255px' }}
          src={cake.image}
          alt=''
        />
       
        <h1 className='favorite'
          id='isFavorite'
          type='checkbox'
        >
          {cake.is_favorite ? (
            <span>❤️</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </h1>
        <p className='cake-name'>{cake.name}</p>
      </Link>
      <div className='cake-price'>
        <p>{formatter.format(cake.price)}</p>
      </div>

      <button className='cake-button' onClick={() => handleClick()}>
        Añadir Al Carrito
      </button>
    </div>
  );
}
