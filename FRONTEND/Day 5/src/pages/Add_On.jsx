import React, { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import '../assets/css/Add_On.css'

const Add_On = () => {
  const [selectedAddOn, setSelectedAddOn] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddOnSelection = (addOn) => {
    setSelectedAddOn(addOn);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleRecharge = () => {
    // Add your recharge logic here
    console.log(`Recharging ${phoneNumber} with ${selectedAddOn}`);
    // You might want to make an API call or perform further actions for recharge
    alert('Add-on choosen successfully')
  };

  return (
    <div className="container">
      <h1 className="heading">Recharge Add-Ons</h1><br></br>
      <label htmlFor="phoneNumber">Enter Mobile Number:</label>
      <input
        className="inputField"
        type="tel"
        id="phoneNumber"
        placeholder="Enter your mobile number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <br />

      <div>
        <FormControl>
          <FormLabel style={{color:'white'}}  className="radioGroupLabel">Choose Add-On:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel  value="datapack" control={<Radio />} label="Data Pack" />
            <FormControlLabel  value="talktime" control={<Radio />} label="Talktime" />
            <FormControlLabel  value="sms" control={<Radio />} label="SMS Pack" />
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
