import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ConfirmSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="confirm">
            <Nav.Link>Confirm</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Confirm</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="mysessions">
            <Nav.Link>My Sessions</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>My Sessions</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default ConfirmSteps;
