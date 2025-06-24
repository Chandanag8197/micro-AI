import { Link } from "react-router-dom";
import './developer.css';

export default function Developer({ showTopics }) {
  return (
    <div className="developer-fixed-container">
      <div className="developer-title-fixed">
        Top 10 Developer Topics
      </div>
      {showTopics && (
        <ul className="developer-list-scroll">
          <li><Link to="/topics/data-structures-algorithms">Data Structures & Algorithms</Link></li>
          <li><Link to="/topics/object-oriented-programming">Object-Oriented Programming</Link></li>
           <li><Link to="/topics/system-design-basics">System Design Basics</Link></li>
          <li><Link to="/topics/version-control">Version Control (Git)</Link></li>
          <li><Link to="/topics/debugging-testing">Debugging & Testing</Link></li>
          <li><Link to="/topics/apis-web-services">APIs & Web Services</Link></li>
          <li><Link to="/topics/databases">Databases (SQL/NoSQL)</Link></li>
          <li><Link to="/topics/frontend-frameworks">Frontend Frameworks</Link></li>
          <li><Link to="/topics/backend-development">Backend Development</Link></li>
          <li><Link to="/topics/cloud-devops-basics">Cloud & DevOps Basics</Link></li> 
        </ul>
      )}
    </div>
  );
}