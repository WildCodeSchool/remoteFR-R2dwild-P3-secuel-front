import { Link } from 'react-router-dom'
import './MiniEvent.css'

const MiniEvent = insured => {
  return (
    <Link to={`/event/${insured.id}`} className='link'>
      <div className='card'>
        <p>
          <span className='infoMiniEvents'>Date acte :</span>{' '}
          {insured.eventDate}
        </p>
        <p>
          <span className='infoMiniEvents'>Acte :</span> {insured.acteType}
        </p>
        {insured.status === 'Traité' ? (
          <p>
            <span className='infoMiniEvents'>Status remboursement</span> 🟢
          </p>
        ) : (
          <p>
            <span className='infoMiniEvents'>Status remboursement</span> 🔴
          </p>
        )}
      </div>
    </Link>
  )
}

export default MiniEvent
