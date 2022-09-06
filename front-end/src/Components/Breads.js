import { useState, useEffect } from 'react';
import Bread from './Bread';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })

 

export default function Breads({setItem}) {
  const [breads, setBreads] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/breads`)
      .then((res) => {
        setBreads(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [breads]);
 

  return (
    <div className='breads'>
      {/* <h1 className='title-breads'>Tartas</h1> */}
      <section className='all-breads'>
        {breads?.map((bread) => {
          return <Bread key={bread.id} setItem={setItem} bread={bread} formatter={formatter}/>;
        })}
      </section>
      <br />
     
    </div>
  );
}
