import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import StudentData from "./components/StudentData";
import StudentDashboard from "./components/StudentDashboard";
import ChartPage from "./pages/ChartPage";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login />} />

<Route path="/signup" element={<Signup />} />

<Route path="/" element={<Login />} />

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/students" element={<StudentData />} />

<Route path="/studentDashboard" element={<StudentDashboard />} />

<Route path="/chart" element={<ChartPage />} />

</Routes>

</BrowserRouter>

);

}

export default App;