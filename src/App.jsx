import React from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Chat from "./Pages/Chat/Chat.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path={'/Chat'} element={<Chat />}/>
        <Route path='/Profile' element={<Profile />} />
      </Routes>

    </>
  )
}

export default App
