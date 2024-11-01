import React from 'react';
import './JobAlerts.css';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';

const JobAlerts = () => {
  const jobAlerts = [
    {
      title: 'Technical Support Specialist',
      type: 'Full Time',
      location: 'Kanye Botswana',
      salary: 'P15K-P20K',
      remainingDays: '4 Days Remaining',
      companyLogo: logo3, // Assuming you have these images
    },
    {
      title: 'UI/UX Designer',
      type: 'Full Time',
      location: 'Gaborone, Botswana',
      salary: 'P10K-P15K',
      remainingDays: '4 Days Remaining',
      companyLogo: logo4,
    },
    // Add more jobs similarly
  ];

  return (
    <div className="job-alerts-container">
      <div className="header-section">
        <h2>Job Alerts <span>({jobAlerts.length} new jobs)</span></h2>
        <button className="edit-alerts">Edit Job Alerts</button>
      </div>
      <ul className="job-alerts-list">
        {jobAlerts.map((job, index) => (
          <li key={index} className="job-alert-item">
           <img src={job.companyLogo} alt="Company Logo" />
            <div className="job-details">
              <h3>{job.title} <span>{job.type}</span></h3>
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>{job.remainingDays}</p>
            </div>
            <button className="apply-btn">Apply Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobAlerts;
