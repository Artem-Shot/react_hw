import {Col, Container, Row} from "react-bootstrap";
import TodoListForm from "./TodoListForm.jsx";
import TodoListTasks from "./TodoListTasks.jsx";
import {useState} from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const onSubmitHandler = (fields) => {
        setTasks([
            ...tasks,
            {...fields}
        ])
    }


    return (
        <Container className='mt-4'>
            <h1 className='text-center my-5'> TODO LIST</h1>
            <Row>
            <Col xs={6}>
                <TodoListForm onSubmit={onSubmitHandler} />
            </Col>
            <Col xs={6}>
                <TodoListTasks data={tasks} />
            </Col>
            </Row>
        </Container>
    );
};

export default TodoList;