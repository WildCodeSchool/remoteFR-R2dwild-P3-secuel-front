import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminNotifications = () => {
  const [type, setType] = useState('')
  const [notif, setNotif] = useState('')
  const [message, setMessage] = useState(null)

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
        <fieldset>
          <legend>Informations sur la notification</legend>
          <div className='formData'>
            <label htmlFor='type'>
              Type de message<span> * </span>
            </label>
            <input
              type='text'
              id='type'
              name='type'
              onChange={handleChange}
              required
              value={type}
            />
          </div>
          <div className='formData'>
            <label htmlFor='message'>
              Message<span> * </span>
            </label>
            <textarea
              type='textarea'
              id='message'
              name='message'
              onChange={handleChange}
              required
              value={notif}
            />
          </div>
          <hr />
          <p>
            <span> * </span> required.
          </p>
          <div className='formData'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormAdminNotifications
