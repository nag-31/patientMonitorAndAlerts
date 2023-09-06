import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/DocLogin';
import Home from './components/Home';
import PatientProfile from './components/PatientProfile';
import Alerts from './components/Alerts';
import PatientMonitoringApp from './components/PateintMonitoringApp.jss';
import { Suspense, useEffect, useState } from 'react';
import PrivateRoute from './Routes/PrivateRoute';
import UpdateThreshold from './components/UpdateThreshold';
import Doctor from './components/Doctor';
import PatientsDashboard from './components/PatientDashboard';
import DV from './DV/DV';
import AlertNotifications from './DV/AlertNotifications';
import ThresholdConfiguration from './DV/ThresholdConfiguration';
import EditPatientForm from './components/EditPatientForm';
import SignUpForm from './components/PatientSignUp';
import { checkAdminLogin, checkDoctorLogin, checkPatientLogin } from './api/API';
import PatientView from './components/PatientView';
import PatientLogin from './components/PatientLogin';
import PatientHome from './components/PatientHome';
import LazyDashboard from './components/LazyDashboard';

function App() {
  // const [AdminLogged,setAdminLogged]=useState(false);
  // const [isDoc, setIsDoc] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isPatient, setIsPatient] = useState(false);
  const [isDoctorLogged, setIsDoctorLogged] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [isPatientLogged, setIsPatientLogged] = useState(false);

  // console.log(isDoctorLogged,"inAPP isDoc");
  useEffect(() => {
    
    // Fetch login status for doctors
    checkDoctorLogin()
      .then((data) => {
        setIsDoctorLogged(data.log);
      })
      .catch((error) => {
        console.error('Error fetching doctor login status:', error);
      });

    // Fetch login status for admins
    checkAdminLogin()
      .then((data) => {
        setIsAdminLogged(data.log);
      })
      .catch((error) => {
        console.error('Error fetching admin login status:', error);
      });

    // Fetch login status for patients
    checkPatientLogin()
      .then((data) => {
        setIsPatientLogged(data.log);
      })
      .catch((error) => {
        console.error('Error fetching patient login status:', error);
      });
  }, []);


  return (
    
    
    <Router>
        <Routes>
        <Route path="/login" element={<Login  setIsDoc={setIsDoctorLogged} isDoc={isDoctorLogged} />} />
        {/* <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} isAuthenticated={isAuthenticated} />}
        /> */}
        <Route
          path="/test"
          element={
            <PrivateRoute isDoc={isDoctorLogged} > check1={checkDoctorLogin()}
              <Dashboard/>
              {/* <Route index element={<Dashboard />} /> */}
              {/* <Route index element={<Home />} /> */}
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
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
        <Route path="/patient/:patientId" element={<PatientView/>} />
        <Route path="/patientlogin" element={<PatientLogin />} />
        <Route path="/patienthome" element={<PatientHome />} />
         
        <Route path="/dashboardlazy" element={<Suspense fallback={<div>Loading...</div>}><LazyDashboard /></Suspense>} />
        {/* <Route path="/alerts" element={<AlertNotifications/>}/>
        <Route path="/thc" element={<ThresholdConfiguration/>}/> */}

        
        </Routes>

    </Router>
  );
}

export default App;
