import React from 'react'
import './Register.css'


export default function Register() {
  return (
     
    <div className='login'>
        <form  className="login-form">
          
          <span className="login-title">Register</span>

          <label >Username</label>
          <input type="text" placeholder='Enter your Email' />

          <label >Email</label>
          <input type="text" placeholder='Enter your Email' />

          <label >Password</label>
          <input type="Password" placeholder='Enter your Password' />

           <button className='login-button'>Register</button>
        </form>

 
        
    </div>
   
  )
}
