// StudentLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './StudentLogin.css';
import newRequest from '../../utils/newRequest';

const StudentLogin = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook to get access to the navigation function

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }

  };

  return (
    <div className="student-login-container">
      <div className="student-login">
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
