import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import AdminFooter from "./AdminFooter";


const AdminLayout = () => {
    // Light-Dark useState
    const [darkMode, setDarkMode] = useState(false);

    // Toggle button
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark", !darkMode); // Toggle body class for styling
    };

    return (
        <div 
            className={`${darkMode ? "dark" : ""} max-w-[68rem] ml-auto pt-16`} 
            style={{ backgroundColor: darkMode ? "#333" : "#f4f4f4", minHeight: "100vh" }}>
            <AdminNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet/>
            <AdminFooter/>         
        </div>
    );
};

export default AdminLayout;
