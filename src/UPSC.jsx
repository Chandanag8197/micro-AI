import './upsc.css';

export default function UPSC({ showTopics }) {
  return (
    <div className="upsc-fixed-container">
      <div className="upsc-title-fixed">
        Top 10 UPSC Topics
      </div>
      {showTopics && (
        <ul className="upsc-list-scroll">
          <li>Indian Polity & Constitution</li>
          <li>Modern Indian History</li>
          <li>Geography (India & World)</li>
          <li>Economics & Budget</li>
          <li>Environment & Ecology</li>
          <li>Science & Technology</li>
          <li>Current Affairs</li>
          <li>Governance & Social Justice</li>
          <li>International Relations</li>
          <li>Ethics, Integrity & Aptitude</li>
        </ul>
      )}
    </div>
  );
}