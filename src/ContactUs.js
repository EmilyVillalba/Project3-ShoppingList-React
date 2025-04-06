import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function ContactUs()
{
    return (
      <>
      
      <FloatingLabel
        controlId="floatingInput"
        label="First Name"
        className="mb-3"
      >
        <Form.Control className="floating-form" type="text" placeholder="First Name" />
      </FloatingLabel>
  
      <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Last Name" />
      </FloatingLabel>
  
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
  
        <FloatingLabel controlId="floatingTextarea" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <div>
          <button type="submit" className="btn btn-info" onclick='submit'>Submit</button>
      </div>
      </> 
      );
}

export default ContactUs;