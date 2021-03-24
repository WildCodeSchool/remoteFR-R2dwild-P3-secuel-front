import Admin from './screen/Admin'
import FormAdminMedicalEvent from './screen/FormAdminMedicalEvent'
import Analyse from './screen/Analyse'
import CreateUser from './screen/CreateUser'
import DetailEvent from './components/DetailEvent'
import Header from './components/Header'
import Home from './screen/Home'
import Message from './screen/Message'
import Notification from './screen/Notification'
import Params from './screen/Params'
import { Switch, Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/CreateUser' component={CreateUser} />
        <Route path='/message' component={Message} />
        <Route path='/notification' component={Notification} />
        <Route path='/analyse' component={Analyse} />
        <Route path='/params' component={Params} />
        <Route path='/event/:id' component={DetailEvent} />
        <Route exact path='/admin' component={Admin} />
        <Route path='/admin/medicalevent' component={FormAdminMedicalEvent} />
      </Switch>
    </div>
  )
}

export default App
