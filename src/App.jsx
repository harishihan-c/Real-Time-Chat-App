import React, {useContext, useEffect} from 'react';
import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Chat from "./Pages/Chat/Chat.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./Config/firebase.js";
import {AppContext} from "./Context/AppContext.jsx";


function App() {

    const navigate = useNavigate();
    const {loadUserData} = useContext(AppContext);

    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if(user){
                navigate('/chat')
                console.log(user)
                await loadUserData(user.uid)
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
