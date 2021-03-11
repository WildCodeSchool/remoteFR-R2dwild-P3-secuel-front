import React from 'react'
// import { Link } from 'react-router-dom'

// import CreateUser from './components/CreateUser'

import './Header.css'
import logo_elan from '../data/images/logo_elan.png'

const Header = () => {
  // const [bgPlus, setPlus] = useState(true)
  // const handleClick = () => {
  //   setBgPlus(!bgPlus)
  // }
  return (
    <div className='header'>
      <img src={logo_elan} alt='logo' className='logo' />
      <button className='plus'>+</button>
      {/* <div className='plus' onClick={handleClick} style={{backgroundColor:`${ bgPlus ? 'blue' : 'grey'}`}>+</div> */}
    </div>
  )
}

export default Header
