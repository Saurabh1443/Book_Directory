import React,{useState} from 'react'
import Remove from './Remove';
import './BookById.css'
function BookById() {
    const [id,setId] = useState('');
    const[book,setBook] = useState([]);
  const find=()=>{
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('users')
  });
      fetch(`http://localhost:3002/getBooksByisbn/${id}`,{
        method: 'GET',
      headers: myHeaders
      }).then(res=>res.json()).then(data=>setBook([data])).catch(err=>console.log(err))
      console.log(book)
      setId('');

  }
  return (
    <div className = "book">
      <h2>Enter ISBN id</h2>
        <div className="book_header">
        <input type="text" placeholder = "enter isbn id" value = {id} onChange={e=>setId(e.target.value)} /> <br />
        <button onClick = {find}>Find</button>
        </div>

        <div className="booklist">
            {
        book.map((data,index)=>{return <div className="child_div" key={index}>
             <h1 >{data.title}</h1><br /><br />
       <div className="child_div1">
         <h3>author: {data.author}</h3>
         <h3>price: Rs {data.price}</h3>
         <h3>ISBN :{data.isbn}</h3><br /><br />
       </div>
                
         <Remove isbn={data.isbn} />

          </div>})
      }
        </div>
    </div>
  )
}

export default BookById