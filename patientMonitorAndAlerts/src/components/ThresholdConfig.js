import React, { useState } from 'react';
import Navbar from './NavBar';

const ThresholdConfig = () => {
  const [thresholds, setThresholds] = useState({
    heartRate: 80,
    bloodPressure: { systolic: 120, diastolic: 80 },
    temperature: 37.5,
    respiratoryRate: 18,
  });

  const handleThresholdChange = (field, value) => {
    setThresholds({ ...thresholds, [field]: value });
  };

  return (
    <>
    <div className="container">
      <h1>Threshold Configuration</h1>
      <div className="form-group">
        <label>Heart Rate Threshold:</label>
        <input
          type="number"
          value={thresholds.heartRate}
          onChange={e => handleThresholdChange('heartRate', e.target.value)}
        />
      </div>
      {/* Similar input fields for other vital signs */}
    </div>
    </>
    
  );
};

export default ThresholdConfig;
