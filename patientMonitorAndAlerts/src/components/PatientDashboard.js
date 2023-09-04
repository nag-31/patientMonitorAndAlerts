import React, { useState, useEffect } from 'react';
import { deletePatient, fetchPatients } from '../api/API'; // Import your API functions
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';

const PatientsDashboard = () => {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const viewPatientProfile = (patientId) => {
    // Use the navigate function to navigate to the profile page
    navigate(`/profile/${patientId}`);
  };
  const updatePatientProfile = (patientId) => {
    // Use the navigate function to navigate to the profile page
    navigate(`/editpatient/${patientId}`);
  };
  const deletePatientId = async (patientId) => {
    try {
      // Use the API function to delete the patient
      await deletePatient(patientId);
  
      // Update the patient list by removing the deleted patient
      setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== patientId));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };
    useEffect(() => {
    // Fetch the list of patients when the component mounts
    fetchPatients()
      .then(data => {
        setPatients(data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>Patients Dashboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Medical History</th>
            <th>Current Condition</th>
            <th>Actions</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.medicalHistory}</td>
              <td>{patient.currentCondition}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => viewPatientProfile(patient.id)}
                >
                  View Profile
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => updatePatientProfile(patient.id)}
                >
                  update profile
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePatientId(patient.id)}
                >
                  delete profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};

export default PatientsDashboard;
