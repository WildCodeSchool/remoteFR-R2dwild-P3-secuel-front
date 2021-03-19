import { NavLink } from 'react-router-dom'
import React from 'react'

import './Navbar.css'

import iconMessage from '../data/images/chat-bubble.png'
import iconCloche from '../data/images/bell.png'
import iconAnalyse from '../data/images/analysis.png'
import iconParametre from '../data/images/parametres.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='navicon'>
        <NavLink to='/message' className='iconBtn' activeClassName='selected'>
          <img src={iconMessage} id='iconMessage' className='iconNavbar' />
          Messages
        </NavLink>
        <NavLink
          to='/notification'
          className='iconBtn'
          activeClassName='selected'
        >
          <img src={iconCloche} id='iconCloche' className='iconNavbar' />
          Notifications
        </NavLink>
        <NavLink to='/analyse' className='iconBtn' activeClassName='selected'>
          <img src={iconAnalyse} id='iconAnalyse' className='iconNavbar' />
          Analyse
        </NavLink>
        <NavLink to='/params' className='iconBtn' activeClassName='selected'>
          <img src={iconParametre} id='iconParametre' className='iconNavbar' />
          Paramètres
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
