import React from "react";
import { NavLink } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeBackground from "../pages/Homebackground";

import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
export default class Homepage extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About US</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
                            <Nav.Link href="/Contacts">Contact</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <HomeBackground />
            </>
        );
    }
}
