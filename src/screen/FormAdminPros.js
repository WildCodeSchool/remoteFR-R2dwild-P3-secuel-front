import './Form.css'

import ListBddEntry from './ListBddEntry'
import axios from 'axios'
import { useState } from 'react'

const FormAdminPros = () => {
  const [message, setMessage] = useState(null)
  const [name, setName] = useState('')

  const allPost = {
    pro_name: name
  }

  const handleChange = e => {
    setName(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/pros', allPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création d&apos;un professionnel de santé</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>information sur le professionnel : </legend>
          <div className='formData'>
            <label htmlFor='name'>
              Nom du médecin <span> * </span>
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
            <input id='btnEnvoyer' type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
      <ListBddEntry />
    </div>
  )
}

export default FormAdminPros
