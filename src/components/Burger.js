import { NavLink } from 'react-router-dom'

import './Burger.css'

const Burger = () => {
  return (
    <div className='burger'>
      <ul className='pagesBurger'>
        <li className='liLink'>
          <NavLink to='/home' className='navlink' activeClassName='selected'>
            Home
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink to='/message' className='navlink' activeClassName='selected'>
            Messages
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/notification'
            className='navlink'
            activeClassName='selected'
          >
            Notifications
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink to='/analyse' className='navlink' activeClassName='selected'>
            Analyse
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink to='/params' className='navlink' activeClassName='selected'>
            Paramètres
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink to='/admin' className='navlink' activeClassName='selected'>
            Administration
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Burger
