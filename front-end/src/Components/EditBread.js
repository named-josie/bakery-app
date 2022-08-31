import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function EditBread() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [bread, setBread] = useState({
      name: '',
      price: 0,
      description: '',
      image: '',
    });

  const updateBread = (updatedBread) => {
    axios
      .put(`${API}/breads/${id}`, updatedBread)
      .then(
        () => {
          navigate(`/breads/${id}`);
        },
        (error) => console.error(error),
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setBread({ ...bread, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/breads/${id}`)
      .then((res) => {
        setBread(res.data.payload);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBread(bread, id);
  };

  return (
    <div className='edit'>
      <h1 className='title'>Edit Bread Entry</h1>
      <form className='form' onSubmit={handleSubmit}>
      <div className='color2'>
        <label className='edit-label' htmlFor='name'>
          Name
        </label>
        <input
          className='text'
          id='name'
          type='text'
          placeholder='Name Of Bread'
          required
          value={bread.name}
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
          value={bread.price}
          placeholder='0'
          onChange={handleTextChange}
        />
        <label className='edit-label' htmlFor='description'>
        Description
        </label>
        <textarea
            rows="5"
            cols="20"
            className='text'
            id='description'
            value={bread.description}
            type='text'
            placeholder='words'
            onChange={handleTextChange}
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
            value={bread.image}
            onChange={handleTextChange}
          />
        <input type='submit' />
       
        </div>
        <Link to={`/breads/${id}`}>
          <button className='edit-button'>Back</button>
        </Link>
        
      </form>
      
    </div>
  );
}
