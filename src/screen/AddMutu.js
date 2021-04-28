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
      <p id='pointChargement'>
        •<span id='spanChargement'>••</span>
      </p>
      <fieldset>
        <legend htmlFor='mutu'>
          Compte mutuelle <span className='spanEtoile'> * </span>
        </legend>
        <input
          id='mutu'
          type='text'
          required
          placeholder='N° assuré'
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend htmlFor='idMutu'>
          Identifiant Mutuelle <span className='spanEtoile'> * </span>
        </legend>
        <input
          id='idMutu'
          type='text'
          required
          placeholder='Nom mutuelle'
          onChange={handleChange}
        />
      </fieldset>
      <p className='textObligatoire'>
        {' '}
        <span className='spanEtoile'> * </span>Obligatoire
      </p>
      {numMutu === '' || idMutu === '' ? (
        <p className='forbidden'>Valider</p>
      ) : (
        <Link to='/waiting'>Valider</Link>
      )}
    </div>
  )
}

export default AddMutu
