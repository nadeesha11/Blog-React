import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'
import Posts from '../../components/posts/Posts'

export default function Home() {
  return (

    <div>
    <Header></Header> 
      
    <div className='home'>
        
    <Posts></Posts>
    <Sidebar></Sidebar>

    </div>
    </div>
  )
}
