import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../slices/productsApi";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, error, isLoading } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка при завантаженні</p>;

    return (
        <Container>
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
