import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPatientById, updatePatient } from '../api/API'; // Import your API functions
import Navbar from './NavBar';

const EditPatientForm = () => {
  const { patientId } = useParams(); // Get the patientId from the URL
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    // Fetch the patient data by ID when the component mounts
    fetchPatientById(patientId)
      .then(data => {
        setPatient(data);
      })
      .catch(error => {
        console.error('Error fetching patient:', error);
      });
  }, [patientId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure that the patient object exists before modifying it
    if (patient) {
      // Check if the name includes a dot (.), indicating a nested field
      if (name.includes('.')) {
        const [parent, child] = name.split('.'); // Split the name into parent and child keys
        setPatient((prevPatient) => ({
          ...prevPatient,
          [parent]: {
            ...prevPatient[parent],
            [child]: value,
          },
        }));
      } else {
        // If it's a top-level field, update it directly
        setPatient((prevPatient) => ({
          ...prevPatient,
          [name]: value,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the patient details using the API
      await updatePatient(patientId, patient);
      // Redirect or display a success message as needed
    } catch (error) {
      console.error('Error updating patient details:', error);
    }
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 className="text-center">Edit Patient Details</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={patient.name}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={patient.age}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={patient.gender}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Medical History</label>
              <input
                type="text"
                name="medicalHistory"
                value={patient.medicalHistory}
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
                value={patient.vitalSigns.heartRate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Blood Pressure</label>
              <input
                type="text"
                name="vitalSigns.bloodPressure"
                value={patient.vitalSigns.bloodPressure}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Temperature</label>
              <input
                type="number"
                name="vitalSigns.temperature"
                value={patient.vitalSigns.temperature}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Respiratory Rate</label>
              <input
                type="number"
                name="vitalSigns.respiratoryRate"
                value={patient.vitalSigns.respiratoryRate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Patient
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default EditPatientForm;
