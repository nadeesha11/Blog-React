import React from 'react'
import './Header.css'; 
import pic from './2.jpg';

export default function Header() {
  return (
    <div className='Header'>
    <div className="header-title">
      
      <p className='lifie'>LIFIE</p>
      <img className='header-img' src={pic} alt="" />
      
    </div>
   
    </div>
  )
}

