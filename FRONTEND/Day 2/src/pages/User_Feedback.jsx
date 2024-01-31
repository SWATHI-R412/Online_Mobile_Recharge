import { Alert } from '@mui/material';
import React, { useState } from 'react';

const User_Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmission = () => {
    // Add your feedback submission logic here
    console.log(`Name: ${name}, Email: ${email}, Feedback: ${feedback}`);
    // You might want to make an API call or perform further actions for feedback submission

    // For demonstration, you can clear the form after submission
    setName('');
    setEmail('');
    setFeedback('');
    
  };

  return (
    <div>
      <h1 style={{color:'white', textAlign:'center'}}>Feedback</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input style={{width:'235px'}}
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input style={{width:'235px'}}
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="feedback">Feedback:</label>
        <textarea style={{width:'225px'}}
          id="feedback"
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />

        <button style={{backgroundColor:"#be43fb", width:"200px"}} type="button" onClick={handleSubmission}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default User_Feedback;
