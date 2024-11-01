import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DemoInterview from './components/DemoInterview';
import Dashboard from './components/Dashboard';
import SkillDevelopment from './components/SkillDevelopment';
import User from './components/User';
import Header from './components/Header';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo-interview" element={<DemoInterview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skill-development" element={<SkillDevelopment />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
