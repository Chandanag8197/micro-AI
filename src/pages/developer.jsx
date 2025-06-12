import './developer.css';

export default function Developer({ showTopics }) {
  return (
    <div className="developer-container">
      <h2 className="developer-title">Top 10 Developer Topics</h2>
      {showTopics && (
        <ul className="developer-list">
          <li>Data Structures & Algorithms</li>
          <li>Object-Oriented Programming</li>
          <li>System Design Basics</li>
          <li>Version Control (Git)</li>
          <li>Debugging & Testing</li>
          <li>APIs & Web Services</li>
          <li>Databases (SQL/NoSQL)</li>
          <li>Frontend Frameworks</li>
          <li>Backend Development</li>
          <li>Cloud & DevOps Basics</li>
        </ul>
      )}
    </div>
  );
}