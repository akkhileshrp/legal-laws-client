import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import LawsandRegulations from "./components/LawsandRegulations";
import ForgotPassword from "./components/ForgotPassword";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <HomePage />
                    </>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/lawsandregulations" element={<LawsandRegulations />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};