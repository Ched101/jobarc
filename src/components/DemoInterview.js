import React, { useRef, useEffect } from 'react';
import './DemoInterview.css';

const DemoInterview = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access the user's camera and display it in the video element
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing media devices.", err);
      });
  }, []);

  return (
    <div className="demo-container">
      <div className="video-section">
        <video ref={videoRef} autoPlay className="interview-video" />
      </div>

      <div className="form-section">
        <h2>Customize Your Interview</h2>
        <div className="input-container">
          <label htmlFor="job-title">Job Title</label>
          <input type="text" id="job-title" placeholder="e.g., Mechanical Engineer" />
        </div>

        <div className="input-container">
          <label htmlFor="job-description">Job Description</label>
          <textarea id="job-description" placeholder="Describe the job..."></textarea>
        </div>

        <div className="button-container">
          <button className="start-interview-btn">Start Interview</button>
        </div>
      </div>
    </div>
  );
};

export default DemoInterview;
