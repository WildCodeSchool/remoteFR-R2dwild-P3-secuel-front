import './NotifCompo.css'

const NotifCompo = notif => {
  return (
    <div
      className={
        notif.status[0] === 'Traité' && notif.status[1]
          ? 'barGreen'
          : notif.status[0] !== 'En cours de traitement' ||
            notif.status[1] !== 'En cours de traitement'
          ? 'barRed'
          : 'barYellow'
      }
    >
      <p>{notif.notifDate}</p>
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
