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
      <p id='pointChargement'>
        •••<span id='spanChargement'>••</span>
      </p>
      {/* <label htmlFor='secu'>Numéro de Sécurité Sociale *</label> */}
      <fieldset>
        <legend>Numéro de Sécurité Sociale *</legend>
        <input
          id='secu'
          type='text'
          required
          placeholder='Ex: 2 960691 688 998 '
          onChange={handleChange}
        />
      </fieldset>
      {/* <label htmlFor='idSecu'>
        Identifiant de votre compte Sécurité Sociale *
      </label> */}
      <fieldset>
        <legend>Identifiant de votre compte Sécurité Sociale *</legend>
        <input
          id='idSecu'
          type='text'
          required
          placeholder='Code Ameli'
          onChange={handleChange}
        />
      </fieldset>
      {numSecu === '' || idSecu === '' ? (
        <p className='forbidden'>Valider</p>
      ) : (
        <Link to={{ pathname: '/waiting', props: 'secu' }}>Valider</Link>
      )}
    </div>
  )
}

export default AddSecu
