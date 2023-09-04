
import React, { useState, useEffect } from "react";
import { Box, Alert } from "@mui/material";

const AlertNotifications = ({ patient,thresholds }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const newAlerts = [];
    console.log(patient);

    for (const key in patient.vitalSigns) {

      const value = parseFloat(patient.vitalSigns[key]);
      const { min, max } = thresholds[key];

      if (value < min || value > max) {
        const alertId = `${key}-${new Date().getTime()}`;
        newAlerts.push({ id: alertId, message: `${key} reading crossed a threshold` });
      }
    }

    setAlerts(newAlerts);
  }, [patient.vitalSigns, thresholds]);

  const handleDismiss = (alertId) => {
    const updatedAlerts = alerts.filter((alert) => alert.id !== alertId);
    setAlerts(updatedAlerts);
  };

  return (
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
      {alerts.length > 0 ? (
        <div>
          <h3>Alerts:</h3>
          <ul>
            {alerts.map((alert, index) => (
              <Alert key={alert.id} severity="warning">
                {alert.message}
                <button onClick={() => handleDismiss(alert.id)}>Dismiss</button>
              </Alert>
            ))}
          </ul>
        </div>
      ) : (
        <Alert severity="info">No alerts at the moment.</Alert>
      )}
    </Box>
  );
};

export default AlertNotifications;
