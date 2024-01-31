import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import '../assets/css/AdminHome.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminHome = () => {
  return (
    <div className="adhome-container">
      <AdminNavbar />
      <Header />
      <Footer />
      <div className="content-container">
        <div className="welcome-section">
          <h1 style={{ color: "white" }}>Welcome to TurboRecharge</h1>
          <p style={{ color: "white" }}>Recharge your mobile quickly and securely.</p>
          <p style={{ color: "white" }}>Pay, Recharge, and Manage your Services at one Place.</p>
        </div>

        <div className="image-section">
          <div className="image-card">
            <img
              src="https://i.pinimg.com/736x/01/ba/ff/01baffb09ad338619d22fda7b82cf4f5.jpg"
              alt="Mobile Recharge"
              className="home-image"
            />
          </div>
          <div className="image-card">
            <img
              src="https://www.discuss.io/wp-content/uploads/2022/06/4MobileUX.png"
              alt="Mobile Recharge"
              className="home-image"
            />
          </div>
          <div className="image-card">
            <img
              src="https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/AA-MobileRecharge_37_Best-Online-Mobile-Recharge-Site-In-India-800x500.jpg"
              alt="Mobile Recharge"
              className="home-image"
            />
          </div>
          <div className="image-card">
            <img
              src="https://lh3.googleusercontent.com/proxy/2_BzSwWIGNaBN-09gdCt0ZCYrRK_Ebvb5Lr55r7RN9jbHpMy_KY8jDrvld2xrbyLFRLfg4YJ-BLOTHyhca2nYcqJ79ay8eCDeiUIywVYQgYgucw-yl3oNCDBrlh7-mq9ky36gTiQ_hfbP5I"  // Add the URL of your fourth image
              alt="Mobile Recharge"
              className="home-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
