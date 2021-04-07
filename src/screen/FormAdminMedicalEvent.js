import './Form.css'

import ListBddEntry from './ListBddEntry'
import axios from 'axios'
import { useState } from 'react'

const FormAdminMedicalEvent = () => {
  const [amountEvent, setAmountEvent] = useState('')
  const [dateEvent, setDateEvent] = useState('')
  const [insuranceStatus, setInsuranceStatus] = useState('')
  const [insuredAccountIdCompte, setInsuredAccountIdCompte] = useState('')
  const [insuredIdInsured, setInsuredIdInsured] = useState('')
  const [message, setMessage] = useState(null)
  const [prosProId, setProsProId] = useState('')
  const [secuStatus, setSecuStatus] = useState('')
  const [specialitiesIdSpeciality, setSpecialitiesIdSpeciality] = useState('')

  const allMedicalE = {
    Date_Event: dateEvent,
    amount_Event: amountEvent,
    secu_status: secuStatus,
    insurance_status: insuranceStatus,
    Specialities_id_speciality: specialitiesIdSpeciality,
    Insured_id_Insured: insuredIdInsured,
    Insured_Account_id_Compte: insuredAccountIdCompte,
    Pros_pro_id: prosProId
  }

  const handleChange = e => {
    e.target.name === 'dateEvent'
      ? setDateEvent(e.target.value)
      : e.target.name === 'amountEvent'
      ? setAmountEvent(e.target.value)
      : e.target.name === 'secuStatus'
      ? setSecuStatus(e.target.value)
      : e.target.name === 'insuranceStatus'
      ? setInsuranceStatus(e.target.value)
      : e.target.name === 'specialitiesIdSpeciality'
      ? setSpecialitiesIdSpeciality(e.target.value)
      : e.target.name === 'insuredIdInsured'
      ? setInsuredIdInsured(e.target.value)
      : e.target.name === 'insuredAccountIdCompte'
      ? setInsuredAccountIdCompte(e.target.value)
      : setProsProId(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/medical_events', allMedicalE)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      {message ? <p>{message}</p> : null}
      <h1>Ajout d&apos;un acte</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations Acte</legend>
          <div className='formData'>
            <label htmlFor='dateEvent'>
              Date de l&apos;acte<span> * </span>
            </label>
            <input
              type='date'
              id='dateEvent'
              name='dateEvent'
              onChange={handleChange}
              required
              value={dateEvent}
            />
          </div>
          <div className='formData'>
            <label htmlFor='amountEvent'>
              Montant de la consultation<span> * </span>
            </label>
            <input
              type='text'
              id='amountEvent'
              name='amountEvent'
              onChange={handleChange}
              required
              value={amountEvent}
            />
          </div>
          <div className='formData'>
            <label htmlFor='secuStatus'>
              Status du dossier à la secu<span> * </span>
            </label>
            <input
              id='secuStatus'
              name='secuStatus'
              onChange={handleChange}
              required
              value={secuStatus}
            />
          </div>

          <div className='formData'>
            <label htmlFor='insuranceStatus'>
              Status du dossier à la mutuelle<span> * </span>
            </label>
            <input
              id='insuranceStatus'
              name='insuranceStatus'
              onChange={handleChange}
              required
              value={insuranceStatus}
            />
          </div>
          <div className='formData'>
            <label htmlFor='specialitiesIdSpeciality'>
              Spécialité medecin<span> * </span>
            </label>
            <input
              id='specialitiesIdSpeciality'
              name='specialitiesIdSpeciality'
              onChange={handleChange}
              required
              value={specialitiesIdSpeciality}
            />
          </div>
          <div className='formData'>
            <label htmlFor='insuredIdInsured'>
              Assuré concerné<span> * </span>
            </label>
            <input
              id='insuredIdInsured'
              name='insuredIdInsured'
              onChange={handleChange}
              required
              value={insuredIdInsured}
            />
          </div>
          <div className='formData'>
            <label htmlFor='insuredAccountIdCompte'>
              compte relié<span> * </span>
            </label>
            <input
              id='insuredAccountIdCompte'
              name='insuredAccountIdCompte'
              onChange={handleChange}
              required
              value={insuredAccountIdCompte}
            />
          </div>
          <div className='formData'>
            <label htmlFor='prosProId'>
              Professionnel<span> * </span>
            </label>
            <input
              id='prosProId'
              name='prosProId'
              onChange={handleChange}
              required
              value={prosProId}
            />
          </div>
          <hr />
          <p>
            <span> * </span> required.
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

export default FormAdminMedicalEvent
