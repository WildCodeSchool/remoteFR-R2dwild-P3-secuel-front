import './NavAdmin.css'

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
            Création d'un compte
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminHealthInsurance'
            className='adminLink'
            activeClassName='selected'
          >
            création d'un institut d'assurance
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminInsured'
            className='adminLink'
            activeClassName='selected'
          >
            création d'Assuré -e-s
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminMedicalEvent '
            className='adminLink'
            activeClassName='selected'
          >
            création d'un acte médical
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminNotifications'
            className='adminLink'
            activeClassName='selected'
          >
            création de Notifications
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
            création d'un professionnels
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
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminRefund'
            className='adminLink'
            activeClassName='selected'
          >
            création d'un remboursement
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavAdmin
