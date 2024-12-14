import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import Navbar from "react-bootstrap/Navbar";
import { Divide as Hamburger } from "hamburger-react";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
export default function NavBar() {
  const { t,i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hidenav, sethidenav] = useState("navbar");
  const [navmain, setnavmain] = useState("nav_main");
  const scrollTop = () => {
    if (window.scrollY >= 20) {
      sethidenav("navbarhide");
    } else {
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
            <span style={{ height: "20px" }} className="space"></span>
           
              <Nav.Link href="/" as={Link} to="/">
                {t("home")}
              </Nav.Link>
             <span className="line">|</span>
              <Nav.Link href="/lesson" as={Link} to="/taqrir" >  {t("tafsirquran")}</Nav.Link>
              <span className="line">|</span>
              <Nav.Link href="/quran" as={Link} to="/quran">
                {t("halmoama")}
              </Nav.Link>
              <span className="line">|</span>
              <Nav.Link href="/about">  {t("mesdaq")}</Nav.Link>
              <span className="line">|</span>
              <Nav.Link href="/contact">  {t("dros")}</Nav.Link>
              

              <div className="lang">
              <GrLanguage style={{color: "white", marginRight: "8px", fontSize: "20px" }} />
                <select onChange={(e) => changeLang(e.target.value)}
                  defaultValue="dari">
                  <option value="da">دری</option>
                  <option value="ps">پشتو</option>
                  <option value="ar">العربية</option>
                  <option value="ur">اردو</option>
                  {/* <  GrLanguage style={{color:"white"}}/> */}
                </select>
              </div>
              <span style={{ height: "40px" }} className="space"></span>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
}
