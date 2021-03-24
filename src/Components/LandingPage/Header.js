import React from 'react'
import logo from "../../assets/TronGalaxyPower.png";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-white fixed-top"
      id="banner"
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="index.html#">
          <span>
            <img src={logo} alt="logo" className="logo" />
          </span>{" "}

        </a>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html#home">
                Home
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html#about">
                About Us
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html#services">
                Features
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html#faq">
                FAQ
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html#roadmap">
                Roadmap
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html#contact">
                Contact
                </a>
            </li>
            <li className="lh-55px">
              <a href="/dashboard" className="btn login-btn ml-50">
                Login
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header