import { useState, useEffect } from 'react'
import Aos from 'aos'
import eventArray from '../data/fakejson/fakedata.json'
import MiniEvent from './MiniEvent'
import Welcome from './Welcome'

import 'aos/dist/aos.css'
import './Events.css'

const Events = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
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
      <Welcome />
      <div
        id='insured1'
        onClick={handleClick1}
        className={hidden1 ? 'hidden' : 'show'}
      >
        <div className='notificationICon'>
          <h1 className='nomAssure'>Jean Dupont</h1>
          {eventArray.filter(
            data =>
              data['prénom'] === 'Jean' &&
              data['Statut du dossier'] !== 'Traité'
          ).length === 0 ? null : (
            <span
              data-aos='zoom-in'
              data-aos-duration='800'
              data-aos-offset='20'
              className='badge'
            >
              {
                eventArray.filter(
                  data =>
                    data['prénom'] === 'Jean' &&
                    data['Statut du dossier'] !== 'Traité'
                ).length
              }
            </span>
          )}
        </div>
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
      <div
        id='insured2'
        onClick={handleClick2}
        className={hidden2 ? 'hidden' : 'show'}
      >
        <div className='notificationICon'>
          <h1 className='nomAssure'>Lucas Dupont</h1>
          {eventArray.filter(
            data =>
              data['prénom'] === 'Lucas' &&
              data['Statut du dossier'] !== 'Traité'
          ).length === 0 ? null : (
            <span
              data-aos='zoom-in'
              data-aos-duration='800'
              data-aos-offset='20'
              className='badge'
            >
              {
                eventArray.filter(
                  data =>
                    data['prénom'] === 'Lucas' &&
                    data['Statut du dossier'] !== 'Traité'
                ).length
              }
            </span>
          )}
        </div>
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
      <div
        id='insured3'
        onClick={handleClick3}
        className={hidden3 ? 'hidden' : 'show'}
      >
        <div className='notificationICon'>
          <h1 className='nomAssure'>Marie Dupont</h1>
          {eventArray.filter(
            data =>
              data['prénom'] === 'Marie' &&
              data['Statut du dossier'] !== 'Traité'
          ).length === 0 ? null : (
            <span
              data-aos='zoom-in'
              data-aos-duration='800'
              data-aos-offset='20'
              className='badge'
            >
              {
                eventArray.filter(
                  data =>
                    data['prénom'] === 'Marie' &&
                    data['Statut du dossier'] !== 'Traité'
                ).length
              }
            </span>
          )}
        </div>
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
      <div
        id='insured4'
        onClick={handleClick4}
        className={hidden4 ? 'hidden' : 'show'}
      >
        <div className='notificationICon'>
          <h1 className='nomAssure'>Léa Dupont</h1>
          {eventArray.filter(
            data =>
              data['prénom'] === 'Lea' && data['Statut du dossier'] !== 'Traité'
          ).length === 0 ? null : (
            <span
              data-aos='zoom-in'
              data-aos-duration='800'
              data-aos-offset='20'
              className='badge'
            >
              {
                eventArray.filter(
                  data =>
                    data['prénom'] === 'Lea' &&
                    data['Statut du dossier'] !== 'Traité'
                ).length
              }
            </span>
          )}
        </div>
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
