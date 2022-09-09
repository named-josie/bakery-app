import React from 'react';
import logo4 from '../assets/logo4.png'
import '../Styles/home.css';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

export default function Home() {
  return (
    
    <div>
      <h1 className='welcome'>Bienvenido a la experiencia más dulce de tu vida</h1>
     
      <div className='home'>
      <ImageSlider slides={SliderData} />;
      </div>
      </div>
  );
}
