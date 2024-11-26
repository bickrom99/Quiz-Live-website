import AdminLayout from '../AdminLayout';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Login from '../../AuthFirebase/Login';
import {auth} from '../../AuthFirebase/firebase'


const ProtectedRouted = () => {
    const [authUser, setAuthUser] = useState (null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
          });
          return () => {
            listen();
          }
        }, []);

        console.log(authUser);

    
    return (
        <div>
            {authUser?<AdminLayout/>: <Login authUser={authUser}/>}
        </div>
    );
};

export default ProtectedRouted;