import './Notif.css'

const Notif = notif => {
  return (
    <div className='notifBack'>
      <p>{notif.notif.type}</p>
      <p>{notif.notif.Message}</p>
    </div>
  )
}

export default Notif
