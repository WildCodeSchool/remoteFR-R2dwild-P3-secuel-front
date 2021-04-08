import './ListBddEntry.css'

import axios from 'axios'
import { useState } from 'react'

const ListBddEntry = () => {
  const [message, setMessage] = useState('')
  const [dataAccount, setDataAccount] = useState([])
  const [dataHealthInsurance, setDataHealthInsurance] = useState([])
  const [dataInsured, setDataInsured] = useState([])
  const [dataMedEvent, setDataMedEvent] = useState([])
  const [dataNotification, setDataNotification] = useState([])
  const [dataNotifInsured, setDataNotInsured] = useState([])
  const [dataPros, setDataPros] = useState([])
  const [dataProSpe, setDataProSpe] = useState([])
  const [dataRefund, setDataRefund] = useState([])
  const [dataSpeciality, setDataSpeciality] = useState([])
  const [current, setCurrent] = useState('')
  // recuperer les Accounts

  const accounts = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/Account')
      .then(res => res.data)
      .then(
        data => setDataAccount(data) || console.log(dataAccount),
        console.log(current)
      )

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  const insured = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/insured')
      .then(res => res.data)
      .then(data => setDataInsured(data))
      .catch(e => {
        console.error(e)
        setMessage(`Erreur lors de la reception des assurés : ${e.message}`)
      })
  }

  const actesMed = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/medical_events')
      .then(res => res.data)
      .then(data => setDataMedEvent(data))
      .catch(e => {
        setMessage(`Erreur lors de la création : ${e.message}`)
      })
  }
  const insurance = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/health_insurance')
      .then(res => res.data)
      .then(data => setDataHealthInsurance(data))

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  const spe = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/specialities')
      .then(res => res.data)
      .then(data => setDataSpeciality(data))

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  const pro = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/pros')
      .then(res => res.data)
      .then(data => setDataPros(data))

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  const proSpe = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/pros_speciality')
      .then(res => res.data)
      .then(data => setDataProSpe(data))

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  const notif = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/notifications')
      .then(res => res.data)
      .then(data => setDataNotification(data))

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  const notifInsured = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/notif_insured')
      .then(res => res.data)
      .then(data => setDataNotInsured(data))

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  const refund = e => {
    e.preventDefault()
    setCurrent(e.target.name)
    axios
      .get('http://localhost:3000/refund')
      .then(res => res.data)
      .then(data => setDataRefund(data))

      .catch(e => {
        setMessage(`Erreur lors de la reception des comptes : ${e.message}`)
      })
  }

  return (
    <div>
      <div className='buttonList'>
        <button
          type='button'
          className='buttonGradient'
          name='account'
          onClick={accounts}
        >
          Liste des comptes
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='insured'
          onClick={insured}
        >
          Liste des instituts d&apos;assurance
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='spe'
          onClick={spe}
        >
          Liste des assurés
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='actesMed'
          onClick={actesMed}
        >
          Liste des actes médicaux
        </button>

        <button
          type='button'
          className='buttonGradient'
          name='notif'
          onClick={notif}
        >
          Liste des notifications
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='notifInsured'
          onClick={notifInsured}
        >
          Liste des notifications par Assuré
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='pro'
          onClick={pro}
        >
          Liste des pro
        </button>

        <button
          type='button'
          className='buttonGradient'
          name='proSpe'
          onClick={proSpe}
        >
          Liste des Spé par Pro
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='insurance'
          onClick={insurance}
        >
          Liste des spécialités
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='refund'
          onClick={refund}
        >
          Liste des rmbts
        </button>
      </div>
      <div className='listResult'>
        {current === 'account'
          ? dataAccount.map(d => (
              <li key={d.id_Compte}>
                {d.id_Compte}, {d.account_name}, {d.Login}, {d.Password}
              </li>
            ))
          : current === 'insured'
          ? dataInsured.map(d => (
              <li key={d.id_Insured}>
                {d.id_Insured}, {d.lastname}, {d.firstname},{' '}
                {d.social_security_num},{d.email}, {d.tel}, {d.Password},{' '}
                {d.Password},{d.birth_date}, {d.Account_id_Compte}
              </li>
            ))
          : current === 'actesMed'
          ? dataMedEvent.map(d => (
              <li key={d.id_med_event}>
                {d.id_med_event}, {d.Date_Event}, {d.amount_Event},{' '}
                {d.secu_status},{d.insurance_status},{' '}
                {d.Specialities_id_speciality},{d.Insured_id_Insured},{' '}
                {d.Insured_Account_id_Compte},{d.Pros_pro_id}
              </li>
            ))
          : current === 'insurance'
          ? dataHealthInsurance.map(d => (
              <li key={d.id_insurance}>
                {d.id_insurance}, {d.insurance_name}
              </li>
            ))
          : current === 'spe'
          ? dataSpeciality.map(d => (
              <li key={d.id_speciality}>
                {d.id_speciality}, {d.speciality_name}
              </li>
            ))
          : current === 'pro'
          ? dataPros.map(d => (
              <li key={d.pro_id}>
                {d.pro_id}, {d.pro_name}
              </li>
            ))
          : current === 'proSpe'
          ? dataProSpe.map(d => (
              <li key={d.id_Pros_Speciality}>
                {d.id_Pros_Speciality},{d.id_speciality}, {d.speciality_name},
                {d.pros_pro_id},{d.pro_name},{d.Status}
              </li>
            ))
          : current === 'notif'
          ? dataNotification.map(d => (
              <li key={d.id_Pros_Speciality}>
                {d.id_Pros_Speciality}, {d.pros_pro_id}, {d.Message}
              </li>
            ))
          : current === 'notifInsured'
          ? dataNotifInsured.map(d => (
              <li key={d.id_notif_insured}>
                {d.id_notif_insured}, {d.notifications_id_Notification},{' '}
                {d.insured_id_Insured},{d.insured_Account_id_Compte}, {d.Status}
              </li>
            ))
          : current === 'refund'
          ? dataRefund.map(d => (
              <li key={d.id_refund}>
                {d.id_refund}, {d.Amount_Refund}, {d.Date_Refund},
                {d.Health_insurance_id_Mutuelle}, {d.Medical_events_id_Actes}
              </li>
            ))
          : null}
      </div>
      {message !== '' ? <div>{message}</div> : null}
    </div>
  )
}
export default ListBddEntry
