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
        <strong>{notif.firstName} </strong>a obtenu un remboursement de
        <strong> {notif.payer} </strong>
        pour la dépense de
        <strong> {notif.acteType} </strong>avec
        <strong> {notif.actorName}</strong>
      </p>
    </div>
  )
}

export default NotifCompo
