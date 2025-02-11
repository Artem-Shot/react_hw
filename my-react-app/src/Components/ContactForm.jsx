import { Form } from "react-bootstrap";

const ContactForm = ({newContact, setNewContact }) => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                    type="text"
                    value={newContact.username}
                    onChange={(e) => setNewContact({ ...newContact, username: e.target.value })}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    value={newContact.phone}
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                />
            </Form.Group>
        </Form>
    );
};

export default ContactForm;