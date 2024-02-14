import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/User_Login.css';

const User_Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Make an Axios POST request to your authentication endpoint
  //     const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
  //       email: email,
  //       password: password,
  //     });

  //     // Check if the response indicates a successful login
  //     if (response.status===202 && response.data.role==='USER') {
  //       // Redirect to the user dashboard after successful login
  //       navigate('/Home');
  //     } else {
  //       setError('Invalid email or password');
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     setError('An error occurred during login');
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make an Axios POST request to your authentication endpoint
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password,
      });
  
      // Log the entire response to inspect its structure
      console.log('Login response:', response);
  
      // Check if the response indicates a successful login
      if (response.status === 202 && response.data.role === 'USER') {
        // Assuming the token is in a property named 'token' in the response
        const authToken = response.data.token;
  
        // Store the token in local storage
        localStorage.setItem('token', authToken);
  
        // Redirect to the user dashboard after successful login
        navigate('/Home');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };
  

  return (
    <div className="user-login-container">
      <div className="left-section">
        <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais" alt="User Login Image" />
      </div>
      <div className="right-section">
        <h1>User Login</h1>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label style={{color:'black'}} htmlFor="email">Username:</label>
          <input style={{width:'250px'}}
            type="text"
            id="email"
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label style={{color:'black'}} htmlFor="password">Password:</label>
          <input style={{width:'250px'}}
            type="password"
            id="password"
            placeholder='Enter password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button style={{ backgroundColor: "#be43fb" }} onClick={handleLogin}>
            Login
          </button>
        </div>
        <div>
          <p>
            New user? Click <Link to="/User_Registration">here</Link> to register.
          </p>
        </div>
      </div>
    </div>
  );
};

export default User_Login;
