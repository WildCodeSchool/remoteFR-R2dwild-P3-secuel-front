import './Form.css'

import axios from 'axios'
import { useState } from 'react'

const FormAdminProSpe = () => {
  const [idSpe, setIdSpe] = useState('')
  const [idPro, setIdPro] = useState('')
  const [status, setStatus] = useState(true)
  const [message, setMessage] = useState(null)
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
        console.error(e)
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }
  
      // gère l'affichage de la liste des données
      const clickButton = e => {
        // preventDefault evite le rechargement de la page
        e.preventDefault()
        axios
          .get('http://localhost:3000//Pros_speciality')
          .then(res => {
            console.log(res.data)
          })
          .catch(e => {
            console.error(e)
          })
        }
        
  return (
    <div className='form'>
      <h1>Création d'un lien pro spé</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>saisie des infos</legend>
          <div className='formData'>
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
          <div className='formData'>
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
          <div className='formData'>
            <label htmlFor='status'>
              statuts de la spécialité<span> * </span>
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
          <div className='formData'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
      <button className='getBtn' type='button' onClick={clickButton}>Liste des Specialities des Pro</button>
    </div>
  )
}

export default FormAdminProSpe
