import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import eventArray from '../data/fakejson/fakedata.json'

import 'react-datepicker/dist/react-datepicker.css'
import './Notification.css'

const Notification = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    // Body du composant
    <div className='NotifBody'>
      <h1>Vos Notifications</h1>
      <h2>Profil</h2>
      <h1>
        <span style={{ color: 'blue' }}>
          {eventArray[0]['prénom'] + '   ' + eventArray[0]['Nom']}
        </span>
      </h1>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <div className='NotifNumber'>
        Vous avez 
        <span style={{ color: 'blue' }}>
          {eventArray.filter(data => data['prénom'] === 'Jean').length}
        </span>
         notification(s)
      </div>
      {/* Légende des vignettes  */}
      <ul className='LegendRaw'>
        <ul className='StarNText'>
          <li className='Star'>🟢</li>{' '}
          <li className='TextLegend'>Tout va bien !</li>
        </ul>
        <ul className='StarNText'>
          <li className='Star'>🟡</li>
          <li className='TextLegend'>
            C&apos;est un peu long donc voyons ce qu&apos;il se passe
          </li>
        </ul>
        <ul className='StarNText'>
          <li className='Star'>🔴</li>{' '}
          <li className='TextLegend'>Il y a un petit soucis</li>
        </ul>
      </ul>
      <section className='NotifList'>
        <section className='NotifHeader'>
          {/* Pour ajouter une icone de statut sur l'évenement  */}
          <div className='Vignette'>🔴</div>
          {/* Informations d'entête de la notification */}
          <ul className='NotifListHeader'>
            <li>Notification du XXXXX</li>
            <li>
              Vous avez reçu le paiement de XX de votre mutuelle le XX/XX/XX
              pour :
            </li>
            <li>Bénéficiaire: XXXXX</li>
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
              <th>Statut du dossier </th>
              <th>Montant remboursé par la Sécurité Sociale</th>
              <th>Date de remboursement Sécurité Sociale</th>
              <th>Reste à charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XX/XX/XX</td>
              <td>XXXXXXXX</td>
              <td>XXXX XXXX XXXXXXXXXXX</td>
              <td>XX €</td>
              <td>XXXXXXX</td>
              <td>XX,XX €</td>
              <td>XX/XX/XX</td>
              <td>XX €</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Notification
