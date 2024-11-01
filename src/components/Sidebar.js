import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveTab('Overview')} className="sidebar-item">Overview</li>
        <li onClick={() => setActiveTab('AppliedJobs')} className="sidebar-item">Applied Jobs</li>
        <li onClick={() => setActiveTab('InterviewFeedback')} className="sidebar-item">Interview Feedback</li>
        <li onClick={() => setActiveTab('JobAlerts')} className="sidebar-item">Job Alerts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
