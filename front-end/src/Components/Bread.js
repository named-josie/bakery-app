import { Link } from "react-router-dom";

export default function Bread({ bread, formatter }) {
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
      {/* <button onClick={() => removeItem(bread.id)}>X</button> */}
    </div>
  );
}
