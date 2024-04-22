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
import PropertyLaw from "./pages/PropertyLaw";
import EducationalLaw from "./pages/EducationLaw";
import HealthLaw from "./pages/HealthLaw";
import CriminalLaw from "./pages/CriminalLaw";
import CyberLaw from "./pages/CyberLaw";
import LabourLaw from "./pages/LabourLaw";
import LawDescriptionPage from "./pages/LawDescriptionPage";

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
                    <Route path="/lawsandregulations/propertylaw" element={<RouteProtection Component={PropertyLaw} />} />
                    <Route path="/lawsandregulations/educationlaw" element={<RouteProtection Component={EducationalLaw} />} />
                    <Route path="/lawsandregulations/healthlaw" element={<RouteProtection Component={HealthLaw} />} />
                    <Route path="/lawsandregulations/criminallaw" element={<RouteProtection Component={CriminalLaw} />} />
                    <Route path="/lawsandregulations/cyberlaw" element={<RouteProtection Component={CyberLaw} />} />
                    <Route path="/lawsandregulations/labourlaw" element={<RouteProtection Component={LabourLaw} />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AuthContext.Provider>
        </>
    );
};