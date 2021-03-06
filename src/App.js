import { Switch, Route, withRouter } from 'react-router-dom'
import { useState } from 'react'

import AddSecu from './screen/AddSecu'
import Analyse from './screen/Analyse'
import Congratulation from './screen/Congratulation'
import DetailEvent from './components/DetailEvent'
import Form from './screen/Form'
import FormAdminAccount from './screen/FormAdminAccount'
import FormAdminHealthInsurance from './screen/FormAdminHealthInsurance'
import FormAdminInsured from './screen/FormAdminInsured'
import FormAdminMedicalEvent from './screen/FormAdminMedicalEvent'
import FormAdminNotifications from './screen/FormAdminNotifications'
import FormAdminNotifInsured from './screen/FormAdminNotifInsured'
import FormAdminPros from './screen/FormAdminPros'
import FormAdminProSpe from './screen/FormAdminProSpe'
import FormAdminRefund from './screen/FormAdminRefund'
import FormAdminSpeciality from './screen/FormAdminSpeciality'
import Header from './components/Header'
import Home from './screen/Home'
import Intro from './screen/Intro'
import Message from './screen/Message'
import NavAdmin from './components/NavAdmin'
import Notification from './screen/Notification'
import Params from './screen/Params'
import Thanks from './screen/Thanks'
import ValidateSecu from './screen/ValidateSecu'
import Waiting from './screen/Waiting'

import './App.css'

const App = withRouter(({ location }) => {
  const [visitor, setVisitor] = useState('')
  const [numSecu, setNumSecu] = useState('')
  return (
    <div className='App'>
      {location.pathname !== '/' &&
        location.pathname !== '/addsecu' &&
        location.pathname !== '/waiting' &&
        location.pathname !== '/validatesecu' &&
        location.pathname !== '/thanks' &&
        location.pathname !== '/subscribe' && <Header />}
      {location.pathname.includes('/admin') && <NavAdmin />}
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route
          path='/thanks'
          render={props => <Thanks {...props} visitor={visitor} />}
        />
        <Route
          path='/subscribe'
          render={props => <Form {...props} setVisitor={setVisitor} />}
        />
        <Route
          path='/addsecu'
          render={props => (
            <AddSecu {...props} visitor={visitor} setSecu={setNumSecu} />
          )}
        />
        <Route
          path='/congratulation'
          render={props => (
            <Congratulation {...props} visitor={visitor} numSecu={numSecu} />
          )}
        />
        <Route path='/waiting' component={Waiting} />
        <Route path='/validatesecu' component={ValidateSecu} />
        <Route path='/home' component={Home} />
        <Route path='/message' component={Message} />
        <Route path='/notification' component={Notification} />
        <Route path='/analyse' component={Analyse} />
        <Route path='/params' component={Params} />
        <Route path='/event/:id' component={DetailEvent} />
        <Route path='/admin/medicalevent' component={FormAdminMedicalEvent} />
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
  )
})

export default App
