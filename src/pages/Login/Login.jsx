import React from 'react'
import './Login.css'


export default function Login() {
  return (
     
    <div className='login'>
        <form  className="login-form">
          
          <span className="login-title">LOGIN</span>

          <label >Email</label>
          <input type="text" placeholder='Enter your Email' />

          <label >Password</label>
          <input type="Password" placeholder='Enter your Password' />

           <button className='login-button'>Login</button>
        </form>

     <button className='login-register-button'>Register </button>
        
    </div>
   
  )
}
