import './Form.css'

import axios from 'axios'
import { useState } from 'react'

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
        console.error(e)
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  const clickButton = e => {
    // preventDefault evite le rechargement de la page
    e.preventDefault()
    axios
      .get('http://localhost:3000/refund')
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.error(e)
      })
  }


  return (
    <div className='form'>
      <h1>Création d&apos;un Remboursement</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>information sur le Remboursement : </legend>
          <div className='formData'>
            <label htmlFor='amount'>
              Montant du remboursement<span> * </span>
            </label>
            <input
              type='number'
              id='amount'
              name='amount'
              onChange={handleChange}
              required
              value={amount}
            />
          </div>
          <div className='formData'>
            <label htmlFor='date'>
              Date du remboursement<span> * </span>
            </label>
            <input
              type='date'
              id='date'
              name='date'
              onChange={handleChange}
              required
              value={date}
            />
          </div>
          <div className='formData'>
            <label htmlFor='institute'>
              Institut auteur du remboursement<span> * </span>
            </label>
            <input
              type='text'
              id='institute'
              name='institute'
              onChange={handleChange}
              required
              value={institute}
            />
          </div>
          <div className='formData'>
            <label htmlFor='medical-act'>
              Acte médical concerné<span> * </span>
            </label>
            <input
              type='text'
              id='medical-act'
              name='medical-act'
              onChange={handleChange}
              required
              value={medicalAct}
            />
          </div>
          <p>
            <span> * </span> required.
          </p>
          <div className='formData'>
            <input type='submit' value='Envoyer'  />
          </div>
        </fieldset>
      </form>
      <button className='getBtn' type='button' onClick={clickButton}>liste des remboursement</button>
    </div>
  )
}

export default FormAdminRefund
