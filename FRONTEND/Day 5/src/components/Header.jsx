// // Header.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/Header.css'

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <div className="logo">
          
//             <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/recharge-mobile-5518644-4602392.png" alt="Logo" />
          
//         </div>
//         <h2 style={{color:"white"}}>TurboRecharge</h2>
//         <ul className="nav-links">
          
//           <li>
//             <Link to="/User_Profile">My profile</Link>
//           </li>
//           <li>
//             <Link to="/Logout">Logout</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaSignOutAlt } from 'react-icons/fa'; // Import Font Awesome icons
import '../assets/css/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/recharge-mobile-5518644-4602392.png" alt="Logo" />
        </div>
        <h2 style={{ color: "white", paddingRight:'1010px' }}>TurboRecharge</h2>
        <ul className="nav-links">
          <li>
            <Link to="/About">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
