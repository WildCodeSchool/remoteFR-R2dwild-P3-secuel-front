import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

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
        'imagerie'
      ],
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          label: 'Remboursement sécu',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(255, 99, 132)'
        },
        {
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          label: 'Remboursement mutuelle',
          data: [2, 3, 20, 5, 1, 4],
          backgroundColor: 'rgb(54, 162, 235)'
        },
        {
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          label: 'Reste à charge',
          data: [3, 10, 13, 15, 22, 30],
          backgroundColor: 'rgb(75, 192, 192)'
        }
      ]
    })
  }, [])

  const options = {
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

  return (
    <div className='bar'>
      <h1 className='title'>Synthèse Remboursements année X</h1>
      <Bar data={data} options={options} />
    </div>
  )
}

export default StackedBar

// import React from 'react'
// import { Bar } from 'react-chartjs-2'
// import 'chartjs-plugin-datalabels'

// import eventArray from '../data/fakejson/fakedata.json'

// // import './StackedBar.css'

// export default function StackedBar(label) {
//   const array = label.nonrembours
//     ? [
//         'Remboursement en attente',
//         'Sécurité Sociale',
//         'Mutuelle 1',
//         'Non remboursé'
//       ]
//     : ['Remboursement(s) en attente', 'Montant remboursé']

//   return (
//     <div className='StackedBar'>
//       <Bar
//         data={{
//           labels: [
//             'Généraliste',
//             'Pharmacie',
//             'Podologue',
//             'Orthodontiste',
//             'dermatologue'
//           ],
//           datasets: [
//             {
//               data: [0, 10, 30, 5],
//               backgroundColor: ['#003049']
//             },
//             {
//               data: [0, 5, 10, 5],
//               backgroundColor: ['#FCBF49']
//             },
//             {
//               data: [0, 4, 1, 5],
//               backgroundColor: ['#71B340']
//             },
//             {
//               data: [0, 5, 6, 5],
//               backgroundColor: ['#7EA8BE']
//             },
//               borderColor: 'white',
//               hoverBorderColor: 'grey',
//               borderWidth: 2,
//               hoverBorderWidth: 4,
//               datalabels: {
//                 display: true,
//                 color: 'white',
//                 anchor: 'end',
//                 align: 'start',
//                 offset: -10,
//                 borderWidth: 2,
//                 borderColor: 'white',
//                 borderRadius: 25,
//                 backgroundColor: context => {
//                   return context.dataset.backgroundColor
//                 },
//                 formatter: value => {
//                   return value + '€'
//                 }
//               }
//             }
//           ]
//         }}
//         height={500}
//         width={500}
//         // devicePixelRatio={1}
//         options={{
//           scales: {
//             xAxes: [{ stacked: true }],
//             yAxes: [{ stacked: true }]
//           },
//           responsive: false,
//           title: {
//             display: false,
//             text: 'Remboursements',
//             fontColor: 'black',
//             position: 'top',
//             fontSize: 30
//           },
//           legend: {
//             position: 'bottom',
//             labels: {
//               fontSize: 11
//             }
//           }
//         }}
//       />
//     </div>
//   )
// }
// import React, { useState, useEffect } from 'react'
// import { Bar } from 'react-chartjs-2'

// function StackedBar() {
//   const [data, setData] = useState({})

//   useEffect(() => {
//     setData({
//       labels: [
//         'Généraliste',
//         'Pharmacie',
//         'Podologue',
//         'Orthodontiste',
//         'Dermatologue',
//         'imagerie'
//       ],
//       datasets: [
//         {
//           barPercentage: 0.5,
//           barThickness: 6,
//           maxBarThickness: 8,
//           label: 'Remboursement sécu',
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: 'rgb(255, 99, 132)'
//         },
//         {
//           barPercentage: 0.5,
//           barThickness: 6,
//           maxBarThickness: 8,
//           label: 'Remboursement mutuelle',
//           data: [2, 3, 20, 5, 1, 4],
//           backgroundColor: 'rgb(54, 162, 235)'
//         },
//         {
//           barPercentage: 0.5,
//           barThickness: 6,
//           maxBarThickness: 8,
//           label: 'Reste à charge',
//           data: [3, 10, 13, 15, 22, 30],
//           backgroundColor: 'rgb(75, 192, 192)'
//         }
//       ]
//     })
//   }, [])

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       yAxes: [
//         {
//           stacked: true,
//           ticks: {
//             beginAtZero: true
//           }
//         }
//       ],
//       xAxes: [
//         {
//           stacked: true
//         }
//       ]
//     }
//   }

//   return (
//     <>
//       <div className='header'>
//         <h1 className='title'>Synthèse Remboursements année X</h1>
//       </div>
//       <div style={{ position: 'relative', width: 300, height: 300 }}>
//         <Bar data={data} options={options} height='200' />
//       </div>
//     </>
//   )
// }

// export default StackedBar
