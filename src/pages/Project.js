import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
export default class Project extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About US</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/Contacts">Contact</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                
            </>
        )
    }
}