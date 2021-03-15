import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import logo_elan from '../data/images/logo_elan.png'
import user from '../data/images/user.svg'
import userGreen from '../data/images/userGreen.svg'

const Header = () => {
  const [bgPlus, setbgPlus] = useState(true)
  const handleClick = () => {
    setbgPlus(!bgPlus)
  }
  const [bgUser, setbgUser] = useState(true)
  const handleUser = () => {
    setbgUser(!bgUser)
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo_elan} alt='logo' className='logo' />
      </Link>
      {/* <div className='plus' onClick={handleClick} style={{backgroundColor:`${ bgPlus ? 'blue' : 'grey'}`}>+</div> */}
      <div className='userField'>
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
      </div>
    </div>
  )
}

export default Header
