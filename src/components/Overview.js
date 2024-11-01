import React from 'react';

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="stats-overview">
        <div className="stat-box">
          <h3>589</h3>
          <p>Applied Jobs</p>
          <div className="icon">📄</div>
        </div>
        <div className="stat-box">
          <h3>38</h3>
          <p>Attended Interviews</p>
          <div className="icon">🎤</div>
        </div>
        <div className="stat-box">
          <h3>574</h3>
          <p>Job Alerts</p>
          <div className="icon">🔔</div>
        </div>
      </div>

      <div className="profile-section">
        <h3>Your profile editing is not completed</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: '60%' }}></div>
        </div>
        <a href="/profile" className="edit-profile">Edit Profile</a>
      </div>

      <div className="applied-jobs">
        <h3>Recently Applied Jobs</h3>
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
            <tr>
              <td>Networking Engineer</td>
              <td>Oct 2, 2024</td>
              <td>Active</td>
              <td><button className="view-details-btn">View Details</button></td>
            </tr>
            <tr>
              <td>Product Designer</td>
              <td>Sep 7, 2024</td>
              <td>Active</td>
              <td><button className="view-details-btn">View Details</button></td>
            </tr>
            {/* Add more job rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
