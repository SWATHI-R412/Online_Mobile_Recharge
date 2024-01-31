// PrepaidPlans.jsx
import React, { useState } from 'react';
import '../assets/css/PrepaidPlans.css'; // Import your CSS file for styling

const PrepaidPlans = () => {
  const initialPlans = {
    airtel: [
      { planName: 'Airtel Prepaid Plan 1', price: 'Rs. 199', data: '5 GB', validity: '28 days' },
      { planName: 'Airtel Prepaid Plan 2', price: 'Rs. 399', data: '15 GB', validity: '56 days' },
    ],
    jio: [
      { planName: 'Jio Prepaid Plan 1', price: 'Rs. 149', data: '3 GB', validity: '28 days' },
      { planName: 'Jio Prepaid Plan 2', price: 'Rs. 349', data: '10 GB', validity: '56 days' },
    ],
    vodafone: [
      { planName: 'Vodafone Prepaid Plan 1', price: 'Rs. 249', data: '8 GB', validity: '28 days' },
      { planName: 'Vodafone Prepaid Plan 2', price: 'Rs. 499', data: '20 GB', validity: '56 days' },
    ],
  };

  const [plans, setPlans] = useState(initialPlans);
  const [editMode, setEditMode] = useState(null);

  const handleEdit = (operator, index) => {
    setEditMode({ operator, index });
  };

  const handleSave = (operator, index) => {
    setEditMode(null);
    // Implement save functionality as needed
    console.log(`Saving changes for plan with operator ${operator} and index ${index}`);
  };

  const handleDelete = (operator, index) => {
    setPlans((prevPlans) => {
      const updatedPlans = { ...prevPlans };
      updatedPlans[operator] = prevPlans[operator].filter((_, i) => i !== index);
      return updatedPlans;
    });
  };

  const handleAddPlan = (operator) => {
    const newPlan = {
      planName: 'New Plan',
      price: 'Rs 0.00',
      data: '0 GB',
      validity: '30 days',
    };
    setPlans((prevPlans) => {
      const updatedPlans = { ...prevPlans };
      updatedPlans[operator] = [...prevPlans[operator], newPlan];
      return updatedPlans;
    });
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };

  const handleInputChange = (operator, index, field, value) => {
    setPlans((prevPlans) => {
      const updatedPlans = { ...prevPlans };
      updatedPlans[operator] = prevPlans[operator].map((plan, i) =>
        i === index ? { ...plan, [field]: value } : plan
      );
      return updatedPlans;
    });
  };

  const renderPlanTable = () => (
    <table className="prepaid-plans-table">
      <thead>
        <tr>
          <th>Operator</th>
          <th>Plan Name</th>
          <th>Price</th>
          <th>Data</th>
          <th>Validity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(plans).map(([operator, operatorPlans]) =>
          operatorPlans.map((plan, index) => (
            <tr key={index}>
              <td>{operator}</td>
              <td>
                {editMode?.operator === operator && editMode.index === index ? (
                  <input
                    type="text"
                    value={plan.planName}
                    onChange={(e) => handleInputChange(operator, index, 'planName', e.target.value)}
                  />
                ) : (
                  plan.planName
                )}
              </td>
              <td>
                {editMode?.operator === operator && editMode.index === index ? (
                  <input
                    type="text"
                    value={plan.price}
                    onChange={(e) => handleInputChange(operator, index, 'price', e.target.value)}
                  />
                ) : (
                  plan.price
                )}
              </td>
              <td>
                {editMode?.operator === operator && editMode.index === index ? (
                  <input
                    type="text"
                    value={plan.data}
                    onChange={(e) => handleInputChange(operator, index, 'data', e.target.value)}
                  />
                ) : (
                  plan.data
                )}
              </td>
              <td>
                {editMode?.operator === operator && editMode.index === index ? (
                  <input
                    type="text"
                    value={plan.validity}
                    onChange={(e) => handleInputChange(operator, index, 'validity', e.target.value)}
                  />
                ) : (
                  plan.validity
                )}
              </td>
              <td>
                {editMode?.operator === operator && editMode.index === index ? (
                  <>
                    <button style={{ backgroundColor: '#3498db' }} onClick={() => handleSave(operator, index)}>
                      Save
                    </button>
                    <button style={{ backgroundColor: '#3498db' }} onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button style={{ backgroundColor: '#3498db' }} onClick={() => handleEdit(operator, index)}>
                      Edit
                    </button>
                    <button style={{ backgroundColor: '#e74c3c' }} onClick={() => handleDelete(operator, index)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );

  return (
    <div className="prepaid-plans-container">
      <h1>Prepaid Plans</h1>

      {renderPlanTable()}

      <button className="prepaid-plans-button" style={{ backgroundColor: '#3498db', width: '150px' }} onClick={() => handleAddPlan('airtel')}>
        Add Airtel Plan
      </button>
      <button className="prepaid-plans-button" style={{ backgroundColor: '#3498db', width: '150px' }} onClick={() => handleAddPlan('jio')}>
        Add Jio Plan
      </button>
      <button className="prepaid-plans-button" style={{ backgroundColor: '#3498db', width: '200px' }} onClick={() => handleAddPlan('vodafone')}>
        Add Vodafone Plan
      </button>
    </div>
  );
};

export default PrepaidPlans;
