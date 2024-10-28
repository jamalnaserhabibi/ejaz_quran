import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Divide as Hamburger } from "hamburger-react";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import { IoMdArrowUp } from "react-icons/io";
// import { NavDropdown } from "react-bootstrap";
export default function NavBar() {
  const { t,i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [moveBtn, setMoveBtn] = useState(" totop activeToTop");
  const [hidenav, sethidenav] = useState("navbar");
  const [navmain, setnavmain] = useState("nav_main");
  const scrollTop = () => {
    if (window.scrollY >= 20) {
      setMoveBtn("totop");
      sethidenav("navbarhide");
      setnavmain("nav_main nav_main_height");
    } else {
      setMoveBtn("totop activeToTop");
      sethidenav("navbar");
      setnavmain("nav_main");

    }
  };
  window.addEventListener("scroll", scrollTop);
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className={navmain}>
      <Navbar expanded={isOpen} expand="lg" className={hidenav}>
        <Container>
          <Navbar.Brand className="navLogo" href="#home">
            اعجاز قرآن
          </Navbar.Brand>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
            <Nav className="navButton ms-auto">
            <span style={{ height: "40px" }} className="space"></span>
              <div className="lang">
                <select onChange={(e) => changeLang(e.target.value)}
                  defaultValue="dari">
                  <option value="da">زبان: دری</option>
                  <option value="ps">ژبه: پشتو</option>
                  <option value="ar">لسان: عربی</option>
                  <option value="ur">زبان: اردو</option>
                </select>
              </div>
              <span style={{ height: "40px" }} className="space"></span>
              <Nav.Link href="/" as={Link} to="/">
                {t("home")}
              </Nav.Link>
              <Nav.Link href="/lesson"> {t("subjects")}</Nav.Link>
              <Nav.Link href="/quran" as={Link} to="/quran">
                {t("quran")}
              </Nav.Link>
              <Nav.Link href="/source">  {t("books")}</Nav.Link>
              <Nav.Link href="/about">  {t("aboutus")}</Nav.Link>
              <Nav.Link href="/contact">  {t("contactus")}</Nav.Link>
              <span style={{ height: "40px" }} className="space"></span>
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
