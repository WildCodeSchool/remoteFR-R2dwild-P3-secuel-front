import { useEffect, useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminProSpe = () => {
  const [idPros, setIdPros] = useState(null)
  const [idSpes, setIdSpes] = useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3000/pros')
      .then(res => res.data)
      .then(data => setIdPros(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    axios
      .get('http://localhost:3000/specialities')
      .then(res => res.data)
      .then(data => setIdSpes(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
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
        setMessage(
          res.data +
            ' and linked the pro ' +
            idPro +
            ' with the speciality ' +
            idSpe
        )
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
            <select id='pro' name='pro' onChange={handleChange}>
              <option>Sélectionne un pro</option>
              {idPros
                ? idPros.map(pro => (
                    <option key={pro.pro_id} value={pro.pro_id}>
                      {pro.pro_name}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='spe'>
              Spécialité du professionnel<span> * </span>
            </legend>
            <select id='spe' name='spe' onChange={handleChange}>
              <option>Sélectionne une spécialité</option>
              {idSpes
                ? idSpes.map(spe => (
                    <option key={spe.id_speciality} value={spe.id_speciality}>
                      {spe.speciality_name}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='status'>
              Statut de la spécialité<span> * </span>
            </legend>
            <select id='status' name='status' onChange={handleChange}>
              <option>Sélectionne un status</option>
              <option value={1}>Exercé</option>
              <option value={0}>Non exercé</option>
            </select>
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
