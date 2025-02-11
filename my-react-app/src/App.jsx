import  { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from "react-bootstrap";
import ContactTable from "./components/ContactTable";
import ContactModal from "./components/ContactModal";


const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState({ name: "", username: "", phone: "" });

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setContacts(data))
    }, []);

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const addContact = () => {
        setContacts([...contacts, { ...newContact, id: Date.now() }]);
        setShowForm(false);
        setNewContact({ name: "", username: "", phone: "" });
    };

    return (
        <Container className="mt-4">
            <h2>Contact List</h2>
            <ContactTable contacts={contacts} deleteContact={deleteContact} />

            <Button variant="primary" onClick={() => setShowForm(true)}>
                Add New Contact
            </Button>

            <ContactModal
                show={showForm}
                handleClose={() => setShowForm(false)}
                newContact={newContact}
                setNewContact={setNewContact}
                addContact={addContact}
            />
        </Container>
    );
}

export default App;