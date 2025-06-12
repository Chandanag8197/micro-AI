import './data-analyst.css';

export default function DataAnalyst({ showTopics }) {
  return (
    <div className="analyst-container">
      <h2 className="analyst-title">Top 10 Data Analyst Topics</h2>
      {showTopics && (
        <ul className="analyst-list">
          <li>Excel Formulas & Functions</li>
          <li>Data Cleaning</li>
          <li>SQL Queries (Joins, Aggregations)</li>
          <li>Data Visualization (Tableau/Power BI)</li>
          <li>Python for Data Analysis (Pandas, NumPy)</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Statistics & Probability Basics</li>
          <li>Data Interpretation</li>
          <li>Dashboards & Reports</li>
          <li>Business Problem Solving</li>
        </ul>
      )}
    </div>
  );
}