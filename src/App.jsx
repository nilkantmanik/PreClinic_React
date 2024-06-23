import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAppointment from "./Components/AddAppointment";
import HeaderSidebar from "./Components/Header/HeaderSidebar";
import DoctorDashboard from "./Components/DoctorDashboard";
import Patients from "./Components/Patients/Patients";
import AddPatients from "./Components/Patients/AddPatients";
import EditPatients from "./Components/Patients/EditPatients";
import PatientsProfile from "./Components/Patients/PatientsProfile";

const App = () => {
  return (
    <Router>
      <HeaderSidebar />
      <Routes>
        <Route path="/" element={<AddAppointment />} />
        <Route path="/addAppointment" element={<AddAppointment />} />
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        <Route path="/patientList" element={<Patients />} />
        <Route path="/addPatients" element={<AddPatients />} />
        <Route path="/editPatients" element={<EditPatients />} />
        <Route path="/patientProfile" element={<PatientsProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
