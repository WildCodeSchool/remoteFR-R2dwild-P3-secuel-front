import './Form.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

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
        console.log(data)
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
  // // {message ? <p>{message}</p> : null}
  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Modification des notifications</h1>
      </div>

      <form onSubmit={submitForm}>
        <fieldset>
          <div className='formData'>
            <label htmlFor='insured'>
              Nom<span></span>
            </label>
            <input
              type='text'
              id='insured'
              name='insured'
              onChange={handleChange}
              required
              value={insured}
            />
          </div>
          <div className='formData'>
            <label htmlFor='notif'>
              notif<span></span>
            </label>
            <input
              type='text'
              id='notif'
              name='notif'
              onChange={handleChange}
              required
              value={notif}
            />
          </div>
          <div className='formData'>
            <label htmlFor='compte'>
              Compte<span></span>
            </label>
            <input
              type='text'
              id='compte'
              name='compte'
              onChange={handleChange}
              required
              value={compte}
            />
          </div>
          <div className='formData'>
            <label htmlFor='status'>
              Status<span> * </span>
            </label>
            <input
              id='status'
              name='status'
              onChange={handleChange}
              required
              value={status}
            />
          </div>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input
              className='btnEnvoyer'
              type='submit'
              value='Valider le profil'
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default AdminModifNotifIns
