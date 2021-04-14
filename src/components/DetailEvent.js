import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'

import 'chartjs-plugin-datalabels'

import './DetailEvent.css'

import fleche from '../data/images/fleche.png'

const DetailEvent = Acte => {
  const [medActe, setMedActe] = useState(null)
  const [array, setArray] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Medical_events/${Acte.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setMedActe(data)
        data.insurance_status === 'Traité' && data.secu_status === 'Traité'
          ? setArray(['Sécurité Sociale', 'Mutuelle ', 'Reste à charge'])
          : setArray([
              'Sécurité Sociale',
              'Mutuelle',
              'Remboursement(s) en attente'
            ])
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    console.log(medActe)
  }, [])

  return (
    <div className='cardDetail'>
      {medActe ? (
        <>
          <Link to='/home'>
            <img src={fleche} />
          </Link>
          {/* <p className='titreCard'>{medActe.social_security_num}</p> */}
          <div className='explanations'>
            <p>
              <span className='infoCard'>Date acte: </span>{' '}
              <strong>
                {new Date(medActe.Date_Event).toLocaleDateString()}
              </strong>
            </p>
            <p>
              <span className='infoCard'> Assuré: </span>{' '}
              <strong>{medActe.lastname} </strong>
              <strong>{medActe.firstname}</strong>
            </p>
            <p>
              <span className='infoCard'>Acte: </span>{' '}
              <strong>{medActe.speciality_name}</strong>
            </p>
            <p>
              <span className='infoCard'>Spécialiste: </span>
              <strong>{medActe.pro_name}</strong>
            </p>
            <p>
              <span className='infoCard'>Montant payé : </span>
              <strong>{medActe.amount_Event} € </strong>
            </p>
            <p>
              <span className='infoCard'>Montant remboursé : </span>
              <strong>
                {medActe.Amount_Refund + medActe.refund_insurance} €
              </strong>
            </p>
          </div>
          <div className='donut'>
            <Doughnut
              data={{
                labels: array,
                datasets: [
                  {
                    label: 'montants remboursés en euros',
                    data: [
                      parseInt(`${medActe.Amount_Refund}`),
                      parseInt(`${medActe.refund_insurance}`),
                      parseInt(`${medActe.Amount_Event}`) -
                        parseInt(`${medActe.refund_insurance}`) -
                        parseInt(`${medActe.Amount_Refund}`) >
                      0
                        ? parseInt(`${medActe.Amount_Event}`) -
                          parseInt(`${medActe.refund_insurance}`) -
                          parseInt(`${medActe.Amount_Refund}`)
                        : ''
                    ],
                    backgroundColor: ['#f2af29', '#3d5a80', '#ee6c4d'],
                    borderColor: 'white',
                    hoverBorderColor: 'grey',
                    borderWidth: 2,
                    hoverBorderWidth: 4,
                    datalabels: {
                      display: true,
                      color: 'white',
                      anchor: 'end',
                      align: 'start',
                      offset: -10,
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 25,
                      backgroundColor: context => {
                        return context.dataset.backgroundColor
                      },
                      formatter: value => {
                        return value + '€'
                      }
                    }
                  }
                ]
              }}
              // height={500}
              // width={500}
              options={{
                animation: { animateScale: true },
                responsive: true,
                legend: {
                  position: 'bottom',
                  labels: {
                    fontSize: 15
                  }
                }
              }}
            />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default DetailEvent
