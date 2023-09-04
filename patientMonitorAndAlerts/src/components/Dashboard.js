import React, { useEffect, useState } from 'react';
import { fetchPatients, togglePatientCondition, fetchPatientById } from '../api/API'; // Import your API functions
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [filter, setFilter] = useState('all'); // Initialize filter state to 'all'

  useEffect(() => {
    fetchPatients()
      .then(data => {
        //console.log("printing", data);
        setPatients(data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const viewPatientProfile = (patientId) => {
    // Use the navigate function to navigate to the profile page
    navigate(`/profile/${patientId}`);
  };

  const handleAttendPatient = async (patientId) => {
    try {
      // Toggle the patient's condition using the API
      const updatedPatient = await togglePatientCondition(patientId);
      // console.log('Patient condition toggled:', updatedPatient);

      // Fetch the updated patient data from the JSON file
      const updatedPatients = await Promise.all(patients.map(async (patient) => {
        if (patient.id === patientId) {
          return await fetchPatientById(patientId);
        }
        return patient;
      }));

      setPatients(updatedPatients);
    } catch (error) {
      console.error('Error toggling patient condition:', error);
    }
  };

  // Function to filter patients based on the selected filter
  const filterPatients = () => {
    if (filter === 'critical') {
      return patients.filter(patient => patient.currentCondition === 'Critical');
    } else if (filter === 'stable') {
      return patients.filter(patient => patient.currentCondition === 'Stable');
    } else {
      return patients; // Show all patients
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Doctor's Dashboard</h1>
        <div className="my-3">
          {/* Toggle buttons for filtering */}
          <button className={`btn btn-outline-primary mx-2 ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All
          </button>
          <button className={`btn btn-outline-danger mx-2 ${filter === 'critical' ? 'active' : ''}`} onClick={() => setFilter('critical')}>
            Critical
          </button>
          <button className={`btn btn-outline-success mx-2 ${filter === 'stable' ? 'active' : ''}`} onClick={() => setFilter('stable')}>
            Stable
          </button>
        </div>
        <div className="row">
          {filterPatients().map(patient => (
            <div key={patient.id} className={`col-md-4 mb-4 ${patient.currentCondition === 'Critical' ? 'bg-danger' : 'bg-success'}`}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{patient.name}</h5>
                  <p className={`card-text ${patient.currentCondition === 'Critical' ? 'text-danger' : 'text-success'}`}>Heart Rate: {patient.vitalSigns.heartRate}</p>
                  <p className={`card-text ${patient.currentCondition === 'Critical' ? 'text-danger' : 'text-success'}`}>Blood Pressure: {patient.vitalSigns.bloodPressure}</p>
                  <p className={`card-text ${patient.currentCondition === 'Critical' ? 'text-danger' : 'text-success'}`}>Temperature: {patient.vitalSigns.temperature}</p>
                  <p className={`card-text ${patient.currentCondition === 'Critical' ? 'text-danger' : 'text-success'}`}>Respiratory Rate: {patient.vitalSigns.respiratoryRate}</p>
                  <p className={`card-text font-weight-bold ${patient.currentCondition === 'Critical' ? 'text-danger' : 'text-success'}`}>Current Condition: {patient.currentCondition}</p>
                  {patient.currentCondition === 'Stable' ? (
                    <button onClick={() => handleAttendPatient(patient.id)} className="btn btn-danger">
                      Create Emergency
                    </button>
                  ) : (
                    <button onClick={() => handleAttendPatient(patient.id)} className="btn btn-success">
                      Attend to Patient
                    </button>
                  )}
                  <button onClick={() => viewPatientProfile(patient.id)} className="btn btn-secondary">
                    view profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
