import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
     
    this.state= {
      title: 'Sebastian Silva',
      headerLinks: [
        {title:'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: `Become Unstoppable`,
        subTitle:  `Projects that make a difference`,
        text: `Checkout my work `,
      },
      about: {
      title: 'About Me'
      },
      contact: {
        title : `Let's Talk`
      }
    }
  }

  render(){
    return (
    <Router>
      <Container className="p-3" fluid={true}>
        
        <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand>Sebastian Silva</Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>

          </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render= {() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
        <Route path="/about" exact render= {() => <About title={this.state.about.title}/>} />
        <Route path="/contact" exact render= {() => <ContactPage title={this.state.contact.title}/>} />

        <Footer />
        </Container>
    </Router>
    )
  }
}

export default App;