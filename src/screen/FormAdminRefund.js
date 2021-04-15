import { useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminRefund = () => {
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
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création d&apos;un Remboursement</h1>
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
            <input
              type='text'
              id='institute'
              name='institute'
              onChange={handleChange}
              required
              value={institute}
            />
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='medical-act'>
              Acte médical concerné<span> * </span>
            </legend>
            <input
              type='text'
              id='medical-act'
              name='medical-act'
              onChange={handleChange}
              required
              value={medicalAct}
            />
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
