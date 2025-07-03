import React from "react";
import "./About.css";

const features = [
  {
    title: "Behavioral Analysis",
    description:
      "Leverage AI and deep analytics to gain insights into candidate behavior, enabling smarter hiring decisions, reducing bias, and improving team fit.",
    stats: [
      { label: "85%", value: "85%" },
      { label: "Interview accuracy", value: "30%" },
      { label: "Employee rates", value: "20%" },
    ],
  },
  {
    title: "Real-Time Feedback",
    description:
      "Get instant feedback and recommendations during interviews, helping interviewers and candidates improve performance and outcomes.",
  },
  {
    title: "Automated Assessments",
    description:
      "AI-driven assessments evaluate candidate skills and competencies, streamlining the screening process and saving valuable time.",
  },
];

export default function Features() {
  return (
    <main className="about-bg">
      <div className="about-container">
        <h1>Platform Features</h1>
        <p>
          Discover how Micro-AI empowers your hiring process with intelligent tools designed for speed, fairness, and precision.
        </p>

        {features.map((feature, idx) => (
          <section key={idx}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            {feature.stats && (
              <ul>
                {feature.stats.map((stat, i) => (
                  <li key={i}>
                    <strong>{stat.label}:</strong> {stat.value}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
