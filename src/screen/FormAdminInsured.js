import './Form.css'

import ListBddEntry from './ListBddEntry'
import axios from 'axios'
import { useState } from 'react'

const FormAdminInsured = () => {
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState(null)
  const [numSecu, setNumSecu] = useState('')
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')
  const [compte, setCompte] = useState('')
  const allPost = {
    lastname: lastName,
    firstname: firstName,
    social_security_num: numSecu,
    email: email,
    tel: tel,
    Password: password,
    birth_date: birthDate,
    Account_id_Compte: compte
  }

  const handleChange = e => {
    e.target.name === 'lastname'
      ? setLastName(e.target.value)
      : e.target.name === 'firstname'
      ? setFirstName(e.target.value)
      : e.target.name === 'numsecu'
      ? setNumSecu(e.target.value)
      : e.target.name === 'email'
      ? setEmail(e.target.value)
      : e.target.name === 'tel'
      ? setTel(e.target.value)
      : e.target.name === 'password'
      ? setPassword(e.target.value)
      : e.target.name === 'birth-date'
      ? setBirthDate(e.target.value)
      : setCompte(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/insured', allPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création de assuré</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <fieldset>
          {/* <legend>information de l&apos;assuré : </legend> */}
          <div className='formData'>
            <label htmlFor='lastname'>
              Nom de famille <span> * </span>
            </label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='minimum X caractères'
              onChange={handleChange}
              required
              value={lastName}
            />
          </div>
          <div className='formData'>
            <label htmlFor='firstname'>
              Prénom<span> * </span>
            </label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              placeholder='minimum X caractères'
              onChange={handleChange}
              required
              value={firstName}
            />
          </div>
          <div className='formData'>
            <label htmlFor='numsecu'>
              Numéro de sécurité sociale<span> * </span>
            </label>
            <input
              type='text'
              id='numsecu'
              name='numsecu'
              placeholder='minimum X caractères'
              onChange={handleChange}
              required
              value={numSecu}
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
              placeholder='exemple@mail.com'
              onChange={handleChange}
              required
              value={email}
            />
          </div>
          <div className='formData'>
            <label htmlFor='tel'>
              Téléphone<span> * </span>
            </label>
            <input
              type='text'
              id='tel'
              name='tel'
              placeholder='minimum 10 chiffres'
              onChange={handleChange}
              required
              value={tel}
            />
          </div>
          <div className='formData'>
            <label htmlFor='password'>
              Mot de passe<span> * </span>
            </label>
            <input
              type='text'
              id='password'
              name='password'
              placeholder='minimum 10 caractères'
              onChange={handleChange}
              required
              value={password}
            />
          </div>
          <div className='formData'>
            <label htmlFor='birth-date'>
              Date de naissance<span> * </span>
            </label>
            <input
              type='text'
              id='birth-date'
              name='birth-date'
              placeholder='JJ/MM/AAAA'
              onChange={handleChange}
              required
              value={birthDate}
            />
          </div>

          <div className='formData'>
            <label htmlFor='compte'>
              Compte de rattachement<span> * </span>
            </label>
            <input
              type='text'
              id='compte'
              name='compte'
              placeholder='numéro d un compte'
              onChange={handleChange}
              required
              value={compte}
            />
          </div>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input className='btnEnvoyer' type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
      <ListBddEntry />
    </div>
  )
}

export default FormAdminInsured
