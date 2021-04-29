import { useEffect, useState } from 'react'
import axios from 'axios'

import './Form.css'

const AdminModifMedical = Data => {
  useEffect(() => {
    axios
      .get(`http://localhost:3000/medical_events/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
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
      .put(
        `http://localhost:3000/medical_events/${Data.match.params.id}`,
        allPost
      )
      .then(() => {
        setMessage('Modification réussie')
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      {message ? <p>{message}</p> : null}
      <h1>Modification d&apos;un acte</h1>
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          {/* <legend>Informations Acte</legend> */}
          <fieldset className='formData'>
            <legend htmlFor='dateEvent'>
              Date de l&apos;acte<span> * </span>
            </legend>
            <input
              type='date'
              id='dateEvent'
              name='dateEvent'
              onChange={handleChange}
              required
              value={dateEvent}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='amountEvent'>
              Montant de la consultation<span> * </span>
            </legend>
            <input
              type='text'
              id='amountEvent'
              name='amountEvent'
              placeholder='chiffre(s) sans devise'
              onChange={handleChange}
              required
              value={amountEvent}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='secuStatus'>
              Statut du dossier à la Sécu<span> * </span>
            </legend>
            <input
              id='secuStatus'
              name='secuStatus'
              onChange={handleChange}
              value={secuStatus}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insuranceStatus'>
              Statut du dossier à la mutuelle<span> * </span>
            </legend>
            <input
              id='insuranceStatus'
              name='insuranceStatus'
              onChange={handleChange}
              value={insuranceStatus}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='specialitiesIdSpeciality'>
              Spécialité médecin<span> * </span>
            </legend>
            <input
              id='specialitiesIdSpeciality'
              name='specialitiesIdSpeciality'
              onChange={handleChange}
              value={specialitiesIdSpeciality}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insuredIdInsured'>
              Assuré concerné<span> * </span>
            </legend>
            <input
              id='insuredIdInsured'
              name='insuredIdInsured'
              onChange={handleChange}
              value={insuredIdInsured}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insuredAccountIdCompte'>
              Compte relié<span> * </span>
            </legend>
            <input
              id='insuredAccountIdCompte'
              name='insuredAccountIdCompte'
              onChange={handleChange}
              value={insuredAccountIdCompte}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='prosProId'>
              Professionnel<span> * </span>
            </legend>
            <input
              id='prosProId'
              name='prosProId'
              onChange={handleChange}
              value={prosProId}
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

export default AdminModifMedical
