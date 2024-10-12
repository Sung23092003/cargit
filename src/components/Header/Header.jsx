import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { FaBars, FaUserCircle, FaCarAlt, FaQuestionCircle, FaGift, FaPhone, FaGavel, FaShieldAlt, FaTools, FaCalculator } from "react-icons/fa";

const Header = () => {
  const navLinks = [
    { path: "/home", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/cars", display: "Cars" },
    { path: "/blogs", display: "Blog" },
    { path: "/contact", display: "Contact" },
  ];

  const [isNavVisible, setIsNavVisible] = useState(false);
  const menuRef = useRef(null);  // Khai báo menuRef

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleMenu = () => {   // Định nghĩa toggleMenu
    menuRef.current.classList.toggle('menu-active');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.jpg" alt="LOGO" />
      </div>

      <div className="nav-header" ref={menuRef} onClick={toggleMenu}>
        <div className="menu">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__item" : "nav__item"
              }
              key={index}
            >
              {item.display}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="actions">
        <button className="become-host nav-button">Become partner</button>

        <div className="menu-icon" onClick={toggleNav}>
          <FaBars className="hamburger-icon" />
          <FaUserCircle className="avatar-icon" />
        </div>

        {isNavVisible && (
          <nav className="navigation">
            <ul>
              <li><a href="/login">Log in</a></li>
              <li><a href="/signup">Sign up</a></li>
              <li><a href="/become-host"><FaCarAlt /> Become partner</a></li>
              <hr />
              <li><a href="/how-it-works"><FaQuestionCircle /> How CarLink works</a></li>
              <li><a href="/gift-cards"><FaGift /> Gift cards</a></li>
              <li><a href="/contact-support"><FaPhone /> Contact support</a></li>
              <li><a href="/legal"><FaGavel /> Legal</a></li>
              <li><a href="/insurance"><FaShieldAlt /> Insurance & protection</a></li>
              <li><a href="/host-tools"><FaTools /> Host tools</a></li>
              <li><a href="/calculator"><FaCalculator /> Calculator</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
