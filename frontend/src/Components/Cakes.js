import { useState, useEffect } from 'react';
import Cake from './Cake';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Cakes() {
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
      <h1 className='title-cakes'>cakes</h1>
      <section className='all-cakes'>
        {cakes?.map((cake) => {
          return <Cake key={cake.id} cake={cake} />;
        })}
      </section>
      <br />
    </div>
  );
}
