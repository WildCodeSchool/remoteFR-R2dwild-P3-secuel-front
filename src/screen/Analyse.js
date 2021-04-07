import { useState } from 'react'

import StackedBar from '../components/StackedBar'

import './Analyse.css'

const Analyse = () => {
  const [select, setSelect] = useState('')

  const handleSelect = e => setSelect(e.target.value)

  return (
    <div className='refund'>
      <h1 id='titreNotif'>Vos Remboursements</h1>
      <div className='analyse'>
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
      </div>
      <StackedBar />
    </div>
  )
}

export default Analyse
