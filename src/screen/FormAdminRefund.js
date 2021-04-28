import './Form.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

const FormAdminRefund = () => {
  const [idInsurance, setIdInsurance] = useState(null)
  const [idMedEvent, setIdMedEvent] = useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3000/health_insurance')
      .then(res => res.data)
      .then(data => setIdInsurance(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
    axios
      .get('http://localhost:3000/medical_events')
      .then(res => res.data)
      .then(data => setIdMedEvent(data))
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [institute, setInstitute] = useState('')
  const [medicalAct, setMedicalAct] = useState('')
  const [message, setMessage] = useState(null)

  const allPost = {
    Amount_Refund: amount,
    Date_Refund: date,
    Health_insurance_id_Mutuelle: institute,
    Medical_events_id_Actes: medicalAct
  }

  const handleChange = e => {
    e.target.name === 'amount'
      ? setAmount(e.target.value)
      : e.target.name === 'date'
      ? setDate(e.target.value)
      : e.target.name === 'institute'
      ? setInstitute(e.target.value)
      : setMedicalAct(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/refund', allPost)
      .then(res => {
        setMessage(
          res.data + ' of ' + amount + ' from health insurance ' + institute
        )
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Modification d&apos;un Remboursement</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          {/* <legend>information sur le Remboursement : </legend> */}
          <fieldset className='formData'>
            <legend htmlFor='amount'>
              Montant du remboursement<span> * </span>
            </legend>
            <input
              type='number'
              id='amount'
              name='amount'
              onChange={handleChange}
              placeholder='nombre sans devise'
              required
              value={amount}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='date'>
              Date du remboursement<span> * </span>
            </legend>
            <input
              type='date'
              id='date'
              name='date'
              onChange={handleChange}
              required
              value={date}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='institute'>
              Institut auteur du remboursement<span> * </span>
            </legend>
            <select id='institute' name='institute' onChange={handleChange}>
              <option>Sélectionne une assurance</option>
              {idInsurance
                ? idInsurance.map(insurance => (
                    <option
                      key={insurance.id_insurance}
                      value={insurance.id_insurance}
                    >
                      {insurance.insurance_name}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='medical-act'>
              Acte médical concerné<span> * </span>
            </legend>
            <select id='medical-act' name='medical-act' onChange={handleChange}>
              <option>Sélectionne un acte</option>
              {idMedEvent
                ? idMedEvent.map(event => (
                    <option key={event.id_med_event} value={event.id_med_event}>
                      Consultation {event.speciality_name} du{' '}
                      {new Date(event.Date_Event).toLocaleDateString()}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
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

export default FormAdminRefund
