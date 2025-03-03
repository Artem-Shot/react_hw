import { useState, useEffect } from "react";
import {Container, Button, ListGroup, ListGroupItem} from "react-bootstrap";

const products = [
    { category: "LapTop", price: 20000 },
    { category: "Mobile", price: 15000 },
    { category: "Watches", price: 5000 },
];

const App = () => {
    const [orders, setOrders] = useState([]);
    const [showOrders, setShowOrders] = useState(false);

    useEffect(() => {
        setOrders(JSON.parse(localStorage.getItem("orders")) || []);
    }, []);

    const addOrder = (product) => {
        const newOrder = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            category: product.category,
            price: product.price,
            details: `Order Details: ${product.category}`,
        };
        const updatedOrders = [...orders, newOrder];
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    const deleteOrder = (id) => {
        const updatedOrders = orders.filter((order) => order.id !== id);
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    return (
        <Container className="mt-4">
            <div>
                <Button variant="primary" onClick={() => setShowOrders(false)}>Categories</Button>
                <Button variant="secondary" onClick={() => setShowOrders(true)} className="ms-5">My Orders</Button>
            </div>
            {showOrders ? <OrdersList orders={orders} deleteOrder={deleteOrder} /> : <CategoryList products={products} addOrder={addOrder} />}
        </Container>
    );
};



const CategoryList = ({ products, addOrder }) => (
    <ListGroup className="mt-3">
        {products.map((product, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between">
                {product.category} - {product.price} грн
                <Button variant="success" onClick={() => addOrder(product)}>
                    Order
                </Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
);

const OrdersList = ({ orders, deleteOrder }) => {


    if (orders.length === 0) {
        return <p className="mt-3">Order lists is empty</p>;
    }

    return (
        <ListGroup className="mt-3">
            {orders.map((order) => (
                <ListGroup.Item key={order.id} className="d-flex justify-content-between align-items-center">
                    <ListGroupItem>{order.date} — {order.price} грн — {order.category}</ListGroupItem>
                    <Button variant="danger" onClick={() => deleteOrder(order.id)}>
                        Delete
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};
export default App;
