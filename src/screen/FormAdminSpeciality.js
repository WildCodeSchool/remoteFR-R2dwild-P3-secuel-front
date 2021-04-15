import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminSpeciality = () => {
  const [message, setMessage] = useState(null)
  const [speciality, setSpeciality] = useState('')

  const spePost = {
    speciality_name: speciality
  }

  const handleChange = e => {
    e.target.name === 'speciality' ? setSpeciality(e.target.value) : null
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/specialities', spePost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création d&apos;une spécialité</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='speciality'>
              Nom de la spécialité <span> * </span>
            </legend>
            <input
              type='text'
              id='speciality'
              name='speciality'
              onChange={handleChange}
              placeholder='ex: Généraliste'
              required
              value={speciality}
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

export default FormAdminSpeciality
