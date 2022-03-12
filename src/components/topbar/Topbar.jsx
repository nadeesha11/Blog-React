import React from 'react'
import   './Topbar.css'
import book from './search.jpg'
import { Link } from 'react-router-dom'

export default  function Topbar() {
  return (
    <div className='top'>
        <div className="left">
        <i class="social fa-brands fa-facebook"></i>
        <i class="social fa-brands fa-twitter"></i>
        <i class="social fa-brands fa-instagram"></i>
        <i class="social fa-brands fa-vine"></i>
        </div>

        <div className="center">
           <ul className="list-center">
               
           <li className="list-celter-item">
             <Link to="/" style={{textDecoration:"none", color:"black"}} >Home </Link>
                 </li>

                 <li className="list-celter-item">
             <Link to="/" style={{textDecoration:"none", color:"black"}} >About </Link>
                 </li>

            <li className="list-celter-item">
             <Link to="/" style={{textDecoration:"none", color:"black"}} >Contact </Link>
                 </li>


              <li className="list-celter-item">
             <Link to="/Write" style={{textDecoration:"none", color:"black"}} >Write </Link>
                 </li>


              <li className="list-celter-item">
             <Link to="/" style={{textDecoration:"none", color:"black"}} >Logout </Link>
                 </li>                   




           {/* <li className="list-celter-item">ABOUT     </li>
           <li className="list-celter-item">CONTACT     </li>
           <li className="list-celter-item">WRITE     </li>
           <li className="list-celter-item">LOGOUT     </li>    */}
              

            </ul> 
            
        </div>


        <div className="right">
          <img className='topimage' src= {book}  alt="topimage" />
          <i class=" top-search fa-solid fa-magnifying-glass"></i>
            
        </div>
        
    </div>
  )
}



