import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { addMonths } from 'date-fns'
import './Calendrier.css'
import Cal from '../data/images/Calendrier.png'

import 'react-datepicker/dist/react-datepicker.css'

const Calendrier = () => {
  const [startDate, setStartDate] = useState(addMonths(new Date(), -6))
  const [endDate, setEndDate] = useState(new Date())
  return (
    <div className='calendrier'>
      <div className='divCalendrier'>
        <p id='titreCalendar'>Filtrer par date</p>
        <div className='divCalendar'>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
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
    </div>
  )
}

export default Calendrier
