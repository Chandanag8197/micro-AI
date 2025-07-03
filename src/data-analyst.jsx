import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import './data-analyst.css';

const topics = [
  { label: "Excel Formulas & Functions", path: "/topics/excel-formulas-functions" },
  { label: "Data Cleaning", path: "/topics/data-cleaning" },
  { label: "SQL Queries (Joins, Aggregations)", path: "/topics/sql-queries" },
  { label: "Data Visualization (Tableau/Power BI)", path: "/topics/data-visualization" },
  { label: "Python for Data Analysis (Pandas, NumPy)", path: "/topics/python-data-analysis" },
  { label: "Exploratory Data Analysis (EDA)", path: "/topics/exploratory-data-analysis" }
];

export default function DataAnalyst({ showTopics }) {
  const { cartItems, paidItems, addToCart } = useCart();
  const inCart = cartItems.some(item => item.label === "Data Analyst");
  const isPaid = paidItems.includes("Data Analyst");

  const handleAddSection = () => {
    if (!inCart) addToCart({ label: "Data Analyst", path: "/data-analyst" });
  };

  const handleLockedClick = () => {
    alert("Please add this section to cart and complete payment to access all topics.");
  };

  return (
    <div className="analyst-fixed-container">
      <div className="analyst-title-fixed" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Top 6 Data Analyst Topics</span>
        <button
          onClick={handleAddSection}
          disabled={inCart}
          style={{
            background: inCart ? "gray" : "#19a7e0",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "4px 10px",
            cursor: inCart ? "default" : "pointer",
            display: "flex",
            alignItems: "center"
          }}
        >
          {inCart ? <><FaCheckCircle style={{ marginRight: 6 }} /> Added</> : <><FaShoppingCart style={{ marginRight: 6 }} /> Add to Cart</>}
        </button>
      </div>

      {showTopics && (
        <ul className="analyst-list-scroll">
          {topics.map(({ label, path }, index) => (
            <li key={label}>
              {isPaid || index === 0 ? (
                <Link to={path}>{label}</Link>
              ) : (
                <span
                  onClick={handleLockedClick}
                  style={{
                    color: "#555",
                    cursor: "pointer"
                  }}
                >
                  {label}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
