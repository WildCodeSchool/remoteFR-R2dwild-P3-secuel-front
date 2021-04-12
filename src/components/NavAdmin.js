import { NavLink, Route, Switch } from 'react-router-dom'
import Admin from '../screen/Admin'
import FormAdminMedicalEvent from '../screen/FormAdminMedicalEvent'
import FormAdminAccount from '../screen/FormAdminAccount'
import FormAdminHealthInsurance from '../screen/FormAdminHealthInsurance'
import FormAdminInsured from '../screen/FormAdminInsured'
import FormAdminNotifications from '../screen/FormAdminNotifications'
import FormAdminNotifInsured from '../screen/FormAdminNotifInsured'
import FormAdminPros from '../screen/FormAdminPros'
import FormAdminProSpe from '../screen/FormAdminProSpe'
import FormAdminRefund from '../screen/FormAdminRefund'
import FormAdminSpeciality from '../screen/FormAdminSpeciality'

import './NavAdmin.css'

const NavAdmin = () => {
  return (
    <>
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
              Création d&apos;un professionnel
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
      <div className='appAdmin'>
        <Switch>
          <Route exact path='/admin' component={Admin} />
          <Route path='/admin/Form' component={FormAdminAccount} />
          <Route
            path='/admin/FormAdminHealthInsurance'
            component={FormAdminHealthInsurance}
          />
          <Route path='/admin/FormAdminInsured' component={FormAdminInsured} />
          <Route
            path='/admin/FormAdminMedicalEvent '
            component={FormAdminMedicalEvent}
          />
          <Route
            path='/admin/FormAdminNotifications'
            component={FormAdminNotifications}
          />
          <Route
            path='/admin/FormAdminNotifInsured'
            component={FormAdminNotifInsured}
          />
          <Route path='/admin/FormAdminPros' component={FormAdminPros} />
          <Route path='/admin/FormAdminProSpe' component={FormAdminProSpe} />
          <Route path='/admin/FormAdminRefund' component={FormAdminRefund} />
          <Route
            path='/admin/FormAdminSpeciality'
            component={FormAdminSpeciality}
          />
        </Switch>
      </div>
    </>
  )
}

export default NavAdmin
