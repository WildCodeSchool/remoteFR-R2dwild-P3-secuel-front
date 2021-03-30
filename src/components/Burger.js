import { Link } from 'react-router-dom'
import React from 'react'

import './Burger.css'

const Burger = () => {
  return (
    <div className='burger'>
      <button className='navbarBurger'>
        <span className='burgerBar'></span>
      </button>
      <ul className='pagesBurger'>
        <li className='liLink'>
          <Link to='/home' className='navlink'>
            Home
          </Link>
        </li>
        <li className='liLink'>
          <Link to='/message' className='navlink'>
            Messages
          </Link>
        </li>
        <li className='liLink'>
          <Link to='/notification' className='navlink'>
            Notifications
          </Link>
        </li>
        <li className='liLink'>
          <Link to='/analyse' className='navlink'>
            Analyse
          </Link>
        </li>
        <li className='liLink'>
          <Link to='/params' className='navlink'>
            Paramètres
          </Link>
        </li>
        <li className='liLink'>
          <Link to='/admin' className='navlink'>
            Administration
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Burger
