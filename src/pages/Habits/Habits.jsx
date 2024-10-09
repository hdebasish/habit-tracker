// Import necessary components and hooks from React and libraries
import HabitsList from "../../components/HabitsList/HabitsList";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { habitActions } from "../../redux/reducers/habitReducer";

// Define and export the Habits component
export default function Habits() {

    // State hooks for managing modal visibility and form inputs
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();  // Hook to dispatch actions to the Redux store

    // Function to handle closing the modal and resetting form inputs
    const handleClose = () => {
        setShow(false);  // Hide modal
        setError(null);  // Clear any errors
        setName("");     // Reset name input
        setDescription("");  // Reset description input
    };

    // Function to show the modal and clear previous inputs
    const handleShow = () => {
        setShow(true);  // Show modal
        setName("");    // Clear name input
        setDescription("");  // Clear description input
    };

    // Function to handle form submission
    const handleFormSubmit = () => {
        // Validate name input
        if (name.trim() === "") {
            setError({ name: "Name is required" });
            return;  // Exit function if validation fails
        }
        // Validate description input
        if (description.trim() === "") {
            setError({ description: "Description is required" });
            return;  // Exit function if validation fails
        }

        // Create a new habit object
        const habit = {
            id: getId(),  // Generate a unique ID
            name: name,   // Use the name from the input
            description: description,  // Use the description from the input
            weekly: []    // Initialize weekly status as empty
        };

        // Dispatch the action to add the new habit to the Redux store
        dispatch(habitActions.addHabit(habit));
        handleClose();  // Close the modal after submission
    };

    // Function to generate a unique ID for the new habit
    const getId = () => {
        // Check for the randomUUID method in crypto for generating a unique ID
        if ("randomUUID" in crypto) {
            return crypto.randomUUID();
        }
        // Fallback to generating a random 32-bit integer ID
        const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
        return uint32.toString(16);  // Return as a hexadecimal string
    };

    return (
        <div>
            {/* Header section with title and button to add a new habit */}
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="display-6 fw-bold" style={{ color: "#003434" }}>My Habits</h1>
                <button type="button" className="btn btn-dark btn-lg" onClick={handleShow}>
                    {/* Button icon for adding a new habit */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-plus-fill" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0" />
                    </svg>&nbsp;&nbsp;Add New Habit
                </button>
            </div>
            {/* Inspirational quote */}
            <figure>
                <blockquote className="blockquote">
                    <p>Habits are the compound interest of self-improvement</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    James Clear <cite title="Source Title">Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones</cite>
                </figcaption>
            </figure>
            {/* Render the list of habits */}
            <HabitsList />
            {/* Modal for adding a new habit */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Habit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Input field for habit name */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name of your habit</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="go to gym"
                                autoFocus
                                value={name}
                                onChange={(e) => setName(e.target.value)}  // Update name state on change
                            />
                            {error && error.name && <p className="text-danger">{error.name}</p>}  {/* Display name error */}
                        </Form.Group>
                        {/* Textarea for habit description */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Describe your habit</Form.Label>
                            <Form.Control as="textarea" rows={1}
                                placeholder="I will go to gym 3 times a week"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}  // Update description state on change
                            />
                            {error && error.description && <p className="text-danger">{error.description}</p>}  {/* Display description error */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleFormSubmit}>
                        Add Habit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
