import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute({ isDoc }) {
  // Check if the user is authenticated, and render the Outlet (child routes) accordingly.
  if (!isDoc) {
    console.log(isDoc);
    return <Navigate to="/login" replace={true} />; // Redirect to the login page if not authenticated.
  }

  return <Outlet />;
}

export default PrivateRoute;
