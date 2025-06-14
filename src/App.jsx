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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="developer" element={<Developer showTopics={true} />} />
        <Route path="tester" element={<Tester showTopics={true}/>} />
        <Route path="data-analyst" element={<DataAnalyst showTopics={true}/>} />
        <Route path="upsc" element={<UPSC showTopics={true}/>} />
      </Route>
    </Routes>
  );
}