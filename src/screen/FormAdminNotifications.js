import axios from 'axios'
import { useState } from 'react'

import './Form.css'

const FormAdminNotifications = () => {
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')

  const notifPost = {
    type: type,
    Message: message
  }

  const handleChange = e => {
    e.target.name === 'type'
      ? setType(e.target.value)
      : setMessage(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/notifications', notifPost)
      .then(res => {
        alert(`${res.data} !`)
      })
      .catch(e => {
        console.error(e)
        alert(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création de compte</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className='form-data'>
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
          <div className='form-data'>
            <label htmlFor='message'>
              Message<span> * </span>
            </label>
            <textarea
              type='textarea'
              id='message'
              name='message'
              onChange={handleChange}
              required
              value={message}
            />
          </div>
          <hr />
          <p>
            <span> * </span> required.
          </p>
          <div className='form-data'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormAdminNotifications
