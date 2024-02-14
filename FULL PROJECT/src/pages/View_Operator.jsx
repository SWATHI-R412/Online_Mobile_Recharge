import React from 'react';
import '../assets/css/ViewOperator.css'; // Import the CSS file
import AdminNavbar from '../components/AdminNavbar';

const ViewOperator = ({ operators }) => {
  return (
    <div className="view-operator-container">
      <AdminNavbar/>
      <h2>View Operator</h2>

      <table className="operator-table">
        <thead>
          <tr>
            <th>Operator Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {operators.map((operator, index) => (
            <tr key={index}>
              <td>{operator.name}</td>
              <td>{operator.description}</td>
              <td>
                <img
                  src={operator.imageUrl}
                  alt={`${operator.name} Image`}
                  className="operator-image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOperator;