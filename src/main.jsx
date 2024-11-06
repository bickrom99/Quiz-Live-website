import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/HomeComponents/Home"
import About from './components/AboutComponents/About';
import Course from './components/CourseComponets/Course';
import Contact from './components/ContactComponents/Contact';
import School from './components/SchoolComponents/School';
import Business from './components/BusinessComponents/Business';

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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
