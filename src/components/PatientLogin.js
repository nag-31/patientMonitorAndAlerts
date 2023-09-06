import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { checkDocExists, checkPatientExists, updateDoctorLogin } from '../api/API';
// import { login } from '../Auth/Auth';

const PatientLogin = ({ setIsDoc,isDoc }) => {
  const navigate = useNavigate();
  const [Errormessage,setErrormessage]=useState('');
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
        username: '',
        password: '',
      };

  const handleSubmit = async (values) => {
    try{
      const docExists = await checkPatientExists(values.username,values.password);
      if (docExists) {
        // User exists, handle successful login
        console.log('Login successful',docExists);
        

        // console.log(isDoc,"isDoc");
        
        navigate(`/patient/${docExists}`);
        
        
      } else {
        // User doesn't exist or incorrect credentials
        console.log('Login failed. Please check your patient credentials.');
        setErrormessage("incorrect credentials");

      }
      // if (values.username=="admin" && values.password=="admin"){
      //   navigate('/dashboard');
      // }
    
    
      //  else {
      //   // Handle login error
      //   setErrormessage(' wrong crdentials try again');
      // }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
    <div className="container">
            <div className="row justify-content-center">

              <div className="col-md-6">
                <div className="card mt-5">
                  <div className="card-header">Patient Login</div>
                  <div className="card-body">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className="form-group">
                          <label>Username</label>
                          <Field
                            type="text"
                            name="username"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <Field
                            type="password"
                            name="password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </Form>
                    </Formik>
                    {Errormessage && <div className="error">{Errormessage}</div>}

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {Errormessage && <div>{Errormessage}</div>} */}
    </>
          
        );
    };

export default PatientLogin;








