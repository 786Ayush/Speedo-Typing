import { useState } from 'react';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Lobby from './pages/lobby/Lobby.jsx';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className='dark:bg-slate-800 h-screen w-screen justify-items-center justify-center flex'>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="lobby" element={ <Lobby/> } />
        </Routes>
      </div>
    </>
  )
}

export default App
