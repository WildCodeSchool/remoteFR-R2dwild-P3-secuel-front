import './NotifCompo.css'

const NotifCompo = notif => {
  console.log(notif)
  return (
    <div
      className={
        notif.payer === 'Sécurité Sociale'
          ? notif.status[0] === 'En cours de traitement'
            ? 'barYellow'
            : notif.status[0] === 'Non reçu'
            ? 'barRed'
            : 'barGreen'
          : notif.status[1] === 'En cours de traitement'
          ? 'barYellow'
          : notif.status[1] === 'Non reçu'
          ? 'barRed'
          : 'barGreen'
      }
    >
      <p>{notif.notifDate}</p>
      <p>
        <strong>{notif.firstName} </strong>
        {notif.payer === 'Sécurité Sociale'
          ? notif.status[0] === 'En cours de traitement'
            ? 'est en attente du remboursement de la'
            : notif.status[0] === 'Non reçu'
            ? 'doit contacter'
            : 'a obtenu un remboursement de'
          : notif.status[1] === 'En cours de traitement'
          ? 'est en attente du remboursement de'
          : notif.status[1] === 'Non reçu'
          ? 'doit contacter'
          : 'a obtenu un remboursement de'}
        <strong> {notif.payer} </strong>
        pour la dépense de
        <strong> {notif.acteType} </strong>avec
        <strong> {notif.actorName}</strong>
      </p>
    </div>
  )
}

export default NotifCompo
