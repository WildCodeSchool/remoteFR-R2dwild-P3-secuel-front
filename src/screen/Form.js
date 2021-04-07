import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

import './Form.css'

import FlecheGold from '../data/images/Flechegold.png'
import logo from '../data/images/logo_elan.png'

const Form = visitor => {
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
    visitor.setVisitor(accountName)
    nextPage.push('/thanks')
  }

  return (
    <div className='form'>
      <img src={logo} id='bigLogo' />
      <div className='formTitle'>
        <a href='Javascript:history.go(-1)'>
          <img src={FlecheGold} id='flechegold' />
        </a>
        <h1 id='titreForm'> Création de compte</h1>
      </div>
      <p id='connaissance'>Commençons par faire connaissance</p>
      <p id='pointChargement'>
        •<span id='spanChargement'>••••</span>
      </p>
      <form onSubmit={submitForm}>
        <div className='formData'>
          <fieldset>
            <legend>
              Nom<span> * </span>
            </legend>
            <input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              required
              value={accountName}
            />
          </fieldset>
        </div>
        <div className='formData'>
          <fieldset>
            <legend>
              Email<span> * </span>
            </legend>
            <input
              type='text'
              id='email'
              name='email'
              onChange={handleChange}
              required
              value={login}
            />
          </fieldset>
        </div>
        <div className='formData'>
          <fieldset>
            <legend>
              Mot de passe<span> * </span>{' '}
            </legend>
            <input
              id='password'
              name='password'
              onChange={handleChange}
              required
              value={password}
            />{' '}
          </fieldset>
        </div>
        <p id='pObligatoire'>
          <span> * </span> Obligatoire
        </p>
        <div className='formData'>
          <input id='btnEnvoyer' type='submit' value='Valider le profil' />
        </div>
      </form>
    </div>
  )
}

export default Form
