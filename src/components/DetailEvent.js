import Donut from './Donut.js'
import { Link } from 'react-router-dom'

import './DetailEvent.css'

import acte from '../data/fakejson/fakedata.json'
import fleche from '../data/images/fleche.png'

const DetailEvent = Acte => {
  const insured = acte.filter(
    medevent => medevent.id === parseInt(Acte.match.params.id)
  )[0]
  return (
    <div className='card'>
      <div>
        <Link to='/home'>
          <img src={fleche} />
        </Link>
      </div>
      <p className='titreCard'>{insured['N Sécurité sociale']}</p>
      <p>
        <span className='infoCard'>Date acte: </span>{' '}
        {insured['date acte médicale']}
      </p>
      <p>
        <span className='infoCard'> Assuré: </span> {insured.Nom}{' '}
        {insured['prénom']}
      </p>
      <p>
        <span className='infoCard'>Acte: </span> {insured['Type acte']}
      </p>
      <p>
        <span className='infoCard'>Spécialiste: </span>
        {insured['Nom professionnel de santé']}
      </p>
      <p>
        <span className='infoCard'>Montant payé: </span>
        {insured['Montant Payé']}
      </p>
      <p>
        <span className='infoCard'>Montant remboursé: </span>
        {insured['Montant remboursé'] ? insured['Montant remboursé'] : 0}
      </p>
      <Donut />
    </div>
  )
}

export default DetailEvent
