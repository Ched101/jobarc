import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>JobArc</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/demo-interview">Demo Interview</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/skill-development">Skill Development</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
