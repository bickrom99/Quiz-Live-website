// App.js
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
   // Light-Dark useState
   const [darkMode, setDarkMode] = useState(false);

   // Toggle button
   const toggleDarkMode = () => {
       setDarkMode(!darkMode);
       document.body.classList.toggle("dark", !darkMode); // Toggle body class for styling
   };
  return (
    <div className={` ${darkMode? "dark": ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Outlet /> 
    </div>
  );
};

export default App;
