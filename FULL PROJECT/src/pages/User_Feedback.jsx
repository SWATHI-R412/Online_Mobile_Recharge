// import { Alert } from '@mui/material';
// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';

// const User_Feedback = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState('');

//   const handleSubmission = () => {
//     // Add your feedback submission logic here
//     console.log(`Name: ${name}, Email: ${email}, Feedback: ${feedback}`);
//     // You might want to make an API call or perform further actions for feedback submission

//     // For demonstration, you can clear the form after submission
//     setName('');
//     setEmail('');
//     setFeedback('');
    
//   };

//   return (
//     <div>
//       <h1 style={{color:'white', textAlign:'center'}}>Feedback</h1>
//       <Navbar/>
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input style={{width:'235px'}}
//           type="text"
//           id="name"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />

//         <label htmlFor="email">Email:</label>
//         <input style={{width:'235px'}}
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />

//         <label htmlFor="feedback">Feedback:</label>
//         <textarea style={{width:'225px'}}
//           id="feedback"
//           placeholder="Enter your feedback"
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//         />
//         <br />

//         <button style={{backgroundColor:"#be43fb", width:"200px"}} type="button" onClick={handleSubmission}>
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default User_Feedback;
import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import Navbar from '../components/Navbar';

const User_Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmission = async () => {
    // Create an object representing the data to be sent to the backend
    const requestData = {
      name: name,
      email: email,
      feedback: feedback,
    };
    const token = localStorage.getItem('token');
    try {
      if (!token) {
        navigate('/Admin_Login');
        return;
      }

      // Make an HTTP POST request to your backend endpoint with the bearer token
      const response = await axios.post('http://localhost:8080/feedback', requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle success, if needed
      console.log(response.data);
      alert('Feedback submitted successfully');

      // For demonstration, you can clear the form after submission
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      // Handle error, if needed
      console.error('Error during feedback submission:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Feedback</h1>
      <Navbar />
      <form>
        <label htmlFor="name">Name:</label>
        <input style={{ width: '235px' }}
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input style={{ width: '235px' }}
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="feedback">Feedback:</label>
        <textarea style={{ width: '225px' }}
          id="feedback"
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />

        <button style={{ backgroundColor: "#be43fb", width: "200px" }} type="button" onClick={handleSubmission}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default User_Feedback;
