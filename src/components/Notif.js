import './Notif.css'

const Notif = notif => {
  return (
    <div className='notifBack'>
      <p>{notif.notif.type} </p>
      <p>{notif.notif.Message}</p>
      <p className='insuredcolor' style={{ background: notif.notif.color }}>
        {notif.notif.lastname.charAt(0) + notif.notif.firstname.charAt(0)}
      </p>
    </div>
  )
}

export default Notif
