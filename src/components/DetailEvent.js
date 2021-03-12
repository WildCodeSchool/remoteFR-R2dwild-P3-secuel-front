const DetailEvent = insured => {
  return (
    <div className='events'>
      <div
        className='card'
        key={insured.Nom + insured.date + insured['Type acte']}
      >
        <p className='titreCard'>{insured['N Sécurité sociale']}</p>
        <p>
          <span>Date acte :</span> {insured['date acte médicale']}
        </p>
        <p>
          <span>Assuré :</span> {insured.Nom} {insured['prénom']}
        </p>
        <p>
          <span>Acte :</span> {insured['Type acte']}
        </p>
        <p>
          <span>Spécialiste : </span>
          {insured['Nom professionnel de santé']}
        </p>
        <p>
          <span>Montant payé :</span>
          {insured['Montant Payé']}
        </p>
        <p>
          <span>Montant remboursé :</span>
          {insured['Montant remboursé'] ? insured['Montant remboursé'] : 0}
        </p>
      </div>
    </div>
  )
}

export default DetailEvent
