import './Form.css'

/* eslint-disable react/no-unescaped-entities */
import axios from 'axios'
import { useState } from 'react'

const FormAdminHealthInsurance = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState(null)
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

  const clickButton = e => {
    // preventDefault evite le rechargement de la page
    e.preventDefault()
    axios
      .get('http://localhost:3000/health_insurance')
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.error(e)
      })
  }

  return (
    <div className='form'>
      <h1>Création d'un institut</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>information sur l'institut : </legend>
          <div className='formData'>
            <label htmlFor='name'>
              Nom de l'institut<span> * </span>
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
          <div className='formData'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
        <button className='getBtn' type='button' onClick={clickButton}>Liste des Assurances</button>
      </form>
    </div>
  )
}

export default FormAdminHealthInsurance
