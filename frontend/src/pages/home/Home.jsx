import React, { useState } from 'react'
import './home.css';
import Lobby from '../lobby/Lobby.jsx';
import Login from '../login/Login.jsx';
import { Link } from "react-router-dom";


import './home.css';
const Home = () => {
  return (
    <>
      <div className="dark:bg-slate-900 h-[600px] w-[700px] justify-center justify-items-center m-auto rounded-3xl">
        <h1 className='text-white font-bold text-6xl m-auto flex justify-center mt-24'>Speed-O-Typing</h1>
        <Link to = "/lobby" className="w-[70%] m-auto mt-12 py-7 px-20 flex justify-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Play as Guest
        </Link>
        <Link to = "/login" className="w-[70%] m-auto flex mt-8 py-7 px-20 justify-center bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Sign-in/Sign-up
        </Link>
      </div>
    </>
  )
}

export default Home