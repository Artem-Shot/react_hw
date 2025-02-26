import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token', 'test-token');
        navigate('/profile');
    };

    return (
        <Container>
            <h2>Логін</h2>
            <Button onClick={handleLogin}>Увійти</Button>
        </Container>
    );
};

export default Login;
