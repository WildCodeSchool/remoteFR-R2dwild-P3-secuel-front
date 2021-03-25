import eventArray from '../data/fakejson/fakedata.json'
import NotificationCompo from '../components/NotificationCompo'

// import React, { useState, Component } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import './Notification.css'

const Notification = () => {
  // const [notif, setNotif] = useState('')

  const statusNotif =
    eventArray.filter(
      data => data['prénom'] === 'Lucas' && data['ENVOI DE NOTIFICATION']
    ) != ''
      ? eventArray.filter(
          data => data['prénom'] === 'Lucas' && data['ENVOI DE NOTIFICATION']
        ).length
      : 'aucune'

  return (
    <div>
      <div className='notifBody'>
        <h1 id='titreNotif'>Vos Notifications</h1>
        <h1>
          <span style={{ color: 'blue' }}>
            {eventArray[0]['prénom'] + '   ' + eventArray[0]['Nom']}
          </span>
        </h1>

        <div className='notifNumber'>
          Vous avez {'   '}
          {statusNotif}
          {'   '}
          notification(s)
        </div>
        {/* Légende des vignettes  */}
        <ul className='legendRaw'>
          <ul className='starNText'>
            <li className='starGreen'></li>
            <li className='textLegend'>Tout va bien !</li>
          </ul>
          <ul className='starNText'>
            <li className='starYellow'></li>
            <li className='textLegend'>
              C&apos;est un peu long donc voyons ce qu&apos;il se passe
            </li>
          </ul>
          <ul className='starNText'>
            <li className='starRed'></li>
            <li className='textLegend'>Il y a un petit soucis</li>
          </ul>
        </ul>
        {/* <div className='containerNotif'> */}
        {/* <div className='notifList'>
            {eventArray
              .filter(data => data['prénom'] === 'Jean')
              .filter(data => data['ENVOI DE NOTIFICATION']) != null ? (
              <div className='barGreen'></div>
            ) : (
              <div className='barYellow'></div>
            )}
          </div> */}
        <div>
          {eventArray
            .filter(data => data['prénom'] === 'Lea')
            .map(a => (
              <NotificationCompo {...a} key={a.id} />
            ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Notification
