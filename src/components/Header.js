import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import './Header.css'

import logo_elan from '../data/images/logo_elan.png'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/home'>
        <img src={logo_elan} alt='logo' className='logo' />
      </Link>
      <div className='navIcon'>
        <NavLink to='/message' className='iconBtn' activeClassName='selected'>
          Messages
        </NavLink>
        <NavLink
          to='/notification'
          className='iconBtn'
          activeClassName='selected'
        >
          Notifications
        </NavLink>
        <NavLink to='/analyse' className='iconBtn' activeClassName='selected'>
          Analyse
        </NavLink>
        <NavLink to='/params' className='iconBtn' activeClassName='selected'>
          Paramètres
        </NavLink>
        <NavLink to='/admin' className='iconBtn' activeClassName='selected'>
          Administration
        </NavLink>
      </div>
    </div>
  )
}

export default Header
