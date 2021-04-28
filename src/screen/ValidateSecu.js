import { useState } from 'react'
import { Link } from 'react-router-dom'

import './ValidateSecu.css'

const ValidateSecu = origin => {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }
  return (
    <div className='validateSecu'>
      <p>
        <span>Confirmez le code de sécurité</span>
      </p>
      <img />
      <div>
        {origin.location.props ? (
          <p id='pointChargement'>•••••</p>
        ) : (
          <p id='pointChargement'>•••</p>
        )}
        Indiquez <span>le code de sécurité</span> que vous avez reçu
      </div>
      <input type='text' required onChange={handleChange} />
      {input === '' ? (
        <p className='forbidden'>Validez</p>
      ) : (
        <Link
          to={{ pathname: '/congratulation', props: origin.location.props }}
        >
          Validez
        </Link>
      )}
      <p className='gold'>
        Vous n&apos;avez pas reçu le code de sécurité ?<br />
        cliquez ici pour renvoyer un autre code de sécurité
      </p>
    </div>
  )
}

export default ValidateSecu
