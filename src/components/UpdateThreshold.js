import React, { useEffect, useState } from 'react';
import { fetchThreshold, updateThreshold } from '../api/API';
import Navbar from './NavBar';

const UpdateThreshold = () => {
  const [thresholdValues, setThresholdValues] = useState({
    heartRate: 0,
    systolic: 0,
    diastolic: 0,
    temperature: 0,
    respiratoryRate: 0,
  });


  useEffect(() => {
    fetchThreshold()
      .then(data => {
        setThresholdValues(data); 
        console.log(data);
        // Assuming there's only one threshold object
      })
      .catch(error => {
        console.error('Error fetching threshold values:', error);
      });
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setThresholdValues(prevValues => ({
      ...prevValues,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Construct the updated threshold object
      const updatedThresholdObject = {
        heartRate: thresholdValues.heartRate,
          systolic: thresholdValues.systolic,
          diastolic: thresholdValues.diastolic,
        temperature: thresholdValues.temperature,
        respiratoryRate: thresholdValues.respiratoryRate,
      };

      // Use the API to update the threshold values
      console.log('Threshold values !',updatedThresholdObject);      
      await updateThreshold(updatedThresholdObject);
      console.log('Threshold values updated successfully!');
    } catch (error) {
      console.error('Error updating threshold values:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>Update Threshold Values</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Heart Rate</label>
          <input type="number" step="0.1" name="heartRate" value={thresholdValues.heartRate} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Systolic Blood Pressure</label>
          <input type="number" step="0.1" name="systolic" value={thresholdValues.systolic} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Diastolic Blood Pressure</label>
          <input type="number" step="0.1" name="diastolic" value={thresholdValues.diastolic} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Temperature</label>
          <input type="number" step="0.1" name="temperature" value={thresholdValues.temperature} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Respiratory Rate</label>
          <input type="number" step="0.1" name="respiratoryRate" value={thresholdValues.respiratoryRate} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Update Threshold</button>
      </form>
    </div>
    </>
    
  );
};

export default UpdateThreshold;
