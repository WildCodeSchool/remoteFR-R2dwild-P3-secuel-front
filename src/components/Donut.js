import { Doughnut } from 'react-chartjs-2'
import eventArray from '../data/fakejson/fakedata.json'
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
    : ['Remboursement(s) en attente', 'Montant remboursé']

  return (
    <div className='donut'>
      <Doughnut
        data={{
          labels: array,
          datasets: [
            {
              label: 'montants remboursés en euros',
              data: [
                parseInt(eventArray[0]['Montant remboursé']),
                parseInt(eventArray[0]['Montant Payé']) -
                  parseInt(eventArray[0]['Montant remboursé'])
              ],
              backgroundColor: ['#8ecae6', '#ffb703'],
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
        options={{
          animation: { animateScale: true },
          responsive: true,
          legend: {
            position: 'bottom',
            labels: {
              fontSize: 11
            }
          }
        }}
      />
    </div>
  )
}
