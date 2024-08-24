import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import AboutUSContent from "../content/aboutus.content";
export default class AboutUS extends React.Component {
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
                <div className="Content-About-Us">
                <AboutUSContent/>
                </div>
            </>
        )
    }
}