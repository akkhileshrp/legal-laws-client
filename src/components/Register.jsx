import React, { useState } from "react";
import "../styles/Register.css";
import logo from "../assets/homeimg.png";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register() {
    const [register, setRegister] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
    });
    const [otp, setOtp] = useState("");
    const [sendingOtp, setSendingOtp] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    };
    const otpGenerate = () => {
        setSendingOtp(true);
        fetch("http://localhost:8000/auth/send-otp", {
            method: "POST",
            body: JSON.stringify({ email: register.email }),
            headers: { "Content-Type": "application/json" },
        })
            .then((data) => {
                setSendingOtp(false);
                if (data.ok) {
                    toast.success("OTP sent successfully. Check your inbox or spam folder.");
                    return data.json();
                } else {
                    return toast.error("Error while sending OTP");
                }
            })
            .catch((err) => console.error(err.stack));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if
            (
            register.firstname === "" ||
            register.lastname === "" ||
            register.email === "" ||
            register.phonenumber === "" ||
            register.password === "" ||
            register.confirmpassword === "" ||
            otp === ""
        )
            return toast.error("Please fill all the required fields");
        if (register.password !== register.confirmpassword)
            return toast.error("Password does not match");
        if (register.password.length < 8)
            return toast.error("Password must be at least 8 characters");
        fetch("http://localhost:8000/auth/register", {
            method: "POST",
            body: JSON.stringify({
                firstName: register.firstname,
                lastName: register.lastname,
                email: register.email,
                phoneNumber: register.phonenumber,
                password: register.password,
                confirmPassword: register.confirmpassword,
                otp: otp,
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then((data) => {
                if (data.status === 201) {
                    toast.success("User registered successfully. Login to continue...");
                    setRegister({
                        firstname: "",
                        lastname: "",
                        email: "",
                        phonenumber: "",
                        password: "",
                        confirmpassword: "",
                    })
                    setOtp("");
                    return data.json();
                } else {
                    return toast.error("Error registering user");
                }
            })
            .catch((err) => console.error(err));
    };
    return (
        <>
            <h1 className="main-title register-main">Village Legal Hub</h1>
            <div className="login-container">
                <div className="login-sub-container">
                    <div className="login-left-img">
                        <img className="logo register-img" src={logo} alt="logo" />
                    </div>
                    <div className="login-right-container">
                        <form onSubmit={handleSubmit}>
                            <h1 className="login-title register-title">Register</h1>
                            <p className="login-desc register-desc">Let's get you all set up so you can access your personal account.</p>
                            <div className="inline-inp">
                                <input
                                    type="text"
                                    className="login-inp input"
                                    placeholder="First Name"
                                    name="firstname"
                                    value={register.firstname}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    className="login-inp input"
                                    placeholder="Last Name"
                                    name="lastname"
                                    value={register.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="inline-inp">
                                <input
                                    className="login-inp"
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    name="email"
                                    value={register.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="inline-inp">
                                {sendingOtp ?
                                    <input
                                        type="button"
                                        className="otp-btn"
                                        value="Sending OTP..."
                                        style={{ cursor: "not-allowed", opacity: "0.5" }}
                                    /> :
                                    <input
                                        type="button"
                                        className="otp-btn"
                                        value="Send OTP"
                                        onClick={otpGenerate}
                                    />
                                }
                            </div>
                            <div className="inline-inp">
                                <input
                                    type="tel"
                                    className="login-inp input"
                                    placeholder="Phone Number"
                                    name="phonenumber"
                                    value={register.phonenumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                className="login-inp reg"
                                type="password"
                                placeholder="********"
                                name="password"
                                value={register.password}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                className="login-inp reg"
                                placeholder="********"
                                name="confirmpassword"
                                value={register.confirmpassword}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="login-inp-otp reg"
                                placeholder="One Time Password"
                                name="otp" 
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <br />
                            <input
                                type="submit"
                                className="reg-btn"
                                value="Create Account"
                            />
                            <div className="login-account register-account">
                                <p>Already a user? <Link to="/login" className="signup">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
};