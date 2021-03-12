const MiniEvent = insured => {
  return (
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
  )
}

export default MiniEvent
