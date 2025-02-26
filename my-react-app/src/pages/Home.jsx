
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <h2>Головна сторінка</h2>
            <Button onClick={() => navigate('/blog')}>Перейти до блогу</Button>
        </Container>
    );
};

export default Home;
