import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import gluten from './assets/gluten.png'
import eggs from './assets/eggs.png'
import milk from './assets/milk.png'
import treenuts from './assets/treenuts.png'
import thc from './assets/thc.png'


const API = process.env.REACT_APP_API_URL;

export default function BreadDetails() {
  const [bread, setBreads] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  
  const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })


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
    <div className='bread-show'>
         <div className='breadinfo'>
        <h2 className='show_name_bread'>
         {bread.name}
      </h2>
      <hr></hr>
      <h3 className='price-breaddetails'>
      {formatter.format(bread.price)}
      </h3>
      <p className='breadshows_p'>
        {bread.description}
      </p>
      <div>
      <img className='contains' style={{ width: '175px', height: '165px' }}d src={eggs} alt=""></img>
      <img className='contains' style={{ width: '175px', height: '165px' }}d src={gluten} alt=""></img>
      <img className='contains' 
      style={{ width: '175px', height: '165px' }}dsrc={milk} alt=""></img>
      <img className='contains' style={{ width: '175px', height: '165px' }}d src={treenuts} alt=""></img>
     
      </div>
      </div>
      <div className='bread-image'>
      <img className='details_bread' alt=''  style={{ width: '300px', height: '300px' }} src={bread.image}></img>
      </div>
      <div className='show_navbread'>
        <div>
          <Link to={`/breads`}>
            <button className='bread_show_button'>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/breads/${bread.id}/edit`}>
            <button className='bread_show_button'>Edit</button>
          </Link>
        </div>
        <div>
          <button className='bread_show_button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
