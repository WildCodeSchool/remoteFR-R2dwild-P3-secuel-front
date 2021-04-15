import { useState } from 'react'
import MiniEvent from './MiniEvent'

const insured = person => {
  const [hidden, setHidden] = useState(true)

  const handleClick = () => setHidden(!hidden)

  return (
    <div
      onClick={handleClick}
      className={hidden ? 'hidden insured' : 'show insured'}
      style={{ background: person.person.color }}
    >
      <div className='notificationICon'>
        <h1 className='nomAssure' style={{ cursor: 'pointer' }}>
          {person.person.firstname + ' ' + person.person.lastname}
        </h1>
        {person.person.medical.filter(
          data =>
            data.secu_status !== 'Traité' || data.insurance_status !== 'Traité'
        ).length === 0 ? null : (
          <span
            data-aos='zoom-in'
            data-aos-duration='800'
            data-aos-offset='20'
            className='badge'
          >
            {
              person.person.medical.filter(
                data =>
                  data.secu_status !== 'Traité' ||
                  data.insurance_status !== 'Traité'
              ).length
            }
          </span>
        )}
      </div>
      {hidden ? (
        <p className='voirActes'>Voir les actes</p>
      ) : (
        person.person.medical.map(event => (
          <MiniEvent
            acteType={event.speciality_name}
            eventDate={event.Date_Event}
            statusSecu={event.secu_status}
            statusMutu={event.insurance_status}
            key={event.id_med_event}
            id={event.id_med_event}
          />
        ))
      )}
    </div>
  )
}

export default insured
