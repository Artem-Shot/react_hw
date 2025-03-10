import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-light py-3 mt-5 border-top">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <p className="mb-0">© Всі права захищені ТОВ «КОМФІ ТРЕЙД», 2010–2025</p>
                    </Col>
                    <Col md={3} className="text-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" width="50" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width="50" className="ms-3" />
                    </Col>
                    <Col md={3} className="text-end">
                        <a href="https://facebook.com" className="me-3">📘</a>
                        <a href="https://youtube.com" className="me-3">▶️</a>
                        <a href="https://instagram.com" className="me-3">📸</a>
                        <a href="https://twitter.com">🐦</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
