// App.js
import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './components/home/Homepage';
import TeacherLogin from './components/TeacherLogin/TeacherLogin';
import StudentLogin from './components/StudentLogin/StudentLogin';
import StudentList from './components/StudentList/StudentList';
import AddStudent from './components/AddStudent/AddStudent';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/" ,
          element: <Homepage />,
        
        },
        {
          path: "/teacher-login", 
          element: <TeacherLogin />,
        },
        {
          path: "/student-login" ,
          element: <StudentLogin />,
        },
        {
          path: "/student-list" ,
          element: <StudentList />,
        },
        {
          path: "/add-student" ,
          element: <AddStudent />,
        },
      ],
    },
  ]);        
  
  return <RouterProvider router={router} />;

};

export default App;
