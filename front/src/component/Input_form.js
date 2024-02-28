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
      <Form action="http://localhost/stuman/back/stu_details.php" method="post" enctype="multipart/form-data" >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        
      <Row className="mb-3">
        
      <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
        
      <Form.Control type="file" name="photo" onChange={handleFileChange} />
     
      {picPreview && (
         
      <img src={picPreview} alt="Selected Preview" style={{ maxWidth: '100%', maxHeight: '200px',border:'bold'  }} />
     
      
      ) }
    </Form.Group>
    

        <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     
          <Form.Control type="text" name='name' placeholder="name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        
        <Form.Control type="number" name='enroll' placeholder="Enrollment No" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
       
        <Form.Control placeholder="address" type='text' name='address'/>
      </Form.Group>


      <Row className="mb-3">
      <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     <Form.Control type="text" name ='middleName' placeholder="middle Name " />
   </Form.Group>

<Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
  <Form.Control type="text" name ='lastName' placeholder="last Name " />
   </Form.Group>

<Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" name='pob' placeholder="Place Of Birth" />
   </Form.Group>
 </Row>

 <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="date" name='dobw' placeholder="Date Of Birth" />
 </Form.Group>
 <br></br>
      <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Control type = "text" placeholder="Name of Guardian/Parent" name='parent_name' />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" >
    
          <Form.Control  type = "number" placeholder='parent number' name='parent_num'/>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridCity" >
    
          <Form.Control type='text' placeholder='religion' name='religion' />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridCity" >
    
    <Form.Control type='text' placeholder='category' name='category' />
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
     <Form.Control type="number" name ='contact' placeholder="contact no" />
   </Form.Group>

<Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
  <Form.Control type="email" name ="email" placeholder="email Id" />
   </Form.Group>

  
 </Row>

      <Form.Group as={Col} controlId="formGridCity" >
    
    <Form.Control type='text' name='school' placeholder='last school attended' />
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
