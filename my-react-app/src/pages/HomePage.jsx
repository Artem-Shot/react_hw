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
                    <Col key={product.id} md={4} lg={3}>
                        <Card className="mb-4">
                            <Link to={`/product/${product.id}`}>
                                <Card.Img variant="top" src={product.image} height="200px" />
                            </Link>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
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
