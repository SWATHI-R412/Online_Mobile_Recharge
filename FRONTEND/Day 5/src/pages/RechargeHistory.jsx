// RechargeHistory.jsx
import React from 'react';
import '../assets/css/RechargeHistory.css'; // Import your CSS file for styling

const RechargeHistory = () => {
  // Dummy recharge history data (replace with your actual data)
  const rechargeHistory = [
    { id: 1, user: 'John', amount: '₹20', date: '2024-01-01' },
    { id: 2, user: 'Shruthi', amount: '₹30', date: '2024-01-02' },
    { id: 3, user: 'Kavin', amount: '₹25', date: '2024-01-03' },
  ];

  return (
    <div className="recharge-history-container">
      <h1 style={{color:'white'}}>Recharge History</h1>
      <div className="recharge-cards">
        {rechargeHistory.map((item) => (
          <div key={item.id} className="recharge-card">
            <h3 style={{color:'white'}}>Name: {item.user}</h3>
            <p style={{color:'white'}}>Amount: {item.amount}</p>
            <p style={{color:'white'}}>Date: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechargeHistory;
