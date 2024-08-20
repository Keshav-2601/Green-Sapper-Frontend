import React from "react";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import ServiceContent from "../content/service.content";
import Homepage from "../layout/homepage";
export default class Service extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
              <Nav.Link href="/Contacts">Contact Us</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="ServiceHeading">
          <span>SERVICES</span>
        </div>
        <div>
          <ServiceContent/>
        </div>
       
      </>
    )
  }
}