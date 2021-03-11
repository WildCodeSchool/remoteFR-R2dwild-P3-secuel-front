import Home from './screen/Home'

import './App.css'

import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Events />
      <Footer />
    </div>
  )
}

export default App
