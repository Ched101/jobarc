import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';
import AppliedJobs from './AppliedJobs';
import InterviewFeedback from './InterviewFeedback';
import JobAlerts from './JobAlerts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'AppliedJobs':
        return <AppliedJobs />;
      case 'InterviewFeedback':
        return <InterviewFeedback />;
      case 'JobAlerts':
        return <JobAlerts />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
