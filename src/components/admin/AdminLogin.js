import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { checkDocExists } from '../../api/API';
// import { login } from '../Auth/Auth';

const AdminLogin = ({ setIsDoc,isDoc }) => {
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
      const docExists = await checkDocExists(values.username,values.password);
      if (docExists) {
        // User exists, handle successful login
        console.log('Login successful');
        setIsDoc(true);
        // console.log(isDoc,"isDoc");
        
        navigate('/dashboard');
        
        
      } else {
        // User doesn't exist or incorrect credentials
        console.log('Login failed. Please check your credentials.');
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
                  <div className="card-header">Doctor Login</div>
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

export default AdminLogin;











// import React, { useState } from 'react';
// import { authService } from '../Auth/Auth';
// import * as Yup from 'yup';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const LoginForm = ({ onLogin }) => {
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const handleSubmit = async (values) => {
//     try {
//       const user = await authService.authenticate(values.username, values.password);
//       if (user) {
//         const token = authService.generateToken(user);
//         onLogin(token); // Pass the token up to the parent component
//       } else {
//         // Handle login error
//       }
//     } catch (error) {
//       // Handle error
//     }
//   };

//   return (
//     <Formik
//       initialValues={{ username: '', password: '' }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <div className="form-group">
//           <label>Username</label>
//           <Field type="text" name="username" className="form-control" />
//           <ErrorMessage name="username" component="div" className="text-danger" />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <Field type="password" name="password" className="form-control" />
//           <ErrorMessage name="password" component="div" className="text-danger" />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default LoginForm;










// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const Login = () => {
//   const initialValues = {
//     username: '',
//     password: '',
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const handleSubmit = (values) => {
//     // Handle login logic here, e.g., send values to API
//     console.log(values);
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card mt-5">
//             <div className="card-header">Login</div>
//             <div className="card-body">
//               <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 <Form>
//                   <div className="form-group">
//                     <label>Username</label>
//                     <Field
//                       type="text"
//                       name="username"
//                       className="form-control"
//                     />
//                     <ErrorMessage
//                       name="username"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Password</label>
//                     <Field
//                       type="password"
//                       name="password"
//                       className="form-control"
//                     />
//                     <ErrorMessage
//                       name="password"
//                       component="div"
//                       className="text-danger"
//                     />
//                   </div>
//                   <button type="submit" className="btn btn-primary">
//                     Login
//                   </button>
//                 </Form>
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
