import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Divide as Hamburger } from 'hamburger-react';
import "./NavBar.css";
import ScrollToTop from "react-scroll-to-top";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav_main">
      <Navbar expanded={isOpen} expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="navLogo" href="#home">
            اعجاز قرآن
          </Navbar.Brand>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
            <Nav className="navButton ms-auto">
              <span style={{ height: "20px" }} className="space"></span>
              <Nav.Link href="#home">خانه</Nav.Link>
              <Nav.Link href="#lesson">تقرير ها</Nav.Link>
              <Nav.Link as={Link} to="/quran">قرآنشريف</Nav.Link>
              <Nav.Link href="#source">کتاب ها</Nav.Link>
              <Nav.Link href="#about">در باره ما</Nav.Link>
              <Nav.Link href="#contact">ارتباطات</Nav.Link>
              <span style={{ height: "80px" }} className="space"></span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ScrollToTop smooth />
    </div>
    
  );
}
