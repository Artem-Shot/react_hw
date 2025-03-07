import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
    return (
        <Router>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/task/:id?" element={<TaskForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
