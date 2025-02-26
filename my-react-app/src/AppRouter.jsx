import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Blog from './pages/Blog.jsx';
import PostDetails from './pages/PostDetails.jsx';
import Profile from './pages/Profile.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import NavigationBar from "./Components/NavigationBar.jsx";
import {Container} from "react-bootstrap";



const AppRouter = () => {
    return (
        <Router>
            <NavigationBar />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:postId" element={<PostDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Container>
        </Router>
    );
};


export default AppRouter;
