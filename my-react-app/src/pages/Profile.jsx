import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Container>
            <h2>Ласкаво просимо до профілю!</h2>
            <Button onClick={handleLogout}>Вийти</Button>
        </Container>
    );
};

export default Profile;