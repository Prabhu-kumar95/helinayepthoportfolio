import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navlogo from "../Images/Logo.svg"
import {  HamburgetMenuClose, HamburgetMenuOpen } from "../NavComponents/icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span><img src={Navlogo} alt="..."/></span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              
            </span>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Aboutme"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Aboutme
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Hireme"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hireme
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;