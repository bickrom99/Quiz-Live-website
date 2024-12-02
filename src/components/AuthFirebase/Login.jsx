/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Import useNavigate
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    // Sign in
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    navigate('/admin'); // Navigate to the admin page
                }
                console.log(user);
            })
            .catch((error) => {
                console.error("Error signing in:", error.message);
                alert("Failed to sign in. Please check your credentials.");
            });
    };

    return (
        <div className="min-h-screen flex justify-center">
            <div className="shadow-lg sm:w-[35%] py-6 m-auto dark:bg-[#334155] flex flex-col items-center mt-10v h-fit">
                <h2 className="mt-4 pb-3 font-poppins font-semibold text-xl">Sign In</h2>
                <form className="flex flex-col w-full p-5" onSubmit={signIn}>
                    <input
                        className="w-full border-[1.5px] mb-3 rounded-md dark:bg-white dark:text-black
                         pl-3 p-2"
                        type="email"
                        placeholder="User@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="w-full border-[1.5px] mb-3 rounded-md pl-3 dark:bg-white dark:text-black p-2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-[#28da57] hover:bg-[#1ba740] pt-2 pb-2 rounded">Sign In</button>
                </form>
                <p className="font-poppins sm:text-md text:text-sm sm:p-0 px-2">
                    Don’t have an account?{" "}
                    <NavLink className="underline text-purple-500 font-semibold" to="/signup">Sign up</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
