import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StarRating from 'star-rating-react';

export default function Bread({
  bread,
  formatter,
  setItem,
  height,
  width,
  onClick,
}) {
  const [star, setStar] = useState(0);

  useEffect(() => {
    localStorage.setItem('item', '0');
  }, []);

  useEffect(() => {
    localStorage.setItem('star', '1,2,3,4,5');
  }, []);

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
      <Link to={`/breads/` + bread.id} key={bread.id}>
        {/* <input
      id="isFavorite"
      type="checkbox"
      onChange={handleCheckboxChange}>
        {bread.isFavorite ? <span>⭐️</span> : null} 
        checked={bread.isFavorite}
      </input> */}

        <img
          className='bread-pic'
          style={{ width: '175px', height: '150px' }}
          src={bread.image}
          alt=''
        />
        <input
          type='checkbox'
          id='heart-checkbox'
          onChange={(e) => onClick(e.target.checked)}
          checked={bread.is_favorite}
        />
        <label htmlFor='heart-checkbox'>
          <svg
            id='heart-svg'
            viewBox='467 392 58 57'
            xmlns='http://www.w3.org/2000/svg'
            height={height}
            width={width}
          >
            <g
              id='circle-groups'
              fill='none'
              fill-rule='evenodd'
              transform='translate(467 392)'
            >
              <path
                d='M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z'
                id='heart'
                fill='#AAB8C2'
              />
              <circle
                id='parent-circle'
                fill='#E2264D'
                opacity='0'
                cx='29.5'
                cy='29.5'
                r='1.5'
              />

              <g id='circleGrp7' opacity='0' transform='translate(7 6)'>
                <circle id='oval1' fill='#9CD8C3' cx='2' cy='6' r='2' />
                <circle id='oval2' fill='#8CE8C3' cx='5' cy='2' r='2' />
              </g>

              <g id='circleGrp6' opacity='0' transform='translate(0 28)'>
                <circle id='oval1' fill='#CC8EF5' cx='2' cy='7' r='2' />
                <circle id='oval2' fill='#91D2FA' cx='3' cy='2' r='2' />
              </g>

              <g id='circleGrp3' opacity='0' transform='translate(52 28)'>
                <circle id='oval2' fill='#9CD8C3' cx='2' cy='7' r='2' />
                <circle id='oval1' fill='#8CE8C3' cx='4' cy='2' r='2' />
              </g>

              <g id='circleGrp2' opacity='0' transform='translate(44 6)'>
                <circle id='oval2' fill='#CC8EF5' cx='5' cy='6' r='2' />
                <circle id='oval1' fill='#CC8EF5' cx='2' cy='2' r='2' />
              </g>

              <g id='circleGrp5' opacity='0' transform='translate(14 50)'>
                <circle id='oval1' fill='#91D2FA' cx='6' cy='5' r='2' />
                <circle id='oval2' fill='#91D2FA' cx='2' cy='2' r='2' />
              </g>

              <g id='circleGrp4' opacity='0' transform='translate(35 50)'>
                <circle id='oval1' fill='#F48EA7' cx='6' cy='5' r='2' />
                <circle id='oval2' fill='#F48EA7' cx='2' cy='2' r='2' />
              </g>

              <g id='circleGrp1' opacity='0' transform='translate(24)'>
                <circle id='oval1' fill='#9FC7FA' cx='2.5' cy='3' r='2' />
                <circle id='oval2' fill='#9FC7FA' cx='7.5' cy='2' r='2' />
              </g>
            </g>
          </svg>
        </label>
        <p className='bread-name'>{bread.name}</p>
      </Link>
      <p className='bread-price'>{formatter.format(bread.price)}</p>
      <div className='star-ratings'>
        <StarRating
          size={5}
          value={star}
          onChange={function (val) {
            setStar(val);
          }}
        />
      </div>
      <button className='bread-button' onClick={() => handleClick()}>
        Añadir Al Carrito
      </button>
    </div>
  );
}
