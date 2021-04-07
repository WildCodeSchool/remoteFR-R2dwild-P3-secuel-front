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
            Création d&apos;un compte
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminHealthInsurance'
            className='adminLink'
            activeClassName='selected'
          >
            Création d&apos;un institut d&apos;assurance
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminInsured'
            className='adminLink'
            activeClassName='selected'
          >
            Création d&apos;Assuré -e-s
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminMedicalEvent '
            className='adminLink'
            activeClassName='selected'
          >
            Création d&apos;un acte médical
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminNotifications'
            className='adminLink'
            activeClassName='selected'
          >
            Création de Notifications
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
            Création d&apos;un professionnels
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
            to='/admin/FormAdminSpeciality'
            className='adminLink'
            activeClassName='selected'
          >
            Spécialité
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/FormAdminRefund'
            className='adminLink'
            activeClassName='selected'
          >
            Création d&apos;un remboursement
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavAdmin
