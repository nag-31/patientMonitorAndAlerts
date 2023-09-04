import { useState } from "react";
// import "./App.css";
import AlertNotifications from "./AlertNotifications";
import ThresholdConfiguration from "./ThresholdConfiguration";
import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Charts from "./components/Charts";
import DataVisualization from "./DataVisualisation";

function DV() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      medicalHistory: "Hypertension, Diabetes",
      currentCondition: "Stable",
      vitalSigns: {
        heartRate: 78,
        bloodPressure: "120/80",
        temprature: 98.6,
        respiratoryRate: 16,
      },
      thresholds: {
        heartRate: { min: 60, max: 100 },
        bloodPressure: { min: 120, max: 180 },
        temprature: { min: 98.6, max: 100.4 },
        respiratoryRate: { min: 12, max: 20 },
      },
    },

    {
      id: 2,
      name: "Lavanya",
      age: 45,
      gender: "Female",
      medicalHistory: "Diabetes",
      currentCondition: "Stable",
      vitalSigns: {
        heartRate: 120,
        bloodPressure: "120/200",
        temprature: 981.6,
        respiratoryRate: 1,
      },
      thresholds: {
        heartRate: { min: 60, max: 100 },
        bloodPressure: { min: 120, max: 180 },
        temprature: { min: 98.6, max: 100.4 },
        respiratoryRate: { min: 12, max: 20 },
      },
    },
    // Add more patients as needed
  ]);

  return (
    <div>
      {patients.map((patient) => (
        <div key={patient.id}>
          <ThresholdConfiguration
            patient={patient}
            setPatients={setPatients}
          />
          <AlertNotifications
            patient={patient}
          />
          <DataVisualization key={patient.id} patient={patient} />
        </div>
      ))}
      
     {/*  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/thc" element={<ThresholdConfiguration/>}/>
        <Route path="/alerts" element={<AlertNotifications/>}/>
      </Routes> */}
    </div>
  );
}

export default DV;
