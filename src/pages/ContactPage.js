import React from 'react'
import { Button, Container, Row, Form, Col } from 'react-bootstrap';
import './ContactPage.css'
import Axios from 'axios';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            informationDetails: "",
            disabled: false,
            isSent: false
        }
    }
    

    mailChange(event) {
        this.setState({email: event.target.value});
    }

    nameChange(event) {
        this.setState({name: event.target.value});
    }


    infoChange(event) {
        this.setState({informationDetails: event.target.value});
    }



    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
            disabled: true
        });
        try {
            const form = await Axios.post('/api/email', this.state);

            if (form.data.success) {
                this.setState({
                    email: "",
                    name: "",
                    informationDetails: "",
                    disabled: false,
                    isSent: true
                });
            } else {
                this.setState({
                    disabled: false,
                    isSent: false
                });
            };
        } catch(err) {
            this.setState({
                disabled: false,
                isSent: false
            });

        }
        
    };
           
   


    render() {
        return(
            <Container fluid={true}>
                    <Row className="justify-content-center py-3 mt-4">
                        <Col xs={12} sm={8}>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{color: 'white'}}>Email</Form.Label>
                                    <Form.Control value={this.state.email} onChange={this.mailChange.bind(this)} placeholder="Enter your email adress" />
                                </Form.Group>
    
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{color: 'white'}}>Name</Form.Label>
                                    <Form.Control value={this.state.name} onChange={this.nameChange.bind(this)} placeholder="Enter Your name" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{color: 'white'}}>Information Request</Form.Label>
                                    <Form.Control value={this.state.informationDetails} onChange={this.infoChange.bind(this)} as="textarea" rows="3" />
                                </Form.Group>
                                <Button className="d-inline-block" variant="primary" disabled={this.state.disabled} type="submit">
                                    Send
                                </Button>
                                {this.state.isSent === true && <p className="d-inline successSent"> Email sent</p>}
                                {this.state.isSent === false && <p className="d-inline errorSent"> Email not sent</p>}
                            </Form>
                        </Col>
                    </Row>
                </Container>
        );
    }  // end render
    

}

export default ContactPage;