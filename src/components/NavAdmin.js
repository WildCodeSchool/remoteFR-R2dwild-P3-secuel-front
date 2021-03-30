import { NavLink } from 'react-router-dom'

const NavAdmin = () => {
  return (
    <div className='navAdmin'>
      <ul>
        <li>
          <NavLink
            to='/admin/Form'
            className='adminLink'
            activeClassName='selected'
          >
            Compte
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminHealthInsurance'
            className='adminLink'
            activeClassName='selected'
          >
            Assurances
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminInsured'
            className='adminLink'
            activeClassName='selected'
          >
            Assuré -e-s
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminMedicalEvent '
            className='adminLink'
            activeClassName='selected'
          >
            Acte médical
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminNotifications'
            className='adminLink'
            activeClassName='selected'
          >
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminNotifInsured'
            className='adminLink'
            activeClassName='selected'
          >
            Notifications par assuré-e
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminPros'
            className='adminLink'
            activeClassName='selected'
          >
            Professionnels
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminProSpe'
            className='adminLink'
            activeClassName='selected'
          >
            Spécialité par Professionnel
          </NavLink>
        </li>{' '}
        <li>
          <NavLink
            to='/admin/FormAdminRefund'
            className='adminLink'
            activeClassName='selected'
          >
            Remboursement
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminSpeciality'
            className='adminLink'
            activeClassName='selected'
          >
            Specialite 
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavAdmin
