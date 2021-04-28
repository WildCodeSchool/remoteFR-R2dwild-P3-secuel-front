import './Form.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

const AdminModifHealthIns = Data => {
  const [message, setMessage] = useState(null)
  const [name, setName] = useState('')
  const allPost = {
    insurance_name: name
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Health_insurance/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        setName(data[0].insurance_name)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    e.target.name === 'name' ? setName(e.target.value) : null
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .put(
        `http://localhost:3000/Health_insurance/${Data.match.params.id}`,
        allPost
      )
      .then(res => {
        setMessage('Modification réussie')
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }
  // // {message ? <p>{message}</p> : null}
  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Modification Assurance</h1>
      </div>

      <form onSubmit={submitForm}>
        <fieldset>
          <div className='formData'>
            <label htmlFor='name'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='minimum X caractères'
              onChange={handleChange}
              required
              value={name}
            />
          </div>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input
              className='btnEnvoyer'
              type='submit'
              value='Valider le profil'
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default AdminModifHealthIns
