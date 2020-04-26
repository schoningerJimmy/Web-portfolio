import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

// own components
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        title: 'Schoninger Jimmy',
        quote: 'A journey of a thousand miles begins with a single step',
        description: 'Welcome to my website. I am a french engineer, I gratuaded university in Paris with a robotics major. I am a self-taught. I am hightly interested in the new technology such as AI or web development. When i am not learning new things, i am practicing Karate or relaxing with a good SF movie.',
        email: 'jimmy.schoninger@gmail.com'
      },
      education: [
        {
          school: 'Pierre And Marie Curie University',
          degree: 'Master of Science: Robotics',
          startYear: '',
          endYear: ''
        },
        {
          school: 'Pierre And Marie Curie University',
          degree: 'Bachelor of Science: Electronic Engineering',
          startYear: '',
          endYear: ''
        }
      ],
      experience: [
        {
          company: 'Enroute',
          jobContent: 'AI engineer',
          startYear: '',
          endYear: ''
        },
        {
          company: 'Connected Robotics',
          jobContent: 'Robotics engineer',
          startYear: '',
          endYear: ''
        },
        {
          company: 'Z.M.P',
          jobContent: 'Software engineer',
          startYear: '',
          endYear: ''
        },
        {
          company: 'ITRI',
          jobContent: 'software engineer Intern',
          startYear: '',
          endYear: ''
        }
      ]
    }
  }

  render() {
    return (
        <Router>
          <Container className="p-0 background-image" fluid={true}>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Brand style={{color: 'white'}} >Schoninger Jimmy</Navbar.Brand>
              <Navbar.Toggle className="border-0 custom-Toggle"  aria-controls="navbar-toggle" style={{color: 'white'}}>
                <i className="fa fa-bars" aria-hidden="true" />
              </Navbar.Toggle>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <NavLink className="nav-link" exact to="/"  style={{color: 'white'}}  activeStyle={{color: 'rgb(232,149,149)'}}>Home</NavLink>
                  <NavLink className="nav-link" exact to="/about" style={{color: 'white'}} activeStyle={{color: 'rgb(232,149,149)'}}>About</NavLink>
                  <NavLink className="nav-link" exact to="/contact" style={{color: 'white'}} activeStyle={{color: 'rgb(232,149,149)'}}>Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={""} />} />
            <Route path="/about"  render={() => <AboutPage state={this.state} />} />
            <Route path="/contact"  render={() => <ContactPage title={""} />} />
          </Container>
        </Router>
    );
  }
}

export default App;
