import React from 'react'
import logo from '../Assets/solo_logo.svg'
import '../Styles/LoginPage.css'
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const LoginPage = () => {
  return (
    <div className="container">
        <div className="dummy-panel"></div>
        <div className="side1">
        <div className="brand" href="/">
          <a href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
        </div>
          <div className="welcome-back">
            <h1>
              Welcome 
              <br/> 
              back
            </h1>
            <p>Enter details here</p>
          </div>
          <div className="card-container">
            <div className="card-wrapper">
              <div className="card text-center">
                <div className="profile-picture">
                  <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg" alt="profile"/>
                </div>
                <h3 className="card-title">
                  Card 1
                </h3>
                <em className="card-subtitle">
                  "Subtitle 1"
                </em>
              </div>
            </div>
          </div>
        </div>
        <div className="side2">
          <div className="login-form">
            <h2>
              Log in
            </h2>
          <form>
            <div className="form-group">
              <label htmlFor="email-phone">
                Email/Phone Number:
              </label>
              <br/>
              <input type="text" id="email-phone" name="email-phone"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password:
              </label>
              <br/>
              <input type="password" id="password" name="password"/>
              <div className="forgot-password-container">
                <span className="forgot-password">
                  <a href="/forgot-password">Forgot password?</a>
                </span>
              </div>
              <div className="button-login">
                <button type="submit" className="btn-login">
                  Log in
                </button>
              </div>
              <div className="navigate">
                <a className="back-track" href="/">                  
                  <div className="left-container">
                    <span className="inline-block back-icon">
                      <IoArrowBackCircleOutline size={20} />
                    </span>
                    <div>
                      Back
                    </div>
                  </div>
                </a>
                <div className="right-container">
                  <span className="inline-block">
                    Don't have an account?
                  </span>
                  <span className="sign-up">
                    <a href="/signup">
                      Sign Up
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;