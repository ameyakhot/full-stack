import React from 'react';
import logo from '../Assets/solo_logo.svg'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../Styles/Footer.css'

function Footer() {
  return (
<footer>
  <div class="footer-container">
    <div class="footer-logo">
      <img src={logo} alt="Logo" />
    </div>
    <div class="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-social">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="/"><FaFacebook /></a>
        <a href="/"><FaTwitter /></a>
        <a href="/"><FaInstagram /></a>
        <a href="/"><FaLinkedin /></a>
      </div>
    </div>
    <div class="footer-contact">
      <h3>Contact Us</h3>
      <ul>
        <li><FaMapMarkerAlt /><span>123 Main St. Suite 101</span></li>
        <li><FaPhone /><span>(555) 555-1234</span></li>
        <li><FaEnvelope /><span>info@company.com</span></li>
      </ul>
    </div>
  </div>
</footer>

  );
}

export default Footer;
