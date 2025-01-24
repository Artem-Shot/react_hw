import {Form, Button} from "react-bootstrap";
import {useState} from "react";


const initialState = {
    title: '',
    description: '',
}
// eslint-disable-next-line react/prop-types
const TodoListForm = ({onSubmit}) => {
    const [fields, setFields] = useState({...initialState})


    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(fields);
        setFields({...initialState})

        }
    const handleChange = ({target: {name, value}}) => {
        setFields({
            ...fields,
            [name]: value});



    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Title</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    name="title"
                    placeholder="Task Title"
                    value={fields.title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="DescriptionId">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    name="description"
                    as="textarea"
                    rows={4}
                    placeholder="Task Description"
                    value={fields.description} />
            </Form.Group>
            <hr/>
            <hr/>
            <Button variant="outline-success" type={"submit"}>New Task</Button>
        </Form>
    );
};

export default TodoListForm;