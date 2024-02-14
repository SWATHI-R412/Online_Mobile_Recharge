// import React, { useState } from 'react';
// import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import '../assets/css/Add_On.css'
// import Navbar from '../components/Navbar';

// const Add_On = () => {
//   const [selectedAddOn, setSelectedAddOn] = useState('');
//   const [mobileNumber, setmobileNumber] = useState('');

//   const handleAddOnSelection = (addOn) => {
//     setSelectedAddOn(addOn);
//   };

//   const handlemobileNumberChange = (e) => {
//     setmobileNumber(e.target.value);
//   };

//   const handleRecharge = () => {
//     // Add your recharge logic here
//     console.log(`Recharging ${mobileNumber} with ${selectedAddOn}`);
//     // You might want to make an API call or perform further actions for recharge
//     alert('Add-on choosen successfully')
//   };

//   return (
//     <div className="container">
//       <Navbar/>
//       <h1 className="heading">Recharge Add-Ons</h1><br></br>
//       <label htmlFor="mobileNumber">Enter Mobile Number:</label>
//       <input
//         className="inputField"
//         type="tel"
//         id="mobileNumber"
//         placeholder="Enter your mobile number"
//         value={mobileNumber}
//         onChange={handlemobileNumberChange}
//       />
//       <br />

//       <div>
//         <FormControl>
//           <FormLabel style={{color:'white'}}  className="radioGroupLabel">Choose Add-On:</FormLabel>
//           <RadioGroup
//             aria-labelledby="demo-radio-buttons-group-label"
//             name="radio-buttons-group"
//           >
//             <FormControlLabel  value="datapack" control={<Radio />} label="Data Pack" />
//             <FormControlLabel  value="talktime" control={<Radio />} label="Talktime" />
//             <FormControlLabel  value="sms" control={<Radio />} label="SMS Pack" />
//           </RadioGroup>
//         </FormControl>
//       </div>

//       <br />

//       <button style={{ backgroundColor: '#be43fb' }} className="rechargeButton" type="button" onClick={handleRecharge}>
//         Recharge Now
//       </button>
//     </div>
//   );
// };

// export default Add_On;
import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import '../assets/css/Add_On.css'
import Navbar from '../components/Navbar';

const Add_On = () => {
  const [selectedAddOn, setSelectedAddOn] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');

  const handleAddOnSelection = (addOn) => {
    setSelectedAddOn(addOn);
  };

  const handlemobileNumberChange = (e) => {
    setmobileNumber(e.target.value);
  };

  const handleRecharge = async () => {
    // Create an object representing the data to be sent to the backend
    const requestData = {
      selectedAddOn: selectedAddOn,
      mobileNumber: mobileNumber,
    };

    // Make an HTTP POST request to your backend endpoint with Bearer token
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle case where token is not available (redirect or show error)
        console.error('Bearer token not available. Redirecting to login...');
        // For example, you can redirect to the login page
        // history.push('/Admin_Login');
        return;
      }

      const response = await axios.post('http://localhost:8080/addon', requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Handle success, if needed
      console.log(response.data);
      alert('Add-on chosen successfully');
    } catch (error) {
      // Handle error, if needed
      console.error('Error during add-on recharge:', error);
      alert('Failed to choose add-on. Please try again.');
    }

    // You might want to perform further actions after recharge
  };

  return (
    <div className="container">
      <Navbar />
      <h1 className="heading">Recharge Add-Ons</h1><br></br>
      <label htmlFor="mobileNumber">Enter Mobile Number:</label>
      <input
        className="inputField"
        type="tel"
        id="mobileNumber"
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChange={handlemobileNumberChange}
      />
      <br />

      <div>
        <FormControl>
          <FormLabel style={{ color: 'white' }} className="radioGroupLabel">Choose Add-On:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={selectedAddOn}
            onChange={(e) => handleAddOnSelection(e.target.value)}
          >
            <FormControlLabel value="datapack" control={<Radio />} label="Data Pack" />
            <FormControlLabel value="talktime" control={<Radio />} label="Talktime" />
            <FormControlLabel value="sms" control={<Radio />} label="SMS Pack" />
          </RadioGroup>
        </FormControl>
      </div>

      <br />

      <button style={{ backgroundColor: '#be43fb' }} className="rechargeButton" type="button" onClick={handleRecharge}>
        Recharge Now
      </button>
    </div>
  );
};

export default Add_On;
