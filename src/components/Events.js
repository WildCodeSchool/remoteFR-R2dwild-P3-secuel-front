import eventArray from '../data/fakejson/fakedata.json'

import './Events.css'
const Events = () => {
  return (
    <div className='events'>
      {eventArray.map(event => (
        <div className='card' key={event.Nom + event.date + event['Type acte']}>
          <p className='titreCard'>{event['N Sécurité sociale']}</p>
          <p>
            <span>Date acte :</span> {event['date acte médicale']}
          </p>
          <p>
            <span>Assuré :</span> {event.Nom} {event['prénom']}
          </p>
          <p>
            <span>Acte :</span> {event['Type acte']}
          </p>
          <p>
            <span>Spécialiste : </span>
            {event['Nom professionnel de santé']}
          </p>
          <p>
            <span>Montant payé :</span>
            {event['Montant Payé']}
          </p>
          <p>
            <span>Montant remboursé :</span>
            {event['Montant remboursé'] ? event['Montant remboursé'] : 0}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Events
