import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardType, setCardType] = useState('credit'); // Default to credit card

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleNameOnCardChange = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleCardTypeChange = (event) => {
    setCardType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate a successful payment
    alert('Payment Successful!');
    // You can replace the alert with your actual payment processing logic
  };


  return (
    <div className="container">
      <h2 style={{color:"white"}}>Payment Details</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Select Card Type:
          <br />
          <select value={cardType} onChange={handleCardTypeChange}>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
          </select>
        </label>

        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} placeholder="Enter card number" required />
        </label>

        <label>
          Expiry Date:
          <input type="date" value={expiryDate} onChange={handleExpiryDateChange} placeholder="MM/YYYY" required />
        </label>

        <label>
          CVV:
          <input type="password" value={cvv} onChange={handleCvvChange} placeholder="Enter CVV" required />
        </label>

        <label>
          Name on Card:
          <input type="text" value={nameOnCard} onChange={handleNameOnCardChange} placeholder="Enter name on card" required />
        </label>

        <button style={{backgroundColor:"#3498db", width:"150px"}} type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
