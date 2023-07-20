import React, { useState } from 'react'
import './home.css';
import Lobby from '../lobby/Lobby.jsx';
import Login from '../login/Login.jsx';

import './home.css';
const Home = () => {
    const [lobby, setLobby] = useState(false);

    const [login, setLogin] = useState(false);
  return (
    <>
      { !lobby && !login && <div className="container dark:bg-slate-950">
        <button onClick={()=>setLobby(true)} className="guest">
          Guest
        </button>
        <button onClick={()=>setLogin(true)} className="login">
          Login/Sign-up
        </button>
      </div>}
      {login && <Login />}
      {lobby && <Lobby />}
    </>
  )
}

export default Home