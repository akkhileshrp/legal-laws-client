import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RouteProtection(props) {
    const loggedUserData = useContext(AuthContext);
    return loggedUserData.loggedUser ? <props.Component /> : <Navigate to="/login" />
};