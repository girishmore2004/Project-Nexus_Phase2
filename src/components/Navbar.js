
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ fontFamily: "cursive" }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={require("../images/1.png")} alt="Logo" style={{ width: '60px', height: "60px" }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{ fontSize: '25px', fontFamily: "cursive" }} className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link style={{ fontSize: '25px', fontFamily: "cursive" }} className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link style={{ fontSize: '25px', fontFamily: "cursive" }} className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} to="/services">Services</Link>
            </li> 
            <li className="nav-item">
              <Link style={{ fontSize: '25px', fontFamily: "cursive" }} className={`nav-link ${location.pathname === "/careers" ? "active" : ""}`} to="/careers">Careers</Link>
            </li> 
            <li className="nav-item">
              <Link style={{ fontSize: '25px', fontFamily: "cursive" }} className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
