// import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Intro.css'
import logo from '../data/images/logo_elan.png'
import why from '../data/images/why.png'

const Intro = () => {
  // const [username, setUserName] = useState()
  // const [password, setPassword] = useState()
  return (
    <div className='login'>
      <img src={logo} className='bigLogo' />
      <div>
        <h1>Optez pour une vision claire</h1>
        <p>de votre gestion de santé</p>
      </div>
      <h1>Se connecter</h1>
      <form>
        <label>
          <p>Identifiant</p>
          <input type='text' /*onChange={e => setUserName(e.target.value)}*/ />
        </label>
        <label>
          <p>Mot de passe</p>
          <input
            type='password' /*onChange={e => setPassword(e.target.value)}*/
          />
        </label>
        <div className='connexion'>
          <Link to='/home'>
            <button>Je me connecte</button>
          </Link>
        </div>
        <div className='subscribe'>
          <p>Pas de compte ?</p>
          <Link to='/subscribe'>Je crée mon compte</Link>
        </div>
      </form>
      <div className='why'>
        <p>Pourquoi choisir</p>
        <h1>ELAN ?</h1>
        <img src={why} />
      </div>
      <div className='info'>
        <p>★</p>
        <p>
          Pour une <span>plateforme unique</span> Sécurité Sociale et Mutuelle
        </p>
        <p>★</p>
        <p>
          Pour une vision <span>agrégée</span> de plusieurs Numéros de Sécurité
          Sociale et comptes Mutuelle
        </p>
        <p>★</p>
        <p>
          Pour une <span>visualisation</span> en un clic de tous les flux
          d&apos;une même famille
        </p>
        <p>★</p>
        <p>
          Pour un espace <span>sécurisé</span> des données de
          l&apos;administratif santé
        </p>
      </div>
      <div className='bottom'>
        <p className='line'></p>
        <p>
          Intéressé(e) ? Créez votre compte en quelques clics et surtout en
          moins de 3 minutes
        </p>
        <Link to='/subscribe'>Je crée mon compte</Link>
      </div>
    </div>
  )
}
export default Intro
