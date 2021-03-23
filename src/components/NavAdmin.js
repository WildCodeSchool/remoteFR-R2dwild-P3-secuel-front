import { NavLink } from 'react-router-dom'

const NavAdmin = () => {
  return (
    <div className='navAdmin'>
      <ul>
        <li>
          <NavLink
            to='/message'
            className='adminLink'
            activeClassName='selected'
          >
            Gérer assuré
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/notification'
            className='adminLink'
            activeClassName='selected'
          >
            Gérer Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/analyse'
            className='adminLink'
            activeClassName='selected'
          >
            Gérer acte médical
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavAdmin
