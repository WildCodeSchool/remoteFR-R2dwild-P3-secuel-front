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
          name='insurance'
          onClick={insurance}
        >
          Liste des instituts d&apos;assurance
        </button>
        <button
          type='button'
          className='buttonGradient'
          name='insured'
          onClick={insured}
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
          name='spe'
          onClick={spe}
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
        {current === 'account' ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Login/Email</th>
                <th>Mot de passe</th>
              </tr>
            </thead>
            <tbody>
              {dataAccount.map(d => (
                <tr key={d.id_Compte}>
                  <td>{d.id_Compte}</td>
                  <td>{d.account_name}</td>
                  <td>{d.Login}</td>
                  <td>{d.Password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'insured' ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Numéro de Sécurité</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Mot de passe</th>
                <th>Date de naissance</th>
                <th>Id compte</th>
              </tr>
            </thead>
            <tbody>
              {dataInsured.map(d => (
                <tr key={d.id_Insured}>
                  <td>{d.id_Insured}</td>
                  <td>{d.lastname}</td>
                  <td>{d.firstname}</td>
                  <td>{d.social_security_num}</td>
                  <td>{d.email}</td>
                  <td>{d.tel}</td>
                  <td>{d.Password}</td>
                  <td>{d.birth_date}</td>
                  <td>{d.Account_id_Compte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'actesMed' ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Date évenement</th>
                <th>Montant</th>
                <th>Statut Sécu</th>
                <th>Statut Mutuelle</th>
                <th>Id spécialité</th>
                <th>Id assuré</th>
                <th>Id compte</th>
                <th>Ip professionnel</th>
              </tr>
            </thead>
            <tbody>
              {dataMedEvent.map(d => (
                <tr key={d.id_med_event}>
                  <td>{d.id_med_event}</td>
                  <td>{d.Date_Event}</td>
                  <td>{d.amount_Event}</td>
                  <td>{d.secu_status}</td>
                  <td>{d.insurance_status}</td>
                  <td>{d.Specialities_id_speciality}</td>
                  <td>{d.Insured_id_Insured}</td>
                  <td>{d.Insured_Account_id_Compte}</td>
                  <td>{d.Pros_pro_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'insurance' ? (
          <table>
            <thead>
              <tr>
                <th>Id institut d&apos;assurance</th>
                <th>Nom institut</th>
              </tr>
            </thead>
            <tbody>
              {dataHealthInsurance.map(d => (
                <tr key={d.id_insurance}>
                  <td>{d.id_insurance}</td>
                  <td>{d.insurance_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'spe' ? (
          <table>
            <thead>
              <tr>
                <th>Id spécialité</th>
                <th>Nom spécialité</th>
              </tr>
            </thead>
            <tbody>
              {dataSpeciality.map(d => (
                <tr key={d.id_speciality}>
                  <td>{d.id_speciality}</td>
                  <td>{d.speciality_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'pro' ? (
          <table>
            <thead>
              <tr>
                <th>Id professionnel</th>
                <th>Nom professionnel</th>
              </tr>
            </thead>
            <tbody>
              {dataPros.map(d => (
                <tr key={d.pro_id}>
                  <td>{d.pro_id}</td>
                  <td>{d.pro_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'proSpe' ? (
          <table>
            <thead>
              <tr>
                <th>Id Pro Spécialité</th>
                <th>Id Spécialité</th>
                <th>Nom spécialité</th>
                <th>Id pro</th>
                <th>Nom pro</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {dataProSpe.map(d => (
                <tr key={d.id_Pros_Speciality}>
                  <td>{d.id_Pros_Speciality}</td>
                  <td>{d.id_speciality}</td>
                  <td>{d.speciality_name}</td>
                  <td>{d.pros_pro_id}</td>
                  <td>{d.pro_name}</td>
                  <td>{d.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'notif' ? (
          <table>
            <thead>
              <tr>
                <th>Id notification</th>
                <th>Type</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {dataNotification.map(d => (
                <tr key={d.id_Notification}>
                  <td>{d.id_Notification}</td>
                  <td>{d.type}</td>
                  <td>{d.Message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'notifInsured' ? (
          <table>
            <thead>
              <tr>
                <th>Id lien notif/assuré</th>
                <th>Id notification</th>
                <th>Id assuré</th>
                <th>Id compte/assuré</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataNotifInsured.map(d => (
                <tr key={d.id_notif_insured}>
                  <td>{d.id_notif_insured}</td>
                  <td>{d.notifications_id_Notification}</td>
                  <td>{d.insured_id_Insured}</td>
                  <td>{d.insured_Account_id_Compte}</td>
                  <td>{d.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : current === 'refund' ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Montant remboursé</th>
                <th>Date remboursement</th>
                <th>Id institut</th>
                <th>Id acte médical</th>
              </tr>
            </thead>
            <tbody>
              {dataRefund.map(d => (
                <tr key={d.id_refund}>
                  <td>{d.id_refund}</td>
                  <td>{d.Amount_Refund}</td>
                  <td>{new Date(d.Date_Refund).toString().split(' 00')[0]}</td>
                  <td>{d.Health_insurance_id_Mutuelle}</td>
                  <td>{d.Medical_events_id_Actes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      {message !== '' ? <div>{message}</div> : null}
    </div>
  )
}
export default ListBddEntry