import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './AddBook.css'
function AddBook() {
  const[title,setTitle] = useState('')
  const[author,setAuthor] = useState('')
  const[price,setPrice] = useState('')
  const[isbn,setISBN] = useState('')
  const navigate = useNavigate();
const handleClose=()=>{
  setAuthor('');
  setISBN('');
  setPrice('');
  setTitle('');
 
}

const authenticate = ()=>{
  if(title && author && price && isbn)return true;
  else{
    return false
  }
}
  const handleAdd=async()=>{
  const  myHeaders = new Headers({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('users')
  });
    if(authenticate()){
     let result = await fetch("http://localhost:3002/addbooks",{
      method: 'post',
      body: JSON.stringify({ title, author,price,isbn }),
      headers: myHeaders
     });

     result = await result.json();

     if(result.status==="402" || result.status===501)alert(result.message)
    handleClose();
    }
    else{
     alert("some data is missing! please check")
    }

  }
  return (
    <div className="addbook">
      <h2>Add Books To Your Booklist</h2>
      <div className="addbook_content">
        <input type="text" value={title} placeholder="Book Name" onChange={e=>setTitle(e.target.value)}/><br />
        <input type="text" value={author} placeholder="Author Name" onChange={e=>setAuthor(e.target.value)}/><br />
        <input type="text" value={price} placeholder="Set Price" onChange={e=>setPrice(e.target.value)}/><br />
        <input type="text" value={isbn} placeholder="ISBN No" onChange={e=>setISBN(e.target.value)}/><br />
        <button onClick = {handleAdd}>Add</button>

      </div>
    </div>
  )
}

export default AddBook