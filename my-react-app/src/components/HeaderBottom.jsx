import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderBottom = ({ onCartClick }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">📦 Каталог</Nav.Link>
                        <Nav.Link as={Link} to="/favorite">❤️ Улюблене</Nav.Link>
                        <Nav.Link as={Link} to="/login">🔐 Логін</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Пошук товарів..." className="me-2" />
                        <Button variant="outline-light">🔍</Button>
                    </Form>
                    <Button variant="outline-warning" className="ms-3" onClick={onCartClick}>
                        🛒 Кошик
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderBottom;
