import React, { useState } from 'react';
import './SkillDevelopment.css';
import avatar1 from '../assets/images/avatar1.jpg';
import avatar2 from '../assets/images/avatar2.jpg';

const SkillDevelopment = () => {
  const [activeTab, setActiveTab] = useState('ATS');

  // Expert Posts for the Skills Hub
  const expertPosts = [
    {
      name: 'Barbrah Matshameko',
      position: 'Hiring Manager, Debswana',
      time: '12:15 PM, October 16, 2024',
      avatar: avatar2,
      content: 'Preparation is Power: Research the company and align your skills to their needs.'
    },
    {
      name: 'Peniel Kootlole',
      position: 'HRDC',
      time: '12:15 PM, October 16, 2024',
      avatar: avatar1,
      content: 'Body language speaks volumes. Sit up straight, make eye contact, and don’t forget to smile.'
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'ATS':
        return (
          <div className="ats-review-section">
            <div className="ats-header">
              <h2>ATS CV Review</h2>
              <p>Optimize your CV to ensure it is ATS-friendly and stands out to recruiters.</p>
            </div>
            <div className="ats-container">
              <div className="feedback-section">
                <h3>Formatting Recommendations</h3>
                <ul>
                  <li>Switch to standard fonts like Arial or Calibri for better ATS compatibility.</li>
                  <li>Remove images, graphics, and tables, as they may not be readable by ATS.</li>
                  <li>Save and upload your CV as a .docx file or plain text instead of PDF for better parsing.</li>
                  <li>Use bullet points instead of paragraphs for easier scanning.</li>
                </ul>
              </div>
              <div className="progress-section">
                <div className="progress-card">
                  <h3>Contact Details</h3>
                  <div className="progress-bar-container">
                    <div className="progress" style={{ width: '90%' }}>90%</div>
                  </div>
                </div>
                <div className="progress-card">
                  <h3>Profile</h3>
                  <div className="progress-bar-container">
                    <div className="progress" style={{ width: '75%' }}>75%</div>
                  </div>
                </div>
                <div className="progress-card">
                  <h3>Overall ATS Compatibility Score</h3>
                  <div className="progress-bar-container">
                    <div className="progress" style={{ width: '85%' }}>85%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'SkillsHub':
        return (
          <div className="skills-hub-section">
            <h2>Skills Hub</h2>
            <div className="skills-cards">
              <div className="skill-card">
                <img src="https://th.bing.com/th/id/R.2a6d1855f2afbb02dac6b51db1825d2b?rik=HsKNkRZJyfNTsA&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Interview Tips" />
                
                <h3>Interview Tips</h3>
                <p>Boost your interview performance with these expert tips.</p>
                <button>Learn More</button>
              </div>
              <div className="skill-card">
                <img src="https://th.bing.com/th/id/OIP.6IUbLSxMO3CWhpcKPWBpHAHaJl?rs=1&pid=ImgDetMain"/>
                
                <h3>CV Writing</h3>
                <p>Craft a CV that stands out with professional guidance.</p>
                <button>Learn More</button>
              </div>
            </div>
            <div className="expert-posts-section">
              {expertPosts.map((post, index) => (
                <div key={index} className="post-card">
                  <img src={post.avatar} alt={`${post.name} Avatar`} className="post-avatar" />
                  <div className="post-content">
                    <div className="post-header">
                      <strong>{post.name}</strong> &bull; {post.position}
                      <div className="post-time">{post.time}</div>
                    </div>
                    <p>{post.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Workshops':
        return (
          <div className="workshops-section">
            <h2>Workshops & Seminars</h2>
            <div className="event-cards">
              <div className="event-card">
                <h3>CV Writing Workshop</h3>
                <p>Learn how to craft a professional CV.</p>
                <button>Join Now</button>
              </div>
              <div className="event-card">
                <h3>Interview Prep Seminar</h3>
                <p>Master your interview skills with our expert tips.</p>
                <button>Join Now</button>
              </div>
            </div>

            {/* Add One-on-One Booking Feature */}
            <div className="booking-section">
              <h2>Book a One-on-One Session</h2>
              <p>Meet with industry experts to get personalized advice.</p>
              <div className="booking-cards">
                <div className="booking-card">
                  <img src={avatar1} alt="Expert Avatar" />
                  <h3>Gofaone Montebatsi</h3>
                  <p>Expert in CV writing and interview preparation</p>
                  <button>Book a Session</button>
                </div>
                <div className="booking-card">
                  <img src={avatar2} alt="Expert Avatar" />
                  <h3>Natasha Mmoloki</h3>
                  <p>HRDC Specialist in skill development and job readiness</p>
                  <button>Book a Session</button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a tab to get started</div>;
    }
  };

  return (
    <div className="skill-development-page">
      <div className="tabs">
        <button className={activeTab === 'ATS' ? 'active' : ''} onClick={() => setActiveTab('ATS')}>ATS CV Review</button>
        <button className={activeTab === 'SkillsHub' ? 'active' : ''} onClick={() => setActiveTab('SkillsHub')}>Skills Hub</button>
        <button className={activeTab === 'Workshops' ? 'active' : ''} onClick={() => setActiveTab('Workshops')}>Workshops & Seminars</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default SkillDevelopment;
