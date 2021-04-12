import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Params.css'

import blueTrash from '../data/images/blueTrash.png'
import colors from '../data/fakejson/colors.json'

const Params = () => {
  const [colorId, setColorId] = useState([])
  const [userId, setUserId] = useState([])

  function colorRandom() {
    colors
      .filter(e => e.id === Math.round(Math.random() * colors.length))
      .map(color => color.HEX)
      .toString()
  }
  function addColor() {
    setColorId(colorRandom.result)
    console.log(colorRandom.result)
  }
  function addUser() {
    setUserId('1')
  }
  function colorIdCombo() {
    setUserId.concat(setColorId)
  }

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
        <div className='divVosCompte'>
          <ul className='vosComptes'>
            <li style={{ background: `${colorRandom}` }}>
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
