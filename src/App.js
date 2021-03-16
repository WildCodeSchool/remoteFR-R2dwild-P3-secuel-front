import Analyse from './screen/Analyse'
import CreateUser from './screen/CreateUser'
import DetailEvent from './components/DetailEvent'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './screen/Home'
import Message from './screen/Message'
import Navbar from './components/Navbar'
import Notification from './screen/Notification'
import Params from './screen/Params'

import { Switch, Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/CreateUser' component={CreateUser} />
        <Route path='/message' component={Message} />
        <Route path='/notification' component={Notification} />
        <Route path='/analyse' component={Analyse} />
        <Route path='/params' component={Params} />
        <Route path='/event/:id' component={DetailEvent} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
