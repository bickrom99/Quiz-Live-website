import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Create user object
        const userData = { name, email, username, password };

        // Save user data in localStorage (mock database)
        localStorage.setItem("user", JSON.stringify(userData));

        // Navigate to the login page after successful sign-up
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex justify-center">
        <div className="shadow-lg w-[35%] py-6 m-auto flex flex-col items-center mt-10v h-fit">
            <h2 className="mt-2 pb-3 font-poppins font-semibold text-xl">Sign Up</h2>
            <form onSubmit={handleSignup} className="flex flex-col w-full p-5">
                <input
                    className="w-full border-[1.5px] mb-3 rounded-md pl-3 p-2"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="w-full border-[1.5px] mb-3 rounded-md pl-3 p-2"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-full border-[1.5px] mb-3 rounded-md pl-3 p-2"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="w-full border-[1.5px] mb-3 rounded-md pl-3 p-2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-[#28da57] hover:bg-[#1ba740] pt-2 pb-2 rounded font-semibold text-[#353535]">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Signup;
