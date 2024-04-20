import React, { useState, useContext } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const navigate = useNavigate();
    const loggedUserData = useContext(AuthContext);
    const logout = () => {
        localStorage.removeItem("token");
        loggedUserData.setLoggedUser(null);
        navigate("/login");
    };
    return (
        <>
            <nav className="navbar">
                <div onClick={toggleMenu} className="menu-icon">
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
                <div className="navbar-title">
                    <h1><Link to="/">Village Legal Hub</Link></h1>
                    <p>Legal Services</p>
                </div>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/lawsandregulations">Laws&Regulations</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li style={{ cursor: "pointer" }} onClick={logout}>Logout</li>
                </ul>
            </nav>
        </>
    );
};