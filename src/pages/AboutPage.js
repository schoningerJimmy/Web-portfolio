import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './AboutPage.css'

function AboutPage(props) {
    const educations = props.state.education.map(function(education){
        return  (
            <div className="education-bloc">
                <h4> {education.school} </h4>
                <h6> {education.degree} </h6>
            </div>
        )
      });

      const experiences = props.state.experience.map(function(experience){
        return  (
            <div className="experience-bloc">
                <h4> {experience.company} </h4>
                <h6> {experience.jobContent} </h6>
            </div>
        )
      });

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-3">
                    <Col className="col-about justify-content-center" md={8} sm={12}>
                        <h1>"{props.state.info.quote}"</h1>
                        <p>Hi, my name is {props.state.info.title}. {props.state.info.description}
                        </p>
                        <Row>
                            <Col className="col-education" md={6} sm={12}>
                                <h2 >  Education 
                                    <i className="fa fa-graduation-cap" aria-hidden="true" />
                                </h2>
                                <hr/>
                                {educations}
                            </Col>
                            <Col className="col-experience" md={6} sm={12}>
                                <h2>Experiences
                                    <i className="fa fa-briefcase" aria-hidden="true"/>
                                </h2>
                                <hr/>
                                {experiences}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default AboutPage;