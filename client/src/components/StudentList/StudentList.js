// StudentList.js
import React from 'react';
import './StudentList.css';
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const StudentList = () => {
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["student-list"],
    queryFn: () =>
      newRequest.get(`/students`).then((res) => {
        return res.data;
      }),
  });



  return (
    <div className='student-list-container'>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "error"
      ) : (
        <div className="student-list">
          <h2>Student List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.map(student => (
                <tr className="line" key={student.id}>
                  <td className="student-name">{student.name}</td>
                  <td className="student-grade">{student.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}
    </div>
  );
};

export default StudentList;
