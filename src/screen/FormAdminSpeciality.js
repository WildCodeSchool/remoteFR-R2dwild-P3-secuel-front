import axios from 'axios'
import { useState } from 'react'

import './Form.css'

const FormAdminSpeciality = () => {
  const [speciality, setSpeciality] = useState('')

  const spePost = {
    specialiti_name: speciality
  }

  const handleChange = e => {
    e.target.name === 'speciality' ? setSpeciality(e.target.value) : null
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/notifications', spePost)
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
            <label htmlFor='speciality'>
              Nom de la spécialité <span> * </span>
            </label>
            <input
              type='text'
              id='speciality'
              name='speciality'
              onChange={handleChange}
              required
              value={speciality}
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

export default FormAdminSpeciality
