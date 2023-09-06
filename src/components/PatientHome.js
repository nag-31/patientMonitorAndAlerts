import React from 'react'
import { Link } from 'react-router-dom'


const PatientHome = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Patient Monitor and alerts system</h1>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Signup</h5>
              <p className="card-text">New Patients here</p>
              <a href="/patientsignup" className="btn btn-success">Patient Signup</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <p className="card-text">Exixsting patients here</p>
              <a href="/patientlogin" className="btn btn-info">Patient Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHome;

