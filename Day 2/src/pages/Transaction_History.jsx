import React from 'react';

const Transaction_History = () => {
  // Mock data for transaction history
  const transactionHistory = [
    { id: 1, date: '2022-03-15', amount: 20.99, status: 'Success' },
    { id: 2, date: '2022-03-10', amount: 15.50, status: 'Success' },
    { id: 3, date: '2022-03-05', amount: 25.00, status: 'Failed' },
    // Add more transactions as needed
  ];

  return (
    <div>
      <h1 style={{color:'white'}}>Transaction History</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '10px', textAlign: 'left', color:'#26d8f0' }}>Transaction ID</th>
            <th style={{ padding: '10px', textAlign: 'left' ,color:'#26d8f0'}}>Date</th>
            <th style={{ padding: '10px', textAlign: 'left', color:'#26d8f0' }}>Amount</th>
            <th style={{ padding: '10px', textAlign: 'left', color:'#26d8f0' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map((transaction) => (
            <tr key={transaction.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{transaction.id}</td>
              <td style={{ padding: '10px' }}>{transaction.date}</td>
              <td style={{ padding: '10px' }}>{`$${transaction.amount.toFixed(2)}`}</td>
              <td style={{ padding: '10px', color: transaction.status === 'Success' ? 'green' : 'red' }}>
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction_History;
