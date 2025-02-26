import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Додано імпорт

const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Spinner animation="border" />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};


ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;