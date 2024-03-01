import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import rocket from '../img/rocket.png';
function Input_marks() {

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
        
             
    <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     
          <Form.Control type="text" name='enroll' placeholder="enrollment number" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        
          <Form.Control type="text" name='year' placeholder="year of paper" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress1">
       
       <Form.Control placeholder="month of paper" type="text" name='month'/>
     </Form.Group>
      </Row>

     


      <Row className="mb-3">
      <Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
     <Form.Control type="text" name ='sub_code' placeholder="subject code " />
   </Form.Group>

<Form.Group as={Col} style={{border:"black",color:"black  "}}  controlId="formGridEmail">
  <Form.Control type="text" name ='sub_name' placeholder="subject name" />
   </Form.Group>

   <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" name='theory_marks' placeholder="theory marks" />
   </Form.Group>
 </Row>

 <Form.Group as={Col} controlId="formGridPassword">
    <Form.Control type="text" name='term_marks' placeholder="term marks" />
 </Form.Group>
 <br></br>
      <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Control placeholder="practical marks" name='practicals' />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" >
    
          <Form.Control  placeholder='term work marks' name='term_work'/>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridCity" >
    
          <Form.Control  placeholder='total marks' name='total_mark' />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridCity" >
    
    <Form.Control  placeholder='percentage' name='percentage' />
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
     <Form.Control type="text" name ='sem' placeholder="sem" />
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

export default Input_marks;
