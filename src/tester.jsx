import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import './tester.css';

const topics = [
  { label: "Manual Testing Fundamentals", path: "/topics/manual-testing-fundamentals" },
  { label: "Automation Testing Basics", path: "/topics/automation-testing-basics" },
  { label: "Testing Tools (Selenium, JMeter)", path: "/topics/testing-tools" },
  { label: "API Testing", path: "/topics/api-testing" },
  { label: "Performance Testing", path: "/topics/performance-testing" },
  { label: "Continuous Testing in CI/CD", path: "/topics/continuous-testing-cicd" }
];

export default function Tester({ showTopics }) {
  const { cartItems, paidItems, addToCart } = useCart();
  const inCart = cartItems.some(item => item.label === "Tester");
  const isPaid = paidItems.includes("Tester");

  const handleAddSection = () => {
    if (!inCart) addToCart({ label: "Tester", path: "/tester" });
  };

  const handleLockedClick = () => {
    alert("Please add this section to cart and complete payment to access all topics.");
  };

  return (
    <div className="tester-fixed-container">
      <div className="tester-title-fixed" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Top 6 Tester Topics</span>
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
        <ul className="tester-list-scroll">
          {topics.map(({ label, path }, index) => (
            <li key={label}>
              {(isPaid || index === 0) ? (
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
