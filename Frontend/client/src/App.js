
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import PrivateComponent from './Components/Authenticate/PrivateComponent'
import BookList from './Components/BookList'
import AddBook from './Components/AddBook';
import Signup from './Components/Account/Signup'
import Login from './Components/Account/Login'
import BookById from './Components/BookById';


function App() {

  return (
<>
<BrowserRouter>
<Nav />

  <Routes>
    <Route  element={<PrivateComponent />}>
    <Route exact path="/" element={<BookList />} />
       <Route exact path="/add" element={<AddBook />} />
       <Route exact path="/by_id" element={<BookById />} />
       <Route exact path="/profile" element={<h1>Profile Component</h1>} />
      
    </Route>
    <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />

  </Routes>
  
 


</BrowserRouter>

</>
  );
}

export default App;
