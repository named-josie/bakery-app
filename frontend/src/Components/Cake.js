import { Link } from "react-router-dom";

export default function Cake({ cake, formatter })

{
  return (
    <div className='cake-card'>
      
      <Link to={`/cakes/`+cake.id} key={cake.id}>
        <img className='cake-pic'
          style={{ width: '275px', height: '255px' }}
          src={cake.image}
          alt=''
        />
         <p className='cake-name'>{cake.name}</p>
      </Link>
     <div className="cake-price" > <p>{formatter.format(cake.price)}</p></div>
    </div>
  );
}
