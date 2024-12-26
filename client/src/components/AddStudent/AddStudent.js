// AddStudent.js
import React, { useState } from 'react';
import newRequest from "../../utils/newRequest";
import "./AddStudent.css";
// import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [regNo, setregNo] = useState('');


  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/students", { name, grade , regNo });
      // navigate("/student-list");
      alert('Student added successfully');
      // You can also redirect to the student list page after adding the student
    } catch (error) {
      console.error('Error adding student:', error);
    //   alert('Failed to add student. Please try again later.');
    }
  };

  return (
    <div className="add-student-container">
      <div className="add-student">
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Register Number :</label>
            <input
              type="number"
              value={regNo}
              onChange={(e) => setregNo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Percentage :</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
