import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Developer from './pages/developer';
import Tester from './pages/tester';
import DataAnalyst from './pages/data-analyst';
import './App.css';

function Home() {
  return <div>Welcome! Choose a role to prepare for interviews.</div>;
}
function UPSC() {
  return <div>UPSC Interview Preparation Coming Soon!</div>;
}

function App() {
  const [selectedRole, setSelectedRole] = useState('');
  const [showTopics, setShowTopics] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Handle card click
  const handleRoleClick = (role, path) => {
    if (selectedRole === role && showTopics) {
      setShowTopics(false); // Hide topics if clicked again
    } else {
      setSelectedRole(role);
      setShowTopics(true);
      navigate(path);
    }
  };

  return (
    <div className="hero-container">
      <div className="overlay">
        <h1 className="title">Micro-AI</h1>
        <p className="subtitle">Prepare for Interviews</p>
        <div className="stats">
          <div className="stat-card" onClick={() => handleRoleClick('developer', '/developer')} style={{cursor: 'pointer'}}>
            <span role="img" aria-label="Developer">🧑‍💻</span>
            <h3>Developer</h3>
            <p>Code, Debug, Build</p>
          </div>
          <div className="stat-card" onClick={() => handleRoleClick('tester', '/tester')} style={{cursor: 'pointer'}}>
            <span role="img" aria-label="Tester">🧪</span>
            <h3>Tester</h3>
            <p>Manual & Automation</p>
          </div>
          <div className="stat-card" onClick={() => handleRoleClick('data-analyst', '/data-analyst')} style={{cursor: 'pointer'}}>
            <span role="img" aria-label="Data Analyst">📊</span>
            <h3>Data Analyst</h3>
            <p>Excel, SQL, Python</p>
          </div>
          <Link to="/upsc" className="stat-card">
            <span role="img" aria-label="UPSC">🧠</span>
            <h3>UPSC</h3>
            <p>Prelims + Mains</p>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer showTopics={showTopics} />} />
          <Route path="/tester" element={<Tester showTopics={showTopics} />} />
          <Route path="/data-analyst" element={<DataAnalyst showTopics={showTopics} />} />
          <Route path="/upsc" element={<UPSC />} />
        </Routes>
        <div className="footer-links">
          <a href="https://github.com/Chandanag8197" target="_blank" rel="noopener noreferrer">My GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default App;