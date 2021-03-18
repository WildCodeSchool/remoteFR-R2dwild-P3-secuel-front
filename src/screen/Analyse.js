import StackedBar from '../components/StackedBar'

import { useState } from 'react'

import './Analyse.css'

// import eventArray from '../data/fakejson/fakedata.json'

const Analyse = () => {
  const [select, setSelect] = useState('')
  // const filterArray = eventArray.filter(event =>
  //   event['prénom'].includes(select)
  // )

  const handleSelect = e => setSelect(e.target.value)

  return (
    <div className='analyse'>
      {/* Votre mutuelle actuelle ne vous rembourse pas totalement vos actes de
      podologies, <a href='https://apgis.com/'>APGIS</a> propose de meilleur
      remboursement pour ces actes. */}
      <select>
        <option value='' onChange={handleSelect}>
          Tous les assurés
        </option>
        <option value='Jean' onChange={handleSelect}>
          Jean Dupont
        </option>
        <option value='Lucas' onChange={handleSelect}>
          Lucas Dupont
        </option>
        <option value='Marie' onChange={handleSelect}>
          Marie Dupont
        </option>
        <option value='Lea' onChange={handleSelect}>
          Léa Dupont
        </option>
      </select>
      <StackedBar />
    </div>
  )
}
export default Analyse
