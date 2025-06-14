import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="hero-container">
        <div className="overlay">
          <h1 className="title">Micro-AI</h1>
          <p className="subtitle">Prepare for Interviews</p>
          <div className="stats">
            <div className="stat-card" onClick={() => navigate("/developer")} style={{cursor: 'pointer'}}>
              <span role="img" aria-label="Developer">🧑‍💻</span>
              <h3>Developer</h3>
              <p>Code, Debug, Build</p>
            </div>
            <div className="stat-card" onClick={() => navigate("/tester")} style={{cursor: 'pointer'}}>
              <span role="img" aria-label="Tester">🧪</span>
              <h3>Tester</h3>
              <p>Manual & Automation</p>
            </div>
            <div className="stat-card" onClick={() => navigate("/data-analyst")} style={{cursor: 'pointer'}}>
              <span role="img" aria-label="Data Analyst">📊</span>
              <h3>Data Analyst</h3>
              <p>Excel, SQL, Python</p>
            </div>
            <div className="stat-card" onClick={() => navigate("/upsc")} style={{cursor: 'pointer'}}>
              <span role="img" aria-label="UPSC">🧠</span>
              <h3>UPSC</h3>
              <p>Prelims + Mains</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Chandanag8197" target="_blank" rel="noopener noreferrer">My GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;