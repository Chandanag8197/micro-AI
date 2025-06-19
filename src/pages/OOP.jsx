import React, { useState, useEffect, useRef } from "react";
import "./TopicPage.css";
import axios from "axios";

export default function ObjectOrientedProgramming() {
  const [question, setQuestion] = useState("");
  const [textAnswer, setTextAnswer] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Fetch a random OOP question from backend
  const fetchRandomQuestion = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/questions/random?topics=object-oriented-programming");
      setQuestion(res.data.questionText || "Question not found.");
      setTextAnswer("");
      setResponse("");
    } catch (err) {
      console.error("Error fetching question:", err);
      setQuestion("Failed to load question.");
    }
  };

  useEffect(() => {
    fetchRandomQuestion();
  }, []);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTextAnswer(prev => prev ? prev + " " + transcript : transcript);
    };

    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognitionRef.current = recognition;
  }, []);

  const handleMicClick = () => {
    if (!recognitionRef.current) return;

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
        questionText: question,
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
        <h1>Object-Oriented Programming</h1>
        <p>
          Welcome to the Object-Oriented Programming page! Here you can learn about classes, objects, inheritance, polymorphism, and more.
        </p>
        <hr style={{ margin: "30px 0" }} />
        <h2 className="ai-interviewer-title">AI Interviewer</h2>
        <div className="ai-question-box">
          <strong>Question:</strong> {question}
          <button
            onClick={fetchRandomQuestion}
            style={{ marginLeft: "10px", fontSize: "16px", cursor: "pointer" }}
            title="Get New Question"
          >
            🔄
          </button>
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
        <button className="ai-submit-btn" onClick={handleSubmit}>
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