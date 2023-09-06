import React, { useState } from 'react';
import { createPatient } from '../api/API';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const initialUser = {
    id: '',
    name: '',
    age: '',
    gender: '',
    medicalHistory: '',
    vitalSigns: {
      bloodPressure: '',
      temperature: '',
      heartRate: '',
      respiratoryRate: '',
    },
  };

  const [user, setUser] = useState(initialUser);
  const [password,setPassword] = useState('');
  const [userName,setUserName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleVitalSignsChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      vitalSigns: {
        ...user.vitalSigns,
        [name]: value,
      },
    });
  };
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(user); // You can access the user object with updated data here
    const createdUser = await createPatient(user,userName,password); // Wait for the patient creation
    console.log(createdUser);
    if (createdUser) {
      navigate(`/patient/${createdUser.id}`); // Navigate to the newly created patient's page
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Patient Details</h1>
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
                required
              />
            </div>
            <div className="form-group">
              <label>UserName</label>
              <input
                type="text"
                name="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}                
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Corrected onChange
                className="form-control"
                required
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
                required
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
                required
              />
            </div>
            <div className="form-group">
              <label>Medical History</label>
              <textarea
                name="medicalHistory"
                value={user.medicalHistory}
                onChange={handleInputChange}
                className="form-control"
                rows="3"
                required
              />
            </div>
            <div className="form-group">
              <label>Heart Rate</label>
              <input
                type="number"
                name="heartRate"
                value={user.vitalSigns.heartRate}
                onChange={handleVitalSignsChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Blood Pressure</label>
              <input
                type="text"
                name="bloodPressure"
                value={user.vitalSigns.bloodPressure}
                onChange={handleVitalSignsChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Temperature</label>
              <input
                type="number"
                name="temperature"
                value={user.vitalSigns.temperature}
                onChange={handleVitalSignsChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Respiratory Rate</label>
              <input
                type="number"
                name="respiratoryRate"
                value={user.vitalSigns.respiratoryRate}
                onChange={handleVitalSignsChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up Patient
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
