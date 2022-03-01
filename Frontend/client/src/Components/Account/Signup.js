import React,{useState,useEffect} from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
function Signup({setToken}) {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('users');
    if (auth) {
        navigate('/')
    }
}, [])
  const submit = async()=>{
    try{
    let result = await fetch("http://localhost:3002/register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  result = await result.json() 
  if(result.status===201){
    console.log(result.token);
   
    localStorage.setItem("users", JSON.stringify(result.token))
  }
  navigate('/')

}catch(err){
  console.log(err);
}
      
  }
  return (
    <div className='signup_main'
    >
      <h1>
        Register
      </h1><br />

      <div className="middle">
      <input type="text" placeholder='Enter Name' value= {name} onChange={e=>setName(e.target.value)}/><br />
      <input type="text" placeholder='Enter email' value= {email} onChange={e=>setEmail(e.target.value)}/><br />
      <input type="text" placeholder='Enter Name' value= {password} onChange={e=>setPassword(e.target.value)}/><br />
      <button onClick={submit}>Submit</button>
      </div>
    </div>
  )
}

export default Signup