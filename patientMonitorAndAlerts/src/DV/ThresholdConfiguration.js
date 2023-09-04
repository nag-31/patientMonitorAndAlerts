import React from "react";
import { Box, TextField } from "@mui/material";

const ThresholdConfiguration = ({ patient, setPatients }) => {
  const handleChange = (name, type, value) => {
    const updatedPatients = [...setPatients];
    const patientIndex = updatedPatients.findIndex(
      (p) => p.id === patient.id
    );

    updatedPatients[patientIndex].thresholds[name][type] = parseFloat(value);
    setPatients(updatedPatients);
  };

  return (
    <div className="App">
      <Box
        sx={{
          background: "skyblue",
          padding: "10px",
          textAlign: "center",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <h2>Threshold Configuration for {patient.name}</h2>
      </Box>
      {Object.keys(patient.thresholds).map((key) => (
        <Box
          key={key}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id={`${key}-min`}
            label={`${key} Min`}
            variant="outlined"
            type="number"
            value={patient.thresholds[key].min}
            onChange={(e) => handleChange(key, "min", e.target.value)}
          />
          <TextField
            id={`${key}-max`}
            label={`${key} Max`}
            variant="outlined"
            type="number"
            value={patient.thresholds[key].max}
            onChange={(e) => handleChange(key, "max", e.target.value)}
          />
        </Box>
      ))}
    </div>
  );
};

export default ThresholdConfiguration;
