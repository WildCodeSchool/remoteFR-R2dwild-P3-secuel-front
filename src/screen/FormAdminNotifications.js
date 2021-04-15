import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminNotifications = () => {
  const [message, setMessage] = useState(null)
  const [notif, setNotif] = useState('')
  const [type, setType] = useState('')

  const notifPost = {
    type: type,
    Message: notif
  }

  const handleChange = e => {
    e.target.name === 'type'
      ? setType(e.target.value)
      : setNotif(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/notifications', notifPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        console.error(e)
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création de notification</h1>
      {message ? <div>{message}</div> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='type'>
              Type de message<span> * </span>
            </legend>
            <input
              type='text'
              id='type'
              name='type'
              placeholder='ex: Manque dossier || non reçu'
              onChange={handleChange}
              required
              value={type}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='message'>
              Message<span> * </span>
            </legend>
            <input
              type='text'
              id='message'
              name='message'
              placeholder='Action pour régler le problème'
              onChange={handleChange}
              required
              value={notif}
            />
          </fieldset>
          <hr />
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

export default FormAdminNotifications
