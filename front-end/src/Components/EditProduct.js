import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function EditProduct() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [product, setProduct] = useState({
      name: '',
      price: 0,
      description: '',
      image: '',
    });

  const updateProduct = (updatedProduct) => {
    axios
      .put(`${API}/products/${id}`, updatedProduct)
      .then(
        () => {
          navigate(`/products/${id}`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setProduct(res.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product, id);
  };

  return (
    <div className='edit'>
      <h1 className='title'>Edit product Entry</h1>
      <form className='form' onSubmit={handleSubmit}>
      <div className='color2'>
        <label className='edit-label' htmlFor='name'>
          Name
        </label>
        <input
          className='text'
          id='name'
          type='text'
          placeholder='Name Of product'
          required
          value={product.name}
          onChange={handleTextChange}
        />
        <label className='edit-label' htmlFor='protein'>
          Price
        </label>
        <input
          className='text'
          id='price'
          type='number'
          name='price'
          value={product.price}
          placeholder='0'
          onChange={handleTextChange}
        />
        <label className='edit-label' htmlFor='description'>
        Description
        </label>
        <input
          className='text'
          id='description'
          value={product.description}
          type='text'
          onChange={handleTextChange}
          placeholder='text'
          required
        />
        <label className='edit-label' htmlFor='image'>
            Image Url
          </label>
          <input
            className='text'
            id='image'
            type='text'
            placeholder='https://www.image.com'
            required
            value={product.image}
            onChange={handleTextChange}
          />
        <input type='submit' />
       
        </div>
        <Link to={`/products/${id}`}>
          <button className='edit-button'>Back</button>
        </Link>
        
      </form>
      
    </div>
  );
}
