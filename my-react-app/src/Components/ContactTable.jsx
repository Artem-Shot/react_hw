
import { Table, Button } from "react-bootstrap";

const ContactTable = ({contacts, deleteContact }) => {
    return (
        <Table bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.username}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <Button variant="danger" onClick={() => deleteContact(contact.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default ContactTable;