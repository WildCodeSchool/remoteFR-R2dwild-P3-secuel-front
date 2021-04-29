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
      .then(() => {
        setMessage('Modification réussie')
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Modification d&apos;un institut</h1>
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

export default AdminModifHealthIns