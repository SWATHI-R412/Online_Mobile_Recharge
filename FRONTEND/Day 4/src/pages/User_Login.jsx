// User_Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/User_Login.css';

const User_Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulated login logic, replace with actual authentication logic
    if (username === 'swa@gmail.com' && password === 'password') {
      // Redirect to the user dashboard after successful login
      navigate('/Home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="user-login-container">
      <div className="left-section">
        {/* Your image goes here */}
        <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais" alt="User Login Image" />
      </div>
      <div className="right-section">
        <h1>User Login</h1>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label style={{color:'black'}} htmlFor="username">Username:</label>
          <input style={{width:'250px'}}
            type="text"
            id="username"
            placeholder='Enter your username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
