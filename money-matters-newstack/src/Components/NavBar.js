import React from 'react'
import logo from '../Assets/solo_logo.svg'
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <img src={logo} alt="Logo" className="navbar-logo" />
    </div>
    <div className='navbar-menu-container'>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Features
          </a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            About Us
          </a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <a href='/login'>
      <div className="navbar-login">
        <button className="btn btn-primary navbar-login-btn">Log in</button>
      </div>
    </a>
  </nav>
  )
}

export default NavBar