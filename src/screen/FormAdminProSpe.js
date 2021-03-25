import axios from 'axios'
import { useState } from 'react'

import './Form.css'

const FormAdminProSpe = () => {
  const [idSpe, setIdSpe] = useState('')
  const [idPro, setIdPro] = useState('')
  const [status, setStatus] = useState(true)
  const allPost = {
    pros_pro_id: idPro,
    specialities_id_speciality: idSpe,
    Status: status
  }

  const handleChange = e => {
    e.target.name === 'pro'
      ? setIdPro(e.target.value)
      : e.target.name === 'spe'
      ? setIdSpe(e.target.value)
      : setStatus(e.target.value)
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
    <div className='form'>
      <h1>Création de compte</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className='form-data'>
            <label htmlFor='pro'>
              Identifiant du Professionnel<span> * </span>
            </label>
            <input
              type='text'
              id='pro'
              name='pro'
              onChange={handleChange}
              required
              value={idPro}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='spe'>
              Spécialité du professionnel<span> * </span>
            </label>
            <input
              type='text'
              id='spe'
              name='spe'
              onChange={handleChange}
              required
              value={idSpe}
            />
          </div>
          <div className='form-data'>
            <label htmlFor='status'>
              Mot de passe<span> * </span>
            </label>
            <input
              id='status'
              name='status'
              onChange={handleChange}
              required
              value={status}
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

export default FormAdminProSpe
