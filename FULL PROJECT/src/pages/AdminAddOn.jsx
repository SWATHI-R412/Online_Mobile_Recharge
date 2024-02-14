import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../assets/css/AdminAddOn.css';
import axios from 'axios';

const AdminAddOn = () => {
  const initialAddOns = [
    { id: 1, name: 'Premium Access', description: 'Access exclusive premium features.', operator: 'Jio' },
    { id: 2, name: 'Data Backup', description: 'Automatic backup for your important data.', operator: 'Airtel' },
    { id: 3, name: 'Vodafone Plan', description: 'Special plan for Vodafone users.', operator: 'Vodafone' },
  ];

  const [addons, setAddons] = useState(initialAddOns);
  const [editMode, setEditMode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingAddon, setIsAddingAddon] = useState(false);
  const [newAddon, setNewAddon] = useState({ name: '', description: '', operator: '' });

  useEffect(() => {
    // You can fetch addons from the server here if needed
    // Example: axios.get('http://localhost:8080/admin-addons/all')
    //   .then(response => setAddons(response.data))
    //   .catch(error => console.error('Error fetching addons:', error));
  }, []);

  const addAddon = async (newAddon) => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        // Handle the case where the adminToken is not available
        console.log('adminToken not available. Redirecting to login page.');
        // You may navigate or handle the authentication logic as needed
        return;
      }

      await axios.post('http://localhost:8080/admin-addons', newAddon, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Addon added successfully');
    } catch (error) {
      console.error('Error adding addon:', error);
    }
  };

  const handleEdit = (index) => {
    setEditMode(index);
  };

  const handleSave = (index) => {
    setEditMode(null);
    // Implement save functionality as needed
    console.log(`Saving changes for addon with index ${index}`);
  };

  const handleDelete = (index) => {
    setAddons((prevAddons) => prevAddons.filter((_, i) => i !== index));
  };

  const handleAddAddon = () => {
    setIsAddingAddon(true);
    setNewAddon({ name: '', description: '', operator: '' });
  };

  const handleAddAddonSubmit = () => {
    // Add the new addon to the local state
    setAddons((prevAddons) => [...prevAddons, newAddon]);

    // Reset new addon data and exit add mode
    setNewAddon({ name: '', description: '', operator: '' });
    setIsAddingAddon(false);

    addAddon(newAddon);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setIsAddingAddon(false);
  };

  const handleInputChange = (field, value) => {
    setNewAddon((prevAddon) => ({
      ...prevAddon,
      [field]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderAddAddonForm = () => (
    <div className="add-addon-form">
      <h2>Add Addon</h2>
      <label>Addon Name:</label>
      <input
        type="text"
        placeholder="Enter addon name"
        value={newAddon.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      <label>Description:</label>
      <textarea
        placeholder="Enter addon description"
        value={newAddon.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
      />
      <label>Operator:</label>
      <select
        value={newAddon.operator}
        onChange={(e) => handleInputChange('operator', e.target.value)}
      >
        <option value="">Select Operator</option>
        <option value="Jio">Jio</option>
        <option value="Airtel">Airtel</option>
        <option value="Vodafone">Vodafone</option>
      </select>
      <br/>
      <button style={{ backgroundColor: '#3498db', width: '150px' }} onClick={handleAddAddonSubmit}>
        Add Addon
      </button>
      <button style={{ backgroundColor: '#3498db', width: '150px', marginLeft: '10px' }} onClick={handleCancelEdit}>
        Cancel
      </button>
    </div>
  );

  const renderAddonTable = () => {
    const filteredAddons = addons.filter((addon) =>
      addon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="addons-list">
        {filteredAddons.map((addon, index) => (
          <div key={index} className="addon-card">
            <h3>{addon.name}</h3>
            <p style={{ color: 'white' }}>{addon.description}</p>
            <div className="addon-buttons">
              {editMode === index ? (
                <>
                  <button style={{ backgroundColor: '#3498db' }} onClick={() => handleSave(index)}>
                    Save
                  </button>
                  <button style={{ backgroundColor: '#e74c3c' }} onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button style={{ backgroundColor: '#3498db' }} onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button style={{ backgroundColor: '#e74c3c' }} onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="admin-addons-container">
      <AdminNavbar />
      <h1>Add-ons</h1>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search addons..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {isAddingAddon ? (
        renderAddAddonForm()
      ) : (
        <>
          {renderAddonTable()}

          <button
            style={{ backgroundColor: '#3498db', width: '150px' }}
            onClick={handleAddAddon}
          >
            Add Addon
          </button>
        </>
      )}
    </div>
  );
};

export default AdminAddOn;
