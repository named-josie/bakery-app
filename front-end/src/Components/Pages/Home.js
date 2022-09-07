import React from 'react';
import hour2 from '../assets/hours2.png';
import '../Styles/home.css';

export default function Home() {
  return (
    <div>
      <h1 className='welcome'>Bienviendos A Bonifacio</h1>
      <div id='container'>
        
        <div class='photobanner'>
          <img class='first'  style={{ width: '675px', height: '655px' }} src='https://bonifaciobakery.netlify.app/images/carrotcake.png' alt='' />
          <img style={{ width: '675px', height: '655px' }}  src='https://bonifaciobakery.netlify.app/images/KitKat_Cake.png' alt='' />
          <img style={{ width: '675px', height: '655px' }}  src='https://bonifaciobakery.netlify.app/images/oreocake.png' alt='' />
          <img style={{ width: '675px', height: '655px' }}  src='https://bonifaciobakery.netlify.app/images/redvelvet.png' alt='' />
          <img style={{ width: '675px', height: '655px' }}  src='https://bonifaciobakery.netlify.app/images/mil.png' alt='' />
          <img style={{ width: '675px', height: '655px' }}  src='https://bonifaciobakery.netlify.app/images/frambu-mouse-portada.png' alt='' />
          <img style={{ width: '675px', height: '655px' }}  src='https://bonifaciobakery.netlify.app/images/leche.png' alt='' />
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
