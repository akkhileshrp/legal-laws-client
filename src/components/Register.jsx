import React from "react";
import "../styles/Register.css";
import logo from "../assets/homeimg.png";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <h1 className="main-title register-main">Village Legal Hub</h1>
            <div className="login-container">
                <div className="login-sub-container">
                    <div className="login-left-img">
                        <img className="logo register-img" src={logo} alt="logo" />
                    </div>
                    <div className="login-right-container">
                        <form>
                            <h1 className="login-title register-title">Register</h1>
                            <p className="login-desc register-desc">Let's get you all st up so you can access your personal account.</p>
                            <div className="inline-inp">
                                <input type="text" className="login-inp input" placeholder="First Name" />
                                <input type="text" className="login-inp input" placeholder="Last Name" />
                            </div>
                            <div className="inline-inp">
                                <input className="login-inp" type="email input" placeholder="abc@gmail.com" />
                                <input type="tel" className="login-inp input" placeholder="Phone Number" />
                            </div>
                            <input className="login-inp reg" type="password" placeholder="********" />
                            <input type="password" className="login-inp reg" placeholder="********" />
                            <input type="number" className="login-inp-otp reg" placeholder="One Time Password" /><br />
                            <input type="button" className="otp-btn" value="Send OTP" />
                            <input type="button" className="reg-btn" value="Create Account" />
                            <div className="login-account register-account">
                                <p>Already a user? <Link to="/login" className="signup">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};