import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StarRating from 'star-rating-react';

export default function Cake({cake, formatter, setItem }) {
 
  const [star, setStar] = useState(0)
 
 
 
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
    <div className='cake-card'>
      <Link to={`/cakes/` + cake.id} key={cake.id}>
        <img
          className='cake-pic'
          style={{ width: '275px', height: '255px' }}
          src={cake.image}
          alt=''
        />
        {/* <Favorite className='favorite'  cake={cake} /> */}
        
        <h1 className='favorite'
          id='is_favorite'
          type='checkbox'
          onClick={handleClick}
        >
          {cake.is_favorite ? (
            <span>❤️</span>
          ) : (
            <span>❤️</span>
          )}
        </h1>
        <p className='cake-name'>{cake.name}</p>
      </Link>
      <div className='cake-price'>
        <p>{formatter.format(cake.price)}</p>
      </div>
      <div className="star-ratings">
      <StarRating 
  size={5}
  value={star}
  onChange={function(val){setStar(val)}}
/></div>
      <button className='cake-button' onClick={() => handleClick()}>
        Añadir Al Carrito
      </button>
    </div>
  );
}
