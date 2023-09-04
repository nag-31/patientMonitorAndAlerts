import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/DocLogin';
import Home from './components/Home';
import PatientProfile from './components/PatientProfile';
import Alerts from './components/Alerts';
import PatientMonitoringApp from './components/PateintMonitoringApp.jss';
import { useState } from 'react';
import PrivateRoute from './Routes/PrivateRoute';
import UpdateThreshold from './components/UpdateThreshold';
import Doctor from './components/Doctor';
import PatientsDashboard from './components/PatientDashboard';
import DV from './DV/DV';
import AlertNotifications from './DV/AlertNotifications';
import ThresholdConfiguration from './DV/ThresholdConfiguration';
import EditPatientForm from './components/EditPatientForm';
import SignUpForm from './components/PatientSignUp';

function App() {
  const [AdminLogged,setAdminLogged]=useState(false);
  const [isDoc, setIsDoc] = useState(false);
  console.log(isDoc,"inAPP")

  return (
    
    
    <Router>
        <Routes>
        <Route path="/login" element={<Login  setIsDoc={setIsDoc} isDoc={isDoc} />} />
        {/* <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} isAuthenticated={isAuthenticated} />}
        /> */}
        <Route
          path="/test"
          element={
            <PrivateRoute isDoc={isDoc}>
              <Route index element={<Dashboard />} />
              {/* <Route index element={<Home />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Add other protected routes here */}
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/profile" element={<PatientProfile/>} />
        <Route path="/alerts" element={<Alerts/>} />
        <Route path="/monitor" element={<PatientMonitoringApp/>} />
        <Route path="/profile/:patientId" element={<PatientProfile/>} />
        <Route path="/patientDashboard" element={<PatientsDashboard/>} />
        <Route path="/updatethreshold" element={<UpdateThreshold/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/DV" element={<DV/>} />
        <Route path="/editpatient/:patientId" element={<EditPatientForm/>} />
        <Route path="/patientsignup" element={<SignUpForm/>} />
        
        {/* <Route path="/alerts" element={<AlertNotifications/>}/>
        <Route path="/thc" element={<ThresholdConfiguration/>}/> */}

        
        </Routes>

    </Router>
  );
}

export default App;
