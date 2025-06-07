import './App.css';

function App() {
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1 className="title">Micro-AI</h1>
        <p className="subtitle">Prepare for Interviews</p>
        <div className="stats">
          <div className="stat-card">
            <span role="img" aria-label="Developer">🧑‍💻</span>
            <h3>Developer</h3>
            <p>Code, Debug, Build</p>
          </div>
          <div className="stat-card">
            <span role="img" aria-label="Tester">🧪</span>
            <h3>Tester</h3>
            <p>Manual & Automation</p>
          </div>
          <div className="stat-card">
            <span role="img" aria-label="Data Analyst">📊</span>
            <h3>Data Analyst</h3>
            <p>Excel, SQL, Python</p>
          </div>
          <div className="stat-card">
            <span role="img" aria-label="UPSC">🧠</span>
            <h3>UPSC</h3>
            <p>Prelims + Mains</p>
          </div>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Chandanag8197" target="_blank">My GitHub</a>
          {/* <a href="https://github.com/Chandanag8197/micro-ai">Project Repo</a> */}
        </div>
      </div>
    </div>
  );
}

export default App;
