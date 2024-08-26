import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
                                    </MDBCol>

                                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                                        <p>
                                            <a href='/services' id="s1" className='text-reset'>
                                                Building Day Light Performance Simulation & Assessment
                                            </a>
                                        </p>
                                        <p>
                                            <a href='/services' id="s2" className='text-reset'>
                                                Building Energy Performance Simulation & Assessment
                                            </a>
                                        </p>
                                        <p>
                                            <a href='/services' id="s3" className='text-reset'>
                                                Thermal Energy Performance Simulation & Assessment
                                            </a>
                                        </p>
                                    </MDBCol>

                                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                        <p>
                                            <div className="d-flex align-items-center">
                                                <MDBIcon icon="envelope" className="me-3" />
                                                <span>greensappers@gmail.com</span>
                                            </div>
                                        </p>
                                        <p>
                                            <MDBIcon icon="phone" className="me-3" /> +91 9319312573
                                        </p>
                                        <p>
                                            <a href="https://www.linkedin.com/in/thakur-aaryan-singh-262095224/" target="_blank" rel="noopener noreferrer" className="text-reset">
                                                <MDBIcon fab icon="linkedin" className="me-3" />
                                                LinkedIn
                                            </a>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </section>

                        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                            © 2024 Copyright:
                            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                                style={{
                                    fontFamily: 'Arial, sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: '#7AA300'  // The green color similar to the image
                                }}
                                GreenSapper
                            </a>
                        </div>
                    </MDBFooter>
                </div>
            </>
        )
    }
}
