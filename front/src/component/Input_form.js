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
      <Form action="http://localhost/stuman/back/stu_details.php" method="post" >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        
      <Row className="mb-3">
        
             
        
     
      {picPreview ? (
         <Form.Group as={Col} controlId="formGridEmail">
        <img src={picPreview} alt="Selected Preview" style={{ maxWidth: '100%', maxHeight: '200px',border:'bold'  }} />
        </Form.Group>
      ):(
        <Form.Group as={Col} controlId="formGridEmail">
             
             <Form.Control type="file" onChange={handleFileChange} />
             </Form.Group>

      )}
   
    

        <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     
          <Form.Control type="name" name='name' placeholder="name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        
          <Form.Control type="enroll" name='enroll' placeholder="Enrollment No" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
       
        <Form.Control placeholder="address"  name='address'/>
      </Form.Group>


      <Row className="mb-3">
      <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     <Form.Control type="text" name ='contact' placeholder="contact no" />
   </Form.Group>

<Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
  <Form.Control type="text" name ='email' placeholder="email Id" />
   </Form.Group>

   <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" name='pob' placeholder="Place Of Birth" />
   </Form.Group>
 </Row>

 <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" name='dobw' placeholder="Date Of Birth in words" />
 </Form.Group>
 <br></br>
      <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Control placeholder="Name And Adress of Guardian/Parent" name='guardian_address' />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" >
    
          <Form.Control  placeholder='parent number' name='parent_num'/>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridCity" >
    
          <Form.Control  placeholder='religion' name='religion' />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridCity" >
    
    <Form.Control  placeholder='category' name='category' />
  </Form.Group>
     {/*    <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group> */}

       {/*  <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group> */}
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     <Form.Control type="text" name ='contact' placeholder="contact no" />
   </Form.Group>

<Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
  <Form.Control type="text" name ='email ' placeholder="email Id" />
   </Form.Group>

  
 </Row>

      <Form.Group as={Col} controlId="formGridCity" >
    
    <Form.Control  name='school' placeholder='last school attended' />
  </Form.Group>


   {/*    <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

 {/*      <Button variant="primary" type="submit">
        Submit
      </Button> */}

      <br></br>
<Row className="mb-3">
      <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     <Form.Control type="text" name ='district' placeholder="district" />
   </Form.Group>

<Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
  <Form.Control type="text" name ='constituency' placeholder="constituency" />
   </Form.Group>

  
 </Row>
 


    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" type="submit">
        Submit
      </Button>
   
        </Modal.Footer>
        </Form>
      </Modal.Dialog>
    </div>
    </>
  )
}

export default Input_form
