import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

// own components
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Schoninger Jimmy',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Welcome to my port folio'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Information'
      }
    }
  }

  render() {
    return (
        <Router>
          <Container className="p-0 background-image" fluid={true}>
            <Navbar bg="transparent" expand="lg">
              <Navbar.Brand style={{color: 'white'}} >Schoninger Jimmy</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/"  style={{color: 'white'}} >Home</Link>
                  <Link className="nav-link" to="/about" style={{color: 'white'}}>About</Link>
                  <Link className="nav-link" to="/contact" style={{color: 'white'}}>Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} />} />
            <Route path="/about"  render={() => <AboutPage title={this.state.home.title} />} />
            <Route path="/contact"  render={() => <ContactPage title={this.state.home.title} />} />
          </Container>
        </Router>
    );
  }
}

export default App;
