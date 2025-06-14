import React, { useState, useRef } from "react";
import "./TopicPage.css";
import axios from "axios";

export default function DataStructuresAlgorithms() {
  const [question] = useState("Tell me about yourself.");
  const [textAnswer, setTextAnswer] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Microphone handler
  const handleMicClick = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTextAnswer(prev => prev ? prev + " " + transcript : transcript);
      };

      recognitionRef.current.onend = () => setListening(false);
      recognitionRef.current.onerror = () => setListening(false);
    }

    if (!listening) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      setListening(false);
      recognitionRef.current.stop();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/submit', {
        answer: textAnswer,
      });
      setResponse(res.data.evaluation || "Answer submitted.");
    } catch (error) {
      console.error(error);
      setResponse("Error submitting answer.");
    }
  };

  return (
    <div className="topic-bg">
      <div className="topic-content">
        <h1>Data Structures & Algorithms</h1>
        <p>
          Welcome to the Data Structures & Algorithms page! Here you can learn about arrays, linked lists, trees, sorting, searching, and more.
        </p>
        <hr style={{ margin: "30px 0" }} />
        <h2 className="ai-interviewer-title">AI Interviewer</h2>
        <div className="ai-question-box">
          <strong>Question:</strong> {question}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <textarea
            className="ai-textarea"
            placeholder="Type your answer here..."
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
          />
          <button
            type="button"
            className={`ai-mic-btn${listening ? " listening" : ""}`}
            onClick={handleMicClick}
            title={listening ? "Stop Listening" : "Start Listening"}
          >
            🎤
          </button>
        </div>
        <button
          className="ai-submit-btn"
          onClick={handleSubmit}
        >
          Submit Answer
        </button>
        {response && (
          <div className="ai-response-box">
            <strong>Evaluation:</strong> {response}
          </div>
        )}
      </div>
    </div>
  );
}