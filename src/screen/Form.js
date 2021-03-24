import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'

import './Form.css'
import logo from '../data/images/logo_elan.png'

const Form = () => {
  const [accountName, setAccountName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const allPost = {
    Account_name: accountName,
    Login: login,
    Password: password
  }

  const nextPage = useHistory()

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
        console.log(`${res.data} !`)
      })
      .catch(e => {
        console.error(e)
        console.log(`Erreur lors de la création : ${e.message}`)
      })
    nextPage.push('/next')
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <img src={logo} className='bigLogo' />
        <h1>Création de compte</h1>
      </div>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className='formData'>
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
          <div className='formData'>
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
          <div className='formData'>
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
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form
