import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='messageWelcome'>
      <h2 id='welcomeElan'>Bienvenue sur Elan</h2>
      <h1 id='bonjourElan'>
        Bonjour Jean, <br /> Ravis de vous (re)voir !
      </h1>
      <div id='vosRemboursement'>Vos Remboursements</div>
    </div>
  )
}

export default Welcome
