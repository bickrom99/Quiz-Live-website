import { useState } from 'react';
import AdminLayout from '../AdminLayout';
import Login from '../EntryComponent/Login';

const ProtectedRouted = () => {
    const [usr, setUser]= useState(true)
    return (
        <div>
            {usr?<AdminLayout/>:<Login/>}
        </div>
    );
};

export default ProtectedRouted;