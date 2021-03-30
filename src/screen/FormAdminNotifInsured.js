import './Form.css'

import axios from 'axios'
import { useState } from 'react'

const FormAdminNotifInsured = () => {
  const [notif, setNotif] = useState('')
  const [insured, setInsured] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState(null)
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
        console.error(e)
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  // gère l'affichage de la liste des données
  const clickButton = e => {
    // preventDefault evite le rechargement de la page
    e.preventDefault()
    axios
      .get('http://localhost:3000/notif_insured')
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.error(e)
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
      <button className='getBtn' type='button' onClick={clickButton}>Liste des notifications par assuré</button>
    </div>
  )
}

export default FormAdminNotifInsured
