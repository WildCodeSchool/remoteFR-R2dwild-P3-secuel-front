import { Link } from 'react-router-dom'

import './NotifCompo.css'

const NotifCompo = notif => {
  return (
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
      <p>
        <span>{notif.firstName} </span>a obtenu un remboursement de
        <span> {notif.payer} </span>
        pour la dépense de
        <span> {notif.acteType} </span>avec<span> {notif.actorName}</span>
      </p>
    </div>
  )
}

export default NotifCompo
