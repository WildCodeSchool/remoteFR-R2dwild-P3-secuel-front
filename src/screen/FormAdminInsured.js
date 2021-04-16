import { useState } from 'react'
import axios from 'axios'

import './Form.css'

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
  const [color, setColor] = useState('')
  const allPost = {
    lastname: lastName,
    firstname: firstName,
    social_security_num: numSecu,
    email: email,
    tel: tel,
    Password: password,
    birth_date: birthDate,
    color: color,
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
      : e.target.name === 'color'
      ? setColor(e.target.value)
      : setCompte(e.target.value)
    // ? setColor(e.target.value)
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

  function colorChoosen(e) {
    setColor(e.target.value)
  }

  return (
    <div className='form'>
      <h1>Création de assuré</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='lastname'>
              Nom de famille <span> * </span>
            </legend>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='minimum 2 caractères'
              onChange={handleChange}
              required
              value={lastName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='firstname'>
              Prénom<span> * </span>
            </legend>
            <input
              type='text'
              id='firstname'
              name='firstname'
              placeholder='minimum 2 caractères'
              onChange={handleChange}
              required
              value={firstName}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='numsecu'>
              Numéro de sécurité sociale<span> * </span>
            </legend>
            <input
              type='text'
              id='numsecu'
              name='numsecu'
              placeholder='minimum 13 caractères'
              onChange={handleChange}
              required
              value={numSecu}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='email'>
              Email<span> * </span>
            </legend>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='exemple@mail.com'
              onChange={handleChange}
              required
              value={email}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='tel'>
              Téléphone<span> * </span>
            </legend>
            <input
              type='text'
              id='tel'
              name='tel'
              placeholder='minimum 10 chiffres'
              onChange={handleChange}
              required
              value={tel}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='password'>
              Mot de passe<span> * </span>
            </legend>
            <input
              type='text'
              id='password'
              name='password'
              placeholder='minimum 10 caractères'
              onChange={handleChange}
              required
              value={password}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='birth-date'>
              Date de naissance<span> * </span>
            </legend>
            <input
              type='date'
              id='birth-date'
              name='birth-date'
              onChange={handleChange}
              required
              value={birthDate}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='color'>
              Couleur utilisateur <span> * </span>
            </legend>
            <div className='inputColor'>
              <div>
                code couleur sélectionnée = <strong>{color}</strong>
              </div>
              <div className='colorPickerBar'>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#F94144'
                  ></input>
                  <span className='checkmark' id='color1'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#F3722C'
                  ></input>
                  <span className='checkmark' id='color2'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#F8961E'
                  ></input>
                  <span className='checkmark' id='color3'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#F9C74F'
                  ></input>
                  <span className='checkmark' id='color4'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#90BE6D'
                  ></input>
                  <span className='checkmark' id='color5'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#43AA8B'
                  ></input>
                  <span className='checkmark' id='color6'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#577590'
                  ></input>
                  <span className='checkmark' id='color7'></span>
                </label>
              </div>
            </div>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='compte'>
              Compte de rattachement<span> * </span>
            </legend>
            <input
              type='text'
              id='compte'
              name='compte'
              placeholder='numéro d un compte'
              onChange={handleChange}
              required
              value={compte}
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

export default FormAdminInsured
