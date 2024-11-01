import './Home.css';
import { useNavigate } from 'react-router-dom';
import robot from '../assets/images/bot3.png';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">Elevate Your Interview Skills with JobArc</h1>
        <p className="hero-subtitle">Your personalized interview companion powered by AI.</p>
        <button className="cta-btn" onClick={handleGetStarted}>Get started now</button>
        <img src={robot} alt="Interview skills graphic" className="hero-image" />
      </div>

      {/* About and Services Section */}
      <section className="about-services">
        <h2>About JobArc</h2>
        <p className="about-description">
          JobArc is your AI-powered career companion designed to help you master interviews, 
          find job opportunities, and optimize your CV. We use advanced AI to provide personalized 
          services that empower you to achieve your career goals.
        </p>
        <div className="services">
          <div className="service-card">
            <h3>AI Mock Interviews</h3>
            <p>Simulate real-world interviews with tailored feedback and analytics.</p>
          </div>
          <div className="service-card">
            <h3>Job Alerts</h3>
            <p>Receive job recommendations based on your skills and preferences.</p>
          </div>
          <div className="service-card">
            <h3>CV Reviews</h3>
            <p>Optimize your resume with insights for ATS compliance and impact.</p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="how-it-works">
        <h2>How JobArc Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Sign Up</h3>
            <p>Create your profile and tell us about your career goals.</p>
          </div>
          <div className="step">
            <h3>2. Mock Interviews</h3>
            <p>Simulate interviews with AI feedback and review.</p>
          </div>
          <div className="step">
            <h3>3. Job Alerts</h3>
            <p>Receive tailored job alerts based on your profile and preferences.</p>
          </div>
          <div className="step">
            <h3>4. CV Review</h3>
            <p>Use our AI tool to ensure your CV stands out in job applications.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2>Our Pricing Plans</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>BWP 0.00/month</p>
            <ul>
              <li>Up to 2 interviews</li>
              <li>Ability to add Custom Questions</li>
            </ul>
            <button>Begin</button>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>BWP 70/month</p>
            <ul>
              <li>Up to 20 interviews per month</li>
              <li>Ability to add Custom Questions</li>
            </ul>
            <button>Book a Call</button>
          </div>
          <div className="pricing-card enterprise">
            <h3>Enterprise</h3>
            <p>Talk to Sales</p>
            <ul>
              <li>Everything in Pro</li>
              <li>Custom interview options</li>
              <li>Live coding interview support</li>
            </ul>
            <button>Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
