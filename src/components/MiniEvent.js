import { Link } from 'react-router-dom'

const MiniEvent = insured => {
  return (
    <Link to={`/event/${insured.id}`}>
      <div className='card'>
        <p>
          <span>Date acte :</span> {insured.eventDate}
        </p>
        <p>
          <span>Acte :</span> {insured.acteType}
        </p>
        {insured.status === 'Traité' ? (
          <p>
            <span>Status remboursement</span> 🟢
          </p>
        ) : (
          <p>
            <span>Status remboursement</span> 🔴
          </p>
        )}
      </div>
    </Link>
  )
}

export default MiniEvent
