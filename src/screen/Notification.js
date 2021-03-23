import DatePicker from 'react-datepicker'
import React, { useState } from 'react'

import eventArray from '../data/fakejson/fakedata.json'

import 'react-datepicker/dist/react-datepicker.css'
import './Notification.css'

const Notification = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    // Body du composant
    <div className='notifBody'>
      <h1 id='titreNotif'>Vos Notifications</h1>
      <h2>Profil</h2>
      <h1>
        <span style={{ color: 'blue' }}>
          {eventArray[0]['prénom'] + '   ' + eventArray[0]['Nom']}
        </span>
      </h1>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <div className='notifNumber'>
        Vous avez
        {eventArray.filter(data => data['prénom'] === 'Jean').length}
        notification(s)
      </div>
      {/* Légende des vignettes  */}
      <ul className='legendRaw'>
        <ul className='starNText'>
          <li className='starGreen'></li>{' '}
          <li className='textLegend'>Tout va bien !</li>
        </ul>
        <ul className='starNText'>
          <li className='star'>🟡</li>
          <li className='textLegend'>
            C&apos;est un peu long donc voyons ce qu&apos;il se passe
          </li>
        </ul>
        <ul className='starNText'>
          <li className='star'>🔴</li>{' '}
          <li className='textLegend'>Il y a un petit soucis</li>
        </ul>
      </ul>
      <section className='notifList'>
        <section className='notifHeader'>
          {/* Pour ajouter une icone de statut sur l'évenement  */}
          <div className='vignette'>🔴</div>
          {/* Informations d'entête de la notification */}
          <ul className='notifListHeader'>
            <li>Notification du XX/XX/XXXX</li>
            <li>
              Vous avez reçu le paiement de{' '}
              <span style={{ color: 'blue' }}>{eventArray[0]['Payeur']}</span>{' '}
              le{' '}
              <span style={{ color: 'blue' }}>
                {eventArray[0]['date de remboursement']}
              </span>{' '}
              pour :
              <span style={{ color: 'blue' }}>{eventArray[0]['prénom']}</span>
            </li>
          </ul>
        </section>
        {/* Tableau des données détaillées de remboursement(s) */}
        <table>
          <thead>
            <tr>
              <th>Date acte médical</th>
              <th>Type acte</th>
              <th>Nom professionnel de santé</th>
              <th>Montant Payé par le bénéficiaire</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span style={{ color: '#003049' }}>
                  {eventArray[0]['date acte médicale']}
                </span>
              </td>
              <td>
                <span style={{ color: '#003049' }}>
                  {eventArray[0]['Type acte']}
                </span>
              </td>
              <td>
                <span style={{ color: '#003049' }}>
                  {eventArray[0]['Nom professionnel de santé']}
                </span>
              </td>
              <td>
                <span style={{ color: '#003049' }}>
                  {eventArray[0]['Montant Payé']}€
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Statut du dossier </th>
              <th>Montant remboursé par la Sécurité Sociale</th>
              <th>Date de remboursement Sécurité Sociale</th>
              <th>Reste à charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span style={{ color: '#003049' }}>
                  {eventArray[0]['Statut du dossier']}
                </span>
              </td>
              <td>
                <span style={{ color: '#003049' }}>
                  {eventArray[0]['Montant remboursé']}€
                </span>
              </td>
              <td>
                <span style={{ color: '#003049' }}>
                  {eventArray[0]['date de remboursement']}
                </span>
              </td>
              <td>
                <span style={{ color: '#FCBF49', fontWeight: 'bolder' }}>
                  {parseInt(eventArray[0]['Montant Payé']) -
                    parseInt(eventArray[0]['Montant remboursé'])}
                  €
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Notification
