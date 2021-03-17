import { useState } from 'react'

import eventArray from '../data/fakejson/fakedata.json'

import './Events.css'
import MiniEvent from './MiniEvent'
const Events = () => {
  const [hidden1, setHidden1] = useState(true)
  const handleClick1 = () => setHidden1(!hidden1)
  const [hidden2, setHidden2] = useState(true)
  const handleClick2 = () => setHidden2(!hidden2)
  const [hidden3, setHidden3] = useState(true)
  const handleClick3 = () => setHidden3(!hidden3)
  const [hidden4, setHidden4] = useState(true)
  const handleClick4 = () => setHidden4(!hidden4)
  return (
    <div className='events'>
      <div id='insured1' onClick={handleClick1}>
        <h1 className='nomAssure'>Jean Dupont</h1>
        {hidden1 ? (
          <p className='voirActes'>Voir les actes</p>
        ) : (
          eventArray
            .filter(event => event['prénom'] === 'Jean')
            .map(event => (
              <MiniEvent
                acteType={event['Type acte']}
                eventDate={event['date acte médicale']}
                status={event['Statut du dossier']}
                key={event.id}
                id={event.id}
              />
            ))
        )}
      </div>
      <div id='insured2' onClick={handleClick2}>
        <h1 className='nomAssure'>Lucas Dupont</h1>
        {hidden2 ? (
          <p className='voirActes'>Voir les actes</p>
        ) : (
          eventArray
            .filter(event => event['prénom'] === 'Lucas')
            .map(event => (
              <MiniEvent
                acteType={event['Type acte']}
                eventDate={event['date acte médicale']}
                status={event['Statut du dossier']}
                key={event.id}
                id={event.id}
              />
            ))
        )}
      </div>
      <div id='insured3' onClick={handleClick3}>
        <h1 className='nomAssure'>Marie Dupont</h1>
        {hidden3 ? (
          <p className='voirActes'>Voir les actes</p>
        ) : (
          eventArray
            .filter(event => event['prénom'] === 'Marie')
            .map(event => (
              <MiniEvent
                acteType={event['Type acte']}
                eventDate={event['date acte médicale']}
                status={event['Statut du dossier']}
                key={event.id}
                id={event.id}
              />
            ))
        )}
      </div>
      <div id='insured4' onClick={handleClick4}>
        <h1 className='nomAssure'>Léa Dupont</h1>
        {hidden4 ? (
          <p className='voirActes'>Voir les actes</p>
        ) : (
          eventArray
            .filter(event => event['prénom'] === 'Lea')
            .map(event => (
              <MiniEvent
                acteType={event['Type acte']}
                eventDate={event['date acte médicale']}
                status={event['Statut du dossier']}
                key={event.id}
                id={event.id}
              />
            ))
        )}
      </div>
    </div>
  )
}

export default Events
