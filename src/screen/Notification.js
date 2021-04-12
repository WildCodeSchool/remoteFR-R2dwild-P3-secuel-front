import { useEffect, useState } from 'react'
import axios from 'axios'
import Notif from '../components/Notif'
import NotificationCompo from '../components/NotifCompo'

import './Notification.css'
import 'react-datepicker/dist/react-datepicker.css'

import eventArray from '../data/fakejson/fakedata.json'

const Notification = () => {
  const [notifs, setNotif] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/notifications')
      .then(res => res.data)
      .then(data => setNotif(data))

      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  return (
    <div className='notifBody'>
      <h1 id='titreNotif'>Vos Notifications</h1>
      <h1 className='nameInsured'>
        {eventArray[1]['prénom'] + '   ' + eventArray[1]['Nom']}
      </h1>
      {notifs ? (
        <>
          {/* <div className='notifNumber'>
            Vous avez {notifs.length} notification(s)
          </div> */}
          <div className='notifs'>
            {notifs.map(notif => (
              <Notif key={notif.id_Notification} notif={notif} />
            ))}
          </div>
        </>
      ) : null}

      {/* Légende des vignettes  */}
      <ul className='legendRaw'>
        <ul className='starNText'>
          <li className='starGreen'></li>
          <li className='textLegend'>Tout va bien !</li>
        </ul>
        <ul className='starNText'>
          <li className='starYellow'></li>
          <li className='textLegend'>C&apos;est un peu long, voyons ça</li>
        </ul>
        <ul className='starNText'>
          <li className='starRed'></li>
          <li className='textLegend'>Il y a un problème</li>
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
