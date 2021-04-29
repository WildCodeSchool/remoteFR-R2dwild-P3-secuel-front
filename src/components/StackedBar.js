import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

import './StackedBar.css'

const StackedBar = () => {
  const [data, setData] = useState({})
  const [label, setLabel] = useState([])
  const [secu, setSecu] = useState([])
  const [mutu, setMutu] = useState([])
  const [total, setTotal] = useState([])

  useEffect(() => {
    let test = null
    const fetchData = async () => {
      await axios
        .get('http://localhost:3000/refund/stats/1')
        .then(res => res.data)
        .then(data => {
          data.totalCost.forEach(data => {
            setLabel(label.push(data.speciality_name))
            setTotal(total.push(data.AmountPaid))
          })
          data.refundSecu.forEach(data => setSecu(secu.push(data.RefundSecu)))
          data.refundMutu.forEach(data => setMutu(mutu.push(data.MutuRefund)))
          test = total.map((number, i) =>
            Math.round(
              number -
                data.refundSecu[i].RefundSecu -
                data.refundMutu[i].MutuRefund
            )
          )
        })
        .then(() =>
          setData({
            labels: label,
            datasets: [
              {
                barPercentage: 0.5,
                barThickness: 40,
                maxBarThickness: 40,
                label: 'Remboursement sécu',
                data: secu,
                backgroundColor: '#8ecae6',
                datalabels: {
                  color: 'white',
                  formatter: function (value) {
                    if (value > 0) {
                      return value
                    } else {
                      value = ''
                      return value
                    }
                  }
                }
              },
              {
                barPercentage: 0.5,
                barThickness: 40,
                maxBarThickness: 40,
                label: 'Remboursement mutuelle',
                data: mutu,
                backgroundColor: '#348AA7',
                boderColor: 'white',
                datalabels: {
                  color: 'white',
                  formatter: function (value) {
                    if (value > 0) {
                      return value
                    } else {
                      value = ''
                      return value
                    }
                  }
                }
              },
              {
                barPercentage: 0.5,
                barThickness: 40,
                maxBarThickness: 40,
                label: 'Reste à charge',
                data: test,
                backgroundColor: '#ffb703',
                datalabels: {
                  color: 'white',
                  formatter: function (value) {
                    if (value > 0) {
                      return value
                    } else {
                      value = ''
                      return value
                    }
                  }
                }
              }
            ]
          })
        )
        .catch(e => console.log(`Erreur lors de la reception : ${e.message}`))
    }
    fetchData()
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
      <h1 className='title'>Année 2021</h1>
      <div className='bar'>
        <Bar data={data} options={options} legend={legend} />
      </div>
    </>
  )
}

export default StackedBar
