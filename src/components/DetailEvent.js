import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Donut from './Donut.js'

import './DetailEvent.css'

import fleche from '../data/images/fleche.png'

const DetailEvent = Acte => {
  const [medActe, setMedActe] = useState(null)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Medical_events/${Acte.match.params.id}`)
      .then(res => res.data)
      .then(data => setMedActe(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  return (
    <div className='card'>
      {medActe ? (
        <>
          <Link to='/home'>
            <img src={fleche} />
          </Link>
          <p className='titreCard'>{medActe.social_security_num}</p>
          <p>
            <span className='infoCard'>Date acte: </span>{' '}
            {new Date(medActe.Date_Event).toLocaleDateString()}
          </p>
          <p>
            <span className='infoCard'> Assuré: </span> {medActe.lastname}{' '}
            {medActe.firstname}
          </p>
          <p>
            <span className='infoCard'>Acte: </span> {medActe.speciality_name}
          </p>
          <p>
            <span className='infoCard'>Spécialiste: </span>
            {medActe.pro_name}
          </p>
          <p>
            <span className='infoCard'>Montant payé: </span>
            {medActe.amount_Event}
          </p>
          <p>
            <span className='infoCard'>Montant remboursé: </span>
            {medActe.Amount_Refund + medActe.refund_insurance}
          </p>
          <Donut />
        </>
      ) : null}
    </div>
  )
}

export default DetailEvent
