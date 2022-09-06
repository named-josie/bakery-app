import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import Favorite from './Favorite'
export default function Mini({mini, formatter, setItem }) {
 
 
 
 
 
  useEffect(() => {
    localStorage.setItem('item', '0');
  }, []);


  const handleClick = () => {
    let itemNumber = Number.parseInt(localStorage.getItem('item'));
    itemNumber++;
    console.log('this is', itemNumber);
    localStorage.setItem('item', itemNumber);
    setItem(itemNumber);
  };

  return (
    <div className='mini-card'>
      <Link to={`/minis/` + mini.id} key={mini.id}>
        <img
          className='mini-pic'
          style={{ width: '275px', height: '255px' }}
          src={mini.image}
          alt=''
        />
        
        <h1 className='favorite'
          id='is_favorite'
          type='checkbox'
          onClick={handleClick}
        >
          {mini.is_favorite ? (
            <span>❤️</span>
          ) : (
            <span>❤️</span>
          )}
        </h1>
        <p className='mini-name'>{mini.name}</p>
      </Link>
      <div className='mini-price'>
        <p>{formatter.format(mini.price)}</p>
      </div>

      <button className='mini-button' onClick={() => handleClick()}>
        Añadir Al Carrito
      </button>
    </div>
  );
}
