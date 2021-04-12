import { NavLink } from 'react-router-dom'

import './Burger.css'

const Burger = show => {
  return (
    <div className='burger'>
      <ul className='pagesBurger'>
        <li className='liLink'>
          <NavLink
            to='/home'
            className='navlink'
            activeClassName='selected1'
            onClick={() => show.setBurger(!show.burger)}
          >
            Home
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/message'
            className='navlink'
            activeClassName='selected1'
            onClick={() => show.setBurger(!show.burger)}
          >
            Messages
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/notification'
            className='navlink'
            activeClassName='selected1'
            onClick={() => show.setBurger(!show.burger)}
          >
            Notifications
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/analyse'
            className='navlink'
            activeClassName='selected1'
            onClick={() => show.setBurger(!show.burger)}
          >
            Analyse
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/params'
            className='navlink'
            activeClassName='selected1'
            onClick={() => show.setBurger(!show.burger)}
          >
            Paramètres
          </NavLink>
        </li>
        <li className='liLink'>
          <NavLink
            to='/admin'
            className='navlink'
            activeClassName='selected1'
            onClick={() => show.setBurger(!show.burger)}
          >
            Administration
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Burger
