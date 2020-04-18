import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './AboutPage.css'

function AboutPage(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col className="col-about" md={8} sm={12}>
                        <h1>"A journey of a thousand miles begins with a single step"</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default AboutPage;