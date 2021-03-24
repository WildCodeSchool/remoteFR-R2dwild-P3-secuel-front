import axios from 'axios'
import { useState } from 'react'

import './FormAdminRefund.css'

const FormAdminRefund = () => {
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [institute, setInstitute] = useState('')
  const [medicalAct, setMedicalAct] = useState('')
  
  const allPost = {
    Amount_Refund : amount,
    Date_Refund : date,
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
    : e.target.name === 'medical-act'
    ? setMedicalAct(e.target.value)
      
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('localhost:3000/refund', allPost)
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
      <h1>Création d'un Remboursement</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>information sur le Remboursement : </legend>
          <div className='form-data'>
            <label htmlFor='amount'>
              Nom<span> * </span>
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
          <div className='form-data'>
            <label htmlFor='date'>
              Nom<span> * </span>
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
          <div className='form-data'>
            <label htmlFor='institute'>
              Nom<span> * </span>
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
          <div className='form-data'>
            <label htmlFor='medical-act'>
              Nom<span> * </span>
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
          <div className='form-data'>
            <input type='submit' value='Envoyer' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormAdminRefund ;
