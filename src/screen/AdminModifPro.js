import './Form.css'

import { useEffect, useState } from 'react'

import axios from 'axios'

const FormAdminPros = Data => {
  const [name, setName] = useState('')

  const allPost = {
    pro_name: name
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3000/pros/${Data.match.params.id}`)
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setName(data[0].pro_name)
      })
      .catch(e => {
        console.log(`Erreur lors de la reception : ${e.message}`)
      })
  }, [])

  const handleChange = e => {
    setName(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    axios.put(`http://localhost:3000/pros/${Data.match.params.id}`, allPost)
  }

  return (
    <div className='form'>
      <h1>Modification d&apos;un professionnel de santé</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          {/* <legend>information sur le professionnel : </legend> */}
          <div className='formData'>
            <label htmlFor='name'>
              Nom du médecin <span> * </span>
            </label>
            <input
              className='saisie'
              id='name'
              name='name'
              onChange={handleChange}
              placeholder='ex: Bigotte'
              required
              type='text'
              value={name}
            />
          </div>
          <p>
            <span> * </span> Obligatoire
          </p>
          <div className='formData'>
            <input className='btnEnvoyer' type='submit' value='mettre à jour' />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormAdminPros
