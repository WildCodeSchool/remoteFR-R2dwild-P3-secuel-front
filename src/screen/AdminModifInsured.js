import './Form.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

const AdminModifInsured = Data => {
  const [insured, setInsured] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:3000/insured/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        console.log(data[0])
        setInsured(data[0])
        setCompte(data[0].Account_id_Compte)
        setBirthDate(
          new Date(data[0].birth_date)
            .toLocaleDateString()
            .split('/')
            .reverse()
            .join('-')
        )
        setEmail(data[0].email)
        setFirstName(data[0].firstname)
        setLastName(data[0].lastname)
        setNumSecu(data[0].social_security_num)
        setTel(data[0].tel)
        setPassword(data[0].Password)
        setColor(data[0].color)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')
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
    // ? setColor(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .put('http://localhost:3000/insured', allPost)
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
      <h1>Modification Assuré</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <fieldset>
          <div className='formData'>
            <label htmlFor='lastname'>
              Nom de famille <span> * </span>
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
              onChange={handleChange}
              required
              value={birthDate}
            />
          </div>
          <div className='formData'>
            <label htmlFor='color'>
              Couleur utilisateur <span> * </span>
            </label>
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
                    value='#348AA7'
                  ></input>
                  <span className='checkmark' id='color1'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#98A578'
                  ></input>
                  <span className='checkmark' id='color2'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#FCBF49'
                  ></input>
                  <span className='checkmark' id='color3'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#55538D'
                  ></input>
                  <span className='checkmark' id='color4'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#71B340'
                  ></input>
                  <span className='checkmark' id='color5'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#BA9593'
                  ></input>
                  <span className='checkmark' id='color6'></span>
                </label>
                <label className='colorBox'>
                  <input
                    onClick={colorChoosen}
                    type='radio'
                    name='radio1'
                    value='#7EA8BE'
                  ></input>
                  <span className='checkmark' id='color7'></span>
                </label>
              </div>
            </div>
          </div>
          <div className='formData'>
            <label htmlFor='compte'>
              Compte de rattachement<span> * </span>
            </label>
            <input
              type='text'
              id='compte'
              name='compte'
              onChange={handleChange}
              required
              value={compte}
            />
          </div>

          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input className='btnEnvoyer' type='submit' value='Mettre a jour' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default AdminModifInsured