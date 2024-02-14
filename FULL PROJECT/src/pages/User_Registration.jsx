// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from './userActions';
// import '../assets/css/User_Registration.css';

// const User_Registration = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleRegistration = () => {
//     dispatch(setUser(fullName));
//     navigate('/Home');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     if (fullName && email && password && confirmPassword && mobileNumber) {
//       // Check if password and confirm password match
//       if (password === confirmPassword) {
//         handleRegistration();
//       } else {
//         alert('Password and Confirm Password should match.');
//       }
//     } else {
//       alert('Please fill in all the required fields.');
//     }
//   };

//   return (
//     <div className="user-registration-container">
//       <div className="user-registration-content">
//         <div className="left-section">
//           {/* Your image goes here */}
//           <img
//             src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais"
//             alt="User Registration Image"
//           />
//         </div>
//         <div className="right-section">
//           <h1 style={{ fontSize: '35px' }}>User Registration</h1>
//           <form onSubmit={handleSubmit}>
//             <label style={{ color: 'black' }} htmlFor="fullName">
//               Full Name:
//               <br />
//               <input
//                 style={{ width: '250px' }}
//                 type="text"
//                 id="fullName"
//                 placeholder="Enter your full name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//               />
//             </label>

//             <label style={{ color: 'black' }} htmlFor="email">
//               Email:
//               <br />
//               <input
//                 style={{ width: '250px' }}
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </label>

//             <label style={{ color: 'black' }} htmlFor="password">
//               Password:
//               <br />
//               <input
//                 style={{ width: '250px' }}
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </label>

//             <label style={{ color: 'black' }} htmlFor="confirmPassword">
//               Confirm Password:
//               <br />
//               <input
//                 style={{ width: '250px' }}
//                 type="password"
//                 id="confirmPassword"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </label>

//             <label style={{ color: 'black' }} htmlFor="mobileNumber">
//               Mobile Number:
//               <br />
//               <input
//                 style={{ width: '250px' }}
//                 type="tel"
//                 id="mobileNumber"
//                 placeholder="Enter your mobile number"
//                 value={mobileNumber}
//                 onChange={(e) => setMobileNumber(e.target.value)}
//                 required
//               />
//             </label>

//             <button type="submit" style={{ backgroundColor: '#be43fb', width: '150px' }}>
//               Register
//             </button>
//             <div>
//               <p>
//                 Already a user? Click <Link to="/User_Login">here</Link> to login.
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default User_Registration;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './userActions';
import axios from 'axios';  
import '../assets/css/User_Registration.css';

const User_Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      // Check if all required fields are filled
      if (!name || !email || !password || !confirmPassword || !mobileNumber) {
        alert('Please fill in all the required fields.');
        return;
      }
  
      // Check if password and confirm password match
      if (password !== confirmPassword) {
        alert('Password and Confirm Password should match.');
        return;
      }
  
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
        confirmPassword:confirmPassword,
        mobileNumber: mobileNumber,
        
      });
  
      // Assuming the API returns the user data upon successful registration
      dispatch(setUser(response.data.name));
      navigate('/Home');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Registration failed:', error.response.data);
        // You can handle specific error messages here, if needed
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
  
      // Handle registration error (e.g., display an error message to the user)
    }
  };
  

  return (
    <div className="user-registration-container">
      <div className="user-registration-content">
        <div className="left-section">
          {/* Your image goes here */}
          <img
            src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais"
            alt="User Registration Image"
          />
        </div>
        <div className="right-section">
          <h1 style={{ fontSize: '35px' }}>User Registration</h1>
          <form>
            <label htmlFor="fullName">
              User Name:
              <br />
              <input
              style={{ width: '250px' }}
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label htmlFor="email">
              Email:
              <br />
              <input
              style={{ width: '250px' }}
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label htmlFor="password">
              Password:
              <br />
              <input
              style={{ width: '250px' }}
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label htmlFor="confirmPassword">
              Confirm Password:
              <br />
              <input
              style={{ width: '250px' }}
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>

            <label htmlFor="mobileNumber">
              Mobile Number:
              <br />
              <input
              style={{ width: '250px' }}
                type="tel"
                id="mobileNumber"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </label>

            <button type="submit" style={{ backgroundColor: '#be43fb', width: '150px' }} onClick={handleRegistration}>
              Register
            </button>
            <div>
              <p>
                Already a user? Click <Link to="/User_Login">here</Link> to login.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User_Registration;
