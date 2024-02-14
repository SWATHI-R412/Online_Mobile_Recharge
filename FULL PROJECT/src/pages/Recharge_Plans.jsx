// Recharge_Plans.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../assets/css/Recharge_Plans.css';
import Navbar from '../components/Navbar';

const Recharge_Plans = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [availablePlans, setAvailablePlans] = useState([]);
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
      setAvailablePlans(getPlansForOperator(storedOperator));
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const getPlansForOperator = (selectedOperator) => {
    // Implement logic to fetch plans for the selected operator from your data source
    // You can replace this with an API call or any other way to fetch plans dynamically
    // For demonstration purposes, providing static plans
    switch (selectedOperator) {
      case 'Airtel':
        return ['Airtel ₹199 Plan: Unlimited calls, 2GB/day data, 100 SMS/day', 'Airtel ₹399 Plan: Unlimited calls, 3GB/day data, 100 SMS/day', 'Airtel ₹599 Plan: Unlimited calls, 4GB/day data, 100 SMS/day'];
      case 'Vodafone':
        return ['Vodafone ₹249 Plan: Unlimited calls, 1.5GB/day data, 100 SMS/day', 'Vodafone ₹349 Plan: Unlimited calls, 2GB/day data, 100 SMS/day', 'Vodafone ₹499 Plan: Unlimited calls, 3GB/day data, 100 SMS/day'];
      case 'Jio':
        return ['Jio ₹149 Plan: Unlimited calls, 1GB/day data, 100 SMS/day', 'Jio ₹349 Plan: Unlimited calls, 3GB/day data, 100 SMS/day', 'Jio ₹599 Plan: Unlimited calls, 2GB/day data, 100 SMS/day'];
      default:
        return [];
    }
  };

  const handleChangeOperator = (selectedOperator) => {
    setOperator(selectedOperator);
    sessionStorage.setItem('operator', selectedOperator);
    setAvailablePlans(getPlansForOperator(selectedOperator));
    setSelectedPlan(''); // Reset selected plan when operator changes
  };

  const handleChangePlan = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
    sessionStorage.setItem('selectedPlan', selectedPlan);
  };

  const handleRecharge = async () => {
    try {
      // Create an object representing the data to be sent to the backend
      const requestData = {
        mobileNumber: mobileNumber,
        operator: operator,
        selectedPlan: selectedPlan,
      };
  
      // Get the Bearer token from localStorage
      const token = localStorage.getItem('token');
      
      // Check if the token is available
      if (!token) {
        navigate('/Admin_Login');
        return;
      }
  
      // Make an HTTP POST request to your backend endpoint with the Bearer token
      const response = await axios.post('http://localhost:8080/recharge', requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Handle success, if needed
      console.log(response.data);
  
      // Inform the user about the recharge (you can customize this)
      alert(`Recharging with: ${selectedPlan}`);
  
      // Clear the selected plan from session storage
      sessionStorage.removeItem('selectedPlan');
    } catch (error) {
      // Handle error, if needed
      console.error('Error during recharge:', error);
    }
  };
  

  return (
    <div className="container">
      <Navbar />
      <h1 style={{ color: 'white' }}>Recharge Plans</h1>
      <form>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          style={{ width: '250px' }}
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
        <select
          style={{ width: '250px', height: '35px' }}
          id="operator"
          name="operator"
          value={operator}
          onChange={(e) => handleChangeOperator(e.target.value)}
          required
        >
          <option value="" disabled>
            Select an operator
          </option>
          <option value="Airtel">Airtel</option>
          <option value="Vodafone">Vodafone</option>
          <option value="Jio">Jio</option>
          {/* Add more operators as needed */}
        </select>

        {availablePlans.length > 0 && (
          <div>
            <label htmlFor="choosePlans">Choose Plans:</label>
            <select
              style={{ width: '250px', height: '35px' }}
              id="choosePlans"
              name="choosePlans"
              value={selectedPlan}
              onChange={(e) => handleChangePlan(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a plan
              </option>
              {availablePlans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>

      <button
        style={{ backgroundColor: '#be43fb' }}
        onClick={handleRecharge}
        disabled={!selectedPlan}
      >
        Recharge
      </button>
    </div>
  );
};

export default Recharge_Plans;
