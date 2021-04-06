import './Form.css'

import ListBddEntry from './ListBddEntry'
import axios from 'axios'
import { useState } from 'react'

const FormAdminNotifInsured = () => {
  const [insured, setInsured] = useState('')
  const [message, setMessage] = useState(null)
  const [notif, setNotif] = useState('')
  const [status, setStatus] = useState('')
  const allPost = {
    Notifications_id_Notification: notif,
    Insured_id_Insured: insured,
    Ni_status: status
  }

  const handleChange = e => {
    e.target.name === 'notif'
      ? setNotif(e.target.value)
      : e.target.name === 'insured'
      ? setInsured(e.target.value)
      : setStatus(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('localhost:3000/notif_insured', allPost)
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
        <fieldset>
          <legend>information sur la notification : </legend>
          <div className='formData'>
            <label htmlFor='notif'>
              Id de notif <span> * </span>
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
            <label htmlFor='insured'>
              Id de l&apos;assuré concerné <span> * </span>
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
            <label htmlFor='status'>
              Statuts de la notif <span> * </span>
            </label>
            <input
              type='bool'
              id='status'
              name='status'
              onChange={handleChange}
              required
              value={status}
            />
          </div>
          <p>
            <span> * </span> required.
          </p>
          <div className='formData'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
      <ListBddEntry />
    </div>
  )
}

export default FormAdminNotifInsured
