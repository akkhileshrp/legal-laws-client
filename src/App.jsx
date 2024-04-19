import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import LawsandRegulations from "./components/LawsandRegulations";
import ForgotPassword from "./components/ForgotPassword";
import { AuthContext } from "./context/AuthContext";
import RouteProtection from "./PrivateRoute/RouteProtection";
import { Route, Routes } from "react-router-dom";

export default function App() {
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("token")));
    return (
        <>
            <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
                <Routes>
                    <Route path="/" element={<RouteProtection Component={HomePage} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/contact" element={<RouteProtection Component={Contact} />} />
                    <Route path="/lawsandregulations" element={<RouteProtection Component={LawsandRegulations} />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AuthContext.Provider>
        </>
    );
};