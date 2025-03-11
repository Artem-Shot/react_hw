import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../slices/productsApi";
import { Container, Row, Col, Button, Image, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, error, isLoading } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("about");

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка при завантаженні</p>;

    return (
        <Container>
            <Nav variant="tabs" className="mb-3">
                <Nav.Item>
                    <Nav.Link active={activeTab === "about"} onClick={() => setActiveTab("about")}>Про товар</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={activeTab === "specs"} onClick={() => setActiveTab("specs")}>Характеристики</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={activeTab === "reviews"} onClick={() => setActiveTab("reviews")}>Відгуки/Запитання</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={activeTab === "stock"} onClick={() => setActiveTab("stock")}>Наявність</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={activeTab === "service"} onClick={() => setActiveTab("service")}>Сервіс</Nav.Link>
                </Nav.Item>
            </Nav>

            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={6}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h4>${product.price}</h4>
                    <Button variant="success" onClick={() => dispatch(addToCart(product))}>
                        Додати в корзину
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductPage;
