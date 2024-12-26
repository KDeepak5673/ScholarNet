import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeacherLogin.css';
import newRequest from '../../utils/newRequest';

const TeacherLogin = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState(""); 

  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.msg || "login Failed.");
    }

  };

  return (
    <div className="teacher-login-container">
      <div className="teacher-login">
        <h2>Teacher Login</h2>
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
          {error && <p style={{ color: "red" , marginLeft: "12px" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
