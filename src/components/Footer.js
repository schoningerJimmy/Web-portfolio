import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3 background-colour-footer">
                    <Col className="p-0" md={3} sm={12}>
                        Schoninger Jimmy
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Copyright, made by Schoninger Jimmy
                    </Col>
                </Row>

            </Container>
        </footer>
    );

}

export default Footer;