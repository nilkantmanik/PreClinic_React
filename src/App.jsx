import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAppointment from "./Components/AddAppointment";
import HeaderSidebar from "./Components/Header/HeaderSidebar";
import DoctorDashboard from "./Components/DoctorDashboard";

const App = () => {
  return (
    <Router>
      <HeaderSidebar />
      <Routes>
        <Route path="/" element={<AddAppointment />} />
        <Route path="/addAppointment" element={<AddAppointment />} />
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
