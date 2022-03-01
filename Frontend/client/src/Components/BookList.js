
import './BookList.css'
import Remove from './Remove'
import React,{useState,useEffect} from 'react'
import Update from './Update';
function BookList() {
 
  const [list ,setList] = useState([])
  const [check,setCheck] = useState(false);
  const [ISBN,setISBN] = useState('')
  useEffect(async()=>{
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('users')
  });
    fetch('http://localhost:3002/getBooks',{
      method: 'GET',
      headers: myHeaders
    }).then(result=>result.json()).then(data=>setList(data)).catch(err=>console.log(err));
    
  },[])
  return (
    <div className="booklist">
      {
       !check?(
        list.map((data,index)=> <div className="child_div" key={index}>
             <h1 >{data.title}</h1><br /><br />
       <div className="child_div1">
         <h3>author: {data.author}</h3>
         <h3>price: Rs {data.price}</h3>
         <h3>ISBN :{data.isbn}</h3><br /><br />
       </div>
           <Remove isbn={data.isbn} setCheck={setCheck} setISBN={setISBN}/>
           
              </div>)
       ):(
         <Update ISBN={ISBN} setCheck={setCheck}/>
       )

}
    </div>
  )
}

export default BookList