import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'

import './Donut.css'

export default function Donut(label) {
  const array = label.nonrembours
    ? [
        'Remboursement en attente',
        'Sécurité Sociale',
        'Mutuelle 1',
        'Non remboursé'
      ]
    : ['Remboursement(s) en attente', 'Sécurité Sociale', 'Mutuelle 1']

  return (
    <Doughnut
      className='Donut'
      data={{
        labels: array,
        datasets: [
          {
            label: 'montants remboursés en euros',
            data: ['0', '20', '3'],
            backgroundColor: ['#ffb703', '#8ecae6', '#219ebc'],
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
      height={500}
      width={500}
      // devicePixelRatio={1}
      options={{
        responsive: false,
        title: {
          display: false,
          text: 'Remboursements',
          fontColor: 'black',
          position: 'top',
          fontSize: 30
        },
        legend: {
          position: 'right'
        }
      }}
    />
  )
}
