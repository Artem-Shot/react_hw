import React from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

const CartModal = ({ show, handleClose }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const insurancePrice = totalPrice * 0.05; // 5% на страхування

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>🛒 Корзина</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {cart.map((item) => (
                        <ListGroup.Item key={item.id} className="d-flex align-items-center">
                            <Image src={item.image} alt={item.title} width="50" height="50" className="me-3" />
                            <div className="flex-grow-1">
                                <p className="mb-1">{item.title}</p>
                                <strong>${item.price}</strong>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => dispatch(removeFromCart(item.id))}>
                                ❌
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <hr />

                <p>Додатковий сервіс: Страхування - <strong>${insurancePrice.toFixed(2)}</strong></p>

                <div className="d-flex justify-content-between mt-3">
                    <Button variant="secondary" onClick={handleClose}>🔙 Продовжити покупки</Button>
                    <Link to="/checkout">
                        <Button variant="success">✅ Оформити замовлення</Button>
                    </Link>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CartModal;
