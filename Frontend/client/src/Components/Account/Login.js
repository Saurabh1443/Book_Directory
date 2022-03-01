import React,{useState,useEffect} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login({setToken}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  useEffect(() => {
      const auth = localStorage.getItem('user');
      if (auth) {
          navigate("/")
      }
  }, [])
  const handleLogin =async()=>{
    let result = await fetch("http://localhost:3002/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  
   result = await result.json();

   if(result.status===200){
     localStorage.setItem('users' ,JSON.stringify( result.token));
     setToken(result.token)
     navigate('/')
   }
   else if(result.status==="404" || result.status ==="402")alert(result.message)

  }
  return (
    <div className = "signup_main">
        <h1>Login</h1>
           <div className="middle">
           <input type="text" className="inputBox" placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)} value={email} /><br />
            <input type="password" className="inputBox" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)} value={password} /><br />
            <button onClick={handleLogin} className="appButton" type="button">Login</button>
           </div>
    </div>
  )
}

export default Login