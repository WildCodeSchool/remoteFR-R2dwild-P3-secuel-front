/* eslint-disable react/no-unescaped-entities */
import axios from 'axios'
import { useState } from 'react'

import './FormAdminMedicalEvent.css'

const FormAdminMedicalEvent = () => {
  const [dateEvent, setDateEvent] = useState('')
  const [amountEvent, setAmountEvent] = useState('')
  const [secuStatus, setSecuStatus] = useState('')
  const [insuranceStatus, setInsuranceStatus] = useState('')
  const [specialitiesIdSpeciality, setSpecialitiesIdSpeciality] = useState('')
  const [insuredIdInsured, setInsuredIdInsured] = useState('')
  const [insuredAccountIdCompte, setInsuredAccountIdCompte] = useState('')
  const [prosProId, setProsProId] = useState('')
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
      .post('localhost:3000/medical_events', allMedicalE)
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
      <h1>Ajout d'un acte</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations Acte</legend>
          <div className='form-data'>
            <label htmlFor='dateEvent'>
              Date de l'acte<span> * </span>
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
          <div className='form-data'>
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
          <div className='form-data'>
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

          <div className='form-data'>
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
          <div className='form-data'>
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
          <div className='form-data'>
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
          <div className='form-data'>
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
          <div className='form-data'>
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
          <div className='form-data'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormAdminMedicalEvent;
