import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
    const cart = useSelector((state) => state.cart);
    const [phone, setPhone] = useState("");
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <Container>
            <h2>Оформлення замовлення</h2>

            <Row>
                <Col md={6}>
                    <h4>📞 Контактна інформація</h4>
                    <Form>
                        <Form.Group>
                            <Form.Label>Номер телефону</Form.Label>
                            <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" className="mt-2" disabled={!phone}>
                            📩 Отримати SMS
                        </Button>
                    </Form>
                </Col>

                <Col md={6}>
                    <h4>🛒 Ваше замовлення</h4>
                    <ListGroup>
                        {cart.map((item) => (
                            <ListGroup.Item key={item.id}>{item.title} - ${item.price}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <h5 className="mt-3">Загальна сума: ${totalPrice.toFixed(2)}</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutPage;
