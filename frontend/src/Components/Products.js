import { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        setProducts(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  return (
    <div className='products'>
      <h1 className='title-products'>products</h1>
      <section className='all-products'>
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
      <br />
    </div>
  );
}
