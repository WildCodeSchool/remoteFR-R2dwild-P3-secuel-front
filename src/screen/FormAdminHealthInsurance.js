/* eslint-disable react/no-unescaped-entities */
import axios from 'axios'
import { useState } from 'react'

import './FormAdminHealthInsurance.css'

const FormAdminHealthInsurance = () => {
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
      .post('localhost:3000/health_insurance', allPost)
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
      <h1>Création d'un institut</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>information sur l'institut : </legend>
          <div className='form-data'>
            <label htmlFor='name'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              required
              value={name}
            />
          </div>
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

export default FormAdminHealthInsurance
