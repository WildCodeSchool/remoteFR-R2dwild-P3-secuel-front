import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminNotifInsured = () => {
  const [insured, setInsured] = useState('')
  const [message, setMessage] = useState(null)
  const [notif, setNotif] = useState('')
  const [compte, setCompte] = useState('')
  const [status, setStatus] = useState('')
  const allPost = {
    notifications_id_Notification: notif,
    insured_id_Insured: insured,
    insured_Account_id_Compte: compte,
    Status: status
  }

  const handleChange = e => {
    e.target.name === 'notif'
      ? setNotif(e.target.value)
      : e.target.name === 'insured'
      ? setInsured(e.target.value)
      : e.target.name === 'compte'
      ? setCompte(e.target.value)
      : setStatus(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/notif_insured', allPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création de notification</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='notif'>
              Id de notif <span> * </span>
            </legend>
            <input
              type='text'
              id='notif'
              name='notif'
              placeholder='nombre'
              onChange={handleChange}
              required
              value={notif}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insured'>
              Id de l&apos;assuré concerné <span> * </span>
            </legend>
            <input
              type='text'
              id='insured'
              name='insured'
              placeholder='nombre'
              onChange={handleChange}
              required
              value={insured}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='compte'>
              Id du compte concerné <span> * </span>
            </legend>
            <input
              type='text'
              id='compte'
              name='compte'
              placeholder='nombre'
              onChange={handleChange}
              required
              value={compte}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='status'>
              Statut de la notif <span> * </span>
            </legend>
            <input
              type='bool'
              id='status'
              name='status'
              placeholder='0 || 1'
              onChange={handleChange}
              required
              value={status}
            />
          </fieldset>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input className='btnEnvoyer' type='submit' value='Envoyer' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormAdminNotifInsured
