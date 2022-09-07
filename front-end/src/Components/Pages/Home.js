import React from 'react';

import '../Styles/home.css';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

export default function Home() {
  return (
    
    <div>
      <h1 className='welcome'>Bienviendos A Bonifacio</h1>
      <div>
      <ImageSlider slides={SliderData} />;
      </div>
      <div className='home'>
     
      </div>
      </div>
  );
}
