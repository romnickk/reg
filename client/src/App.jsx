import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {
  const [name , setName] = useState();
  const [username , serUsername] = useState();
  const [password , setPassword] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://reg-api-six.vercel.app//register',  {name, username, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (

    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <div className='mb-3'>
        <label htmlFor="name">
        <strong>Name:</strong>
        </label>
        <input type="text" name="name" id="name" autoComplete='off' placeholder='enter your name' className='form-control rounded-0' onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className='mb-3'>
      <label htmlFor="username">
      <strong>Username:</strong>
      </label>
      <input type="text" name="username" id="username" autoComplete='off' placeholder='enter your username' className='form-control rounded-0' onChange={(e) => serUsername(e.target.value)} />
    </div>

    <div className='mb-3'>
    <label htmlFor="password">
    <strong>Password:</strong>
    </label>
    <input type="text" name="password" id="password" autoComplete='off' placeholder='enter your password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
  </form>

  )
}

export default App
