import React, { useState, useEffect } from "react";
import { Box, Alert } from "@mui/material";

const AlertNotifications = ({ patient }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const newAlerts = [];

    for (const key in patient.vitalSigns) {
      const value = parseFloat(patient.vitalSigns[key]);
      const { min, max } = patient.thresholds[key];

      if (value < min || value > max) {
        newAlerts.push(`${key} is out of range`);
      }
    }

    setAlerts(newAlerts);
  }, [patient.vitalSigns, patient.thresholds]);

  return (
    <div>
      <Box
        sx={{
          background: "#0d6e7b",
          padding: "10px",
          textAlign: "center",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <h2>Alert Notifications for {patient.name}</h2>
      </Box>
      {alerts.length > 0 ? (
        <div>
          <h3>Alerts:</h3>
          <ul>
            {alerts.map((alert, index) => (
              <Alert key={index} severity="warning">
                {alert}
              </Alert>
            ))}
          </ul>
        </div>
      ) : (
        <Alert severity="info">No alerts at the moment.</Alert>
      )}
    </div>
  );
};

export default AlertNotifications;
