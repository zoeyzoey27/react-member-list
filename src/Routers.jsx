import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/Home';
import AddMembers from './pages/AddMembers';
import Edit from './pages/Edit';

const Routers = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/addnew" element={<AddMembers/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default Routers