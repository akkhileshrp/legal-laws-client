import React from "react";
import notfound from "../assets/notfoundpage.gif";
import Navbar from "./Navbar";
import "../styles/NotFoundPage.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <Navbar />
            <div className="notfoundpage">
                <img src={notfound} alt="notfound" />
            </div>
            <button className="redirect"><Link style={{ textDecoration: "none", color: "white" }} to="/login">Return To Login</Link></button>
        </>
    );
};