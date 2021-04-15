import './NotifCompo.css'

const NotifCompo = notif => {
  return (
    <div
      className={
        notif.status[0] === 'Traité' && notif.status[1] === 'Traité'
          ? 'barGreen'
          : (notif.status[0] === 'En cours de traitement' &&
              notif.payer === 'Sécurité Sociale') ||
            (notif.status[1] === 'En cours de traitement' &&
              notif.payer !== 'Sécurité Sociale')
          ? 'barYellow'
          : 'barRed'
      }
    >
      <p>{notif.notifDate}</p>
      <p>
        <strong>{notif.firstName} </strong>
        {notif.status[0] === 'Traité' && notif.status[1] === 'Traité'
          ? 'a obtenu un remboursement de'
          : (notif.status[0] === 'En cours de traitement' &&
              notif.payer === 'Sécurité Sociale') ||
            (notif.status[1] === 'En cours de traitement' &&
              notif.payer !== 'Sécurité Sociale')
          ? 'attend le remboursement de'
          : 'a un problème de remboursement de'}
        {/* notif.status[1] !== 'En cours de traitement'? ''} */}
        <strong> {notif.payer} </strong>
        pour la dépense de
        <strong> {notif.acteType} </strong>avec
        <strong> {notif.actorName}</strong>
      </p>
    </div>
  )
}

export default NotifCompo
