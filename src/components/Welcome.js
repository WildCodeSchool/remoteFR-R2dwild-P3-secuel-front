import { useState } from 'react'
import Calendrier from './Calendrier.js'

import './Welcome.css'

import whiteCalendar from '../data/images/whiteCalendar.png'

const Welcome = () => {
  const [showCal, setShowCal] = useState(true)
  return (
    <div className='messageWelcome'>
      <h2 id='welcomeElan'>Bienvenue sur Elan</h2>
      <h1 id='bonjourElan'>
        Bonjour Jean, <br /> Ravis de vous (re)voir !
      </h1>
      <div id='vosRemboursement'>
        <div>Vos Remboursements</div>
        <img
          src={whiteCalendar}
          id='whiteCal'
          onClick={() => setShowCal(!showCal)}
        />
      </div>
      {showCal ? <Calendrier /> : null}
    </div>
  )
}

export default Welcome
