import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const HomePage = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const dispatch = useDispatch();

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка при завантаженні</p>;

    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={3} className="mb-4 d-flex">
                        <Card className="flex-fill d-flex flex-column text-center" style={{ minHeight: "420px" }}>
                            <Link to={`/product/${product.id}`}>
                                <Card.Img variant="top" src={product.image} style={{ height: "200px", objectFit: "contain" }} />
                            </Link>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="fs-6">{product.title}</Card.Title>
                                <Card.Text className="fw-bold">${product.price}</Card.Text>
                                <Button variant="success" onClick={() => dispatch(addToCart(product))}>
                                    🛒 Додати в корзину
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomePage;
