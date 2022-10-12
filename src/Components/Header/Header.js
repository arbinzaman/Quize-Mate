import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';


function Home() {
  return (
<nav className='container'>
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Quize Mate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to ='/'>Home</Link>
          <Link to='/questions'>Questions</Link>
          <Link to='/statictis'>Statictis</Link>
          <Link to='/blogs'>Blogs</Link>
          
         
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</nav>
  );
}



export default Home;