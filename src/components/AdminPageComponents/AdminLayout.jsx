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
        <div className="w-full flex justify-center items-center flex-col"
        style={{ backgroundColor: darkMode ? "#333" : "#f4f4f4", minHeight: "100vh" }}>
        
            <div 
            className={`${darkMode ? "dark" : ""} w-[90%] m-auto pt-16 overflow-hidden`} 
            >
            <AdminNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet/>
                   
        </div>
        <AdminFooter/>  
        </div>
    );
};

export default AdminLayout;
