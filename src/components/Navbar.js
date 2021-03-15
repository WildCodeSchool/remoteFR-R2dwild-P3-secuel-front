import './Navbar.css'
import iconMessage from '../data/images/chat-bubble.png'
import iconCloche from '../data/images/bell.png'
import iconAnalyse from '../data/images/analysis.png'
import iconParametre from '../data/images/parametres.png'
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

const Navbar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return <div className='Navbar'>
    <div className='navicon'>
    <button id='messageBtn' className='iconBtn'><img src={iconMessage} id='iconMessage' className='iconNavbar'/>Messages</button>
    <button className='iconBtn'><img src={iconCloche} id='iconCloche' className='iconNavbar'/>
    Notification</button>
    <button className='iconBtn'><img src={iconAnalyse} id='iconAnalyse' className='iconNavbar'/>
    Analyses Dépenses</button>
    <button className='iconBtn'><img src={iconParametre} id='iconParametre' className='iconNavbar'/>Réglages</button>
    </div>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  </div>
}

export default Navbar
