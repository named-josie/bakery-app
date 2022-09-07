import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import StarRating from 'star-rating-react';

export default function Bread({ bread, formatter, setItem }) {
  const [star, setStar] = useState(0)

  useEffect(() => {
    localStorage.setItem('item', '0');
  }, []);

  useEffect(()=> {
    localStorage.setItem('star', '1,2,3,4,5')
  }, [] )

  const handleClick = () => {
    let itemNum = Number.parseInt(localStorage.getItem('item'));
    itemNum++;
    console.log('this is', itemNum);
    localStorage.setItem('item', itemNum);
    setItem(itemNum);
  };

//  const handleClickstar = () => {
//   let starsNum = Number.parseInt(localStorage.getItem('star'))
//   starsNum

//  }
 
  return (
    <div className='bread-card'>
      
      <Link to={`/breads/`+bread.id} key={bread.id}>
      {/* <input
      id="isFavorite"
      type="checkbox"
      onChange={handleCheckboxChange}>
        {bread.isFavorite ? <span>⭐️</span> : null} 
        checked={bread.isFavorite}
      </input> */}
      <h3>{bread.is_favorite ? (
          <span>❤️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}</h3>
        <img className='bread-pic'
          style={{ width: '275px', height: '255px' }}
          src={bread.image}
          alt=''
        />
         <p className='bread-name'>{bread.name}</p>
      </Link>
      <p className="bread-price">{formatter.format(bread.price)}</p>
      <div className="star-ratings">
      <StarRating 
  size={5}
  value={star}
  onChange={function(val){setStar(val)}}
/></div>
      <button className='bread-button' onClick={() => handleClick()}>
      Añadir Al Carrito
      </button>
    </div>
  );
}
