import { useEffect, useState } from 'react'
import axios from 'axios'
import Notif from '../components/Notif'
import NotificationCompo from '../components/NotifCompo'

import './Notification.css'
import 'react-datepicker/dist/react-datepicker.css'

import eventArray from '../data/fakejson/fakedata.json'

const Notification = () => {
  const [notifs, setNotif] = useState(null)
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/notif_insured/1')
      .then(res => res.data)
      .then(data => setNotif(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    axios
      .get('http://localhost:3000/medical_events/notif')
      .then(res => res.data)
      .then(data => setAlert(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  return (
    <div className='notifBody'>
      <h1 id='titreNotif'>Vos Notifications</h1>
      {/* <h1 className='nameInsured'>
        {eventArray[1]['prénom'] + '   ' + eventArray[1]['Nom']}
      </h1> */}
      {notifs ? (
        <div className='notifs'>
          {notifs.map(notif => (
            <Notif key={notif.notifications_id_Notification} notif={notif} />
          ))}
        </div>
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
        {alert
          ? alert.map(medevent => (
              <NotificationCompo
                acteType={medevent.speciality_name}
                firstName={medevent.firstname}
                payer={medevent.insurance_name}
                notifDate={new Date(medevent.Date_Refund).toLocaleDateString()}
                status={[medevent.secu_status, medevent.insurance_status]}
                actorName={medevent.pro_name}
                key={medevent.id_refund}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default Notification
