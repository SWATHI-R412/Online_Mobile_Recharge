// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../assets/css/User_Registration.css';

// const User_Registration = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const navigate = useNavigate();

//   const handleRegistration = () => {
//     navigate('/Home');
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
//           <h1 style={{fontSize:'35px'}}>User Registration</h1>
//           <form>
//             <label style={{color:'black'}} htmlFor="fullName">Full Name:</label>
//             <input style={{width:'250px'}}
//               type="text"
//               id="fullName"
//               placeholder="Enter your full name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />

//             <label style={{color:'black'}} htmlFor="email">Email:</label>
//             <input style={{width:'250px'}}
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label style={{color:'black'}} htmlFor="password">Password:</label>
//             <input style={{width:'250px'}}
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
            

//             <label style={{color:'black'}} htmlFor="mobileNumber">Mobile Number:</label>
//             <input style={{width:'250px'}}
//               type="tel"
//               id="mobileNumber"
//               placeholder="Enter your mobile number"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//             />

//             <button type="button" style={{ backgroundColor: "#be43fb", width:'150px' }} onClick={handleRegistration}>
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
import '../assets/css/User_Registration.css';

const User_Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    // Perform registration logic here
    navigate('/Home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (fullName && email && password && mobileNumber) {
      handleRegistration();
    } else {
      alert('Please fill in all the required fields.');
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
          <form onSubmit={handleSubmit}>
            <label style={{ color: 'black' }} htmlFor="fullName">
              Full Name:
              <br></br>
              <input style={{width:'250px'}}
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>

            <label style={{ color: 'black' }} htmlFor="email">
              Email:
              <br></br>
              <input style={{width:'250px'}}
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label style={{ color: 'black' }} htmlFor="password">
              Password:
              <br></br>
              <input style={{width:'250px'}}
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label style={{ color: 'black' }} htmlFor="mobileNumber">
              Mobile Number:
              <br></br>
              <input style={{width:'250px'}}
                type="tel"
                id="mobileNumber"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </label>

            <button type="submit" style={{ backgroundColor: '#be43fb', width: '150px' }}>
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
