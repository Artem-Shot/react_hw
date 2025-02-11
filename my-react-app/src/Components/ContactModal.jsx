import { Modal, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";

const ContactModal = ({ show, handleClose, newContact, setNewContact, addContact }) => {
    return (
        <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Add New Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm newContact={newContact} setNewContact={setNewContact} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success" onClick={addContact}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ContactModal;