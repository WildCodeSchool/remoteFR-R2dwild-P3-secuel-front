import { useEffect, useState } from 'react'
import axios from 'axios'

import './Form.css'

const AdminModifNotifIns = Data => {
  const [insured, setInsured] = useState('')
  const [notif, setNotif] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState(null)
  const [compte, setCompte] = useState('')
  const allPost = {
    notifications_id_Notification: notif,
    insured_id_Insured: insured,
    insured_Account_id_Compte: compte,
    Status: status
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3000/notif_insured/modif/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setInsured(data[0].insured_id_Insured)
        setNotif(data[0].notifications_id_Notification)
        setStatus(data[0].Status)
        setCompte(data[0].insured_Account_id_Compte)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    e.target.name === 'insured'
      ? setInsured(e.target.value)
      : e.target.name === 'notif'
      ? setNotif(e.target.value)
      : e.target.name === 'compte'
      ? setCompte(e.target.value)
      : setStatus(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .put(
        `http://localhost:3000/notif_insured/${Data.match.params.id}`,
        allPost
      )
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Modification de notification</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='notif'>
              Id de notif <span> * </span>
            </legend>
            <input
              id='notif'
              name='notif'
              onChange={handleChange}
              value={notif}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insured'>
              Id de l&apos;assuré concerné <span> * </span>
            </legend>
            <input
              id='insured'
              name='insured'
              onChange={handleChange}
              value={insured}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='compte'>
              Id du compte concerné <span> * </span>
            </legend>
            <input
              id='compte'
              name='compte'
              onChange={handleChange}
              value={compte}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='status'>
              Statut de la notif <span> * </span>
            </legend>
            <input
              id='status'
              name='status'
              onChange={handleChange}
              value={status}
            />
          </fieldset>
          <p>
            <span> * </span> required.
          </p>
          <div className='formData'>
            <input type='submit' value='Envoyer' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminModifNotifIns
