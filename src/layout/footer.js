import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Service from "../pages/Service";
import { Accordion } from "react-bootstrap";
let string = "© 2024 Your Company. All rights reserved"
export default class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="Footer">
                    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
                        <section className='Footer-text'>
                            <MDBContainer className='text-center text-md-start mt-5'>
                                <MDBRow className='mt-3'>
                                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            <MDBIcon icon="gem" className="me-3" />
                                            Green Sapper
                                        </h6>
                                        <p>
                                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                        </p>
                                    </MDBCol>

                                    {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Projects</h6>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                1
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                2
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                3
                                            </a>
                                        </p>
                                        <p>
                                            <a href='#!' className='text-reset'>
                                                4
                                            </a>
                                        </p>
                                    </MDBCol> */}

                                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                                        <p>
                                            <a href='/services' id="s1" className='text-reset' >
                                                Buiding Day Light Performance Simulation & Assesment
                                            </a>
                                        </p>
                                        <p>
                                            <a href='/services' id="s2" className='text-reset' >
                                                Building Energy performance simulation & Assesment
                                            </a>
                                        </p>
                                        <p>
                                            <a href='/services' id="s3" className='text-reset' >
                                                Thermal Energy performance simulation & Assesment
                                            </a>
                                        </p>

                                    </MDBCol>

                                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                        <p>
                                            <MDBIcon icon="home" className="me-2" />
                                            New York, NY 10012, US
                                        </p>
                                        <p>
                                            <MDBIcon icon="envelope" className="me-3" />
                                            info@example.com
                                        </p>
                                        <p>
                                            <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                        </p>
                                        <p>
                                            <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </section>

                        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                            © 2024 Copyright:
                            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                                Green Sapper
                            </a>
                        </div>
                    </MDBFooter>
                </div>
            </>
        )
    }
}