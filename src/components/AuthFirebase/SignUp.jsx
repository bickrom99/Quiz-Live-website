import {NavLink} from "react-router-dom"
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Sign in
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                alert("Your are success")
            }
        })
        .catch((error) => {
            alert(error)
            // ..
        });
    }

    return (
        <div className="min-h-screen flex justify-center">
        <div className="shadow-lg sm:w-[35%] py-6 m-auto flex flex-col dark:bg-[#334155] items-center mt-10v h-fit">
            <h2 className="mt-2 pb-3 font-poppins font-semibold text-xl">Sign Up</h2>
            <form onSubmit={signUp} className="flex flex-col w-full p-5">
                <input
                        className="w-full border-[1.5px] mb-3 rounded-md dark:bg-white dark:text-black pl-3 p-2"
                        type="text"
                        placeholder="Username"
                        
                    />
                <input
                    className="w-full border-[1.5px] mb-3 dark:bg-white dark:text-black rounded-md pl-3 p-2"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <input
                    className="w-full border-[1.5px] mb-3 dark:bg-white dark:text-black rounded-md pl-3 p-2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-[#28da57] hover:bg-[#1ba740] pt-2 pb-2 rounded font-semibold text-[#353535]">Submit</button>
            </form>
            <p className="font-poppins text-md sm:px-0 px-2">
                    Already have an account?{" "}
                    <NavLink className="underline text-purple-500 font-semibold" to="/login">Sign up</NavLink>
                </p>
        </div>
        </div>
    );
};

export default Signup;
