import { Link } from "react-router-dom";
import './data-analyst.css';

export default function DataAnalyst({ showTopics }) {
  return (
    <div className="analyst-fixed-container">
      <div className="analyst-title-fixed">
        Top 6 Data Analyst Topics
      </div>
      {showTopics && (
        <ul className="analyst-list-scroll">
          <li><Link to="/topics/excel-formulas-functions">Excel Formulas & Functions</Link></li>
          <li><Link to="/topics/data-cleaning">Data Cleaning</Link></li>
          <li><Link to="/topics/sql-queries">SQL Queries (Joins, Aggregations)</Link></li>
          <li><Link to="/topics/data-visualization">Data Visualization (Tableau/Power BI)</Link></li>
          <li><Link to="/topics/python-data-analysis">Python for Data Analysis (Pandas, NumPy)</Link></li>
          <li><Link to="/topics/exploratory-data-analysis">Exploratory Data Analysis (EDA)</Link></li>
        </ul>
      )}
    </div>
  );
}