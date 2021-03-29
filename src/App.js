import Admin from './screen/Admin'
import NavAdmin from './components/NavAdmin'
import Form from './screen/Form'
import FormAdminMedicalEvent from './screen/FormAdminMedicalEvent'
import FormAdminHealthInsurance from './screen/FormAdminHealthInsurance'
import FormAdminInsured from './screen/FormAdminInsured'
import FormAdminNotifications from './screen/FormAdminNotifications'
import FormAdminNotifInsured from './screen/FormAdminNotifInsured'
import FormAdminPros from './screen/FormAdminPros'
import FormAdminProSpe from './screen/FormAdminProSpe'
import FormAdminRefund from './screen/FormAdminRefund'
import FormAdminSpeciality from './screen/FormAdminSpeciality'

import Analyse from './screen/Analyse'
import CreateUser from './screen/CreateUser'
import DetailEvent from './components/DetailEvent'
import Header from './components/Header'
import Home from './screen/Home'
import Message from './screen/Message'
import Notification from './screen/Notification'
import Params from './screen/Params'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css'
import Intro from './screen/Intro'

const App = withRouter(({ location }) => {
  return (
    <div className='App'>
      {location.pathname !== '/' &&
        location.pathname !== '/subscribe' &&
        location.pathname !== '/admin' && <Header />}
      {location.pathname.includes('/admin') && <NavAdmin />}
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route path='/subscribe' component={CreateUser} />
        <Route path='/home' component={Home} />
        <Route path='/message' component={Message} />
        <Route path='/notification' component={Notification} />
        <Route path='/analyse' component={Analyse} />
        <Route path='/params' component={Params} />
        <Route path='/event/:id' component={DetailEvent} />
        <Route path='/admin/medicalevent' component={FormAdminMedicalEvent} />
        <Route path='/admin/Form' component={Form} />

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

export default App
