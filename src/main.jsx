import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import App from "./App";
import About from './components/AboutComponents/About';
import AdminLayout from './components/AdminPageComponents/AdminLayout';
import Login from './components/AdminPageComponents/EntryComponent/Login';
import Signup from './components/AdminPageComponents/EntryComponent/SignUp';
import ProtectedRouted from "./components/AdminPageComponents/Utils/ProtectedRouted";
import Business from './components/BusinessComponents/Business';
import Contact from './components/ContactComponents/Contact';
import Course from './components/CourseComponets/Course';
import Home from "./components/HomeComponents/Home";
import School from './components/SchoolComponents/School';
import "./index.css";

// Admin Dashboard all Page Here
import AdminDashboard from './components/AdminPageComponents/AdminDashboard';
import Quizzes from './components/AdminPageComponents/DashboardAllPageComponents/Quizzes';
import Reports from './components/AdminPageComponents/DashboardAllPageComponents/Reports';
import Classes from './components/AdminPageComponents/DashboardAllPageComponents/Classes';
import Collections from './components/AdminPageComponents/DashboardAllPageComponents/Collections';
import Seting from './components/AdminPageComponents/DashboardAllPageComponents/Seting';
import Profile from './components/AdminPageComponents/DashboardAllPageComponents/Profile';
import Library from './components/AdminPageComponents/DashboardAllPageComponents/Library';





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
        path: "/quizz",
        element: <Quizzes/>
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
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
