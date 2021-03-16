import axios from 'axios'
import { useState } from 'react'

import './Form.css'

const Form = () => {
  const [accountName, setAccountName] = useState('')
  const [login, setLogin] = useState('')
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
        alert(`${res.data} !`)
      })
      .catch(e => {
        console.error(e)
        alert(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='Form'>
      <h1>Création de compte</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className='form-data'>
            <label htmlFor='name'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              required
              value={accountName}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='email'>
              Email<span> * </span>
            </label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={handleChange}
              required
              value={login}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='password'>
              Mot de passe<span> * </span>
            </label>
            <input
              id='password'
              name='password'
              onChange={handleChange}
              required
              value={password}
            />
          </div>
          <hr />
          <p>
            <span> * </span> required.
          </p>
          <div className='form-data'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form
