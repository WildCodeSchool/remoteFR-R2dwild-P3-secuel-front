import './Form.css'

import axios from 'axios'
import { useState } from 'react'

const FormAdminSpeciality = () => {
  const [speciality, setSpeciality] = useState('')
  const [message, setMessage] = useState(null)

  const spePost = {
    speciality_name: speciality
  }

  const handleChange = e => {
    e.target.name === 'speciality' ? setSpeciality(e.target.value) : null
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/Specialities', spePost)
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
      .get('http://localhost:3000/Specialities')
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.error(e)
      })
    }
    
  return (
    <div className='form'>
      <h1>Création d'une spécialité</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations sur la spécialité</legend>
          <div className='formData'>
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
          <div className='formData'>
            <input className='getBtn' type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
      <button className='getBtn' type='button' onClick={clickButton}>Liste des Specialities</button>
    </div>
  )
}

export default FormAdminSpeciality
