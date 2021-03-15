import React from 'react'
import Home from './screen/Home'

import { Switch, Route } from 'react-router-dom'

import './App.css'

import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import CreateUser from './screen/CreateUser'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Navbar />
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
