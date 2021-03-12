import React from 'react'
import Home from './screen/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import CreateUser from './screen/CreateUser'

const App = () => {
  return (
    <div>
      <div className='App'>
        <Header />
        <Home />
        <Events />
        <Footer />
      </div>

      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/CreateUser' component={CreateUser} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
