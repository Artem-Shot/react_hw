import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {Container, Form, Button, ListGroup, Spinner} from 'react-bootstrap';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const limit = searchParams.get('_limit') || 15;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));

    }, [limit]);

    const handleLimitChange = (e) => {
        e.preventDefault();
        const newLimit = e.target.elements.limit.value;
        setSearchParams({ _limit: newLimit });
    };
    if (loading) return <Spinner animation="border"/>;
    return (
        <Container>
            <h2>Список постів</h2>
            <Form onSubmit={handleLimitChange} className="mb-3">
                <Form.Control type="number" name="limit" min="1" placeholder="Кількість постів" />
                <Button type="submit" className="mt-2">Оновити</Button>
            </Form>
            <ListGroup>
                {posts.map(post => (
                    <ListGroup.Item key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default Blog;
