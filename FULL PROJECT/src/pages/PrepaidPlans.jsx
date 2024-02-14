import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../assets/css/PrepaidPlans.css';
import axios from 'axios';

const PrepaidPlans = () => {
  const initialPlans = {
    airtel: [
      { planName: 'Airtel Prepaid Plan 1', price: 'Rs. 199', data: '5 GB', validity: '28 days' },
    ],
    jio: [
      { planName: 'Jio Prepaid Plan 1', price: 'Rs. 149', data: '3 GB', validity: '28 days' },
    ],
    vodafone: [
      { planName: 'Vodafone Prepaid Plan 1', price: 'Rs. 249', data: '8 GB', validity: '28 days' },
    ],
  };

  const [plans, setPlans] = useState(initialPlans);
  const [editMode, setEditMode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingPlan, setIsAddingPlan] = useState(false);
  const [newPlanData, setNewPlanData] = useState({
    operator: '',
    planName: '',
    price: 'Rs 0.00',
    data: '0 GB',
    validity: '30 days',
  });

  useEffect(() => {
    // You can fetch prepaid plans from the server here if needed
    // Example: axios.get('http://localhost:8080/prepaid-plans/all')
    //   .then(response => setPlans(response.data))
    //   .catch(error => console.error('Error fetching plans:', error));
  }, []);

  const addPrepaidPlan = async (operator, newPlan) => {
    try {
      const adminToken = localStorage.getItem('adminToken');
      if (!adminToken) {
        // Handle the case where the adminToken is not available
        console.log('adminToken not available. Redirecting to login page.');
        // You may navigate or handle the authentication logic as needed
        return;
      }

      await axios.post(`http://localhost:8080/prepaid-plans/${operator}`, newPlan, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });
      console.log('Plan added successfully');
    } catch (error) {
      console.error('Error adding plan:', error);
    }
  };

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
    setIsAddingPlan(true);
    setNewPlanData({
      operator,
      planName: '',
      price: 'Rs 0.00',
      data: '0 GB',
      validity: '30 days',
    });
  };

  const handleAddPlanSubmit = () => {
    // Add the new plan to the local state
    setPlans((prevPlans) => {
      const updatedPlans = { ...prevPlans };
      updatedPlans[newPlanData.operator] = [...prevPlans[newPlanData.operator], newPlanData];
      return updatedPlans;
    });

    // Reset new plan data and exit add mode
    setNewPlanData({
      operator: '',
      planName: '',
      price: 'Rs 0.00',
      data: '0 GB',
      validity: '30 days',
    });
    setIsAddingPlan(false);

    addPrepaidPlan(newPlanData.operator, newPlanData);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setIsAddingPlan(false);
  };

  const handleInputChange = (field, value) => {
    setNewPlanData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderAddPlanForm = () => (
    <div className="add-plan-form">
      <h2>Add Plan</h2>
      <label>Plan Name:</label>
      <input
        type="text"
        placeholder="Enter plan name"
        value={newPlanData.planName}
        onChange={(e) => handleInputChange('planName', e.target.value)}
      />
      <label>Price:</label>
      <input
        type="text"
        value={newPlanData.price}
        onChange={(e) => handleInputChange('price', e.target.value)}
      />
      <label>Data:</label>
      <input
        type="text"
        value={newPlanData.data}
        onChange={(e) => handleInputChange('data', e.target.value)}
      />
      <label>Validity:</label>
      <input
        type="text"
        value={newPlanData.validity}
        onChange={(e) => handleInputChange('validity', e.target.value)}
      /><br/>
      <button style={{ backgroundColor: '#3498db', width: '150px' }} onClick={handleAddPlanSubmit}>
        Add Plan
      </button>
      <button style={{ backgroundColor: '#3498db', width: '150px', marginLeft: '10px' }} onClick={handleCancelEdit}>
        Cancel
      </button>
    </div>
  );

  const renderPlanTable = () => {
    const filteredPlans = Object.entries(plans).reduce((acc, [operator, operatorPlans]) => {
      const filteredOperatorPlans = operatorPlans.filter((plan) =>
        plan.planName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredOperatorPlans.length > 0) {
        acc[operator] = filteredOperatorPlans;
      }
      return acc;
    }, {});

    return (
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
          {Object.entries(filteredPlans).map(([operator, operatorPlans]) =>
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
                      <button style={{ backgroundColor: '#e74c3c' }} onClick={handleCancelEdit}>
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
  };

  return (
    <div className="prepaid-plans-container">
      <AdminNavbar />
      <h1>Prepaid Plans</h1>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search plans..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {isAddingPlan ? (
        renderAddPlanForm()
      ) : (
        <>
          {renderPlanTable()}

          <button
            className="prepaid-plans-button"
            style={{ backgroundColor: '#3498db', width: '150px' }}
            onClick={() => handleAddPlan('airtel')}
          >
            Add Airtel Plan
          </button>
          <button
            className="prepaid-plans-button"
            style={{ backgroundColor: '#3498db', width: '150px' }}
            onClick={() => handleAddPlan('jio')}
          >
            Add Jio Plan
          </button>
          <button
            className="prepaid-plans-button"
            style={{ backgroundColor: '#3498db', width: '200px' }}
            onClick={() => handleAddPlan('vodafone')}
          >
            Add Vodafone Plan
          </button>
        </>
      )}
    </div>
  );
};

export default PrepaidPlans;
