import acte from '../data/fakejson/fakedata.json'
import Donut from './Donut.js'

const DetailEvent = Acte => {
  const insured = acte.filter(
    medevent => medevent.id === parseInt(Acte.match.params.id)
  )[0]
  return (
    <div className='card'>
      <p className='titreCard'>{insured['N Sécurité sociale']}</p>
      <p>
        <span>Date acte: </span> {insured['date acte médicale']}
      </p>
      <p>
        <span>Assuré: </span> {insured.Nom} {insured['prénom']}
      </p>
      <p>
        <span>Acte: </span> {insured['Type acte']}
      </p>
      <p>
        <span>Spécialiste: </span>
        {insured['Nom professionnel de santé']}
      </p>
      <p>
        <span>Montant payé: </span>
        {insured['Montant Payé']}
      </p>
      <p>
        <span>Montant remboursé: </span>
        {insured['Montant remboursé'] ? insured['Montant remboursé'] : 0}
      </p>
      {/* <div className='donutField'> */}
      <Donut />
      {/* </div> */}
    </div>
  )
}

export default DetailEvent
