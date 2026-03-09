import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Data from "./components/Menrega/Data";
// import Graph from "./componensts/Menrega/Graph";
import LoginPage from "./pages/loginPage";
import RepresentData from "./components/Menrega/RepresentData";
// import MnregaDashboard from "./pages/MnregaDashboard";
import MnregaDashboard from "./pages/MnregaDashboard";
import Dashboard from "./components/Menrega/Dashboard";
import DcDashboardMainPage from "./pages/dcDashboardPage/dcMainPage/DcDashboardMainPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/mnrega-dashboard" element={<RepresentData />} /> */}
        <Route path="/mnrega-dashboard" element={<MnregaDashboard />} />
        <Route path="/dashboard/:departmentId" element={<MnregaDashboard />} />
         <Route path="/dashboard" element={<DcDashboardMainPage />} />

        <Route path="/login" element={<LoginPage/>}/>
         <Route path="/dashboard-overview" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
