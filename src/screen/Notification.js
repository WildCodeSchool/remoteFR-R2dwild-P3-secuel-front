import NotificationCompo from '../components/NotifCompo'
import { useState } from 'react'
import axios from 'axios'

import './Notification.css'

import eventArray from '../data/fakejson/fakedata.json'

const Notification = () => {
  const [acteType, setActeType] = useState('')
  const [actorName, setActorName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [incident, setIncident] = useState('')
  const [message, setMessage] = useState('')
  const [notifDate, setNotifDate] = useState('')
  const [payer, setPayer] = useState('')
  const [status, setStatus] = useState('')
  const allPost = {
    acteType: acteType,
    firstName: firstName,
    payer: payer,
    notifDate: notifDate,
    status: status,
    incident: incident,
    actorName: actorName
  }

  const eventData = e => {
    e.preventDefault()
    axios
      .get('http://localhost:3000/Account', allPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  const statusNotif =
    eventArray.filter(
      data => data['prénom'] === 'Marie' && data['ENVOI DE NOTIFICATION']
    ) != ''
      ? eventArray.filter(
          data => data['prénom'] === 'Marie' && data['ENVOI DE NOTIFICATION']
        ).length
      : 'aucune'

  return (
    <div className='notifBody'>
      <h1 id='titreNotif'>Vos Notifications</h1>
      <h1>
        <span style={{ color: 'blue' }}>
          {eventArray[1]['prénom'] + '   ' + eventArray[1]['Nom']}
        </span>
      </h1>

      <div className='notifNumber'>Vous avez {statusNotif} notification(s)</div>
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
      <div className='notifMap'>
        {eventArray
          .filter(data => data['prénom'] === 'Jean')
          .map(notif => (
            <NotificationCompo
              acteType={notif['Type acte']}
              firstName={notif['prénom']}
              payer={notif['Payeur']}
              notifDate={notif['date acte médicale']}
              status={notif['Statut du dossier']}
              incident={notif['RECUPERATION TYPE INCIDENT']}
              actorName={notif['Nom professionnel de santé']}
              key={notif.id}
              id={notif.id}
            />
          ))}
      </div>
    </div>
  )
}

export default Notification
