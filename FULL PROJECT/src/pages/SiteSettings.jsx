import React, { useState } from 'react';
import '../assets/css/About.css';
import AdminNavbar from '../components/AdminNavbar';

const TeamMember = ({ name, role }) => (
  <div className="team-member">
    <p style={{ color: 'white' }}><strong>{name}</strong></p>
    <p style={{ color: 'white' }}>{role}</p>
  </div>
);

const SiteSettings = () => {
  const [isEditing, setEditing] = useState(false);

  // State variables for each section
  const [missionContent, setMissionContent] = useState({
    mission: `Our mission is to provide a convenient and reliable platform for users to recharge
    their mobile phones effortlessly.`,
    additionalInfo: 'We aim to make the mobile recharge process seamless, fast, and secure.',
  });

  const [whyChooseUsContent, setWhyChooseUsContent] = useState([
    'Easy and quick recharge process',
    'Secure payment options',
    'Wide range of supported mobile carriers',
    '24/7 customer support',
    'Competitive recharge plans and offers',
  ]);

  const [teamMembers, setTeamMembers] = useState([
    { name: 'John Doe', role: 'CEO' },
    { name: 'Jane Smith', role: 'Lead Developer' },
    // Add more team members as needed
  ]);

  const handleEditClick = () => {
    setEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // Add logic to save changes (e.g., update backend, state, etc.)
    setEditing(false);
  };

  const handleMissionChange = (e) => {
    setMissionContent({ ...missionContent, mission: e.target.value });
  };

  const handleAdditionalInfoChange = (e) => {
    setMissionContent({ ...missionContent, additionalInfo: e.target.value });
  };

  const handleWhyChooseUsChange = (index, value) => {
    const updatedWhyChooseUs = [...whyChooseUsContent];
    updatedWhyChooseUs[index] = value;
    setWhyChooseUsContent(updatedWhyChooseUs);
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index][field] = value;
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <div className="about-us-container">
      <AdminNavbar/>
      <section className="content-section">
        <h1 style={{ color: 'white' }}>About Us</h1>
        <p style={{ color: 'white' }} className="welcome-message">Welcome to our online mobile recharge app!</p>

        {/* Mission Section */}
        {isEditing ? (
          <textarea
            value={missionContent.mission}
            onChange={handleMissionChange}
          />
        ) : (
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p style={{ color: 'white' }}>{missionContent.mission}</p>
            <p style={{ color: 'white' }}>{missionContent.additionalInfo}</p>
          </section>
        )}

        {/* Why Choose Us Section */}
        {isEditing ? (
          <ul>
            {whyChooseUsContent.map((item, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleWhyChooseUsChange(index, e.target.value)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <section className="why-choose-us-section">
            <h2>Why Choose Us?</h2>
            <ul>
              {whyChooseUsContent.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Team Section */}
        {isEditing ? (
          <div className="team-members-container">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  value={member.role}
                  onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
                />
              </div>
            ))}
          </div>
        ) : (
          <section className="team-section">
            <h2>Meet the Team</h2>
            <div className="team-members-container">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} name={member.name} role={member.role} />
              ))}
            </div>
          </section>
        )}

        {isEditing ? (
          <button style={{backgroundColor:'#be43fb'}} className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button style={{backgroundColor:'#be43fb'}} className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </section>
    </div>
  );
};

export default SiteSettings;