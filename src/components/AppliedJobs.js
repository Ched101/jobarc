import React from 'react';
import './AppliedJobs.css';

const AppliedJobs = () => {
  const jobs = [
    {
      jobTitle: 'Networking Engineer',
      location: 'Gaborone',
      salary: 'P50k-P80k/month',
      dateApplied: 'Feb 2, 2024',
      status: 'Active',
    },
    {
      jobTitle: 'Product Designer',
      location: 'Francistown',
      salary: 'P10k-P15k/month',
      dateApplied: 'Dec 7, 2023',
      status: 'Active',
    },
    {
      jobTitle: 'Mechatronics engineeer',
      location: 'Francistown',
      salary: 'P30k-P40k/month',
      dateApplied: 'Jan 7, 2024',
      status: 'Active',
    },
    {
      jobTitle: 'Business analyst',
      location: 'Jwaneng',
      salary: 'P10k-P15k/month',
      dateApplied: 'Dec 12, 2023',
      status: 'Active',
    },
    // More job entries here...
  ];

  return (
    <div className="applied-jobs-page">
      <h2>Applied Jobs</h2>
      <div className="applied-jobs-table">
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>
                  <div className="job-info">
                    <h4>{job.jobTitle}</h4>
                    <p>{job.location}</p>
                    <p>{job.salary}</p>
                  </div>
                </td>
                <td>{job.dateApplied}</td>
                <td className="job-status">{job.status}</td>
                <td>
                  <button className="view-details-btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
