import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// import CreateUser from './components/CreateUser'

import './Header.css'
import logo_elan from '../data/images/logo_elan.png'
import user from '../data/images/user.svg'
import userGreen from '../data/images/userGreen.svg'

const Header = () => {
  const [bgPlus, setbgPlus] = useState(true)
  const handleClick = () => {
    setbgPlus(!bgPlus)
  }
  return (
    <div className='header'>
      <img src={logo_elan} alt='logo' className='logo' />
      {/* <div className='plus' onClick={handleClick} style={{backgroundColor:`${ bgPlus ? 'blue' : 'grey'}`}>+</div> */}
      <div className='userField'>
        <button
          className='plus'
          onClick={handleClick}
          style={{ backgroundColor: `${bgPlus ? 'blue' : 'grey'}` }}
        >
          +
        </button>
        <img src={user} alt='logoUser' className='logoUser' />
        <img src={userGreen} alt='logoUser' className='logoUser' />
      </div>
    </div>
  )
}

export default Header
