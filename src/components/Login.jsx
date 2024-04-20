import React, { useContext, useState } from "react";
import "../styles/Login.css";
import logo from "../assets/homeimg.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const loggedUserData = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://legal-laws-server.onrender.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
        })
            .then((data) => {
                if (data.ok) {
                    toast.success("Login successful");
                    return data.json();
                } else {
                    return toast.error("Incorrect username or password");
                }
            })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("token", JSON.stringify(data.token));
                    navigate("/");
                    loggedUserData.setLoggedUser(data.token);
                }
            })
            .catch((err) => console.error(err.stack));
    };
    return (
        <>
            <h1 className="main-title">Village Legal Hub</h1>
            <div className="login-container">
                <div className="login-sub-container">
                    <div className="login-left-img">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="login-right-container">
                        <form onSubmit={handleSubmit}>
                            <h1 className="login-title">Login</h1>
                            <p className="login-desc">Login to know about laws</p>
                            <input
                                className="login-inp"
                                type="email"
                                placeholder="abc@gmail.com"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                            />
                            <input
                                className="login-inp"
                                type="password"
                                placeholder="********"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                            />
                            <div className="forgot-pass">
                                <Link to="/forgot-password">Forgot Password</Link>
                            </div>
                            <button>Login</button>
                            <div className="login-account">
                                <p>Don't have an account? <Link to="/register" className="signup">Signup</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
};