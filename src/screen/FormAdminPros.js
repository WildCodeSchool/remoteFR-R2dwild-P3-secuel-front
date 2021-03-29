import axios from 'axios'
import { useState } from 'react'
import './Form.css'
const FormAdminPros = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState(null)

  const allPost = {
    pro_name: name
  }

  const handleChange = e => {
    setName(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('localhost:3000/pros', allPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        console.error(e)
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
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormAdminPros
