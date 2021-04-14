import { useState, useEffect } from 'react'
import Aos from 'aos'
import axios from 'axios'
import Insured from './Insured'

import 'aos/dist/aos.css'
import './Events.css'

const Events = () => {
  const [insureds, setInsureds] = useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3000/account/alls/1')
      .then(res => res.data)
      .then(data => setInsureds(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='events'>
      {insureds
        ? insureds.insured.map(person => (
            <Insured key={person.id_Insured} person={person} />
          ))
        : null}
    </div>
  )
}

export default Events
