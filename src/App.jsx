import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Developer from "./developer.jsx";
import Tester from "./tester.jsx";
import DataAnalyst from "./data-analyst.jsx";
import UPSC from "./UPSC.jsx";
import Login from "./Login";
import Layout from "./Layout";
import "./App.css";
import Register from "./Register.jsx";
import DataStructuresAlgorithms from "./pages/dsa.jsx";
import ObjectOrientedProgramming from './pages/OOP.jsx';
import AdminPanel from "./components/AdminPanel.jsx";  

// Simple placeholder component for topic pages
function TopicPage({ name }) {
  return <div style={{ padding: 40, fontSize: 24 }}>{name}</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="developer" element={<Developer showTopics={true} />} />
        <Route path="tester" element={<Tester showTopics={true} />} />
        <Route path="data-analyst" element={<DataAnalyst showTopics={true} />} />
        <Route path="upsc" element={<UPSC showTopics={true} />} />
        <Route path="topics/data-structures-algorithms" element={<DataStructuresAlgorithms />} />
         <Route path="topics/object-oriented-programming" element={<ObjectOrientedProgramming />} />
        {/* <Route path="topics/system-design-basics" element={<TopicPage name="System Design Basics" />} />
        <Route path="topics/version-control" element={<TopicPage name="Version Control (Git)" />} />
        <Route path="topics/debugging-testing" element={<TopicPage name="Debugging & Testing" />} />
        <Route path="topics/apis-web-services" element={<TopicPage name="APIs & Web Services" />} />
        <Route path="topics/databases" element={<TopicPage name="Databases (SQL/NoSQL)" />} />
        <Route path="topics/frontend-frameworks" element={<TopicPage name="Frontend Frameworks" />} />
        <Route path="topics/backend-development" element={<TopicPage name="Backend Development" />} />
        <Route path="topics/cloud-devops-basics" element={<TopicPage name="Cloud & DevOps Basics" />} /> */}

        {/* ✅ NEW ADMIN PANEL ROUTE */}
        <Route path="admin" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
}
