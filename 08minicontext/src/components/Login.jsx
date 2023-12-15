import React , {useState, useContext}from 'react'
import UserContext from '../context/UserContext'
// Here is a task how to fetch value inside from the UserContext
// We fetch the value using UseContext Hook
function Login() {
   const [username, setUsername] = useState('');

   const [password, setPassword] = useState('');

//    Send the data by using useContext
const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
        // this value govern by username
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login