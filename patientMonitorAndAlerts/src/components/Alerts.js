import React, { useEffect, useState } from 'react';

const Alerts = ({ patients, thresholds }) => {
  const [activeAlerts, setActiveAlerts] = useState([]);

  // Check for alerts when component mounts or when new data arrives
  useEffect(() => {
    const newAlerts = patients.map(patient => {
      const patientAlerts = [];
      if (patient.heartRate > thresholds.heartRate) {
        patientAlerts.push(`High heart rate for ${patient.name}`);
      }
      // Check other vital signs
      return patientAlerts;
    });
    setActiveAlerts(newAlerts.flat());
  }, [patients, thresholds]);

  return (
    <div className="container">
      <h1>Alerts</h1>
      <ul>
        {activeAlerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
