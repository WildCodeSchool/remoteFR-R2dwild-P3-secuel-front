import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminProSpe = () => {
  const [idPro, setIdPro] = useState('')
  const [idSpe, setIdSpe] = useState('')
  const [message, setMessage] = useState(null)
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
      .post('http://localhost:3000/Pros_speciality', allPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création d&apos;un lien pro spé</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          {/* <legend>saisie des infos</legend> */}
          <fieldset className='formData'>
            <legend htmlFor='pro'>
              Identifiant du professionnel<span> * </span>
            </legend>
            <input
              type='text'
              id='pro'
              name='pro'
              onChange={handleChange}
              required
              value={idPro}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='spe'>
              Spécialité du professionnel<span> * </span>
            </legend>
            <input
              type='text'
              id='spe'
              name='spe'
              onChange={handleChange}
              required
              value={idSpe}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='status'>
              Statut de la spécialité<span> * </span>
            </legend>
            <input
              id='status'
              name='status'
              onChange={handleChange}
              required
              value={status}
            />
          </fieldset>
          <hr />
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

export default FormAdminProSpe
