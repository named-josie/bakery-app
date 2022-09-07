import React from 'react'
import '../Styles/about.css'
import hour2 from '../assets/hours2.png';
import logo from '../assets/logo.png'
export default function About() {
  return (
    <div className='about'>
     <div  className='logo'><img className='logoloco' src={logo} alt=""></img>
      <h1 className='about-title'>Quienes Somos</h1>
      </div>
      <p className='para'>Mi abuela comenzó esa tradición de enseñar a sus hijas hacer pan, básicamente solo era pan, hasta que un día mi madre también comenzó hacerlo , y en un intento de buscar algo nuevo, para el mercado  hizo un pequeño experimento que se convirtió en un rico pastel de vainilla, y así ha continuado el legado con la repostería, ahora me toca a mi seguir los pasos de mis ante pasadas y es momento de innovar y crear nuevas recetas de pasteles deliciosos, para brindarle a las personas la experiencia más dulce y sabrosa de todas. 
       Reposteria Bonifacio, un lugar que viene desde las raíces siendo pequeño en un lugar muy agradable, las personas de mi familia siempre hemos sido trabajadores y que mejor idea para nosotros que emprender con una Reposteria, con dulces y postres que alegran los días, hemos tratado de que todos los postres sean con mucho amor para brindarles al público una dulce experiencia!</p>
      
     
      <div className='hours'>
          <img
            className='homedays'
            style={{ width: '300px', height: '500px' }}
            src={hour2}
            alt='d'
          ></img>
        </div>

        <div className='rosecake'>
          <img
            className='rosette'
            style={{ width: '600px', height: '500px' }}
            src='http://blendconcepts.com/wp-content/uploads/2016/04/Pan_y_Pasteles_Madrid-2.jpg'
            alt='c'
          ></img>
        </div>
        <br></br>

        
    </div>
  )
}
