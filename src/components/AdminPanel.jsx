import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({
    topic: "",
    questionText: "",
    keywords: ""
  });

  const fetchQuestions = async () => {
    try {
      const res = await fetch("/api/questions/all");
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      console.error("Failed to fetch questions:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      keywords: form.keywords.split(",").map((k) => k.trim())
    };

    try {
      await fetch("/api/questions/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      alert("✅ Question added");
      setForm({ topic: "", questionText: "", keywords: "" });
      fetchQuestions();
    } catch (err) {
      console.error("Error adding question:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛠️ Admin Panel – Manage Questions</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Topic"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          required
        />
        <br />
        <textarea
          placeholder="Question Text"
          value={form.questionText}
          onChange={(e) => setForm({ ...form, questionText: e.target.value })}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Keywords (comma-separated)"
          value={form.keywords}
          onChange={(e) => setForm({ ...form, keywords: e.target.value })}
        />
        <br />
        <button type="submit">➕ Add Question</button>
      </form>

      <h3>📋 Existing Questions</h3>
      <ul>
        {questions.map((q) => (
          <li key={q._id}>
            <b>{q.topic}</b>: {q.questionText} <br />
            <small>Keywords: {q.keywords.join(", ")}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
