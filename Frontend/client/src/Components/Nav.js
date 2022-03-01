import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import './Nav.css'
 
function Nav() {
  const [auth,setAuth] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('users')){
      setAuth(true)
    }
  },[])
  const logout=async()=>{
    if (localStorage.getItem('users') != null)
    localStorage.removeItem('users');
   setAuth(false);
  }
  return (
    <div className = "nav_main">
 <h1>  Book Directory Containing Amazing Books</h1><br></br>


       <div className="nav_heading">
         {auth?
      
       <div className="nav_list">
       <Link to="/">Display All</Link>
       <Link to="/by_id">Display By Id</Link>
       <Link to="/add">Add Books</Link>
       <Link to="/logout" onClick={logout}>Logout</Link>
   
       </div>
       :
       
       <div className="nav_account">
      <Link to="/Signup">Sign UP</Link>
       <Link to="/Login">Login</Link>
       </div>
}
 
    </div>
       </div>

       
  )
}

export default Nav