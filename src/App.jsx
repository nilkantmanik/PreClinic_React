import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAppointment from "./Components/AddAppointment";
import HeaderSidebar from "./Components/Header/HeaderSidebar";
import DoctorDashboard from "./Components/DashBoard/DoctorDashboard";
import AdminDashboard from "./Components/DashBoard/AdminDashboard";
import PatientDashboard from "./Components/DashBoard/PatientDashboard";
import Doctors from "./Components/Doctors/Doctors";
import AddDoctor from "./Components/Doctors/AddDoctor";
import EditDoctor from "./Components/Doctors/EditDoctor";
import DoctorProfile from "./Components/Doctors/DoctorProfile";

const App = () => {
  return (
    <Router>
      <HeaderSidebar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/addAppointment" element={<AddAppointment />} />
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        <Route path="/patientDashboard" element={<PatientDashboard />} />

        <Route path="/doctorsList" element={<Doctors />} />
        <Route path="/addDoctor" element={<AddDoctor />} />
        <Route path="/editDoctor" element={<EditDoctor />} />
        <Route path="/doctorProfile" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
