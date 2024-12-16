import React, {useState} from 'react';
import "../assets/styles/header.css";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import logo from "../assets/images/logo.png";

const Header = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu)
    }

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
}

  return (
    <header className="header">
      {/* Left Section: Logo */}
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Center Section: Navigation */}
      <div className="header-center">
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item" onClick={toggleSubMenu}>
              DISCOVER MUSIC
              <span className="dropdown-arrow">▼</span>
              {showSubMenu && (
                <ul className="submenu">
                  <li className="submenu-item">Records</li>
                  <li className="submenu-item">Cassettes</li>
                  <li className="submenu-item">Stories</li>
                  <li className="submenu-item">Qrates Curated</li>
                </ul>
              )}
            </li>
            <li className="nav-item">FOR ARTISTS</li>
            <li className="nav-item">FOR FANS</li>
          </ul>
        </nav>

        {/* Icons beside the list */}
        <div className="nav-icons">
          <IoSearchSharp className="icon" />
          <FiShoppingCart className="icon" />
        </div>
      </div>

      {/* Right Section: Log In, Button */}
      <div className="header-right desktop-buttons">
      <button className="login-button">LOG IN</button>
        <button className="make-button">MAKE YOUR OWN</button>
      </div>

      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="close-menu-icon" onClick={toggleMenu}>
                    <IoCloseOutline />
                </div>
                <nav className="mobile-nav">
                    <ul>
                        <li className="mobile-nav-item" onClick={toggleSubMenu}>
                            DISCOVER MUSIC
                            <span className="dropdown-arrow">▼</span>
                            {showSubMenu && (
                                <ul className="submenu">
                                    <li className="submenu-item">Records</li>
                                    <li className="submenu-item">Cassettes</li>
                                    <li className="submenu-item">Stories</li>
                                    <li className="submenu-item">Qrates Curated</li>
                                </ul>
                            )}
                        </li>
                        <li className="mobile-nav-item">FOR ARTISTS</li>
                        <li className="mobile-nav-item">FOR FANS</li>
                    </ul>
                </nav>
                <div className="mobile-buttons">
                    <button className="login-button">LOG IN</button>
                    <button className="make-button">MAKE YOUR OWN</button>
                </div>
            </div>

            {/* Menu Icon for Mobile */}
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <IoMenuOutline />
            </div>
    </header>
  );
}

export default Header;