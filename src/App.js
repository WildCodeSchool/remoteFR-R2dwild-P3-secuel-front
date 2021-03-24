import Admin from './screen/Admin'
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
      {location.pathname !== '/' && location.pathname !== '/subscribe' && (
        <Header />
      )}
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route path='/subscribe' component={CreateUser} />
        <Route path='/home' component={Home} />
        <Route path='/message' component={Message} />
        <Route path='/notification' component={Notification} />
        <Route path='/analyse' component={Analyse} />
        <Route path='/params' component={Params} />
        <Route path='/event/:id' component={DetailEvent} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </div>
  )
})

export default App
