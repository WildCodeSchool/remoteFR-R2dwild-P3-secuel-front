import { useEffect, useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminMedicalEvent = () => {
  const [idSpe, setIdSpe] = useState(null)
  const [idInsured, setIdInsured] = useState(null)
  const [idAccount, setIdAccount] = useState(null)
  const [idPros, setIdPros] = useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3000/specialities')
      .then(res => res.data)
      .then(data => setIdSpe(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    axios
      .get('http://localhost:3000/insured')
      .then(res => res.data)
      .then(data => setIdInsured(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    axios
      .get('http://localhost:3000/account')
      .then(res => res.data)
      .then(data => setIdAccount(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    axios
      .get('http://localhost:3000/pros')
      .then(res => res.data)
      .then(data => setIdPros(data))
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
        setMessage(res.data + ' ' + dateEvent + ' of ' + amountEvent)
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
            <select id='secuStatus' name='secuStatus' onChange={handleChange}>
              <option>Sélectionne un status</option>
              <option value='Traité'>Traité</option>
              <option value='Non traité'>Non traité</option>
              <option value='En cours de traitement'>
                En cours de traitement
              </option>
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insuranceStatus'>
              Statut du dossier à la mutuelle<span> * </span>
            </legend>
            <select
              id='insuranceStatus'
              name='insuranceStatus'
              onChange={handleChange}
            >
              <option>Sélectionne un status</option>
              <option value='Traité'>Traité</option>
              <option value='Non traité'>Non traité</option>
              <option value='En cours de traitement'>
                En cours de traitement
              </option>
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='specialitiesIdSpeciality'>
              Spécialité médecin<span> * </span>
            </legend>
            <select
              id='specialitiesIdSpeciality'
              name='specialitiesIdSpeciality'
              onChange={handleChange}
            >
              <option>Sélectionne une spécialité</option>
              {idSpe
                ? idSpe.map(spe => (
                    <option key={spe.id_speciality} value={spe.id_speciality}>
                      {spe.speciality_name}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insuredIdInsured'>
              Assuré concerné<span> * </span>
            </legend>
            <select
              id='insuredIdInsured'
              name='insuredIdInsured'
              onChange={handleChange}
            >
              <option>Sélectionne un assuré</option>
              {idInsured
                ? idInsured.map(insured => (
                    <option key={insured.id_Insured} value={insured.id_Insured}>
                      {insured.firstname + ' ' + insured.lastname}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insuredAccountIdCompte'>
              Compte relié<span> * </span>
            </legend>
            <select
              id='insuredAccountIdCompte'
              name='insuredAccountIdCompte'
              onChange={handleChange}
            >
              <option>Sélectionne un compte</option>
              {idAccount
                ? idAccount.map(account => (
                    <option key={account.id_Compte} value={account.id_Compte}>
                      {account.account_name}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='prosProId'>
              Professionnel<span> * </span>
            </legend>
            <select id='prosProId' name='prosProId' onChange={handleChange}>
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

export default FormAdminMedicalEvent
