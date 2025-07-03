import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx"; // ✅ Import CartProvider
import ProtectedRoute from "./protect_routes.jsx";
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
import CartPage from "./CartPage.jsx";
import PaymentPage from "./PaymentPage.jsx";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider> {/* ✅ Wrap your app with CartProvider */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="features" element={<ProtectedRoute><Features /></ProtectedRoute>} />
            <Route path="contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/terms" element={<TermsAndService />} />
            <Route path="developer" element={<ProtectedRoute><Developer showTopics={true} /></ProtectedRoute>} />
            <Route path="tester" element={<ProtectedRoute><Tester showTopics={true} /></ProtectedRoute>} />
            <Route path="data-analyst" element={<ProtectedRoute><DataAnalyst showTopics={true} /></ProtectedRoute>} />
            <Route path="upsc" element={<ProtectedRoute><UPSC showTopics={true} /></ProtectedRoute>} />
            <Route path="topics/data-structures-algorithms" element={<ProtectedRoute><DataStructuresAlgorithms /></ProtectedRoute>} />
            <Route path="topics/object-oriented-programming" element={<ProtectedRoute><ObjectOrientedProgramming /></ProtectedRoute>} />
            <Route path="topics/system-design-basics" element={<ProtectedRoute><SystemDesignBasics /></ProtectedRoute>} />
            <Route path="topics/version-control" element={<ProtectedRoute><VersionControl /></ProtectedRoute>} />
            <Route path="topics/debugging-testing" element={<ProtectedRoute><DebuggingTesting /></ProtectedRoute>} />
            <Route path="topics/apis-web-services" element={<ProtectedRoute><APIsWebServices /></ProtectedRoute>} />
            <Route path="topics/databases" element={<ProtectedRoute><Databases /></ProtectedRoute>} />
            <Route path="topics/frontend-frameworks" element={<ProtectedRoute><FrontendFrameworks /></ProtectedRoute>} />
            <Route path="topics/backend-development" element={<ProtectedRoute><BackendDevelopment /></ProtectedRoute>} />
            <Route path="topics/cloud-devops-basics" element={<ProtectedRoute><CloudDevOpsBasics /></ProtectedRoute>} /> 
            <Route path="/topics/manual-testing-fundamentals" element={<ProtectedRoute><ManualTestingFundamentals /></ProtectedRoute>} />
            <Route path="/topics/automation-testing-basics" element={<ProtectedRoute><AutomationTestingBasics /></ProtectedRoute>} />
            <Route path="/topics/testing-tools" element={<ProtectedRoute><TestingTools /></ProtectedRoute>} />
            <Route path="/topics/api-testing" element={<ProtectedRoute><APITesting /></ProtectedRoute>} />
            <Route path="/topics/performance-testing" element={<ProtectedRoute><PerformanceTesting /></ProtectedRoute>} />
            <Route path="/topics/continuous-testing-cicd" element={<ProtectedRoute><ContinuousTestingCICD /></ProtectedRoute>} />
            <Route path="/topics/excel-formulas-functions" element={<ProtectedRoute><ExcelFormulasFunctions /></ProtectedRoute>} />
            <Route path="/topics/data-cleaning" element={<ProtectedRoute><DataCleaning /></ProtectedRoute>} />
            <Route path="/topics/sql-queries" element={<ProtectedRoute><SQLQueries /></ProtectedRoute>} />
            <Route path="/topics/data-visualization" element={<ProtectedRoute><DataVisualization /></ProtectedRoute>} />
            <Route path="/topics/python-data-analysis" element={<ProtectedRoute><PythonDataAnalysis /></ProtectedRoute>} />
            <Route path="/topics/exploratory-data-analysis" element={<ProtectedRoute><ExploratoryDataAnalysis /></ProtectedRoute>} />
            <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
            <Route path="admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}
