import { useState } from 'react'
import axios from 'axios'

import './Form.css'

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
        <div className='containerAdmin'>
          {/* <legend>information sur le professionnel : </legend> */}
          <fieldset className='formData'>
            <legend htmlFor='name'>
              Nom du médecin <span> * </span>
            </legend>
            <input
              className='saisie'
              id='name'
              name='name'
              onChange={handleChange}
              placeholder='ex: Bigotte'
              required
              type='text'
              value={name}
            />
          </fieldset>
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

export default FormAdminPros
