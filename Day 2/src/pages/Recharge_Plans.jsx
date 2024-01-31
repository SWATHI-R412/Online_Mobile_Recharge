import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Recharge_Plans.css'


const Recharge_Plans = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a selected plan in session storage
    const storedPlan = sessionStorage.getItem('selectedPlan');
    if (storedPlan) {
      setSelectedPlan(storedPlan);
      // Clear the selected plan from session storage once retrieved
      sessionStorage.removeItem('selectedPlan');
    }

    // Check if there is a stored mobile number and operator in session storage
    const storedMobileNumber = sessionStorage.getItem('mobileNumber');
    const storedOperator = sessionStorage.getItem('operator');
    if (storedMobileNumber && storedOperator) {
      setMobileNumber(storedMobileNumber);
      setOperator(storedOperator);
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleChangeOperator = (selectedOperator) => {
    setOperator(selectedOperator);
    sessionStorage.setItem('operator', selectedOperator);
    navigate(`/plans/${selectedOperator.toLowerCase()}`);
  };

  const handleRecharge = () => {
    // Implement your recharge logic here with the selected plan
    alert(`Recharging with: ${selectedPlan}`);

    // Clear the selected plan from session storage
    sessionStorage.removeItem('selectedPlan');

    
  };

  return (
    <div className="container">
      <h1 style={{color:'white'}}>Recharge Plans</h1>
      <form>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input style={{width:'250px'}}
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
            sessionStorage.setItem('mobileNumber', e.target.value);
          }}
          required
        />

        <label htmlFor="operator">Choose Operator:</label>
        <select style={{width:'250px',height:'35px'}}
          id="operator"
          name="operator"
          value={operator}
          onChange={(e) => handleChangeOperator(e.target.value)}
          required
        >
          <option value="" disabled>Select an operator</option>
          <option value="Airtel">Airtel</option>
          <option value="Vodafone">Vodafone</option>
          <option value="Jio">Jio</option>
          {/* Add more operators as needed */}
        </select>
      </form>

      {selectedPlan && (
        <div>
          <h2>Selected Plan:</h2>
          <p style={{color:'white'}}>{selectedPlan}</p>
        </div>
      )}

      <button style={{ backgroundColor: "#be43fb" }} onClick={handleRecharge} disabled={!selectedPlan}>
        Recharge
      </button>
    </div>
  );
};

export default Recharge_Plans;
