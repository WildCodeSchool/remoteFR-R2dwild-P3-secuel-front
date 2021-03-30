import { Link } from 'react-router-dom'

import './Waiting.css'
import profil from '../data/images/profil.jpg'

const Waiting = () => {
  return (
    <div className='waiting'>
      <p>
        <span>
          Restez connecté(e) !<br /> Nous obtenons l&apos;accord du détenteur du
          numéro
        </span>
      </p>
      <p id='pointChargement'>
        ••••<span id='spanChargement'>•</span>
      </p>
      <img src={profil} alt='avatar' className='profil' />
      <p>
        <span>Un code de sécurité</span> sera envoyé pour confirmer
        l&apos;accord d&apos;utiliser ce numéro
      </p>
      <Link to='/validatesecu'>Envoi par SMS</Link>
      <Link to='/validatesecu'>Envoi par Email</Link>
    </div>
  )
}

export default Waiting
