import { useState } from 'react'
import { Link } from 'react-router-dom'

import './AddMutu.css'

const AddMutu = visitor => {
  const [idMutu, setIdMutu] = useState('')
  const [numMutu, setNumMutu] = useState('')

  const handleChange = e => {
    e.target.id === 'mutu'
      ? (setNumMutu(e.target.value), visitor.setNumMutu(e.target.value))
      : setIdMutu(e.target.value)
  }
  return (
    <div className='addMutu'>
      <p>
        <span>Passons à vos comptes Mutuelle !</span>
      </p>
      <p>{visitor.visitor},</p>
      <p>
        Indiquez les comptes <span>Mutuelle</span> que vous souhaitez rattacher
        à votre profil
      </p>
      <label htmlFor='mutu'>Compte mutuelle *</label>
      <input
        id='mutu'
        type='text'
        required
        placeholder='N° assuré'
        onChange={handleChange}
      />
      <label htmlFor='idMutu'>Identifiant Mutuelle *</label>
      <input
        id='idMutu'
        type='text'
        required
        placeholder='Nom mutuelle'
        onChange={handleChange}
      />
      {numMutu === '' || idMutu === '' ? (
        <p className='forbidden'>Valider</p>
      ) : (
        <Link to='/waiting'>Valider</Link>
      )}
    </div>
  )
}

export default AddMutu
