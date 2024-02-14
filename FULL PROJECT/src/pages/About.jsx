import React from 'react';
import '../assets/css/About.css'
const TeamMember = ({ name, role }) => (
  <div className="team-member">
    <p style={{color:'white'}}><strong>{name}</strong></p>
    <p style={{color:'white'}}>{role}</p>
  </div>
);

const About = () => {
    return (
      <div className="about-us-container">
        <section className="content-section">
          <h1 style={{color:'white'}}>About Us</h1>
          <p style={{color:'white'}}className="welcome-message">Welcome to our online mobile recharge app!</p>
  
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p style={{color:'white'}}>
              Our mission is to provide a convenient and reliable platform for users to recharge
              their mobile phones effortlessly.
            </p>
            <p style={{color:'white'}}>We aim to make the mobile recharge process seamless, fast, and secure.</p>
          </section>
  
          <section className="why-choose-us-section">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Easy and quick recharge process</li>
              <li>Secure payment options</li>
              <li>Wide range of supported mobile carriers</li>
              <li>24/7 customer support</li>
              <li>Competitive recharge plans and offers</li>
            </ul>
          </section>
  
          <section className="team-section">
            <h2>Meet the Team</h2>
            <div className="team-members-container">
              <TeamMember style={{color:'white'}} name="John Doe" role="CEO" />
              <TeamMember style={{color:'white'}} name="Jane Smith" role="Lead Developer" />
              {/* Add more team members as needed */}
            </div>
          </section>
        </section>
  
        {/* <section className="image-section">
          <img style={{width:'350px',height:'350px', textAlign: 'right', paddingRight: '30px'}}
            src="https://softcareinfotech.com/images/mobile_recharge.webp"
            alt="Recharge App"
            className="app-image"
          />
        </section> */}
      </div>
    );
  };
  
  export default About;