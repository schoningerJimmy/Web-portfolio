import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import './Hero.css'


function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col className="col-Home" md={8} sm={12}>
                        <Image  roundedCircle  className="profile-home-pic"/>
                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr/>
                            <p>Python | C++ | JavaScript | React | HTML/CSS</p>
                            <div className="social-links">
                                <a href="http://linkedin.com/in/jimmy-schoninger-242101a7" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/schoningerJimmy" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>

                        </div>
                        { /*-- { props.title && <h1 className="display-1 font-weight-bolder"> {props.title}</h1> } */ }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;