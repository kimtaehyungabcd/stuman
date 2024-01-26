import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import rocket from '../img/rocket.png';
function Input_form() {
    const [pic, setPic] = useState(null);
  const [picPreview, setPicPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setPic(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPicPreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };
  return (
   <>
     <img className='rocket' src={rocket} style={{ width: '200px' }} />

          <div
      className="modal"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form>
      <Row className="mb-3">
        
             
        
     
      {picPreview ? (
         <Form.Group as={Col} controlId="formGridEmail">
        <img src={picPreview} alt="Selected Preview" style={{ maxWidth: '100%', maxHeight: '200px',border:'bold'  }} />
        </Form.Group>
      ):(
        <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label>Photo</Form.Label>
             <Form.Control type="file" onChange={handleFileChange} />
             </Form.Group>

      )}
   
    

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Enrollment no:</Form.Label>
          <Form.Control type="enroll" placeholder="Enter your Enrollment No" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  )
}

export default Input_form
