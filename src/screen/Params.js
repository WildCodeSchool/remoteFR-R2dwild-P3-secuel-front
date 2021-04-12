import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Params.css'

import blueTrash from '../data/images/blueTrash.png'
import colors from '../data/fakejson/colors.json'

const Params = () => {
  const [color, setColor] = useState('#34568B')
  console.log('couleur' + setColor)
  return (
    <div className='paramsBody'>
      <h1 id='titreNotif'>Vos Paramètres</h1>
      <div className='divParams'>
        <div className='affichageCompte'>
          <p id='titreAfficheCompte'>
            Choisissez l&apos;affichage de vos comptes
          </p>
          <ul className='listeParams'>
            <li>
              <input type='radio' />
              Tous les assurés
            </li>
            <li>
              <input type='radio' />
              Assuré(e) principal(e)
            </li>
          </ul>
          <button id='btnAppliquerListe'>Appliquer</button>
        </div>
        <p id='titreSupprimerCompte'>Vos comptes</p>
        <input type='color' onChange={e => console.log(e.target.value)} />
        <div className='divVosCompte'>
          <ul className='vosComptes'>
            <li style={{ background: `red` }}>
              Jean Dupont <img src={blueTrash} className='blueTrash' />
            </li>
            <li className='compteAssure'>
              Léa Dupont
              <img src={blueTrash} className='blueTrash' />
            </li>
            <li className='compteAssure'>
              Lucas Dupont
              <img src={blueTrash} className='blueTrash' />
            </li>
            <li className='compteAssure'>
              Marie Dupont
              <img src={blueTrash} className='blueTrash' />
            </li>
          </ul>
        </div>
        <Link to={'/addsecu'}>
          <button id='btnAddAccount'>+ Ajouter un compte</button>
        </Link>
      </div>
    </div>
  )
}

export default Params
