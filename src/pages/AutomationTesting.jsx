import React, { useState, useEffect, useRef } from "react";
import "./TopicPage.css";
import axios from "axios";
import { speak } from "../utils/speak";
import EvaluationBox from "../components/EvaluationBox.jsx";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function AutomationTestingBasics() {
  const [question, setQuestion] = useState("");
  const [textAnswer, setTextAnswer] = useState("");
  const [response, setResponse] = useState(null);
  const [listening, setListening] = useState(false);
  const [volume, setVolume] = useState(1);
  const recognitionRef = useRef(null);
  const micTimeoutRef = useRef(null);

  const fetchRandomQuestion = async () => {
    try {
      window.speechSynthesis.cancel();
      const res = await axios.get(`${baseUrl}/api/questions/random?topics=automation-testing-basics`);
      const fetchedQuestion = res.data.questionText || "Question not found.";
      setQuestion(fetchedQuestion);
      setTextAnswer("");
      setResponse(null);
      speak(fetchedQuestion, volume);
    } catch (err) {
      console.error("Error fetching question:", err);
      const fallback = "Failed to load question.";
      setQuestion(fallback);
      speak(fallback, volume);
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
      setTextAnswer((prev) => (prev ? prev + " " + transcript : transcript));
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

      micTimeoutRef.current = setTimeout(() => {
        recognitionRef.current?.stop();
        setListening(false);
      }, 60000); // Stop after 60s
    } else {
      recognitionRef.current.stop();
      setListening(false);
      clearTimeout(micTimeoutRef.current);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${baseUrl}/api/submit`, {
        answer: textAnswer,
        questionText: question,
      });

      const { evaluation, matchedKeywords = [], missingKeywords = [] } = res.data;
      setResponse({ evaluation, matchedKeywords, missingKeywords });
    } catch (error) {
      console.error(error);
      setResponse({ evaluation: "Error submitting answer." });
    }
  };

  return (
    <div className="topic-bg">
      <div className="topic-content">
        <h1>Automation Testing Basics</h1>
        <p>
          Welcome to the Automation Testing Basics page! Here you can learn about test automation frameworks, scripting, and more.
        </p>
        <hr style={{ margin: "30px 0" }} />
        <h2 className="ai-interviewer-title">AI Interviewer</h2>

        {/* Question Box */}
        <div className="ai-question-box">
          <strong>Question:</strong> {question}
          <button onClick={fetchRandomQuestion} title="Get New Question" style={{ marginLeft: 10 }}>
            🔄
          </button>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginLeft: "10px" }}>
            <button
              onClick={() => {
                window.speechSynthesis.cancel();
                speak(question, volume);
              }}
              title="Speak Again"
              style={{ fontSize: 16, cursor: "pointer" }}
            >
              🔊
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              style={{ width: "100px" }}
              title="Volume"
            />
          </div>
        </div>

        {/* Answer Input */}
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

        {/* Evaluation Output */}
        {response?.evaluation && (
          <EvaluationBox
            response={response.evaluation}
            matchedKeywords={response.matchedKeywords}
            missingKeywords={response.missingKeywords}
          />
        )}
      </div>
    </div>
  );
}
