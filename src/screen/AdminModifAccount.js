import './Form.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

const AdminModifAccount = Data => {
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Account/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setAccountName(data[0].account_name)
        setLogin(data[0].Login)
        setPassword(data[0].Password)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  const [accountName, setAccountName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
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
      .put(`http://localhost:3000/Account/${Data.match.params.id}`, allPost)
      .then(() => {
        setMessage('Modification réussie')
      })
      .catch(e => {
        console.log(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <div className='formTitle'>
        <h1>Modification d&apos;un compte utilisateur</h1>
        {message ? <p>{message}</p> : null}
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
    </div>
  )
}

export default AdminModifAccount
