import { Link } from "react-router-dom"; // Removed useNavigate
import { useCart } from "./context/CartContext";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import './developer.css';

const topics = [
  { label: "Data Structures & Algorithms", path: "/topics/data-structures-algorithms" },
  { label: "Object-Oriented Programming", path: "/topics/object-oriented-programming" },
  { label: "System Design Basics", path: "/topics/system-design-basics" },
  { label: "Version Control (Git)", path: "/topics/version-control" },
  { label: "Debugging & Testing", path: "/topics/debugging-testing" },
  { label: "APIs & Web Services", path: "/topics/apis-web-services" },
  { label: "Databases (SQL/NoSQL)", path: "/topics/databases" },
  { label: "Frontend Frameworks", path: "/topics/frontend-frameworks" },
  { label: "Backend Development", path: "/topics/backend-development" },
  { label: "Cloud & DevOps Basics", path: "/topics/cloud-devops-basics" }
];

export default function Developer({ showTopics }) {
  const { cartItems, addToCart, paidItems } = useCart();
  const inCart = cartItems.some(item => item.label === "Developer");
  const isPaid = paidItems.includes("Developer");

  const handleAddSection = () => {
    if (!inCart) addToCart({ label: "Developer", path: "/developer" });
  };

  const handleLockedClick = () => {
    alert("Please complete payment to unlock this topic.");
  };

  return (
    <div className="developer-fixed-container">
      <div className="developer-title-fixed" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Top 10 Developer Topics</span>
        <button
          onClick={handleAddSection}
          disabled={inCart || isPaid}
          style={{
            background: inCart || isPaid ? "gray" : "#19a7e0",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "4px 10px",
            cursor: inCart || isPaid ? "default" : "pointer",
            display: "flex",
            alignItems: "center"
          }}
        >
          {isPaid ? <><FaCheckCircle style={{ marginRight: 6 }} /> Paid</> :
            inCart ? <><FaCheckCircle style={{ marginRight: 6 }} /> Added</> :
              <><FaShoppingCart style={{ marginRight: 6 }} /> Add to Cart</>}
        </button>
      </div>

      {showTopics && (
        <ul className="developer-list-scroll">
          {topics.map((topic, index) => (
            <li key={topic.label}>
              {isPaid || index === 0 ? (
                <Link to={topic.path}>{topic.label}</Link>
              ) : (
                <span
                  onClick={handleLockedClick}
                  style={{ cursor: "pointer", color: "#555" }}
                >
                  {topic.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
