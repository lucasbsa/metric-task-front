import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import React from 'react';


const Header = () =>{
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{fontSize:'2rem'}}>{'Metric&Task'}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{fontSize:'1.5rem'}}>Home</Nav.Link>
          <Nav.Link href="#board"style={{fontSize:'1.5rem'}}>Board</Nav.Link>
          <Nav.Link href="#user"style={{fontSize:'1.5rem'}}>User</Nav.Link>
          <Nav.Link href="#metric"style={{fontSize:'1.5rem'}}>Metric</Nav.Link>
    
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{fontSize:'1.5rem'}} />
          <Button variant="outline-info"style={{fontSize:'1.5rem'}}>Search</Button>
        </Form>
      </Navbar>
        </>
    );
}

export default Header;


