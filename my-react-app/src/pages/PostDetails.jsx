import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Container, Card } from 'react-bootstrap';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => {
                return res.json();
            })
            .then(data => setPost(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [postId]);

    if (loading) return <Spinner animation="border"/>;


    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PostDetail;
