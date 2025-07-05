import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  // Animation Variants
  const popUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bounceHover = {
    whileHover: {
      y: [-2, -4, -2, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const fadeZoomBackground = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="main-container"
      variants={fadeZoomBackground}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-container">
        <div className="overlay">
          <motion.h1
            className="title"
            variants={popUp}
            initial="hidden"
            animate="visible"
          >
            Micro-AI
          </motion.h1>

          <motion.p
            className="subtitle"
            variants={popUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Prepare for Interviews
          </motion.p>

          <div className="stats">
            {[
              { label: "Developer", icon: "🧑‍💻", desc: "Code, Debug, Build", path: "/developer" },
              { label: "Tester", icon: "🧪", desc: "Manual & Automation", path: "/tester" },
              { label: "Data Analyst", icon: "📊", desc: "Excel, SQL, Python", path: "/data-analyst" },
              { label: "UPSC", icon: "🧠", desc: "Prelims + Mains", path: "/upsc" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="stat-card"
                onClick={() => navigate(item.path)}
                variants={popUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={bounceHover.whileHover}
                style={{ cursor: "pointer" }}
              >
                <span role="img" aria-label={item.label}>{item.icon}</span>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="footer-links"
            variants={popUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/Chandanag8197"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
