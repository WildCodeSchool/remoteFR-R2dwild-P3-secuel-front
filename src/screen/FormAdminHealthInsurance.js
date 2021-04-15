import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminHealthInsurance = () => {
  const [message, setMessage] = useState(null)
  const [name, setName] = useState('')
  const allPost = {
    insurance_name: name
  }

  const handleChange = e => {
    setName(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/health_insurance', allPost)
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
      <h1>Création d&apos;un institut</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <div className='formData'>
            <fieldset>
              <legend htmlFor='name'>
                Nom de l&apos;institut<span> * </span>
              </legend>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='minimum X caractères'
                onChange={handleChange}
                required
                value={name}
              />
            </fieldset>
          </div>
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

export default FormAdminHealthInsurance
