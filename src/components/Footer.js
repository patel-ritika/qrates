import React from 'react';
import "../assets/styles/footer.css";
import footerlogo from "../assets/images/footerlogo.png"; 
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-lists">
        <div className="footer-list">
          <h3>FOR ARTISTS</h3>
          <ul>
            <li>For Artists</li>
            <li>How it Works</li>
            <li>Artist Toolkit</li>
            <li>Referral Program</li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>FOR FANS</h3>
          <ul>
            <li>For Fans</li>
            <li>Records</li>
            <li>Cassettes</li>
            <li>Stories</li>
            <li>Qrates Curated</li>
          </ul>
          </div>
        <div className="footer-list">
          <h3>OUR COMPANY</h3>
          <ul>
            <li>About Qrates</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>HELP</h3>
          <ul>
            <li>Support Center</li>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={footerlogo} alt="Logo" className="footer-logo" />
          <h1>
            QRATES<br />
            MUSIC<br />
            IN YOUR HANDS
          </h1>
        </div>
        <div className="footer-right">
          <h4 className="language">English</h4>
          <div className="footer_social-icons">
            <FaFacebook className="footer_icon" />
            <FaInstagram className="footer_icon" />
            <FaTwitter className="footer_icon" />
          </div>
          <ul className="footer-links">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Legal Information</li>
          </ul>
          <h6>© TDMS Inc.</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
