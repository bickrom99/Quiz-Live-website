import { useState } from "react";
import { NavLink } from "react-router-dom";



const Login = ({methode}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // const navigate = useNavigate();

    

    return (
        <>
        <div className="min-h-screen flex justify-center">
        <div className=" shadow-lg w-[35%] py-6 m-auto flex flex-col items-center mt-10v h-fit">
            <h2 className="mt-4 pb-3 font-poppins font-semibold text-xl">Login</h2>
            <form className="flex flex-col w-full p-5">
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
                <button type="submit" className="bg-[#28da57] hover:bg-[#1ba740] pt-2 pb-2 rounded">Login</button>
            </form>
            <p className="font-poppins text-md">Don’t have an account? <NavLink className="underline text-purple-500 font-semibold" to="/signup">Sign up</NavLink></p>
        </div>
        </div>
        
        </>
    );
};

export default Login;
