// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaMobileAlt, FaMoneyBillAlt, FaPuzzlePiece, FaHistory, FaPlus } from 'react-icons/fa';
// import '../assets/css/Navbar.css';

// const AdminNavbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//       <div className="toggle-icon" onClick={toggleSidebar}>
//         <FaBars />
//       </div>

//       <div className={`sidebar-content ${isSidebarOpen ? 'visible' : ''}`}>
//         <div className="sidebar-header">
//           <h6 className="sidebar-title">Dashboard</h6>
//         </div>
//         <div className="sidebar-body">
//           <ul className="sidebar-nav">
//             <li className="sidebar-item">
//               <Link to="/Operator" className="sidebar-link">
//                 <FaPlus />
//                 {isSidebarOpen && <span>Operator</span>}
//               </Link>
//             </li>
//             <li className="sidebar-item">
//               <Link to="/Postpaid" className="sidebar-link">
//                 <FaMobileAlt />
//                 {isSidebarOpen && <span>Postpaid</span>}
//               </Link>
//             </li>
//             <li className="sidebar-item">
//               <Link to="/Prepaid" className="sidebar-link">
//                 <FaMoneyBillAlt />
//                 {isSidebarOpen && <span>Prepaid</span>}
//               </Link>
//             </li>
//             <li className="sidebar-item">
//               <Link to="/AddOns" className="sidebar-link">
//                 <FaPuzzlePiece />
//                 {isSidebarOpen && <span>Add-Ons</span>}
//               </Link>
//             </li>
//             <li className="sidebar-item">
//               <Link to="/Recharge_History" className="sidebar-link">
//                 <FaHistory />
//                 {isSidebarOpen && <span>Recharge History</span>}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminNavbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaMobileAlt,FaPlus, FaMoneyBillAlt, FaPuzzlePiece, FaHistory, FaCaretDown, FaEye, FaPlusSquare } from 'react-icons/fa';
import '../assets/css/Navbar.css';

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOperatorDropdownOpen, setIsOperatorDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleOperatorDropdown = () => {
    setIsOperatorDropdownOpen(!isOperatorDropdownOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="toggle-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>

      <div className={`sidebar-content ${isSidebarOpen ? 'visible' : ''}`}>
        <div className="sidebar-header">
          <h6 className="sidebar-title">Dashboard</h6>
        </div>
        <div className="sidebar-body">
          <ul className="sidebar-nav">
          <li className={`sidebar-item ${isOperatorDropdownOpen ? 'open' : ''}`}>
  <div className="sidebar-link" onClick={toggleOperatorDropdown}>
    <FaPlus />
    {isSidebarOpen && <span>Operator</span>}
    <FaCaretDown className="dropdown-icon" />
  </div>
  {isOperatorDropdownOpen && (
    <ul className="dropdown-menu">
      <li>
        <FaEye />
        <Link to="/ViewOperator">View Operator</Link>
      </li>
      <li>
      <FaPlusSquare />
        <Link to="/AddOperator">Add Operator</Link>
      </li>
    </ul>
  )}
</li>
           
            <li className="sidebar-item">
              <Link to="/PostpaidPlans" className="sidebar-link">
                <FaMobileAlt />
                {isSidebarOpen && <span>Postpaid</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/PrepaidPlans" className="sidebar-link">
                <FaMoneyBillAlt />
                {isSidebarOpen && <span>Prepaid</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/AdminAddOn" className="sidebar-link">
                <FaPuzzlePiece />
                {isSidebarOpen && <span>Add-Ons</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/RechargeHistory" className="sidebar-link">
                <FaHistory />
                {isSidebarOpen && <span>Recharge History</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
