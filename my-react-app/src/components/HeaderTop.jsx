import { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const cities = ["Kyiv", "Lviv", "Odessa", "Kharkiv", "Dnipro"];

const HeaderTop = () => {
    const [selectedCity, setSelectedCity] = useState(localStorage.getItem("city") || "Kyiv");
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "Українська");

    useEffect(() => {
        localStorage.setItem("city", selectedCity);
    }, [selectedCity]);

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    return (
        <div className="bg-light py-2">
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <Link to="/" className="fw-bold fs-4 text-dark text-decoration-none">
                            🏪 My Shop
                        </Link>
                    </Col>
                    <Col md={4} className="text-center">
                        My City:
                        <Dropdown onSelect={(e) => setSelectedCity(e)}>
                            <Dropdown.Toggle variant="secondary" size="sm" className="ms-2">
                                {selectedCity}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {cities.map((city) => (
                                    <Dropdown.Item key={city} eventKey={city}>
                                        {city}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={4} className="text-end">
                        <span className="me-3">📞 +380 (97) 953-03-96</span>
                        <Button variant="outline-dark" size="sm" onClick={() => setLanguage(language === "Українська" ? "English" : "Українська")}>
                            {language}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderTop;
