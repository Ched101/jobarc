import React, { useState } from 'react';
import './User.css';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('PersonalInfo');

  const renderContent = () => {
    switch (activeTab) {
      case 'PersonalInfo':
        return (
          <div className="tab-section">
            <h2>Personal Information</h2>
            <div className="profile-section">
              <div className="profile-picture">
                <label>Profile Picture</label>
                <input type="file" />
              </div>
              <div className="basic-info">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
                <label>Title/Headline</label>
                <input type="text" placeholder="Enter your headline" />
                <label>Experience</label>
                <select>
                  <option>Select...</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
                <label>Education</label>
                <select>
                  <option>Select...</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>Doctorate</option>
                </select>
                <button className="save-btn">Save Changes</button>
              </div>
            </div>
          </div>
        );
      case 'ProfileDetails':
        return (
          <div className="tab-section">
            <h2>Profile Details</h2>
            <label>Nationality</label>
            <select>
              <option>Select...</option>
              <option>USA</option>
              <option>UK</option>
              <option>Other</option>
            </select>
            <label>Date of Birth</label>
            <input type="date" />
            <label>Gender</label>
            <select>
              <option>Select...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <label>Biography</label>
            <textarea placeholder="Write your biography here..."></textarea>
            <button className="save-btn">Save Changes</button>
          </div>
        );
      case 'SocialLinks':
        return (
          <div className="tab-section">
            <h2>Social Links</h2>
            <label>Facebook</label>
            <input type="url" placeholder="Facebook profile link" />
            <label>Twitter</label>
            <input type="url" placeholder="Twitter profile link" />
            <label>Instagram</label>
            <input type="url" placeholder="Instagram profile link" />
            <label>YouTube</label>
            <input type="url" placeholder="YouTube profile link" />
            <button className="save-btn">Save Changes</button>
          </div>
        );
      case 'AccountSettings':
        return (
          <div className="tab-section">
            <h2>Account Settings</h2>
            <label>Map Location</label>
            <input type="text" placeholder="Location" />
            <label>Phone</label>
            <input type="tel" placeholder="Phone number" />
            <label>Email</label>
            <input type="email" placeholder="Email address" />
            <div className="notifications">
              <label>
                <input type="checkbox" />
                Notify me when employers shortlist me
              </label>
              <label>
                <input type="checkbox" />
                Notify me when my applied jobs expire
              </label>
              <label>
                <input type="checkbox" />
                Notify me when employers reject me
              </label>
            </div>
            <button className="save-btn">Save Changes</button>
          </div>
        );
      default:
        return <div>Select a tab to get started</div>;
    }
  };

  return (
    <div className="user-profile-page">
      <div className="tabs">
        <button className={activeTab === 'PersonalInfo' ? 'active' : ''} onClick={() => setActiveTab('PersonalInfo')}>Personal Info</button>
        <button className={activeTab === 'ProfileDetails' ? 'active' : ''} onClick={() => setActiveTab('ProfileDetails')}>Profile</button>
        <button className={activeTab === 'SocialLinks' ? 'active' : ''} onClick={() => setActiveTab('SocialLinks')}>Social Links</button>
        <button className={activeTab === 'AccountSettings' ? 'active' : ''} onClick={() => setActiveTab('AccountSettings')}>Account Settings</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;
