import React from 'react';
import { updateDoctorLogin } from '../api/API';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const logout = () =>{
    updateDoctorLogin(false,{});
    navigate("/login")
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Doctor Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/patientDashboard">
                Patients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="updateThreshold">
                threshold
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
