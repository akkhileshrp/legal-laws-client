import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

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
                    <li>Logout</li>
                </ul>
            </nav>
        </>
    );
};