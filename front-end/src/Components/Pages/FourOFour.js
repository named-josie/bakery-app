import React from 'react'
import { Link } from 'react-router-dom'


export default function FourOFour() {
  return (
    <div className='error1'>
      <h1 className='error-title'>OYE!</h1>
      <img className='error' src='https://pa1.narvii.com/7646/ef40072dd3962f4882e2d03a2ab0412befdde5b3r4-480-480_00.gif' alt='404'></img>
      <p className='p-error'>Vale, Pues Parsece que estamos perdidos.</p>
      <p className='p-error'>Por Favor <Link to="/">Aqui</Link> parageresar.</p>
    </div>
  )
}