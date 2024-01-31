// import React, { useState } from 'react';
// import '../assets/css/AdminAddOn.css';

// const AdminAddOn = () => {
//   const [addons, setAddons] = useState([
//     { id: 1, name: 'Premium Access', description: 'Access exclusive premium features.', operator: 'Jio' },
//     { id: 2, name: 'Data Backup', description: 'Automatic backup for your important data.', operator: 'Airtel' },
//     { id: 3, name: 'Vodafone Plan', description: 'Special plan for Vodafone users.', operator: 'Vodafone' },
//   ]);

//   const [newAddon, setNewAddon] = useState({ name: '', description: '', operator: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewAddon((prevAddon) => ({ ...prevAddon, [name]: value }));
//   };

//   const handleAddAddon = () => {
//     if (newAddon.name && newAddon.description && newAddon.operator) {
//       setAddons((prevAddons) => [...prevAddons, { id: Date.now(), ...newAddon }]);
//       setNewAddon({ name: '', description: '', operator: '' });
//     } else {
//       alert('Please fill out all fields before adding.');
//     }
//   };

//   return (
//     <div className="admin-addons-container">
//       <h1>Add-ons</h1>
//       <div className="addons-list">
//         {addons.map((addon) => (
//           <div key={addon.id} className="addon-card">
//             <h3>{addon.name}</h3>
//             <p>{addon.description}</p>
//             <p>Operator: {addon.operator}</p>
//           </div>
//         ))}
//       </div>
//       <form className="add-addon-form">
//         <label>
//           Addon Name:<br />
//           <input
//             style={{ width: '200px' }}
//             type="text"
//             name="name"
//             value={newAddon.name}
//             onChange={handleInputChange}
//           />
//         </label>

//         <label>
//           Addon Description:<br />
//           <textarea
//             style={{ width: '180px' }}
//             name="description"
//             value={newAddon.description}
//             onChange={handleInputChange}
//           />
//         </label>

//         <label>
//           Operator:<br />
//           <select
//             style={{ width: '200px',height:'40px' }}
//             name="operator"
//             value={newAddon.operator}
//             onChange={handleInputChange}
//           >
//             <option value="">Select Operator</option>
//             <option value="Jio">Jio</option>
//             <option value="Airtel">Airtel</option>
//             <option value="Vodafone">Vodafone</option>
//           </select>
//         </label>

//         <button style={{ backgroundColor: '#3498db' }} type="button" onClick={handleAddAddon}>
//           Add Addon
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminAddOn;
import React, { useState } from 'react';
import '../assets/css/AdminAddOn.css';

const AdminAddOn = () => {
  const [addons, setAddons] = useState([
    { id: 1, name: 'Premium Access', description: 'Access exclusive premium features.', operator: 'Jio' },
    { id: 2, name: 'Data Backup', description: 'Automatic backup for your important data.', operator: 'Airtel' },
    { id: 3, name: 'Vodafone Plan', description: 'Special plan for Vodafone users.', operator: 'Vodafone' },
  ]);

  const [newAddon, setNewAddon] = useState({ name: '', description: '', operator: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddon((prevAddon) => ({ ...prevAddon, [name]: value }));
  };

  const handleAddAddon = () => {
    if (newAddon.name && newAddon.description && newAddon.operator) {
      setAddons((prevAddons) => [...prevAddons, { id: Date.now(), ...newAddon }]);
      setNewAddon({ name: '', description: '', operator: '' });
    } else {
      alert('Please fill out all fields before adding.');
    }
  };

  const groupedAddons = addons.reduce((grouped, addon) => {
    const operator = addon.operator;
    if (!grouped[operator]) {
      grouped[operator] = [];
    }
    grouped[operator].push(addon);
    return grouped;
  }, {});

  return (
    <div className="admin-addons-container">
      <h1>Add-ons</h1>
      <div className="addons-list">
        {Object.entries(groupedAddons).map(([operator, operatorAddons]) => (
          <div key={operator} className="operator-addons">
            <h2>{operator} Add-ons</h2>
            <div className="addons-row">
              {operatorAddons.map((addon) => (
                <div key={addon.id} className="addon-card">
                  <h3>{addon.name}</h3>
                  <p style={{color:'white'}}>{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <form className="add-addon-form">
        <label>
          Addon Name:<br />
          <input
            style={{ width: '200px' }}
            type="text"
            name="name"
            value={newAddon.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Addon Description:<br />
          <textarea
            style={{ width: '180px' }}
            name="description"
            value={newAddon.description}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Operator:<br />
          <select
            style={{ width: '200px', height: '40px' }}
            name="operator"
            value={newAddon.operator}
            onChange={handleInputChange}
          >
            <option value="">Select Operator</option>
            <option value="Jio">Jio</option>
            <option value="Airtel">Airtel</option>
            <option value="Vodafone">Vodafone</option>
          </select>
        </label>

        <button style={{ backgroundColor: '#3498db' }} type="button" onClick={handleAddAddon}>
          Add Addon
        </button>
      </form>
    </div>
  );
};

export default AdminAddOn;
