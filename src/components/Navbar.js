import './Navbar.css'
import iconMessage from '../data/images/chat-bubble.png'
import iconCloche from '../data/images/bell.png'
import iconAnalyse from '../data/images/analysis.png'
import iconParametre from '../data/images/parametres.png'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='navicon'>
        <Link to='/message' className='iconBtn'>
          <img src={iconMessage} id='iconMessage' className='iconNavbar' />
          Messages
        </Link>
        <Link to='/notification' className='iconBtn'>
          <img src={iconCloche} id='iconCloche' className='iconNavbar' />
          <span></span>
          Notifications
        </Link>
        <Link to='/analyse' className='iconBtn'>
          <img src={iconAnalyse} id='iconAnalyse' className='iconNavbar' />
          Analyse
        </Link>
        <Link to='/params' className='iconBtn'>
          <img src={iconParametre} id='iconParametre' className='iconNavbar' />
          Paramètres
        </Link>
      </div>
    </div>
  )
}

export default Navbar
