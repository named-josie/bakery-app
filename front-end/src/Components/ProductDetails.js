import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function ProductDetails() {
  const [product, setProducts] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setProducts(res.data.payload);
      })

      .catch(() => {
        navigate('/not found');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then(() => {
        navigate('/products');
      })
      .catch(() => {
        console.warn('error');
      });
  };
  return (
    <div className='show'>
      <h1 className='show-title'>{product.name}</h1>
        <img className='details_image' alt='' src={product.image}></img>
        <br></br>
        <div className='show-info'>
        <h2 className='show_p'>
        <span>Name: </span> {product.name}
      </h2>
      <h2 className='show_p'>
        <span>Price: </span> {product.price}
      </h2>
      <h2 className='show_p'>
        <span>Description: </span> {product.description}
      </h2>
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/products`}>
            <button className='show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/products/${product.id}/edit`}>
            <button className='show_button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='show_button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
