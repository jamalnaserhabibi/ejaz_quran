import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
export default function NavBar() {
  return (
    <div className="nav_main">
      <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Ejaz Quran (LOGO)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#lesson">Lesson</Nav.Link>
            <Nav.Link href="#quran">Quran Advice</Nav.Link>
            <Nav.Link href="#source">Source</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

