import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Admin_Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admin_Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   try {
  //     // Replace the following URL with your actual authentication endpoint
  //     const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
  //       email:email,
  //       password:password,
  //     });

  //     if (response.status===202 && response.data.role==='ADMIN') {
  //       // Redirect to the admin dashboard after successful login
  //       setError('');
  //       navigate('/AdminHome');
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
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password,
      });

      if (response.status === 202 && response.data.role === 'ADMIN' && response.data.token) {
        // Assuming the token is directly accessible from response.data.token
        const adminToken = response.data.token;

        // Store the token in local storage
        localStorage.setItem('adminToken', adminToken);

        // Redirect to the admin dashboard after successful login
        setError('');
        navigate('/AdminHome');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="adlog-container">
      <div className="left-section">
        {/* Image or content for the left section */}
        <img src="https://img.freepik.com/free-vector/accept-tasks-concept-illustration_114360-4676.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais" alt="Left Section Image" />
      </div>
      <div className="right-section">
        {/* Registration form for the right section */}
        <h1 style={{ color: 'black' }}>Admin Login</h1>
        {error && <p className="error">{error}</p>}
        <div>
          <label style={{ color: 'black' }} htmlFor="email">Username:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label style={{ color: 'black' }} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button style={{ backgroundColor: "#be43fb" }} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin_Login;
