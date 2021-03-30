import React from 'react'
import { Link } from 'react-router-dom'

import './Params.css'

import blueTrash from '../data/images/blueTrash.png'

const Params = () => {
  return (
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
          <li className='compteAssure'>
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
      <Link to={'/form'}>
        <button id='btnAddAccount'>
          <a href='Javascript:history.go(-1)'></a>+ Ajouter un compte
        </button>
      </Link>
    </div>
  )
}
export default Params
