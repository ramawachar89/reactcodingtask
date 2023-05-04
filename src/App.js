import React from 'react'
import './App.css';
import Form from './form';
import UserList from './userList'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Form/>}></Route>
  <Route path='/userlist' element={<UserList/>}></Route>
  </Routes>
  </BrowserRouter>
   
    </div>
  );
}

export default App;
