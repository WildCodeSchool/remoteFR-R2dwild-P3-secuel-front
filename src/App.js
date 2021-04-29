import { useState } from 'react'
import AddMutu from './screen/AddMutu'
import AddSecu from './screen/AddSecu'
import AdminModifAccount from './screen/AdminModifAccount'
import AdminModifHealthIns from './screen/AdminModifHealthIns'
import AdminModifInsured from './screen/AdminModifInsured'
import AdminModifMedical from './screen/AdminModifMedical'
import AdminModifNotif from './screen/AdminModifNotif'
import AdminModifNotifIns from './screen/AdminModifNotifIns'
import AdminModifPro from './screen/AdminModifPro'
import AdminModifProSpe from './screen/AdminModifProSpe'
import AdminModifRefund from './screen/AdminModifRefund'
import AdminModifSpe from './screen/AdminModifSpe'
import Analyse from './screen/Analyse'
import Congratulation from './screen/Congratulation'
import DetailEvent from './components/DetailEvent'
import Form from './screen/Form'
import Header from './components/Header'
import Home from './screen/Home'
import Intro from './screen/Intro'
import Message from './screen/Message'
import NavAdmin from './components/NavAdmin'
import Notification from './screen/Notification'
import Params from './screen/Params'
import { Route, Switch, withRouter } from 'react-router-dom'
import Thanks from './screen/Thanks'
import ValidateSecu from './screen/ValidateSecu'
import Waiting from './screen/Waiting'

import './App.css'

const App = withRouter(({ location }) => {
  const [numMutu, setNumMutu] = useState('')
  const [numSecu, setNumSecu] = useState('')
  const [visitor, setVisitor] = useState('')

  return (
    <div className='App'>
      {location.pathname !== '/' &&
        location.pathname !== '/addmutu' &&
        location.pathname !== '/addsecu' &&
        location.pathname !== '/subscribe' &&
        location.pathname !== '/thanks' &&
        location.pathname !== '/validatesecu' &&
        location.pathname !== '/waiting' && <Header />}

      <Switch>
        <Route
          exact
          path='/'
          render={props => <Intro {...props} setVisitor={setVisitor} />}
        />
        <Route
          path='/thanks'
          render={props => <Thanks {...props} visitor={visitor} />}
        />
        <Route
          path='/subscribe'
          render={props => <Form {...props} setVisitor={setVisitor} />}
        />
        <Route
          path='/addmutu'
          render={props => (
            <AddMutu {...props} visitor={visitor} setNumMutu={setNumMutu} />
          )}
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
            <Congratulation
              {...props}
              visitor={visitor}
              numSecu={numSecu}
              numMutu={numMutu}
            />
          )}
        />
        <Route path='/analyse' component={Analyse} />
        <Route path='/event/:id' component={DetailEvent} />
        <Route
          path='/home'
          render={props => <Home {...props} visitor={visitor} />}
        />
        <Route path='/message' component={Message} />
        <Route path='/notification' component={Notification} />
        <Route path='/params' component={Params} />
        <Route path='/validatesecu' component={ValidateSecu} />
        <Route path='/waiting' component={Waiting} />
        <Route path='/event/:id' component={DetailEvent} />
        <Route path='/admin' component={NavAdmin} />
        <Route path='/adminmodifinsured/:id' component={AdminModifInsured} />
        <Route path='/adminmodifmedical/:id' component={AdminModifMedical} />
        <Route path='/adminmodifaccount/:id' component={AdminModifAccount} />
        <Route path='/adminmodifpro/:id' component={AdminModifPro} />
        <Route path='/adminmodifnotifins/:id' component={AdminModifNotifIns} />
        <Route path='/adminmodifrefund/:id' component={AdminModifRefund} />
        <Route path='/adminmodifspe/:id' component={AdminModifSpe} />
        <Route path='/adminmodifprospe/:id' component={AdminModifProSpe} />
        <Route path='/adminmodifnotif/:id' component={AdminModifNotif} />
        <Route
          path='/adminModifHealthIns/:id'
          component={AdminModifHealthIns}
        />
      </Switch>
    </div>
  )
})

export default App
