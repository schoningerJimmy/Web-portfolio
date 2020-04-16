import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function ContactPage(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col md={8} sm={12}>
                        <h1 className="contact-header">Contact Me</h1>
                        <h1>test 2</h1>
                        
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default ContactPage;