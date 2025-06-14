import './data-analyst.css';

export default function DataAnalyst({ showTopics }) {
  return (
    <div className="analyst-fixed-container">
      <div className="analyst-title-fixed">
        Top 10 Data Analyst Topics
      </div>
      {showTopics && (
        <ul className="analyst-list-scroll">
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