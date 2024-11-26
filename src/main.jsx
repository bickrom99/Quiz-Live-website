import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import App from "./App";
import About from './components/AboutComponents/About';
import AdminLayout from './components/AdminPageComponents/AdminLayout';
import ProtectedRouted from "./components/AdminPageComponents/Utils/ProtectedRouted";
import Business from './components/BusinessComponents/Business';
import Contact from './components/ContactComponents/Contact';
import Course from './components/CourseComponets/Course';
import Home from "./components/HomeComponents/Home";
import School from './components/SchoolComponents/School';
import "./index.css";

// Admin Dashboard all Page Here
import AdminDashboard from './components/AdminPageComponents/DashboardAllPageComponents/AdminDashboard';
import Classes from './components/AdminPageComponents/DashboardAllPageComponents/Classes';
import Collections from './components/AdminPageComponents/DashboardAllPageComponents/Collections';
import Library from './components/AdminPageComponents/DashboardAllPageComponents/Library';
import Profile from './components/AdminPageComponents/DashboardAllPageComponents/Profile';
import Reports from './components/AdminPageComponents/DashboardAllPageComponents/Reports';
import Seting from './components/AdminPageComponents/DashboardAllPageComponents/Seting';

// quizz page component
import Quizz from './components/Quize/Quizz';
import Quzzes from './components/AdminPageComponents/DashboardAllPageComponents/Quzzes';
import Signup from './components/AuthFirebase/SignUp';
import Login from './components/AuthFirebase/Login';









const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/course",
        element: <Course/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/school",
        element: <School/>
      },
      {
        path: "/business",
        element: <Business/>
      }
    ]
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"/login",
    element: <Login/>
  },



  // -========Admin Panel======

  {
    path: "",
    element: (
      <ProtectedRouted>
        <AdminLayout />
      </ProtectedRouted>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminDashboard/>
      },
      {
        path: "/library",
        element: <Library/>
      },
      {
        path: "/QuizzAll",
        element: <Quzzes/>
      },
      {
        path: "/report",
        element: <Reports/>
      },
      {
        path: "/classes",
        element: <Classes/>
      },
      {
        path: "/collections",
        element: <Collections/>
      },
      {
        path: "/setting",
        element: <Seting/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },

      // Quizz layout page here
      {
        path: "/quizz/:data",
        element: <Quizz/>
      },
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
