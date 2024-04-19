import React from "react";
import "../styles/Login.css";
import logo from "../assets/homeimg.png";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <h1 className="main-title">Village Legal Hub</h1>
            <div className="login-container">
                <div className="login-sub-container">
                    <div className="login-left-img">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="login-right-container">
                        <form>
                            <h1 className="login-title">Login</h1>
                            <p className="login-desc">Login to know about laws</p>
                            <input className="login-inp" type="email" placeholder="abc@gmail.com" />
                            <input className="login-inp" type="password" placeholder="********" />
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
            </div>
        </>
    );
};