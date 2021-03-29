import { Link, NavLink } from 'react-router-dom'

import logo_elan from '../data/images/logo_elan.png'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='navIcon'>
        <Link to='/home'>
          <img src={logo_elan} alt='logo' className='logo' />
        </Link>
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
