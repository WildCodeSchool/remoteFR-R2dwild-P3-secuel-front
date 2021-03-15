import React from 'react'
import Home from './screen/Home'

import { Switch, Route } from 'react-router-dom'

import './App.css'

import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import CreateUser from './screen/CreateUser'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Events />
      <Footer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/CreateUser' component={CreateUser} />
      </Switch>
    </div>
  )
}

export default App
