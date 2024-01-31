// // ViewOperator.js

// import React from 'react';
// import '../assets/css/ViewOperator.css'; // Import the CSS file

// const ViewOperator = () => {
//   // Replace this data with the actual data from your app
//   const operators = [
//     { name: 'Airtel', description: 'Airtel is a telecommunications company with a global presence.', imageUrl: 'https://wallpapercave.com/wp/wp2408165.png' },
//     { name: 'Jio', description: 'Jio is a leading Indian telecommunications company providing high-speed internet services.', imageUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/28/full/1677605933-7711.jpg' },
//     { name: 'Vodafone', description: 'Vodafone is a multinational telecommunications company operating in various countries around the world.', imageUrl: 'https://wallpapercave.com/wp/wp2667037.jpg' },
//   ];

//   return (
//     <div className="view-operator-container">
//       <h2>View Operator</h2>

//       <table className="operator-table">
//         <thead>
//           <tr>
//             <th>Operator Name</th>
//             <th>Description</th>
//             <th>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {operators.map((operator, index) => (
//             <tr key={index}>
//               <td>{operator.name}</td>
//               <td>{operator.description}</td>
//               <td><img src={operator.imageUrl} alt={`${operator.name} Image`} className="operator-image" /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewOperator;
// ViewOperator.jsx

import React from 'react';
import '../assets/css/ViewOperator.css'; // Import the CSS file

const ViewOperator = ({ operators }) => {
  return (
    <div className="view-operator-container">
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