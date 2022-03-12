import React from 'react'
import './Single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/Singlepost/Singlepost'

export default function Single() {
  return (
    <div className='single'>
        <Singlepost></Singlepost>
        <Sidebar></Sidebar>
    </div>
  )
}
