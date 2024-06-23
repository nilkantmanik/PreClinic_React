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
import Patients from "./Components/Patients/Patients";
import AddPatients from "./Components/Patients/AddPatients";
import EditPatients from "./Components/Patients/EditPatients";
import PatientsProfile from "./Components/Patients/PatientsProfile";
import StaffLIst from "./Components/Staff/StaffLIst";
import AddStaff from "./Components/Staff/AddStaff";
import StaffProfile from "./Components/Staff/StaffProfile";
import StaffLeave from "./Components/Staff/StaffLeave";
import StaffHoliday from "./Components/Staff/StaffHoliday";
import StaffAttendance from "./Components/Staff/StaffAttendance";

const App = () => {
  return (
    <Router>
      <HeaderSidebar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />

        {/* Dashborad */}
        <Route path="/addAppointment" element={<AddAppointment />} />
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        <Route path="/patientDashboard" element={<PatientDashboard />} />

        {/* Doctor */}
        <Route path="/doctorsList" element={<Doctors />} />
        <Route path="/addDoctor" element={<AddDoctor />} />
        <Route path="/editDoctor" element={<EditDoctor />} />
        <Route path="/doctorProfile" element={<DoctorProfile />} />

        {/* Patient */}
        <Route path="/patientList" element={<Patients />} />
        <Route path="/addPatients" element={<AddPatients />} />
        <Route path="/editPatients" element={<EditPatients />} />
        <Route path="/patientProfile" element={<PatientsProfile />} />
        <Route path="/staffList" element={<StaffLIst />} />
        <Route path="/addStaff" element={<AddStaff />} />
        <Route path="/staffProfile" element={<StaffProfile />} />
        <Route path="/staffLeave" element={<StaffLeave />} />
        <Route path="/staffHoliday" element={<StaffHoliday />} />
        <Route path="/staffAttendance" element={<StaffAttendance />} />
      </Routes>
    </Router>
  );
};

export default App;
