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
import ForgotPassword from "./ForgotPassword.jsx";
import SystemDesignBasics from "./pages/SyatemDesignBasics.jsx";
import VersionControl from "./pages/VersionControl.jsx";
import DebuggingTesting from "./pages/DebugAndTest.jsx";
import APIsWebServices from "./pages/API.jsx";
import Databases from "./pages/Databases.jsx";
import FrontendFrameworks from "./pages/Frontend.jsx";
import BackendDevelopment from "./pages/Backend.jsx";
import CloudDevOpsBasics from "./pages/CloudAndDevops.jsx";
import ManualTestingFundamentals from "./pages/ManualTesting.jsx";
import AutomationTestingBasics from "./pages/AutomationTesting.jsx";
import TestingTools from "./pages/TestingTools.jsx";
import APITesting from "./pages/APITesting.jsx";
import PerformanceTesting from "./pages/PerformmanceTesting.jsx";
import ContinuousTestingCICD from "./pages/CICD.jsx";
import ExcelFormulasFunctions from "./pages/Excel.jsx";
import DataCleaning from "./pages/DataCleaning.jsx";
import SQLQueries from "./pages/SQL.jsx";
import DataVisualization from "./pages/DataVisualization.jsx";
import PythonDataAnalysis from "./pages/PythonDA.jsx";
import ExploratoryDataAnalysis from "./pages/EDA.jsx";
import About from "./About.jsx";
import Features from "./Features.jsx";
import Contact from "./Contact.jsx";
import TermsAndService from "./TermsAndService.jsx";


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
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndService />} />
        <Route path="developer" element={<Developer showTopics={true} />} />
        <Route path="tester" element={<Tester showTopics={true} />} />
        <Route path="data-analyst" element={<DataAnalyst showTopics={true} />} />
        <Route path="upsc" element={<UPSC showTopics={true} />} />
        <Route path="topics/data-structures-algorithms" element={<DataStructuresAlgorithms />} />
         <Route path="topics/object-oriented-programming" element={<ObjectOrientedProgramming />} />
        <Route path="topics/system-design-basics" element={<SystemDesignBasics />} />
        <Route path="topics/version-control" element={<VersionControl />} />
        <Route path="topics/debugging-testing" element={<DebuggingTesting />} />
        <Route path="topics/apis-web-services" element={<APIsWebServices />} />
        <Route path="topics/databases" element={<Databases />} />
        <Route path="topics/frontend-frameworks" element={<FrontendFrameworks />} />
        <Route path="topics/backend-development" element={<BackendDevelopment />} />
        <Route path="topics/cloud-devops-basics" element={<CloudDevOpsBasics />} /> 
        <Route path="/topics/manual-testing-fundamentals" element={<ManualTestingFundamentals />} />
        <Route path="/topics/automation-testing-basics" element={<AutomationTestingBasics />} />
        <Route path="/topics/testing-tools" element={<TestingTools />} />
        <Route path="/topics/api-testing" element={<APITesting />} />
        <Route path="/topics/performance-testing" element={<PerformanceTesting />} />
        <Route path="/topics/continuous-testing-cicd" element={<ContinuousTestingCICD />} />
        <Route path="/topics/excel-formulas-functions" element={<ExcelFormulasFunctions />} />
        <Route path="/topics/data-cleaning" element={<DataCleaning />} />
        <Route path="/topics/sql-queries" element={<SQLQueries />} />
        <Route path="/topics/data-visualization" element={<DataVisualization />} />
        <Route path="/topics/python-data-analysis" element={<PythonDataAnalysis />} />
        <Route path="/topics/exploratory-data-analysis" element={<ExploratoryDataAnalysis />} />

        {/* ✅ NEW ADMIN PANEL ROUTE */}
        <Route path="admin" element={<AdminPanel />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}
