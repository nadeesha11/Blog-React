import React from 'react'
import './Sidebar.css';
import me from './me.JPG'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
    <div className="sidebaritem">
    <span className='sidebartitle'>ABOUT ME</span>
    <img  src={me} alt="" /><br />
    <p class="sidebar-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis blanditiis amet eaque, assumenda nulla, est harum dolore qui voluptatum, dolorem exercitationem dolores. </p>
        
    </div>
    <div className="sidebaritem">
    <span className='sidebartitle'>CATEGORIES</span>
    <ul   className="sidebarlist">
    <li className="sidebar-list-item">Life</li>
    <li className="sidebar-list-item">Music</li> 
    <li className="sidebar-list-item">Film</li>
    <li className="sidebar-list-item">Fashion</li>   
    </ul>

    </div>

        
    </div>
  )
}
