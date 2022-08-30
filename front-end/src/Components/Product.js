import { Link } from "react-router-dom";

export default function Product({ product, formatter }) {
  return (
    <div className='product-card'>
      
      <Link to={`/products/`+product.id} key={product.id}>
        <img className='product-pic'
          style={{ width: '275px', height: '255px' }}
          src={product.image}
          alt=''
        />
         <p className='product-name'>{product.name}</p>
      </Link>
      <p className="product-price">{formatter.format(product.price)}</p>
    </div>
  );
}
