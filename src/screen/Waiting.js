import { Link } from 'react-router-dom'

import './Waiting.css'

import profil from '../data/images/profil.png'

const Waiting = origin => {
  return (
    <div className='waiting'>
      <p>
        <span>
          Restez connecté(e) !<br /> Nous obtenons l&apos;accord du détenteur du
          numéro
        </span>
      </p>
      {origin.location.props ? (
        <p id='pointChargement'>
          ••••<span id='spanChargement'>•</span>
        </p>
      ) : (
        <p id='pointChargement'>
          ••<span id='spanChargement'>•</span>
        </p>
      )}
      <img src={profil} alt='avatar' className='profil' />
      <p>
        Un <span>code de sécurité</span> sera envoyé pour confirmer
        l&apos;accord d&apos;utiliser ce numéro
      </p>
      <Link to={{ pathname: '/validatesecu', props: origin.location.props }}>
        Envoi par SMS
      </Link>
      <Link to={{ pathname: '/validatesecu', props: origin.location.props }}>
        Envoi par Email
      </Link>
    </div>
  )
}

export default Waiting
