import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import Axios from 'axios'; // Import Axios

export default class Contactcontent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submit action
        console.log("Attempting to submit:", this.state);
        try {
            const apiUrl = process.env.REACT_APP_BACKEND_API;
            console.log("API URL: ", apiUrl);
            const response = await Axios.post('https://greensapper.vercel.app/api/contact', {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            });
            console.log("Response data is ->", response.data); // Console log the response from the server
            alert('Details submitted successfully!');
            // Clear the state after successfully submission
            this.setState({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Submission error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            alert('Failed to submit details!');
        }
    }

    render() {
        return (
            <div className='MainForm'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>Email</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
                        <Form.Label column sm={2}>Message</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5} placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
