

import React, { useState } from "react";
import "./Navbar.css";
import profile from "./profile.png";
const NavbarComponent = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleToggleNavbar = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  const handleToggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <a href="/" className="nav-link">
          Project
        </a>
        <a href="/" className="nav-link">
          About Us
        </a>
        <a href="/" className="nav-link">
          Contact
        </a>
      </div>
      <div className="nav-search">
        <input type="text" placeholder="Search" className="nav-link search-input" />
        </div>
        <div className="nav-link profile" onClick={handleToggleDropdown}>
          <img src={profile} alt="Profile" className="profile-image" />
          {dropdownIsOpen && (
            <div className="dropdown">
              <a href="/">Edit Profile </a>
              <a href="/">MyProject</a>
              <a href="/">Help</a>
              <a href="/">Log Out</a>
            </div>
          )}
        </div>
      
      
    </div>
  );
};

export default NavbarComponent;
