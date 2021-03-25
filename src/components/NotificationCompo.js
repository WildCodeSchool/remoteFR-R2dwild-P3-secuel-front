import React from 'react'
import { Link } from 'react-router-dom'

import eventArray from '../data/fakejson/fakedata.json'
import './NotificationCompo.css'

export default function NotificationCompo() {
  //définit la couleur de la notification soit Vert/Jeune ou Rouge
  // const statusNotif =
  //   eventArray
  //     .filter(data => data['prénom'] === 'Jean')
  //     .filter(data => data['Statut du dossier']) === 'Traité'
  //     ? 'barGreen'
  //     : eventArray
  //         .filter(data => data['prénom'] === 'Jean')
  //         .filter(
  //           (data => data['Statut du dossier']) === 'en cours de traitement'
  //         )
  //         .filter((data => data['RECUPERATION TYPE INCIDENT']) != '-')
  //     ? 'barYellow'
  //     : 'barRed'

  return (
    <Link to={eventArray}>
      <div className='barGreen'>
        <div className='dateRemboursement'>
          {/* <span style={{ color: 'grey' }}> */}
          {eventArray[0]['date de remboursement']}
          {/* </span>{' '} */}
        </div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {eventArray[3]['prénom']}
          </span>{' '}
          a obtenu un remboursement de{'    '}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {eventArray[0]['Payeur']}
          </span>
          {'    '}
          pour la dépense de {'    '}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {eventArray[0]['Type acte']}
          </span>
          {'    '}
          avec {'    '}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {eventArray[0]['Nom professionnel de santé']}
          </span>
        </div>
      </div>
    </Link>
  )
}
