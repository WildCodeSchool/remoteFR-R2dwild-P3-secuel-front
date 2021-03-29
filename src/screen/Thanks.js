import { Link } from 'react-router-dom'

import './Thanks.css'

const Thanks = visitor => {
  return (
    <div className='thanks'>
      <p>
        <span>
          Merci {visitor.visitor},<br />
          votre profil est validé !
        </span>
      </p>
      <p>
        Ajoutons maintenant vos comptes de <span>Sécurité Sociale</span> et de{' '}
        <span>Mutuelle</span>
      </p>
      <Link to='/addsecu'>Suivant</Link>
    </div>
  )
}

export default Thanks
