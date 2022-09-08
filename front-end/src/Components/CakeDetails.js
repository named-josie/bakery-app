import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import gluten from './assets/gluten.png'
import eggs from './assets/eggs.png'
import milk from './assets/milk.png'
import treenuts from './assets/treenuts.png'
import thc from './assets/thc.png'


const API = process.env.REACT_APP_API_URL;

export default function CakeDetails() {
  const [cake, setCakes] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  
  const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })


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
    <div className='cake-show'>
         <div className='cakeinfo'>
        <h2 className='show_name'>
         {cake.name}
      </h2>
      <hr></hr>
      <h3 className='price-details'>
      {formatter.format(cake.price)}
      </h3>
      <p className='show_p'>
        {cake.description}
      </p>
      <div>
      <img className='contains' style={{ width: '175px', height: '165px' }} src={eggs} alt=""></img>
      <img className='contains'  style={{ width: '175px', height: '165px' }} src={gluten} alt=""></img>
      <img className='contains' 
       style={{ width: '175px', height: '165px' }} src={milk} alt=""></img>
      <img className='contains' s style={{ width: '175px', height: '165px' }} src={treenuts} alt=""></img>
      <img className='contains'  style={{ width: '175px', height: '165px' }} src={thc} alt=""></img>
      </div>
      </div>
      <div className='cake-image'>
      <img className='details_cake' alt=''  style={{ width: '365px', height: '375px' }} src={cake.image}></img>
      </div>
      <div className='showNavigation'>
        <div>
          <Link to={`/cakes`}>
            <button className='cake_show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/cakes/${cake.id}/edit`}>
            <button className='cake_show_button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='cake_show_button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
