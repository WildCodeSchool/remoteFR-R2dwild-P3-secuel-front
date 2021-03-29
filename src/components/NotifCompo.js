import { Link } from 'react-router-dom'

import './NotifCompo.css'

//définit la couleur de la notification soit Vert/Jeune ou Rouge
// const statusNotif = notif => {
//   notif.filter(data => data['Statut du dossier'] === 'Traité')
//     ? 'barGreen'
//     : 'barRed'
//   console.log(statusNotif)
// }

// eventArray
//   .filter(data => data['prénom'] === 'Jean')
//   .filter(data => data['Statut du dossier']) === 'Traité'
//   ? 'barGreen'
//   : eventArray
//       .filter(data => data['prénom'] === 'Jean')
//       .filter((data => data['Statut du dossier']) === 'en cours de traitement')
//       .filter((data => data['RECUPERATION TYPE INCIDENT']) != '-')
//   ? 'barYellow'
//   : 'barRed'

const NotifCompo = notif => {
  return (
    <Link to={`/Notification/${notif.id}`}>
      <div
        className={
          notif.status === 'Traité'
            ? 'barGreen'
            : notif.status === 'en cours de traitement' && notif.incident === ''
            ? 'barYellow'
            : 'barRed'
        }
      >
        <div className='dateRemboursement'>{notif.eventDate}</div>
        <div>
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {notif.firstName}
          </span>{' '}
          a obtenu un remboursement de{'    '}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {notif.payer}
          </span>
          {'    '}
          pour la dépense de {'    '}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {notif.acteType}
          </span>
          {'    '}
          avec {'    '}
          <span style={{ fontWeight: 'bold', color: 'black' }}>
            {notif.actorName}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default NotifCompo
