import React, { useState } from 'react'
import { addMonths } from 'date-fns'
import DatePicker from 'react-datepicker'

import './Calendrier.css'
import 'react-datepicker/dist/react-datepicker.css'

import Cal from '../data/images/Calendrier.png'

const Calendrier = () => {
  const [startDate, setStartDate] = useState(addMonths(new Date(), -6))
  const [endDate, setEndDate] = useState(new Date())
  const [date, setDate] = useState('')
  return (
    <div className='calendrier'>
      <div className='divCalendrier'>
        <p id='titreCalendar'>Filtrer par date</p>
        <div className='divCalendar'>
          <DatePicker
            selected={startDate}
            onChange={date =>
              setStartDate(date) || setDate(date.toLocaleDateString())
            }
            maxDate={new Date()}
            minDate={addMonths(new Date(), -6)}
            id='firstCalendar'
            dateFormat='dd-MM-yyyy'
          />
          <p>➜</p>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            maxDate={new Date()}
            minDate={addMonths(new Date(), -6)}
            id='secondCalendar'
            dateFormat='dd-MM-yyyy'
          />
          <img src={Cal} id='imgCal' />
        </div>
        <button id='btnAppliquer'>Appliquer</button>
      </div>
      <p>{date}</p>
    </div>
  )
}

export default Calendrier
