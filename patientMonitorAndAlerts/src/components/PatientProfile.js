import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPatientById, fetchThresholds } from '../api/API'; // Import your API function to fetch a patient by ID
import DataVisualization from '../DV/DataVisualisation';
import AlertNotifications from '../DV/AlertNotification';
import Navbar from './NavBar';

const PatientProfile = () => {
  const { patientId } = useParams(); // Get the patientId from the URL
  const [patient, setPatient] = useState(null);
  const [thresholds,setThresholds]=useState({});

  useEffect(() => {
    // Fetch the patient data by ID when the component mounts
    fetchThresholds().then(data=>{
      setThresholds(data);
    })
    .catch(error => {
      console.error('error fetching thresholds',error);
    });
    fetchPatientById(patientId)
      .then(data => {
        setPatient(data);
      })
      .catch(error => {
        console.error('Error fetching patient:', error);
      });
  }, [patientId]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  const alternatingRowColor = (index) => {
    return index % 2 === 0 ? 'table-light' : 'table-dark';
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h1>Patient Profile</h1>
        </div>
        <div className="card-body d-flex">
          <div className="profile-icon d-none d-md-block">
          <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png"
              alt="Profile"
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }}
            />
            <i className="bi bi-person-circle text-primary" style={{ fontSize: '4rem' }}></i>
          </div>
          <div className="patient-details">
            <h2>{patient.name}</h2>
            <table className="table table-bordered">
              <tbody>
                <tr className={alternatingRowColor(0)}>
                  <td>ID:</td>
                  <td>{patient.id}</td>
                </tr>
                <tr className={alternatingRowColor(1)}>
                  <td>Age:</td>
                  <td>{patient.age}</td>
                </tr>
                <tr className={alternatingRowColor(2)}>
                  <td>Gender:</td>
                  <td>{patient.gender}</td>
                </tr>
                <tr className={alternatingRowColor(3)}>
                  <td>Medical History:</td>
                  <td>{patient.medicalHistory}</td>
                </tr>
                <tr className={alternatingRowColor(4)}>
                  <td>Current Condition:</td>
                  <td>{patient.currentCondition}</td>
                </tr>
                {/* Add more patient details as needed */}
                <tr className={alternatingRowColor(5)}>
                  <td>Blood Pressure:</td>
                  <td>{patient.vitalSigns.bloodPressure}</td>
                </tr>
                <tr className={alternatingRowColor(6)}>
                  <td>Temperature:</td>
                  <td>{patient.vitalSigns.temperature}</td>
                </tr>
                <tr className={alternatingRowColor(7)}>
                  <td>Heart Rate:</td>
                  <td>{patient.vitalSigns.heartRate}</td>
                </tr>
                <tr className={alternatingRowColor(8)}>
                  <td>Respiratory Rate:</td>
                  <td>{patient.vitalSigns.respiratoryRate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    <DataVisualization key={patient.id} patient={patient}/>
    <AlertNotifications thresholds={thresholds}
            patient={patient}
          />
    </>
    
  );
};

export default PatientProfile;
