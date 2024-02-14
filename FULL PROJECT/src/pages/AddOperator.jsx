// AddOperator.jsx

import React, { useState } from 'react';
import '../assets/css/AddOperator.css';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AddOperator = ({ onAddOperator }) => {
  const [operatorName, setOperatorName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleAddOperator = () => {
    const newOperator = {
      name: operatorName,
      description,
      imageUrl,
    };

    // Call the onAddOperator prop to pass the new operator details to the parent component (App)
    onAddOperator(newOperator);

    // Clear the form fields after adding the operator
    setOperatorName('');
    setDescription('');
    setImageUrl('');
    alert('Added successfully')
  };

  return (
    <div className="add-operator-form">
    <AdminNavbar/>
      <h2 style={{ color: "white" }}>Add Operator</h2>
      <form>
        <label htmlFor="operatorName">Operator Name:</label>
        <input
          type="text"
          id="operatorName"
          value={operatorName}
          onChange={(e) => setOperatorName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        
        <button
          style={{ backgroundColor: '#3498db' }}
          type="button"
          onClick={handleAddOperator}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddOperator;
