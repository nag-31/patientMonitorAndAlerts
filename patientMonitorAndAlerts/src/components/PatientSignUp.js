import React, { useState } from 'react';
import Navbar from './NavBar';

const SignUpForm = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    age: '',
    gender: '',
    medicalHistory: '',
    currentCondition: '',
    vitalSigns: {
      bloodPressure: '',
      temperature: '',
      heartRate: '',
      respiratoryRate: ''
    },
  });

  const handleInputChange = (e) => {
    if (['bloodPressure', 'temperature', 'heartRate', 'respiratoryRate'].includes(e.target.name)) {
      setUser({
        ...user,
        vitalSigns: {
          ...user.vitalSigns,
          [e.target.name]: e.target.value
        }
      });
    } else {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    <div className="container">
      <h1 className="text-center"> Patient Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Medical History</label>
              <input
                type="text"
                name="medicalHistory"
                value={user.medicalHistory}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            {/* Add vital signs fields here */}
            <div className="form-group">
              <label>Heart Rate</label>
              <input
                type="number"
                name="vitalSigns.heartRate"
                value={user.vitalSigns.heartRate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Blood Pressure</label>
              <input
                type="text"
                name="vitalSigns.bloodPressure"
                value={user.vitalSigns.bloodPressure}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Temperature</label>
              <input
                type="number"
                name="vitalSigns.temperature"
                value={user.vitalSigns.temperature}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Respiratory Rate</label>
              <input
                type="number"
                name="vitalSigns.respiratoryRate"
                value={user.vitalSigns.respiratoryRate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              SignUp Patient
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );

};

export default SignUpForm;
