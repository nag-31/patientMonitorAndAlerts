import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Patient Monitor and alerts system</h1>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Admin</h5>
              <p className="card-text">Manage hospital administration</p>
              <a href="/admin" className="btn btn-primary">Admin Dashboard</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Doctor</h5>
              <p className="card-text">Access doctor's dashboard</p>
              <a href="/login" className="btn btn-success">Doctor Dashboard</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Patient</h5>
              <p className="card-text">Manage patient information</p>
              <a href="/patienthome" className="btn btn-info">Patient</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


// const Home = () => {
//   return (
//     <div>
//         <Link to="/">Home</Link>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/login">login</Link>
//         <Link to="/profile">profile</Link>
//         <Link to="/alerts">alerts</Link>
//         <Link to="/updatethreshold">updatethreshold</Link>
        



//     </div>
    
//   )
// }

// export default Home