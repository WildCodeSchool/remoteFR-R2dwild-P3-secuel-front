import Admin from './screen/Admin'
import Analyse from './screen/Analyse'
import DetailEvent from './components/DetailEvent'
import Header from './components/Header'
import Home from './screen/Home'
import Intro from './screen/Intro'
import Message from './screen/Message'
import Notification from './screen/Notification'
import Params from './screen/Params'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css'
import Form from './screen/Form'
import Thanks from './screen/Thanks'
import { useState } from 'react'
import AddSecu from './screen/AddSecu'
import Waiting from './screen/Waiting'
import ValidateSecu from './screen/ValidateSecu'
import Congratulation from './screen/Congratulation'

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
        <Route path='/admin' component={Admin} />
        <Route path='/form' component={Form} />
      </Switch>
    </div>
  )
})

export default App
