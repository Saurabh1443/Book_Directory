import React from 'react'
import './Remove.css'
function Remove({isbn,setCheck,setISBN}) {
  const toggle=()=>{
    setCheck(true);
    setISBN(isbn)
  }
    const hide=()=>{
      const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('users')
    });
            console.log(isbn,"yess")
             fetch(`http://localhost:3002/removeBook/${isbn}`,{
              method: 'Delete',
              headers:myHeaders
             }).then(res=>res.json).then(data=>console.log
              (data.message)).catch(err=>console.log(err))
         
    }
  return (
    <div className="operations">
        <button onClick={toggle} >update</button>
        <button onClick={hide}>Delete</button>
    </div>
  )
}

export default Remove