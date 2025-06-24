import { Link } from "react-router-dom";
import './tester.css';

export default function Tester({ showTopics }) {
  return (
    <div className="tester-fixed-container">
      <div className="tester-title-fixed">
        Top 6 Tester Topics
      </div>
      {showTopics && (
        <ul className="tester-list-scroll">
          <li><Link to="/topics/manual-testing-fundamentals">Manual Testing Fundamentals</Link></li>
          <li><Link to="/topics/automation-testing-basics">Automation Testing Basics</Link></li>
          <li><Link to="/topics/testing-tools">Testing Tools (Selenium, JMeter)</Link></li>
          <li><Link to="/topics/api-testing">API Testing</Link></li>
          <li><Link to="/topics/performance-testing">Performance Testing</Link></li>
          <li><Link to="/topics/continuous-testing-cicd">Continuous Testing in CI/CD</Link></li>
        </ul>
      )}
    </div>
  );
}