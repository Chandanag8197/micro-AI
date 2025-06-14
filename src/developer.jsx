import './developer.css';

export default function Developer({ showTopics }) {
  return (
    <div className="developer-fixed-container">
      <div className="developer-title-fixed">
        Top 10 Developer Topics
      </div>
      {showTopics && (
        <ul className="developer-list-scroll">
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