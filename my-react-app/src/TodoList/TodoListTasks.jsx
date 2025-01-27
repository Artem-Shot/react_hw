import {ListGroup} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
const TodoListTasks = ({data}) => {
    return (
        <ListGroup className="mt-4">
            {/* eslint-disable-next-line react/prop-types */}
            {data && data.map(({title, description}) => {
                return <ListGroup.Item key={uuidv4()} className='mb-3'>
                    <div className='text-bg-warning'><b>TITLE: {title}</b></div>
                    <hr/>
                    <div className='text-bg-danger'><b>Description: {description}</b></div>
                </ListGroup.Item>

            }) }
        </ListGroup>
    );
};

export default TodoListTasks;