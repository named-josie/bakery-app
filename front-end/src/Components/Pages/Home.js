import React from 'react';
import hour2 from '../assets/hours2.png';
import '../Styles/home.css';

export default function Home() {
  return (
    <div>
      <h1 className='welcome'>Bienviendos A Bonifacio</h1>
      <div id='container'>
        
        <div class='photobanner'>
          <img class='first' src='https://panypasteles.com/wp-content/uploads/2020/09/carrito-pasteltiso.jpg' alt='' />
          <img src='https://bonifaciobakery.netlify.app/images/KitKat_cake.png' alt='' />
          <img src='https://bonifaciobakery.netlify.app/images/redVelvetCAKE.png' alt='' />
          <img src='https://bonifaciobakery.netlify.app/images/mil.png' alt='' />
          <img src='https://bonifaciobakery.netlify.app/images/frambu-mouse-portada.png' alt='' />
          <img src='https://bonifaciobakery.netlify.app/images/tarta-americana.png' alt='' />
          <img src='https://panypasteles.com/wp-content/uploads/2020/10/desayunos-centro.jpg' alt='' />
        </div>
      </div>
      <div className='home'>
        <div className='hours'>
          <img
            className='homedays'
            style={{ width: '400px', height: '600px' }}
            src={hour2}
            alt='d'
          ></img>
        </div>

        <div className='rosecake'>
          <img
            className='rosette'
            style={{ width: '750px', height: '700px' }}
            src='http://blendconcepts.com/wp-content/uploads/2016/04/Pan_y_Pasteles_Madrid-2.jpg'
            alt='c'
          ></img>
        </div>
      </div>
    </div>
  );
}
