import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function CakeDetails() {
  const [cake, setCakes] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/cakes/${id}`)
      .then((res) => {
        setCakes(res.data.payload);
      })

      .catch(() => {
        navigate('/not found');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/cakes/${id}`)
      .then(() => {
        navigate('/cakes');
      })
      .catch(() => {
        console.warn('error');
      });
  };
  return (
    <div className='show'>
      <h1 className='show-title'>{cake.name}</h1>
        <img className='details_image' alt='' src={cake.image}></img>
        <br></br>
        <div className='show-info'>
        <h2 className='show_p'>
        <span>Name: </span> {cake.name}
      </h2>
      <h2 className='show_p'>
        <span>Price: </span> {cake.price}
      </h2>
      <h2 className='show_p'>
        <span>Description: </span> {cake.description}
      </h2>
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/cakes`}>
            <button className='show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/cakes/${cake.id}/edit`}>
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
