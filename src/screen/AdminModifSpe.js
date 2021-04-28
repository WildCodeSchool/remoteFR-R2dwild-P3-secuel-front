import './Form.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

const AdminModifSpeciality = Data => {
  const [message, setMessage] = useState(null)
  const [speciality, setSpeciality] = useState('')

  const spePost = {
    speciality_name: speciality
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3000/specialities/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setSpeciality(data[0].speciality_name)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    e.target.name === 'speciality' ? setSpeciality(e.target.value) : null
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .put(
        `http://localhost:3000/specialities/${Data.match.params.id}`,
        spePost
      )
      .then(() => {
        setMessage('Modification réussie')
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

export default AdminModifSpeciality
