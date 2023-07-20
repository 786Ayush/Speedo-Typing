import React, { useState } from 'react'
import Lobby from '../lobby/Lobby';

const Login = () => {
  const [lobby, setLobby] = useState(false);
  const handleClick = () => {
    // send username to backend and wait

  }
  return (
    <>
      {!lobby && <div className='login'>
        <form>
          <input type="text" name='username' placeholder='Enter your username'/> 
          <input type="text" name='password' placeholder='Enter your password' /> 
          <button onClick={handleClick}>Login</button>
        </form>      
      </div>}
      {lobby && <Lobby />}
    </>
  )
}

export default Login