import { useState, useEffect } from 'react';
import Cake from './Cake';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })



export default function Cakes({setItem}) {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/cakes`)
      .then((res) => {
        setCakes(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cakes]);


  return (
    <div className='cakes'>
      {/* <h1 className='title-cakes'>Tartas</h1> */}
      <section className='all-cakes'>
        {cakes?.map((cake) => {
          return <Cake key={cake.id} setItem={setItem} cake={cake} formatter={formatter}/>;
        })}
      </section>
      <br />
     
    </div>
  );
}
