// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/css/Admin_Login.css';
// import { Link } from 'react-router-dom';

// const Admin_Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     // Simulated login logic, replace with actual authentication logic
//     if (username === 'admin@gmail.com' && password === 'admin') {
//       // Redirect to the admin dashboard after successful login
//       navigate('/AdminHome');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//         <div className="container">
//           <h1>Admin Login</h1>
//           {error && <p className="error">{error}</p>}
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="email"
//               id="username"
//               placeholder="Enter your admin username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your admin password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <br></br>
//           <div>
//             <button style={{backgroundColor:"#be43fb"}} onClick={handleLogin}>Login</button>
//           </div>
         
//         </div>
//       );
// };

// export default Admin_Login;

// Admin_Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Admin_Login.css';
import { Link } from 'react-router-dom';

const Admin_Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Simulated login logic, replace with actual authentication logic
    if (username === 'admin@gmail.com' && password === 'admin') {
      // Redirect to the admin dashboard after successful login
      navigate('/AdminHome');
    } else {
      setError('Invalid username or password');
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
        <h1 style={{color:'black'}}>Admin Login</h1>
        {error && <p className="error">{error}</p>}
        <div>
          <label style={{color:'black'}} htmlFor="username">Username:</label>
          <input
            type="email"
            id="username"
            placeholder="Enter your admin username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label style={{color:'black'}} htmlFor="password">Password:</label>
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
