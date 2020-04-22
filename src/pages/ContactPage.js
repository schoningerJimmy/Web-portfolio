import React from 'react'
import { Button, Container, Row, Form, Col } from 'react-bootstrap';
import './ContactPage.css'

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phoneNumber: "",
            informationDetails: ""
        }
    }
    

    nameChange(event) {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("push")    
    };

    render() {
        return(
            <Container fluid={true}>
                    <Row className="justify-content-center py-3 mt-4">
                        <Col xs={12} sm={8}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{color: 'white'}}>Name</Form.Label>
                                    <Form.Control onChange={this.nameChange.bind(this)} placeholder="Enter your name" />
                                </Form.Group>
    
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{color: 'white'}}>Phone Number</Form.Label>
                                    <Form.Control placeholder="Enter Your Phone Number" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{color: 'white'}}>Information Request</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
        );
    }  // end render
    

}

export default ContactPage;