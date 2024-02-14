import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/css/View_Plans.css';
import Navbar from '../components/Navbar';

const View_Plans = () => {
  const { operator } = useParams();
  const navigate = useNavigate();

  // You can fetch operator-specific plans from an API or use predefined data
  const plans = {
    airtel: [
      'Airtel ₹199 Plan: Unlimited calls, 2GB/day data, 100 SMS/day',
      'Airtel ₹399 Plan: Unlimited calls, 3GB/day data, 100 SMS/day',
      'Airtel ₹599 Plan: Unlimited calls, 4GB/day data, 100 SMS/day',
    ],
    vodafone: [
      'Vodafone ₹249 Plan: Unlimited calls, 1.5GB/day data, 100 SMS/day',
      'Vodafone ₹349 Plan: Unlimited calls, 2GB/day data, 100 SMS/day',
      'Vodafone ₹499 Plan: Unlimited calls, 3GB/day data, 100 SMS/day',
    ],
    jio: [
      'Jio ₹149 Plan: Unlimited calls, 1GB/day data, 100 SMS/day',
      'Jio ₹349 Plan: Unlimited calls, 3GB/day data, 100 SMS/day',
      'Jio ₹599 Plan: Unlimited calls, 2GB/day data, 100 SMS/day',
    ],
  };

  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handleRecharge = () => {
    // Implement your recharge logic here with the selected plan
    alert(`Recharging with: ${selectedPlan}`);
    sessionStorage.setItem('selectedPlan', selectedPlan);
    // Navigate back to the Recharge_Plans page with the selected plan as a parameter
    navigate('/Recharge_Plans');
  };

  return (
    <div className="container">
      <Navbar/>
      <h1 style={{ color:'white' }}>{`${operator.toUpperCase()} Recharge Plans`}</h1>
      <div className="plans-container">
        {plans[operator.toLowerCase()].map((plan, index) => (
          <div className={`plan-box ${selectedPlan === plan ? 'selected' : ''}`} key={index}>
            <p style={{ color:'white' }}>{plan}</p>
            <button style={{ backgroundColor: "#be43fb" }} onClick={() => handlePlanSelection(plan)}>Choose</button>
          </div>
        ))}
      </div>
      <button style={{ backgroundColor: "#be43fb" }} onClick={handleRecharge} disabled={!selectedPlan}>
        Recharge
      </button>
    </div>
  );
};

export default View_Plans;
