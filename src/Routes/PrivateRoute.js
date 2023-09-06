import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { checkDoctorLogin } from '../api/API';

function PrivateRoute({ isDoc,check1 }) {
  let check;
  console.log("top level private",check1,isDoc)
  

  // Check if the user is authenticated, and render the Outlet (child routes) accordingly.
  const checkk=async () => {
    console.log("insdie checkk async")
    return await checkDoctorLogin().then(data=>{check=data;console.log("data",check1)});
    
  }
  checkk();
  if (!check) {
    // setTimeout(3000);
    console.log(isDoc,"inside private route",check);
    return <Navigate to="/login" replace={true} />; // Redirect to the login page if not authenticated.
  }
  console.log(check,"else  private route")

  return <Outlet />;
}

export default PrivateRoute;
