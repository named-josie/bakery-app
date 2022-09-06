import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/error.css'

export default function FourOFour() {
  return (
    <div className='error1'>
      <h1 className='error-title'>Oh No!!</h1>
      <img className='error' src='https://i.imgur.com/sHCJf8j.gif' alt='404'></img>
      <p className='p-error'>Vale, Pues Parsece que estamos perdidos.</p>
      <p className='p-error'>Por Favor dale <Link to="/">Aqui</Link> devolver.</p>
    </div>
  )
}