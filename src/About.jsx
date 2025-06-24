import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-bg">
      <div className="about-container">
        <h1>About Micro-AI</h1>
        <p>
          <strong>Micro-AI</strong> is a next-generation platform designed to revolutionize the hiring process through the power of artificial intelligence. Our mission is to empower organizations to make smarter, faster, and fairer hiring decisions by leveraging advanced AI-driven analytics and automation.
        </p>
        <h2>What We Do</h2>
        <p>
          Micro-AI streamlines interviews and candidate assessments by providing real-time feedback, automated scoring, and insightful analytics. Our platform analyzes candidate responses, evaluates technical and communication skills, and generates comprehensive reports to help hiring teams identify top talent efficiently.
        </p>
        <ul>
          <li>
            <strong>AI-Powered Interview Scoring:</strong> Instantly assess candidate performance with objective, data-driven scores and personalized feedback.
          </li>
          <li>
            <strong>Live Transcripts & Analytics:</strong> Capture and analyze interview conversations, providing actionable insights for both interviewers and candidates.
          </li>
          <li>
            <strong>Benchmarking:</strong> Compare individual candidates against the applicant pool to identify strengths and areas for improvement.
          </li>
          <li>
            <strong>Scalable Interview Management:</strong> Track the number of candidates interviewed, monitor trends, and optimize your recruitment pipeline.
          </li>
        </ul>
        <h2>Our Vision</h2>
        <p>
          We believe in a future where hiring is unbiased, efficient, and transparent. By harnessing the latest advancements in AI and machine learning, Micro-AI aims to eliminate manual bottlenecks and subjective biases from the recruitment process, ensuring every candidate gets a fair opportunity.
        </p>
        <h2>Why Choose Micro-AI?</h2>
        <ul>
          <li>Reduce time-to-hire with automated interview analysis</li>
          <li>Enhance decision-making with clear, visual reports</li>
          <li>Ensure fairness and consistency in candidate evaluation</li>
          <li>Gain deep insights into your talent pipeline</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to see a demo? Reach out to our team at <a href="mailto:support@micro-ai.com">support@micro-ai.com</a>.
        </p>
      </div>
    </div>
  );
}