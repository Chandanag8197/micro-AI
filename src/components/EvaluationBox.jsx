// EvaluationBox.jsx
import React from "react";
import "./EvaluationBox.css";

export default function EvaluationBox({ response, matchedKeywords = [], missingKeywords = [] }) {
  if (!response) return null;

  return (
    <div className="ai-response-box">
      <p><strong>Evaluation:</strong> {response}</p>

      {matchedKeywords.length > 0 && (
        <p style={{ color: "green" }}>
          ✅ <strong>Matched Keywords:</strong> {matchedKeywords.join(", ")}
        </p>
      )}

      {missingKeywords.length > 0 && (
        <p style={{ color: "red" }}>
          ❌ <strong>Missing Keywords:</strong> {missingKeywords.join(", ")}
        </p>
      )}
    </div>
  );
}
