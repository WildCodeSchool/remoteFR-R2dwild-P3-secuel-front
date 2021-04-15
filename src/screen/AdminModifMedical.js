import './Form.css'

import { Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axios from 'axios'

const AdminModifMedical = Data => {
  useEffect(() => {
    axios
      .get(`http://localhost:3000/medical_events/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setAmountEvent(data.amount_Event)
        setDateEvent(
          new Date(data.Date_Event)
            .toLocaleDateString()
            .split('/')
            .reverse()
            .join('-')
        )
        setInsuranceStatus(data.insurance_status)
        setInsuredAccountIdCompte(data.Insured_Account_id_Compte)
        setInsuredIdInsured(data.Insured_id_Insured)
        setProsProId(data.Pros_pro_id)
        setSecuStatus(data.secu_status)
        setSpecialitiesIdSpeciality(data.Specialities_id_speciality)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  const [amountEvent, setAmountEvent] = useState('')
  const [dateEvent, setDateEvent] = useState('')
  const [insuranceStatus, setInsuranceStatus] = useState('')
  const [insuredAccountIdCompte, setInsuredAccountIdCompte] = useState('')
  const [insuredIdInsured, setInsuredIdInsured] = useState('')
  const [message, setMessage] = useState(null)
  const [prosProId, setProsProId] = useState('')
  const [secuStatus, setSecuStatus] = useState('')
  const [specialitiesIdSpeciality, setSpecialitiesIdSpeciality] = useState('')
  const allPost = {
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
      .put('http://localhost:3000/medical_events', allPost)
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
          {/* <legend>Informations Acte</legend> */}
          <div className='formData'>
            <label htmlFor='dateEvent'>
              Date de l&apos;acte<span> * </span>
            </label>
            <input
              type='text'
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
              placeholder='chiffre(s) sans devise'
              onChange={handleChange}
              required
              value={amountEvent}
            />
          </div>
          <div className='formData'>
            <label htmlFor='secuStatus'>
              Statut du dossier à la Sécu<span> * </span>
            </label>
            <input
              id='secuStatus'
              name='secuStatus'
              placeholder='traité || non traité || en cours de traitement'
              onChange={handleChange}
              required
              value={secuStatus}
            />
          </div>

          <div className='formData'>
            <label htmlFor='insuranceStatus'>
              Statut du dossier à la mutuelle<span> * </span>
            </label>
            <input
              id='insuranceStatus'
              name='insuranceStatus'
              placeholder='traité || non traité || en cours de traitement'
              onChange={handleChange}
              required
              value={insuranceStatus}
            />
          </div>
          <div className='formData'>
            <label htmlFor='specialitiesIdSpeciality'>
              Spécialité médecin<span> * </span>
            </label>
            <input
              id='specialitiesIdSpeciality'
              name='specialitiesIdSpeciality'
              placeholder='XX'
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
              placeholder='XX'
              onChange={handleChange}
              required
              value={insuredIdInsured}
            />
          </div>
          <div className='formData'>
            <label htmlFor='insuredAccountIdCompte'>
              Numéro de compte relié<span> * </span>
            </label>
            <input
              id='insuredAccountIdCompte'
              name='insuredAccountIdCompte'
              placeholder='XX'
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
              placeholder='XX'
              onChange={handleChange}
              required
              value={prosProId}
            />
          </div>
          <hr />
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input className='btnEnvoyer' type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default AdminModifMedical
