import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Divide as Hamburger } from "hamburger-react";
import "./NavBar.css";
import { IoMdArrowUp } from "react-icons/io";
// import { NavDropdown } from "react-bootstrap";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const [moveBtn, setMoveBtn] = useState(" totop activeToTop");
  const [hidenav, sethidenav] = useState("navbar");

  const scrollTop = () => {
    if (window.scrollY >= 20) {
      setMoveBtn("totop");
      sethidenav("navbarhide");
    } else {
      setMoveBtn("totop activeToTop");
      sethidenav("navbar");
    }
  };
  window.addEventListener("scroll", scrollTop);

  return (
    <div className="nav_main">
      <Navbar expanded={isOpen} expand="lg" className={hidenav}>
        <Container>
          <Navbar.Brand className="navLogo" href="#home">
            اعجاز قرآن
          </Navbar.Brand>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
            <Nav className="navButton ms-auto">
            <div className="lang">
          <select name="" id="">
            <option value="">زبان: دری</option>
            <option value="">ژبه: پشتو</option>
            <option value="">لسان: عربی</option>
            <option value="">زبان: اردو</option>
          </select>
        </div>  
              <span style={{ height: "20px" }} className="space"></span>
           
              <Nav.Link as={Link} to="/">
                خانه
              </Nav.Link>
              <Nav.Link href="#lesson">موضوعات</Nav.Link>
              <Nav.Link as={Link} to="/quran">
                قرآنشريف
              </Nav.Link>
              <Nav.Link href="#source">کتاب ها</Nav.Link>
              <Nav.Link href="#about">در باره ما</Nav.Link>
              <Nav.Link href="#contact">ارتباطات</Nav.Link>
         
              <span style={{ height: "80px" }} className="space"></span>
            </Nav>
         
          </Navbar.Collapse>
        </Container>
      
      </Navbar>
       
      <div className={moveBtn}>
        <a href="#">
          <IoMdArrowUp className="icon" />
        </a>
      </div>
    </div>
  );
}
