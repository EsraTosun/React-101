import React from "react";
import { Route, Navigate } from "react-router-dom"; // Değişiklik
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ element: Element, admin, ...rest }) { // Değişiklik
    const { loggedIn, user } = useAuth();

    return (
        <Route
            {...rest}
            element={loggedIn ? (
                admin && user.role !== "admin" ? (
                    <Navigate to="/" replace />
                ) : (
                    <Element />
                )
            ) : (
                <Navigate to="/" replace />
            )}
        />
    );
}

export default ProtectedRoute;
