import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'

import 'chartjs-plugin-datalabels'
import './DetailEvent.css'
import fleche from '../data/images/fleche.png'
import email from '../data/images/email.png'

const DetailEvent = Acte => {
  const [medActe, setMedActe] = useState(null)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Medical_events/${Acte.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setMedActe(data)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  return (
    <div className='cardDetail'>
      {medActe ? (
        <>
          <Link to='/home'>
            <img src={fleche} />
          </Link>
          <div className='explanations'>
            <p className='pInfoCard'>
              <span className='infoCard'>Date acte: </span>{' '}
              <strong className='strongInfoCard'>
                {new Date(medActe.Date_Event).toLocaleDateString()}
              </strong>
            </p>
            <p className='pInfoCard'>
              <span className='infoCard'> Assuré: </span>{' '}
              <strong className='strongInfoCard'>{medActe.lastname} </strong>
              <strong className='strongInfoCard'>{medActe.firstname}</strong>
            </p>
            <p className='pInfoCard'>
              <span className='infoCard'>Acte: </span>{' '}
              <strong className='strongInfoCard'>
                {medActe.speciality_name}
              </strong>
            </p>
            <p className='pInfoCard'>
              <span className='infoCard'>Spécialiste: </span>
              <strong className='strongInfoCard'>{medActe.pro_name}</strong>
            </p>
            <p className='pInfoCard'>
              <span className='infoCard'>Montant payé : </span>
              <strong className='strongInfoCard'>
                {medActe.amount_Event} €{' '}
              </strong>
            </p>
            <p className='pInfoCard'>
              <span className='infoCard'>
                <p className='patchSecu'></p>
                Remboursement Sécurité So. :{' '}
              </span>
              <strong className='strongInfoCard'>
                {medActe.secu_status === 'Traité' && medActe.Amount_Refund != 0
                  ? medActe.Amount_Refund + '€'
                  : medActe.secu_status === 'Traité' && medActe.secu_status != 0
                  ? 'refus de remboursement'
                  : medActe.secu_status}
              </strong>
            </p>
            <p className='pInfoCard'>
              <span className='infoCard'>
                <span className='patchMutu'></span>Remboursement Mutuelle:{' '}
              </span>
              <strong className='strongInfoCard'>
                {medActe.insurance_status === 'Traité' &&
                medActe.refund_insurance != 0
                  ? medActe.refund_insurance + '€'
                  : medActe.insurance_status === 'Traité' &&
                    medActe.insurance_status != 0
                  ? 'refus de remboursement'
                  : medActe.insurance_status}
              </strong>
            </p>
            <p className='pInfoCard'>
              <span className='infoCard'>
                {medActe.secu_status &&
                medActe.insurance_status === 'Traité' &&
                medActe.amount_Event -
                  medActe.Amount_Refund -
                  medActe.refund_insurance ===
                  0 ? (
                  <span className='patchGreen'></span>
                ) : (
                  <span className='patchReste'></span>
                )}{' '}
                {medActe.secu_status && medActe.insurance_status === 'Traité'
                  ? 'Reste à charge :'
                  : 'En attente de remboursement'}
              </span>
              <strong className='strongInfoCard'>
                {medActe.amount_Event -
                  medActe.Amount_Refund -
                  medActe.refund_insurance}{' '}
                €{' '}
                <div className='emoji'>
                  {medActe.amount_Event -
                    medActe.Amount_Refund -
                    medActe.refund_insurance ===
                  0
                    ? '😀'
                    : (medActe.amount_Event -
                        medActe.Amount_Refund -
                        medActe.refund_insurance ===
                        0 &&
                        medActe.secu_status) ||
                      medActe.insurance_status === 'Traité'
                    ? '🙁'
                    : ''}
                </div>
              </strong>
            </p>
          </div>
          {medActe.secu_status != 'Traité' &&
          medActe.insurance_status != 'Traité' ? (
            <div className='noShow'>
              Dossier en cours de traitement ou non reçu veuillez consulter vos
              messages <img src={email} style={{ width: '60px' }} />
            </div>
          ) : (
            <div className='donut'>
              <Doughnut
                data={{
                  labels: '',
                  datasets: [
                    {
                      label: 'montants remboursés en euros',
                      data: [
                        parseInt(`${medActe.Amount_Refund}`),
                        parseInt(`${medActe.refund_insurance}`),
                        parseInt(`${medActe.amount_Event}`) -
                          parseInt(`${medActe.refund_insurance}`) -
                          parseInt(`${medActe.Amount_Refund}`)
                      ],
                      backgroundColor: ['#8ecae6', '#348AA7', '#ffb703'],
                      borderColor: 'white',
                      hoverBorderColor: 'grey',
                      borderWidth: 2,
                      hoverBorderWidth: 4,
                      datalabels: {
                        display: function (context) {
                          return context.dataset.data[context.dataIndex] !== 0
                        },
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
          )}
        </>
      ) : null}
    </div>
  )
}
export default DetailEvent
