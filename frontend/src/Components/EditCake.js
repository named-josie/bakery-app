import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function EditCake() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [cake, setCake] = useState({
      name: '',
      price: 0,
      description: '',
      image: '',
    });

  const updateCake = (updatedCake) => {
    axios
      .put(`${API}/cakes/${id}`, updatedCake)
      .then(
        () => {
          navigate(`/cakes/${id}`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setCake({ ...cake, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/cakes/${id}`)
      .then((res) => {
        setCake(res.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCake(cake, id);
  };

  return (
    <div className='edit'>
      <h1 className='title'>Edit Cake Entry</h1>
      <form className='form' onSubmit={handleSubmit}>
      <div className='color2'>
        <label className='edit-label' htmlFor='name'>
          Name
        </label>
        <input
          className='text'
          id='name'
          type='text'
          placeholder='Name Of Cake'
          required
          value={cake.name}
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
          value={cake.price}
          placeholder='0'
          onChange={handleTextChange}
        />
        <label className='edit-label' htmlFor='description'>
        Description
        </label>
        <input
          className='text'
          id='description'
          value={cake.description}
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
            value={cake.image}
            onChange={handleTextChange}
          />
        <input type='submit' />
       
        </div>
        <Link to={`/cakes/${id}`}>
          <button className='edit-button'>Back</button>
        </Link>
        
      </form>
      
    </div>
  );
}
