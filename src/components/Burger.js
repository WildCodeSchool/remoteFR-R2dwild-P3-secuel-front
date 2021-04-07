import { NavLink } from 'react-router-dom'

import './Burger.css'

const Burger = () => {
  return (
    <div className='burger'>
      <ul className='pagesBurger'>
        <li className='liLink'>
          <NavLink to='/home' className='navlink' activeClassName='selected1'>
            Home
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/message'
            className='navlink'
            activeClassName='selected1'
          >
            Messages
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/notification'
            className='navlink'
            activeClassName='selected1'
          >
            Notifications
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/analyse'
            className='navlink'
            activeClassName='selected1'
          >
            Analyse
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink to='/params' className='navlink' activeClassName='selected1'>
            Paramètres
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink to='/admin' className='navlink' activeClassName='selected1'>
            Administration
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Burger
