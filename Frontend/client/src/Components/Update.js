import React,{useState} from 'react'

import './Update.css'
import { useNavigate } from 'react-router-dom'

function Update({ISBN,setCheck}) {
    const [name, setName] = useState('')
    const navigate = useNavigate();
    const update=()=>{
      const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('users')
    });
        console.log(ISBN,"yess")
        fetch('http://localhost:3002/updateitem',{
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify({ title: name,isbn:ISBN })
        }).then(res=>res.json).then(data=>console.log(data)).catch(err=>console.log(err));
        
        setCheck(false)
      
    }
  return (
    <div className='update'>
       <h2>Change Title</h2>
       <input type="text" placeholder='Enter Title' value={name} onChange={e=>setName(e.target.value)}/><br />
       <button onClick={update}>update</button>
    </div>
  )
}

export default Update