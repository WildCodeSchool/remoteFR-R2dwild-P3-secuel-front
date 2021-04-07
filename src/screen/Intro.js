// import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Intro.css'

import logo from '../data/images/logo_elan.png'
import why from '../data/images/why.png'

const Intro = visitor => {
  // const [username, setUserName] = useState()
  // const [password, setPassword] = useState()
  const handleChange = e => {
    if (e.target.value.includes('@')) {
      visitor.setVisitor(e.target.value.match(/^([^@]*)@/)[1])
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='bigLogo' />
      <div>
        <h1 id='optezVision'>Optez pour une vision claire</h1>
        <p id='claireSanté'>de votre gestion de santé</p>
      </div>
      <p id='seConnecter'>Se connecter</p>
      <form id='formConnexion'>
        <label>
          <p>Identifiant</p>
          <input
            type='text'
            id='inputIdentifiant'
            placeholder='votremail@exemple.com'
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Mot de passe</p>
          <input type='password' placeholder='votremotdepasse' />
        </label>
        <div className='connexion'>
          <Link to='/home'>
            <button>Je me connecte</button>
          </Link>
        </div>
      </form>
      <div className='connect'>
        <p>
          Nouvel utilisateur ? <Link to='subscribe'>cliquez ici</Link>
        </p>
      </div>
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
        <p className='straight'></p>
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
