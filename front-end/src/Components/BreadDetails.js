import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function BreadDetails() {
  const [bread, setBreads] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/breads/${id}`)
      .then((res) => {
        setBreads(res.data.payload);
      })

      .catch(() => {
        navigate('/not found');
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/breads/${id}`)
      .then(() => {
        navigate('/breads');
      })
      .catch(() => {
        console.warn('error');
      });
  };
  return (
    <div className='show'>
      <h1 className='show-title'>{bread.name}</h1>
        <img className='details_image' alt='' src={bread.image}></img>
        <br></br>
        <div className='show-info'>
        <h2 className='show_p'>
        <span>Name: </span> {bread.name}
      </h2>
      <h2 className='show_p'>
        <span>Price: </span> {bread.price}
      </h2>
      <h2 className='show_p'>
        <span>Description: </span> {bread.description}
      </h2>
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/breads`}>
            <button className='show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/breads/${bread.id}/edit`}>
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
