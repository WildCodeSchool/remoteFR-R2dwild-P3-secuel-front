import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.css'
import logo_elan from '../data/images/logo_elan.png'

const Header = () => {
  // const [bgPlus, setbgPlus] = useState(true)
  // const handleClick = () => {
  //   setbgPlus(!bgPlus)
  // }
  // const [bgUser, setbgUser] = useState(true)
  // const handleUser = () => {
  //   setbgUser(!bgUser)
  // }
  return (
    <div className='header'>
      <div className='navicon'>
        <Link to='/'>
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
      </div>
      {/* <div className='plus' onClick={handleClick} style={{backgroundColor:`${ bgPlus ? 'blue' : 'grey'}`}>+</div> */}
      {/* <div className='userField'>
        <Link
          to='/CreateUser'
          className='plus'
          onClick={handleClick}
          style={{ color: `${bgPlus ? 'white' : 'grey'}` }}
        >
          +
        </Link>
        <img
          src={user}
          alt='logoUser'
          className='logoUser'
          onClick={handleUser}
          style={{ borderBottom: `${bgUser ? '2px solid white' : 'none'}` }}
        />
        <img src={userGreen} alt='logoUser' className='logoUser' />
      </div> */}
    </div>
  )
}

export default Header
