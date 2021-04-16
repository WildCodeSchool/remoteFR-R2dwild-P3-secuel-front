import { useEffect, useState } from 'react'
import axios from 'axios'

import './Form.css'

const FormAdminNotifInsured = () => {
  const [idNotif, setIdNotif] = useState(null)
  const [idInsured, setIdInsured] = useState(null)
  const [idAccount, setIdAccount] = useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3000/notifications')
      .then(res => res.data)
      .then(data => setIdNotif(data))
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
  }, [])
  const [insured, setInsured] = useState('')
  const [message, setMessage] = useState(null)
  const [notif, setNotif] = useState('')
  const [compte, setCompte] = useState('')
  const [status, setStatus] = useState('')
  const allPost = {
    notifications_id_Notification: notif,
    insured_id_Insured: insured,
    insured_Account_id_Compte: compte,
    Status: status
  }

  const handleChange = e => {
    e.target.name === 'notif'
      ? setNotif(e.target.value)
      : e.target.name === 'insured'
      ? setInsured(e.target.value)
      : e.target.name === 'compte'
      ? setCompte(e.target.value)
      : setStatus(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/notif_insured', allPost)
      .then(res => {
        setMessage(res.data)
      })
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }

  return (
    <div className='form'>
      <h1>Création de notification</h1>
      {message ? <p>{message}</p> : null}
      <form onSubmit={submitForm}>
        <div className='containerAdmin'>
          <fieldset className='formData'>
            <legend htmlFor='notif'>
              Id de notif <span> * </span>
            </legend>
            <select id='notif' name='notif' onChange={handleChange}>
              <option>Sélectionne une notification</option>
              {idNotif
                ? idNotif.map(notif => (
                    <option
                      key={notif.id_Notification}
                      value={notif.id_Notification}
                    >
                      {notif.type}
                    </option>
                  ))
                : null}
            </select>
          </fieldset>
          <fieldset className='formData'>
            <legend htmlFor='insured'>
              Id de l&apos;assuré concerné <span> * </span>
            </legend>
            <select id='insured' name='insured' onChange={handleChange}>
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
            <legend htmlFor='compte'>
              Id du compte concerné <span> * </span>
            </legend>
            <select id='compte' name='compte' onChange={handleChange}>
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
            <legend htmlFor='status'>
              Statut de la notif <span> * </span>
            </legend>
            <select id='status' name='status' onChange={handleChange}>
              <option>Sélectionne un status</option>
              <option value={0}>Non lu</option>
              <option value={1}>Lu</option>
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

export default FormAdminNotifInsured
