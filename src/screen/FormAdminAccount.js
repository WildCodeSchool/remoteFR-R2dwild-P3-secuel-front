import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminAccount = () => {
  const [accountName, setAccountName] = useState('')
  const [login, setLogin] = useState('')
  const [message, setMessage] = useState(null)
  const [password, setPassword] = useState('')
  const allPost = {
    Account_name: accountName,
    Login: login,
    Password: password
  }

  const handleChange = e => {
    e.target.name === 'name'
      ? setAccountName(e.target.value)
      : e.target.name === 'email'
      ? setLogin(e.target.value)
      : setPassword(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/Account', allPost)
      .then(res => {
        setMessage(res.data + ' ' + accountName)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Création d&apos;un compte utilisateur</h1>
      </div>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='name'>
              Nom<span> * </span>
            </legend>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='minimum 2 caractères'
              onChange={handleChange}
              required
              value={accountName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='name'>
              Email<span> * </span>
            </legend>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='exemple@mail.com'
              onChange={handleChange}
              required
              value={login}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='name'>
              Mot de passe<span> * </span>
            </legend>
            <input
              id='password'
              name='password'
              placeholder='minimum 10 caractères'
              onChange={handleChange}
              required
              value={password}
            />
          </fieldset>
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
        </div>
      </form>
    </div>
  )
}

export default FormAdminAccount
