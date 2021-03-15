import Analyse from './screen/Analyse'
import CreateUser from './screen/CreateUser'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screen/Home'
import Message from './screen/Message'
import Notification from './screen/Notification'
import Params from './screen/Params'

import { Switch, Route, Link } from 'react-router-dom'

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
      </Switch>
      <Link to='/message' className='bouton'>
        Messages
      </Link>
      <Link to='/notification' className='bouton'>
        Notifications
      </Link>
      <Link to='/analyse' className='bouton'>
        Analyse
      </Link>
      <Link to='/params' className='bouton'>
        Paramètres
      </Link>
      <Footer />
    </div>
  )
}

export default App
