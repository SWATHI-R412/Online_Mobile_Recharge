import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login_Selection.css';

const Login_Selection = () => {
  const navigate = useNavigate();

  const redirectToLogin = (userType) => {
    if (userType === 'admin') {
      navigate('/Admin_Login');
    } else if (userType === 'user') {
      navigate('/User_Login');
    }
  };

  return (
    <div className="login_selection-container">
      <h1 className="page-heading">Online Mobile Recharge</h1>
      <div className="boxes-container">
        <div className="user-box" onClick={() => redirectToLogin('user')}>
          <img src="https://previews.123rf.com/images/peterzsuzsa/peterzsuzsa1509/peterzsuzsa150900091/45559305-the-word-user-written-with-childrens-colorful-letters-on-a-white-wooden-surface.jpg" alt="User" />
          <div className="button-container">
            <button style={{ backgroundColor: '#be43fb' }}>User Login</button>
          </div>
        </div>
        <div className="admin-box" onClick={() => redirectToLogin('admin')}>
          <img src="https://t3.ftcdn.net/jpg/03/48/55/20/360_F_348552050_uSbrANL65DNj21FbaCeswpM33mat1Wll.jpg" alt="Admin" />
          <div className="button-container">
            <button style={{ backgroundColor: '#be43fb' }}>Admin Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Selection;
