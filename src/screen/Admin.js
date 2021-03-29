import NavAdmin from '../components/NavAdmin'
import Form from './Form'
import FormAdminHealthInsurance from './FormAdminHealthInsurance'
import FormAdminInsured from './FormAdminInsured'
import FormAdminMedicalEvent from './FormAdminMedicalEvent'
import FormAdminNotifications from './FormAdminNotifications'
import FormAdminNotifInsured from './FormAdminNotifInsured'
import FormAdminPros from './FormAdminPros'
import FormAdminProSpe from './FormAdminProSpe'
import FormAdminRefund from './FormAdminRefund'
import FormAdminSpeciality from './FormAdminSpeciality'
import { Switch, Route, withRouter } from 'react-router-dom'

const Admin = withRouter(({ location }) => {
  return (
    <div className='Admin'>
      <p>Hello admin</p>
      <Switch>
        <Route path='/Form' component={Form} />
        
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
  )
})
export default Admin
