import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

let submenuOpen = false;
const HeaderSidebar = () => {
  const toggleSubmenu = () => {
    submenuOpen = !submenuOpen;
  };

  return (
    <>
      <div className="header">
        <div className="header-left">
          <NavLink to="/" className="logo">
            <img src="assets/img/logo.png" width="35" height="35" alt="img" />
            <span>Pre Clinic</span>
          </NavLink>
        </div>
        <a id="toggle_btn" href="javascript:void(0);">
          <img src="assets/img/icons/bar-icon.svg" alt="img" />
        </a>
        <a id="mobile_btn" className="mobile_btn float-start" href="#sidebar">
          <img src="assets/img/icons/bar-icon.svg" alt="img" />
        </a>
        <div className="top-nav-search mob-view">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <a className="btn">
              <img src="assets/img/icons/search-normal.svg" alt="img" />
            </a>
          </form>
        </div>
        <ul className="nav user-menu float-end">
          <li className="nav-item dropdown d-none d-md-block">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <img src="assets/img/icons/note-icon-02.svg" alt="img" />
              <span className="pulse"></span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span>Notifications</span>
              </div>
              <div className="drop-scroll">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img
                            alt="John Doe"
                            src="assets/img/user.jpg"
                            className="img-fluid"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added
                            new task
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">V</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>
                            changed the task name
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">L</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span>{" "}
                            added
                            <span className="noti-title">
                              Domenic Houston
                            </span>{" "}
                            and
                            <span className="noti-title">Claire Mapes</span> to
                            project
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">G</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>
                            completed task
                            <span className="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">V</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Bernardo Galaviz</span>
                            added new task
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              2 days ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown d-none d-md-block">
            <a
              href="javascript:void(0);"
              id="open_msg_box"
              className="hasnotifications nav-link"
            >
              <img src="assets/img/icons/note-icon-01.svg" alt="img" />
              <span className="pulse"></span>
            </a>
          </li>
          <li className="nav-item dropdown has-arrow user-profile-list">
            <a
              href="#"
              className="dropdown-toggle nav-link user-link"
              data-bs-toggle="dropdown"
            >
              <div className="user-names">
                <h5>Liam Michael</h5>
                <span>Admin</span>
              </div>
              <span className="user-img">
                <img src="assets/img/user-06.jpg" alt="Admin" />
              </span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="edit-profile.html">
                Edit Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="settings.html" className="hasnotifications nav-link">
              <img src="assets/img/icons/setting-icon-01.svg" alt="img" />
            </a>
          </li>
        </ul>
        <div className="dropdown mobile-user-menu float-end">
          <a
            href="#"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="edit-profile.html">
              Edit Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <a className="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar" id="sidebar" style={{ overflowY: "auto" }}>
        <div className="sidebar-inner">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              <li className="submenu">
                <Link to="#" onClick={toggleSubmenu}>
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-01.svg" alt="img" />
                  </span>
                  <span> Dashboard </span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul style={{ display: submenuOpen ? "block" : "none" }}>
                  <li>
                    <NavLink
                      to="/"
                      // className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {" "}
                      Admin Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/doctorDashboard" activeClassName="active">
                      Doctor Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="patientDashboard" activeClassName="active">
                      Patient Dashboard
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-02.svg" alt="img" />
                  </span>
                  <span> Doctors </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <NavLink to="/doctorsList" activeClassName="active">
                      Doctor List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/addDoctor" activeClassName="active">
                      Add Doctor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/editDoctor" activeClassName="active">
                      Edit Doctor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/doctorProfile" activeClassName="active">
                      Doctor Profile
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-03.svg" alt="img" />
                  </span>
                  <span>Patients </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <NavLink to="/patientList" activeClassName="active">
                      Patients List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/addPatients" activeClassName="active">
                      Add Patients
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/editPatients" activeClassName="active">
                      Edit Patients
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/patientProfile" activeClassName="active">
                      Patients Profile
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-08.svg" alt="img" />
                  </span>
                  <span> Staff </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/staffList">Staff List</Link>
                  </li>
                  <li>
                    <Link to="/addStaff">Add Staff</Link>
                  </li>
                  <li>
                    <NavLink to="/staffProfile">Staff Profile</NavLink>
                  </li>
                  <NavLink to="/staffLeave" activeClassName="active">
                    {" "}
                    Leave       
                  </NavLink>
                  <NavLink to="/staffHoliday" activeClassName="active">
                    {" "}
                    Holidays       
                  </NavLink>
                  <NavLink to="/staffAttendance" activeClassName="active">
                    {" "}
                    Attendance       
                  </NavLink>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-04.svg" alt="img" />
                  </span>
                  <span> Accounts </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="invoice-items.html">Invoice Items</a>
                  </li>
                  <li>
                    <a href="add-invoice.html">Add Invoices</a>
                  </li>
                  <li>
                    <a href="edit-invoice.html">Edit Invoices</a>
                  </li>
                  <li>
                    <a href="tax-settings.html">Tax Settings</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-05.svg" alt="img" />
                  </span>
                  <span> Payroll </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="salary.html"> Employee Salary </a>
                  </li>
                  <li>
                    <a href="salary-view.html"> Payslip </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-06.svg" alt="img" />
                  </span>
                  <span> Leave Management </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="leave-request.html"> Leave Request </a>
                  </li>
                  <li>
                    <a href="leave-type.html"> Leave Type </a>
                  </li>
                  <li>
                    <a href="leave-balance.html"> Leave Balance </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-07.svg" alt="img" />
                  </span>
                  <span> Report </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="expense-report.html"> Expense Report </a>
                  </li>
                  <li>
                    <a href="invoice-report.html"> Invoice Report </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="settings.html">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-09.svg" alt="img" />
                  </span>
                  <span> Settings </span>
                </a>
              </li>
              <li className="menu-title">Pages</li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-10.svg" alt="img" />
                  </span>
                  <span> Profile </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="profile.html">Employee Profile</a>
                  </li>
                  <li>
                    <a href="client-profile.html">Client Profile</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-11.svg" alt="img" />
                  </span>
                  <span> Authentication </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-12.svg" alt="img" />
                  </span>
                  <span> Error Pages </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500.html">500 Error </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-13.svg" alt="img" />
                  </span>
                  <span> Pages </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="faq.html"> FAQ </a>
                  </li>
                  <li>
                    <a href="terms.html"> Terms </a>
                  </li>
                  <li>
                    <a href="privacy-policy.html"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="blank-page.html"> Blank Page </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-16.svg" alt="img" />
                  </span>
                  <span> Email </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="inbox.html"> Inbox </a>
                  </li>
                  <li>
                    <a href="compose.html"> Compose </a>
                  </li>
                  <li>
                    <a href="mail-view.html"> Mail View </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-14.svg" alt="img" />
                  </span>
                  <span> Blog </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="blog.html"> Blog </a>
                  </li>
                  <li>
                    <a href="blog-details.html"> Blog Details </a>
                  </li>
                  <li>
                    <a href="add-blog.html"> Add Blog </a>
                  </li>
                  <li>
                    <a href="edit-blog.html"> Edit Blog </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="assets.html">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-15.svg" alt="img" />
                  </span>
                  <span> Assests </span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-17.svg" alt="imag" />
                  </span>
                  <span> Multilevel </span>
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="#">
                      <span> Level 1 </span>
                      <span className="menu-arrow"></span>
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="#">
                          <span> Level 2 </span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="#">
                          <span> Level 2 </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="#"> Level 3 </a>
                          </li>
                          <li>
                            <a href="#"> Level 3 </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span> Level 2 </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span> Level 1 </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSidebar;
