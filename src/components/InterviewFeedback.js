import React from 'react';
import './InterviewFeedback.css';

const InterviewFeedback = () => {
  const handleWatchRecording = () => {
    // This is where the link to the mock interview recording would go
    window.location.href = 'https://example.com/mock-interview-recording'; 
  };

  return (
    <div className="feedback-container">
      <h2>Interview 1 Feedback</h2>

      {/* Overall Performance */}
      <div className="overall-performance">
        <h3>Overall Score</h3>
        <div className="score-bar">
          <div className="score-fill" style={{ width: '75%' }}></div>
        </div>
        <p>Your overall interview score is 7.5/10</p>
      </div>

      {/* Detailed Feedback Section */}
      <div className="feedback-section">
        <h3>Detailed Feedback</h3>

        {/* Feedback Category 1 */}
        <div className="feedback-item">
          <h4>Voice Projection: 8/10</h4>
          <p>Good voice clarity and volume, but try to avoid trailing off towards the end of sentences.</p>
        </div>

        {/* Feedback Category 2 */}
        <div className="feedback-item">
          <h4>Confidence: 6/10</h4>
          <p>You seemed a bit unsure when answering technical questions. Practice will improve your confidence.</p>
        </div>

        {/* Feedback Category 3 */}
        <div className="feedback-item">
          <h4>Body Language: 7/10</h4>
          <p>Maintain better eye contact, and avoid fidgeting with your hands.</p>
        </div>

        {/* Feedback Category 4 */}
        <div className="feedback-item">
          <h4>Factual Accuracy: 9/10</h4>
          <p>You answered the questions correctly and concisely, showing a solid understanding of the subject.</p>
        </div>

        {/* Other Feedback Categories... */}
      </div>

      {/* General Comments */}
      <div className="general-comments">
        <h3>General Comments</h3>
        <p>You did well overall, but there’s room for improvement in your confidence and body language.</p>
      </div>

      {/* Suggestions for Improvement */}
      <div className="improvement-section">
        <h3>Suggestions for Improvement</h3>
        <ul>
          <li>Practice answering technical questions out loud to build confidence.</li>
          <li>Work on maintaining eye contact during key moments.</li>
        </ul>
      </div>

      {/* Button to Watch Recording */}
      <div className="watch-recording-section">
        <button className="watch-recording-btn" onClick={handleWatchRecording}>
          Watch Interview Recording
        </button>
      </div>
    </div>
  );
};

export default InterviewFeedback;
