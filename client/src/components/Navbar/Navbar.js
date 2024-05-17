// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import newRequest from "../../utils/newRequest";
import "./Navbar.css"

function Navbar() {
  const [open, setOpen] = useState();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="logo" to="/">
            <span className="text">ScholarNet</span>
          </Link>
        </div>
        <div className="navbar-nav">
          {currentUser ? (
            <div className="nav-link" onClick={() => setOpen(!open)}>
              <Link className="nav-link">{currentUser?.username}</Link>
              {open && (
                
                  <div className="options">
                    <Link className="link" to="/add-student">
                      Add Student
                    </Link>
                    <Link className="link" to="/student-list">
                      Student List
                    </Link>
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                
              )}
            </div>
          ) : (
            <>
              <Link to="/teacher-login" className="nav-link">Teacher Login</Link>
              <Link to="/student-login" className="nav-link">Student Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
