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

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} />} />
            <Route path="/about"  render={() => <AboutPage title={this.state.home.title} />} />
            <Route path="/contact"  render={() => <ContactPage title={this.state.home.title} />} />
          </Container>
        </Router>
    );
  }
}

export default App;
