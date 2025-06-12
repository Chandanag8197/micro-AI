import './tester.css';

export default function Tester({ showTopics }) {
  return (
    <div className="tester-container">
      <h2 className="tester-title">Top 10 Tester Topics</h2>
      {showTopics && (
        <ul className="tester-list">
          <li>Manual Testing Fundamentals</li>
          <li>Automation Testing Basics</li>
          <li>Test Case Design</li>
          <li>Bug Life Cycle</li>
          <li>Testing Tools (Selenium, JMeter)</li>
          <li>API Testing</li>
          <li>Performance Testing</li>
          <li>Regression & Smoke Testing</li>
          <li>Agile & Scrum Concepts</li>
          <li>Reporting & Documentation</li>
        </ul>
      )}
    </div>
  );
}