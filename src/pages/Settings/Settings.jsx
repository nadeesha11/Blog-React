import React from 'react'
import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import pic from '../../components/Header/2.jpg'

export default function Settings() {
  return (
    <div className='settings'>
         <div className="settings-wrapper">
          <div className="settings-title">

          <span className='settings-update-title'>
              update account
          </span>
          <span className='settings-delete-title'>
            delete account
          </span>


          </div>


          <form className='settings-form'>
          <label  className='profile-picture'>profile picture</label>
        <div className="settingspp">
        
            <img src={pic} alt="" />
           
        <label htmlFor="file-input">
        
        <i className=" settings-pp-icon fa-solid fa-wrench"></i>
        </label>
        <input type="file" id='file-input' style={{display:"none"}}/>

        </div>
        <label>Username</label>
        <input type="text" placeholder='ex:nadeesha123' />

        <label>Email</label>
        <input type="text" placeholder=' ex:jayathilaka221b@gmail.com' />

        <label>Password</label>
        <input type="Password"  />

        <button className="settings-submit">
          Update
        </button>
    

          </form>

         </div>
        
        
         <Sidebar></Sidebar>
        </div>
  )
}
