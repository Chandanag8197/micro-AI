import './tester.css';

export default function Tester({ showTopics }) {
  return (
    <div className="tester-fixed-container">
      <div className="tester-title-fixed">
        Top 10 Tester Topics
      </div>
      {showTopics && (
        <ul className="tester-list-scroll">
          <li>Manual Testing Fundamentals</li>
          <li>Automation Testing Basics</li>
          <li>Test Case Design</li>
          <li>Bug Reporting & Tracking</li>
          <li>Testing Tools (Selenium, JMeter)</li>
          <li>API Testing</li>
          <li>Performance Testing</li>
          <li>Regression & Integration Testing</li>
          <li>Agile & Scrum Concepts</li>
          <li>Continuous Testing in CI/CD</li>
        </ul>
      )}
    </div>
  );
}