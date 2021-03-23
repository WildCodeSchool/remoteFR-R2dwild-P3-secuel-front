import { NavLink } from 'react-router-dom'

const NavAdmin = () => {
  return (
    <div className='navadmin'>
      <ul>
        <li>
          <NavLink
            to='/message'
            className='adminlink'
            activeClassName='selected'
          >
            Gérer assuré
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/notification'
            className='adminlink'
            activeClassName='selected'
          >
            Gérer Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/analyse'
            className='adminlink'
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
