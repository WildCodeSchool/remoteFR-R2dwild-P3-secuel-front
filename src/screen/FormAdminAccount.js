import { useState } from 'react'
import axios from 'axios'
import ListBddEntry from './ListBddEntry'

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
        setMessage(res.data)
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
              value={accountName}
            />
          </div>
          <div className='formData'>
            <label htmlFor='name'>
              Email<span> * </span>
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='exemple@mail.com'
              onChange={handleChange}
              required
              value={login}
            />
          </div>
          <div className='formData'>
            <label htmlFor='name'>
              Mot de passe<span> * </span>
            </label>
            <input
              id='password'
              name='password'
              placeholder='minimum X caractères'
              onChange={handleChange}
              required
              value={password}
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
      <ListBddEntry />
    </div>
  )
}

export default FormAdminAccount
