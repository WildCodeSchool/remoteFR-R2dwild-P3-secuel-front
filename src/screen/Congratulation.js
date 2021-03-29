import { Link } from 'react-router-dom'
import './Congratulation.css'

const Congratulation = visitor => {
  return (
    <div className='congratulation'>
      <p>
        <span>Bravo {visitor.visitor} !</span>
      </p>
      <p>
        <span>
          Le numéro de Sécurité Sociale {visitor.numSecu} est rattraché à votre
          profil
        </span>
      </p>
      <p className='link'>
        <Link to='/addmutu'>Ajouter une mutuelle</Link>
      </p>
      <p className='addsecu'>
        <Link to='/addsecu'>
          Vous souhaitez ajouter un autre numéro de Sécurité Sociale ?
        </Link>
      </p>
      <p className='link'>
        <Link to='/home'>Aucune mutuelle à ajouter</Link>
      </p>
    </div>
  )
}

export default Congratulation
