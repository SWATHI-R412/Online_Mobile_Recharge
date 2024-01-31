import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaTachometerAlt, FaTable, FaHistory, FaUser } from 'react-icons/fa';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
            <li className="sidebar-item">
              <Link to="/Recharge_Plans" className="sidebar-link">
                <FaHome />
                {isSidebarOpen && <span>Recharge Plans</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/Add_On" className="sidebar-link">
                <FaTachometerAlt style={{ color: 'white' }} />
                {isSidebarOpen && <span>Add-on</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/View_Offers" className="sidebar-link">
                <FaTachometerAlt />
                {isSidebarOpen && <span>View Offers</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/User_Feedback" className="sidebar-link">
                <FaTable />
                {isSidebarOpen && <span>Feedback</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/Transaction_History" className="sidebar-link">
                <FaHistory />
                {isSidebarOpen && <span>Transaction History</span>}
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/User_Profile" className="sidebar-link">
                <FaUser />
                {isSidebarOpen && <span>My Profile</span>}
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
