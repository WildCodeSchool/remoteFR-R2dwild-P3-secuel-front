import axios from 'axios'
import PropTypes from 'prop-types'
import { useState } from 'react'

import './Login.css'

const Login = ({ setToken }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const loginUser = async credentials => {
    axios.post(`http://localhost:8080/login`).then(res => setToken(res.data))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    loginUser({
      username,
      password
    })
  }

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
