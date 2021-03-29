import { useState } from 'react'
import { Link } from 'react-router-dom'

import './AddSecu.css'

const AddSecu = visitor => {
  const [numSecu, setNumSecu] = useState('')
  const [idSecu, setIdSecu] = useState('')

  const handleChange = e => {
    e.target.id === 'secu'
      ? (setNumSecu(e.target.value), visitor.setSecu(e.target.value))
      : setIdSecu(e.target.value)
  }

  return (
    <div className='addSecu'>
      <p>
        <span>
          D&apos;abord, {visitor.visitor} indiquez vos comptes de Sécurité
          Sociale
        </span>
      </p>
      <p>
        Indiquez les numéros de <span>Sécurité Sociale</span> que vous souhaitez
        rattacher à votre profil
      </p>
      <label htmlFor='secu'>Numéro de Sécurité Sociale *</label>
      <input
        id='secu'
        type='text'
        required
        placeholder='Ex: 2 960691 688 998 '
        onChange={handleChange}
      />
      <label htmlFor='idSecu'>
        Identifiant de votre compte Sécurité Sociale *
      </label>
      <input
        id='idSecu'
        type='text'
        required
        placeholder='Code Ameli'
        onChange={handleChange}
      />
      {numSecu === '' || idSecu === '' ? (
        <p className='forbidden'>Valider</p>
      ) : (
        <Link to='/waiting'>Valider</Link>
      )}
    </div>
  )
}

export default AddSecu
