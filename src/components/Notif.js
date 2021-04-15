import './Notif.css'

const Notif = notif => {
  return (
    <div className='containerNotifs'>
      <div className='notifBack'>
        <p>{notif.notif.type} </p>
        <p>{notif.notif.Message}</p>
        <p
          className='insuredcolor'
          style={{ background: notif.notif.color }}
        ></p>
      </div>
    </div>
  )
}

export default Notif
