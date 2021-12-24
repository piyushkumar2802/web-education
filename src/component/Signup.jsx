import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class signup extends Component {
  render() {
    return (
      <div className="container">
        <Form
          style={{
            margin: "4% 5%",
            padding: "5% 2%",
            background: "aliceblue",
          }}
        >
          <Row>
            <Col>
            <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
            <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Re-enter Email</Form.Label>
              <Form.Control type="email" placeholder="Re-enter Email" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>ReEnter Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>India</option>
                <option>Nepal</option>
                <option>Pakistan</option>
                <option>Bangladesk</option>
                <option>Australia</option>
                <option>USA</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Kolkata</option>
                <option>Bihar</option>
                <option>Bhopal</option>
                <option>Utter Pradesh</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Pin code</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" required/>
          </Form.Group>

          <Button variant="primary" type="submit" style={Signupbtn}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const Signupbtn={
    position:"absolute",
    right:"50%"
}

export default signup;
