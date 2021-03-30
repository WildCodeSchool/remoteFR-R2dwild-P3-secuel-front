import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ValidateSecu.css'

const ValidateSecu = () => {
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
      <p>
        <p id='pointChargement'>
          •••••<span id='spanChargement'></span>
        </p>
        Indiquez <span>le code de sécurité</span> que vous avez reçu
      </p>
      <input type='text' required onChange={handleChange} />
      {input === '' ? (
        <p className='forbidden'>Validez</p>
      ) : (
        <Link to='/congratulation'>Validez</Link>
      )}
      <p className='gold'>
        Vous n&apos;avez pas reçu le code de sécurité ?<br />
        cliquez ici pour renvoyer un autre code de sécurité
      </p>
    </div>
  )
}

export default ValidateSecu
