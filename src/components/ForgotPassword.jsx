import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../styles/ForgotPassword.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const [forgotpassword, setForgotPassword] = useState({
        email: "",
        password: "",
        confirmpassword: "",
    });
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [sendingOtp, setSendingOtp] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForgotPassword((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    };
    const otpGenerate = () => {
        setSendingOtp(true);
        fetch("http://localhost:8000/auth/send-otp", {
            method: "POST",
            body: JSON.stringify({ email: forgotpassword.email }),
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
        setChangePassword(true);
        e.preventDefault();
        if
            (
            forgotpassword.email === "" ||
            forgotpassword.password === "" ||
            forgotpassword.confirmpassword === "" ||
            otp === ""
        )
            return toast.error("Fill all the required fields");
        if (forgotpassword.password !== forgotpassword.confirmpassword)
            return toast.error("Password does not match");
        if (forgotpassword.password.length < 8)
            return toast.error("Password must be at least 8 characters");
        fetch("http://localhost:8000/auth/reset-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: forgotpassword.email,
                password: forgotpassword.password,
                otp: otp,
            })
        })
            .then((data) => {
                setChangePassword(false);
                if (data.ok) {
                    toast.success("Password reset successfully. Return to login.");
                    navigate("/login");
                    setOtp("");
                    setForgotPassword({
                        email: "",
                        password: "",
                        confirmpassword: "",
                    });
                    return data.json();
                } else {
                    return toast.error("Password reset failed");
                }
            })
            .catch((err) => console.error(err));
    };
    return (
        <>
            <h1 className="forgot-title">Village Legal Hub</h1>
            <div className="forgot-password">
                <div className="forgot-sub-container">
                    <h1>Forgot Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="inline-inp">
                            <input
                                className="login-inp"
                                type="email"
                                placeholder="abc@gmail.com"
                                name="email"
                                value={forgotpassword.email}
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
                        <input
                            className="login-inp reg"
                            type="password"
                            placeholder="********"
                            name="password"
                            value={forgotpassword.password}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="login-inp reg"
                            placeholder="********"
                            name="confirmpassword"
                            value={forgotpassword.confirmpassword}
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
                        {changePassword ?
                            <input
                                type="submit"
                                className="reg-btn"
                                value="Changing Password"
                                style={{ cursor: "not-allowed", opacity: "0.5" }}
                            />
                            :
                            <input
                                type="submit"
                                className="reg-btn"
                                value="Change Password"
                            />
                        }
                    </form>
                </div>
                <Toaster />
            </div>
        </>
    );
};