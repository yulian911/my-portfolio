import React from 'react'
import { moon, mountains01, mountains02, road } from '../assets'

import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="loginContainer">
      <Link to={'/'} className="absolute top-3 left-4 z-50 hover:text-[red]">
        <BiArrowBack size={40} />
      </Link>
      <div className="containerScene">
        <div id="scene">
          <div className="layer">
            <img src={moon} alt="img" />
            <img src={mountains01} alt="img" />
            <img src={mountains02} alt="img" />
            <img src={road} alt="img" />
          </div>
        </div>
      </div>
      <div className="loginBox">
        <h2>Sign In</h2>
        <div className="inputBoxLogin">
          <input type={'text'} placeholder="USERNAME" />
        </div>
        <div className="inputBoxLogin">
          <input type={'password'} placeholder="PASSWORD" />
        </div>
        <div className="inputBoxLogin">
          <input type={'submit'} value="Login" id="btn" />
        </div>
        {/* <div className="group">
          <a href="#">Forget Password</a>
          <a href="#">sign up</a>
        </div> */}
      </div>
    </div>
  )
}

export default Login
