import React, {useEffect} from 'react';
import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Chat from "./Pages/Chat/Chat.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./Config/firebase.js";

function App() {

    const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if(user){
                navigate('/chat')
            }
            else{
                navigate('/')
            }
        })
    },[])


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
