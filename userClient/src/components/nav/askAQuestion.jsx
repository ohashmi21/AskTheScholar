import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { newquestionmodel } from '../../models/newquestionmodel';

const AskAQuestion = ({ show, onHide }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handlesendquestion = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Hide the modal
    setShowModal(false);
  
    // Create a new question object and log it
    const question2 = new newquestionmodel(fname, lname, email, question);
    console.log(question2);
  
    // Reset the state variables
    setFname("");
    setLname("");
    setQuestion("");
    setEmail("");
    alert("Question has been sent!")
  };
  
  return (
    <>
      <Button onClick={handleShow}>Ask A question</Button>
      <Modal show={showModal} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Ask A Question</Modal.Title>
          <Button onClick={handleClose} variant="secondary">Close</Button>
        </Modal.Header>
        <Modal.Body>
          {/* Form fields for adding project */}
          <Form className='form' onSubmit={handlesendquestion}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" value={fname} onChange={(e) => setFname(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" value={lname} onChange={(e) => setLname(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="question">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" placeholder="Enter your question" value={question} onChange={(e) => setQuestion(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handlesendquestion}>Send Question</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AskAQuestion;
