import { Link } from 'react-router-dom'

import './AddSecu.css'

const AddSecu = visitor => {
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
        placeholder='Numéro sécurité sociale'
      />
      <label htmlFor='idSecu'>
        Identifiant de votre compte Sécurité Sociale *
      </label>
      <input
        id='idSecu'
        type='text'
        required
        placeholder='Indentifiant sécurité sociale'
      />
      <Link to='/waiting'>Valider</Link>
    </div>
  )
}

export default AddSecu
