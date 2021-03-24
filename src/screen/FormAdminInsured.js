import axios from 'axios'
import { useState } from 'react'

import './Form.css'

const FormAdminInsured = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [numSecu, setNumSecu] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [password, setPassword] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const allPost = {
    lastname : lastName,
    firstname: firstName,
    social_security_num: numSecu,
    email : email,
    tel : tel,
    Password : password,
    birth_date : birthDate

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
      : setBirthDate(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('localhost:3000/insured', allPost)
      .then(res => {
        alert(`${res.data} !`)
      })
      .catch(e => {
        console.error(e)
        alert(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création d'un assuré'</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>information de l'assuré : </legend>
          <div className='form-data'>
            <label htmlFor='lastname'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              onChange={handleChange}
              required
              value={lastName}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='firstname'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              onChange={handleChange}
              required
              value={firstName}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='numsecu'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='numsecu'
              name='numsecu'
              onChange={handleChange}
              required
              value={numSecu}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='email'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={handleChange}
              required
              value={email}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='tel'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='tel'
              name='tel'
              onChange={handleChange}
              required
              value={tel}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='password'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='password'
              name='password'
              onChange={handleChange}
              required
              value={password}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='birth-date'>
              Nom<span> * </span>
            </label>
            <input
              type='text'
              id='birth-date'
              name='birth-date'
              onChange={handleChange}
              required
              value={birthDate}
            />
          </div>
         

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

export default FormAdminInsured ;
