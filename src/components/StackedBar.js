import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

import './StackedBar.css'

function StackedBar() {
  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      labels: [
        'Généraliste',
        'Pharmacie',
        'Podologue',
        'Orthodontiste',
        'Dermatologue',
        'Imagerie'
      ],
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 40,
          maxBarThickness: 40,
          label: 'Remboursement sécu',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: '#8ecae6',
          datalabels: {
            color: 'white'
          }
        },
        {
          barPercentage: 0.5,
          barThickness: 40,
          maxBarThickness: 40,
          label: 'Remboursement mutuelle',
          data: [2, 3, 20, 35, 1, 4],
          backgroundColor: '#257EA7',
          boderColor: 'white',
          datalabels: {
            color: 'white'
          }
        },
        {
          barPercentage: 0.5,
          barThickness: 40,
          maxBarThickness: 40,
          label: 'Reste à charge',
          data: [3, 10, 13, 5, 22, 30],
          backgroundColor: '#ffb703',
          datalabels: {
            color: 'white'
          }
        }
      ]
    })
  }, [])

  const options = {
    animation: { easing: 'easeInCubic', duration: 1500 },
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }
      ],
      xAxes: [
        {
          stacked: true
        }
      ]
    }
  }
  const legend = {
    position: 'bottom',
    labels: {
      fontSize: 12
    }
  }

  return (
    <>
      <h1 className='title'>Vos remboursements cette année</h1>
      <div className='bar'>
        <Bar data={data} options={options} legend={legend} />
      </div>
    </>
  )
}

export default StackedBar
