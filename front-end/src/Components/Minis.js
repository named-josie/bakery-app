import { useState, useEffect } from 'react';
import Mini from './Mini';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })

 

export default function Minis({setItem}) {
  const [minis, setMinis] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/minis`)
      .then((res) => {
        setMinis(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [minis]);
 


  return (
    <div className='minis'>
      <section className='all-minis'>
        {minis?.map((mini) => {
          return <Mini key={mini.id} setItem={setItem} mini={mini} formatter={formatter}/>;
        })}
      </section>
      <br />
     
    </div>
  );
}
