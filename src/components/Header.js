import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Burger from './Burger'

import logo_elan from '../data/images/logo_elan.png'

import './Header.css'

const Header = () => {
  const [showBurger, setShowBurger] = useState(false)

  return (
    <>
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
      <div id='menuBuger'>
        <button
          className='navbarBurger'
          onClick={() => setShowBurger(!showBurger)}
          id='menuBurger'
        >
          <div id='menu-burger'>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
        </button>
        {showBurger ? <Burger /> : null}
      </div>
    </>
  )
}

export default Header
