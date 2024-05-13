import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Userslice'

const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const Handlesubmit = (e) => {
    e.preventDefault()
    dispatch(login({
      name: name,
      email: email,
      password:password,
      loggedin: true,
    }))
  }

  return (
    <div className='login'>
      <form action="login_form" onSubmit={(e) => Handlesubmit(e)}>
        <h1>Login here</h1><br />
        <span><strong>Name:</strong></span>
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <br />
        <span><strong>Email:</strong></span>
        <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <br />
        <span><strong>Password:</strong></span>
        <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} /> <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login